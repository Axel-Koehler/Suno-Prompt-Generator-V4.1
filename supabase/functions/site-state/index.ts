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

type AudioItem = {
  id: string;
  title: string;
  filename: string;
  contentType: string;
  uploadedAt: string;
};

const languageNames: Record<string, string> = {
  "de-DE": "German",
  "en-US": "English",
  "es-ES": "Spanish",
  "fr-FR": "French",
  "it-IT": "Italian",
};

const createLyrics = async (body: Record<string, unknown>) => {
  const openAiKey = Deno.env.get("OPENAI_API_KEY");
  const model = Deno.env.get("OPENAI_MODEL") || "gpt-4o-mini";
  if (!openAiKey) {
    return jsonResponse({ error: "OPENAI_API_KEY ist in Supabase noch nicht gesetzt." }, 500);
  }

  const topic = String(body.topic || "").trim() || "a personal story";
  const languageCode = String(body.language || "de-DE");
  const language = languageNames[languageCode] || "English";
  const rhyme = String(body.rhyme || "ABAB");
  const rhymeQuality = String(body.rhymeQuality || "");
  const messages = Array.isArray(body.messages) ? body.messages.map(String).filter(Boolean) : [];
  const metaphors = Array.isArray(body.metaphors) ? body.metaphors.map(String).filter(Boolean) : [];

  const prompt = [
    "Write complete original song lyrics.",
    "Language: " + language + ".",
    "Topic: " + topic + ".",
    "Rhyme scheme: " + rhyme + ".",
    rhymeQuality ? "Rhyme quality: " + rhymeQuality + "." : "",
    messages.length ? "Core messages: " + messages.join(", ") + "." : "",
    metaphors.length ? "Metaphor fields: " + metaphors.join(", ") + "." : "",
    "Use this structure exactly: [Verse 1], [Pre-Chorus], [Chorus], [Verse 2], [Chorus], [Bridge], [Chorus], [Outro].",
    "Make it emotional, singable, catchy, and suitable for AI music generation.",
    "Output only the lyrics. Do not add explanations.",
  ].filter(Boolean).join("\n");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + openAiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.9,
      max_tokens: 1400,
      messages: [
        {
          role: "system",
          content: "You are a professional multilingual songwriter. Write polished, original lyrics with clear song sections.",
        },
        { role: "user", content: prompt },
      ],
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = payload?.error?.message || "KI-Anfrage fehlgeschlagen.";
    return jsonResponse({ error: message }, response.status);
  }

  const text = payload?.choices?.[0]?.message?.content;
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
        const contentType = request.headers.get("content-type") || "";
        if (!title) return jsonResponse({ error: "Missing title." }, 400);
        if (!contentType.startsWith("audio/")) return jsonResponse({ error: "Only audio files are allowed." }, 400);

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
        const contentType = String(body.contentType || "");
        const base64 = String(body.data || "");
        if (!title) return jsonResponse({ error: "Missing title." }, 400);
        if (!contentType.startsWith("audio/")) return jsonResponse({ error: "Only audio files are allowed." }, 400);
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
