import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const bucket = "ak-site-state";

const jsonResponse = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    ...corsHeaders,
    "Content-Type": "application/json",
  },
});

const safeKey = (key: string) => key.replace(/[^a-z0-9._-]/gi, "_");

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

  try {
    await ensureBucket();

    if (request.method === "GET") {
      const key = new URL(request.url).searchParams.get("key");
      if (!key) return jsonResponse({ error: "Missing key." }, 400);

      const path = "state/" + safeKey(key) + ".json";
      const { data, error } = await supabase.storage.from(bucket).download(path);
      if (error) return jsonResponse({ value: null });

      const value = JSON.parse(await data.text());
      return jsonResponse({ value });
    }

    if (request.method === "POST") {
      const body = await request.json();
      const key = String(body.key || "");
      if (!key) return jsonResponse({ error: "Missing key." }, 400);

      const path = "state/" + safeKey(key) + ".json";
      const payload = JSON.stringify(body.value ?? null);
      const { error } = await supabase.storage.from(bucket).upload(path, payload, {
        contentType: "application/json",
        upsert: true,
      });
      if (error) return jsonResponse({ error: error.message }, 500);

      return jsonResponse({ ok: true });
    }

    return jsonResponse({ error: "Method not allowed." }, 405);
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Unknown error." }, 500);
  }
});
