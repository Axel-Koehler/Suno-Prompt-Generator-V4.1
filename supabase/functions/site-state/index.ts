import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-audio-title, x-audio-filename",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const bucket = "ak-site-state";
const visitStatsKey = "visitor-stats-v1";
const audioListKey = "audio-list-v1";

const jsonResponse = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    ...corsHeaders,
    "Content-Type": "application/json",
  },
});

const safeKey = (key: string) => key.replace(/[^a-z0-9._-]/gi, "_");

const statePath = (key: string) => "state/" + safeKey(key) + ".json";
const audioPath = (id: string) => "audio/" + safeKey(id);

const audioTypesByExtension: Record<string, string> = {
  mp3: "audio/mpeg",
  mpeg: "audio/mpeg",
  wav: "audio/wav",
  wave: "audio/wav",
  m4a: "audio/mp4",
  mp4: "audio/mp4",
  aac: "audio/aac",
  flac: "audio/flac",
  ogg: "audio/ogg",
  oga: "audio/ogg",
  webm: "audio/webm",
};

const inferAudioContentType = (contentType: string, filename: string) => {
  if (contentType.startsWith("audio/")) return contentType;
  const extension = filename.split(".").pop()?.toLowerCase() || "";
  return audioTypesByExtension[extension] || "";
};

type AudioItem = {
  id: string;
  title: string;
  filename: string;
  contentType: string;
  uploadedAt: string;
  analysis?: {
    genre: string;
    subgenre: string;
    style: string;
  };
};

const languageNames: Record<string, string> = {
  "de-DE": "German",
  "en-US": "English",
  "es-ES": "Spanish",
  "fr-FR": "French",
  "it-IT": "Italian",
};

const instructionItems = (value: unknown) => {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (item && typeof item === "object") {
      const entry = item as Record<string, unknown>;
      const label = String(entry.label || entry.value || "").trim();
      const description = String(entry.description || "").trim();
      return [label, description].filter(Boolean).join(" - ");
    }
    return String(item || "").trim();
  }).filter(Boolean);
};

const createLyrics = async (body: Record<string, unknown>) => {
  const openAiKey = Deno.env.get("OPENAI_API_KEY");
  const model = Deno.env.get("OPENAI_MODEL") || "gpt-5.4-mini";
  if (!openAiKey) {
    return jsonResponse({ error: "OPENAI_API_KEY ist in Supabase noch nicht gesetzt." }, 500);
  }

  const topic = String(body.topic || "").trim() || "a personal story";
  const languageCode = String(body.language || "de-DE");
  const language = languageNames[languageCode] || "English";
  const rhyme = String(body.rhyme || "ABAB");
  const rhymeQuality = String(body.rhymeQuality || "");
  const creativeSeed = String(body.creativeSeed || crypto.randomUUID());
  const messages = instructionItems(body.messages);
  const metaphors = instructionItems(body.metaphors);

  const instructions = [
    "You are a professional multilingual songwriter for modern AI music production.",
    "Write complete, original, singable lyrics with a clear emotional arc.",
    "Respect the requested output language exactly.",
    "Never explain your choices. Output only the lyrics.",
    "Avoid generic filler, repeated stock phrases, and predictable template lines.",
    "Use vivid scenes, concrete objects, actions, places, and emotional consequences.",
  ].join("\n");

  const input = [
    "Create a new song lyric from these settings:",
    "",
    "Output language: " + language,
    "Underlying theme: " + topic,
    "Creative variation seed: " + creativeSeed,
    "Rhyme scheme: " + rhyme,
    rhymeQuality ? "Rhyme quality: " + rhymeQuality : "",
    messages.length ? "Required core messages: " + messages.join("; ") : "Required core messages: none selected",
    metaphors.length ? "Required metaphor fields: " + metaphors.join("; ") : "Required metaphor fields: none selected",
    "",
    "Theme handling:",
    "- First understand the theme internally: who is affected, what changed, what is at stake, and what sensory world belongs to it.",
    "- Do not copy the exact theme wording into the lyrics.",
    "- If the theme is a single word or short phrase, that exact word or phrase must not appear in the final lyrics.",
    "- The listener should still clearly feel the theme through situations, images, conflict, and emotional consequences.",
    "",
    "Mandatory content rules:",
    "- Every selected core message must visibly shape the chorus or the emotional turn of the song.",
    "- Every selected metaphor field must appear through concrete imagery in at least one different song section.",
    "- Make each generation feel fresh by using the creative seed to vary scenes, line endings, and perspective.",
    "- Keep the language natural and suitable for singing, not like an essay.",
    "",
    "Use this structure exactly:",
    "[Verse 1]",
    "[Pre-Chorus]",
    "[Chorus]",
    "[Verse 2]",
    "[Chorus]",
    "[Bridge]",
    "[Chorus]",
    "[Outro]",
  ].filter(Boolean).join("\n");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + openAiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      instructions,
      input,
      reasoning: { effort: "low" },
      max_output_tokens: 1800,
      store: false,
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = payload?.error?.message || "KI-Anfrage fehlgeschlagen.";
    return jsonResponse({ error: message }, response.status);
  }

  const text = payload?.output_text
    || (Array.isArray(payload?.output)
      ? payload.output
          .flatMap((item: Record<string, unknown>) => Array.isArray(item.content) ? item.content : [])
          .map((part: Record<string, unknown>) => part.text)
          .filter(Boolean)
          .join("\n")
      : "");
  if (!text) return jsonResponse({ error: "Keine KI-Antwort erhalten." }, 500);
  return jsonResponse({ ok: true, value: String(text).trim(), model });
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ error: "Missing Supabase function secrets." }, 500);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const ensureBucket = async () => {
    const { error } = await supabase.storage.createBucket(bucket, { public: false });
    if (error && !/already exists/i.test(error.message)) throw error;
  };

  const readState = async (key: string, fallback: unknown) => {
    const { data, error } = await supabase.storage.from(bucket).download(statePath(key));
    if (error) return fallback;
    return JSON.parse(await data.text());
  };

  const writeState = async (key: string, value: unknown) => {
    const payload = JSON.stringify(value ?? null);
    const { error } = await supabase.storage.from(bucket).upload(statePath(key), payload, {
      contentType: "application/json",
      upsert: true,
    });
    if (error) throw error;
  };

  try {
    await ensureBucket();

    if (request.method === "GET") {
      const audio = new URL(request.url).searchParams.get("audio");
      if (audio === "list") {
        return jsonResponse({ value: await readState(audioListKey, []) });
      }
      if (audio) {
        const { data, error } = await supabase.storage.from(bucket).download(audioPath(audio));
        if (error) return jsonResponse({ error: "Audio not found." }, 404);
        const items = await readState(audioListKey, []) as AudioItem[];
        const item = Array.isArray(items) ? items.find((entry) => entry.id === audio) : null;
        return new Response(data, {
          headers: {
            ...corsHeaders,
            "Content-Type": item?.contentType || "audio/mpeg",
            "Cache-Control": "public, max-age=3600",
          },
        });
      }

      const stats = new URL(request.url).searchParams.get("stats");
      if (stats === "visits") {
        return jsonResponse({
          value: await readState(visitStatsKey, {
            total: 0,
            today: 0,
            lastVisit: "",
            days: {},
            pages: {},
          }),
        });
      }

      const key = new URL(request.url).searchParams.get("key");
      if (!key) return jsonResponse({ error: "Missing key." }, 400);

      return jsonResponse({ value: await readState(key, null) });
    }

    if (request.method === "POST") {
      const uploadMode = new URL(request.url).searchParams.get("audio");
      if (uploadMode === "upload") {
        const title = decodeURIComponent(request.headers.get("x-audio-title") || "").trim();
        const filename = decodeURIComponent(request.headers.get("x-audio-filename") || "audio").trim();
        const contentType = inferAudioContentType(request.headers.get("content-type") || "", filename);
        if (!title) return jsonResponse({ error: "Missing title." }, 400);
        if (!contentType) return jsonResponse({ error: "Only audio files are allowed." }, 400);

        const bytes = new Uint8Array(await request.arrayBuffer());
        if (!bytes.length) return jsonResponse({ error: "Missing audio data." }, 400);

        const id = crypto.randomUUID();
        const { error } = await supabase.storage.from(bucket).upload(audioPath(id), bytes, {
          contentType,
          upsert: false,
        });
        if (error) return jsonResponse({ error: error.message }, 500);

        const items = await readState(audioListKey, []) as AudioItem[];
        const nextItem = {
          id,
          title,
          filename,
          contentType,
          uploadedAt: new Date().toISOString(),
        };
        const nextItems = Array.isArray(items) ? [nextItem, ...items] : [nextItem];
        await writeState(audioListKey, nextItems);
        return jsonResponse({ ok: true, value: nextItem });
      }

      const body = await request.json();
      if (body.action === "audio-upload") {
        const title = String(body.title || "").trim();
        const filename = String(body.filename || "audio").trim();
        const contentType = inferAudioContentType(String(body.contentType || ""), filename);
        const base64 = String(body.data || "");
        if (!title) return jsonResponse({ error: "Missing title." }, 400);
        if (!contentType) return jsonResponse({ error: "Only audio files are allowed." }, 400);
        if (!base64) return jsonResponse({ error: "Missing audio data." }, 400);

        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let index = 0; index < binary.length; index += 1) {
          bytes[index] = binary.charCodeAt(index);
        }

        const id = crypto.randomUUID();
        const { error } = await supabase.storage.from(bucket).upload(audioPath(id), bytes, {
          contentType,
          upsert: false,
        });
        if (error) return jsonResponse({ error: error.message }, 500);

        const items = await readState(audioListKey, []) as AudioItem[];
        const nextItem = {
          id,
          title,
          filename,
          contentType,
          uploadedAt: new Date().toISOString(),
        };
        const nextItems = Array.isArray(items) ? [nextItem, ...items] : [nextItem];
        await writeState(audioListKey, nextItems);
        return jsonResponse({ ok: true, value: nextItem });
      }

      if (body.action === "audio-delete") {
        const id = safeKey(String(body.id || ""));
        if (!id) return jsonResponse({ error: "Missing audio id." }, 400);
        const items = await readState(audioListKey, []) as AudioItem[];
        const list = Array.isArray(items) ? items : [];
        const item = list.find((entry) => entry.id === id);
        if (!item) return jsonResponse({ error: "Audio not found." }, 404);

        const { error } = await supabase.storage.from(bucket).remove([audioPath(id)]);
        if (error) return jsonResponse({ error: error.message }, 500);

        const nextItems = list.filter((entry) => entry.id !== id);
        await writeState(audioListKey, nextItems);
        return jsonResponse({ ok: true, value: nextItems });
      }

      if (body.action === "audio-analysis") {
        const id = safeKey(String(body.id || ""));
        const analysis = body.analysis && typeof body.analysis === "object"
          ? body.analysis as Record<string, unknown>
          : null;
        if (!id) return jsonResponse({ error: "Missing audio id." }, 400);
        if (!analysis) return jsonResponse({ error: "Missing analysis." }, 400);

        const items = await readState(audioListKey, []) as AudioItem[];
        const list = Array.isArray(items) ? items : [];
        const nextItems = list.map((entry) => entry.id === id
          ? {
              ...entry,
              analysis: {
                genre: String(analysis.genre || "").trim(),
                subgenre: String(analysis.subgenre || "").trim(),
                style: String(analysis.style || "").trim(),
              },
            }
          : entry
        );
        await writeState(audioListKey, nextItems);
        return jsonResponse({ ok: true, value: nextItems.find((entry) => entry.id === id) || null });
      }

      if (body.action === "generate-lyrics") {
        return await createLyrics(body);
      }

      if (body.action === "visit") {
        const now = new Date();
        const todayKey = now.toISOString().slice(0, 10);
        const page = safeKey(String(body.page || "unknown"));
        const stats = await readState(visitStatsKey, {
          total: 0,
          today: 0,
          lastVisit: "",
          days: {},
          pages: {},
        }) as {
          total?: number;
          today?: number;
          lastVisit?: string;
          days?: Record<string, number>;
          pages?: Record<string, number>;
        };

        const days = stats.days || {};
        const pages = stats.pages || {};
        days[todayKey] = (Number(days[todayKey]) || 0) + 1;
        pages[page] = (Number(pages[page]) || 0) + 1;

        const nextStats = {
          total: (Number(stats.total) || 0) + 1,
          today: days[todayKey],
          lastVisit: now.toISOString(),
          days,
          pages,
        };

        await writeState(visitStatsKey, nextStats);
        return jsonResponse({ ok: true, value: nextStats });
      }

      const key = String(body.key || "");
      if (!key) return jsonResponse({ error: "Missing key." }, 400);

      await writeState(key, body.value ?? null);

      return jsonResponse({ ok: true });
    }

    return jsonResponse({ error: "Method not allowed." }, 405);
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Unknown error." }, 500);
  }
});
