(() => {
  const config = window.AKRemoteConfig || {};

  const cleanUrl = (config.supabaseUrl || "").replace(/\/+$/, "");
  const isConfigured = Boolean(
    config.enabled &&
    cleanUrl &&
    config.supabaseAnonKey &&
    !config.supabaseAnonKey.includes("HIER")
  );

  const table = config.table || "site_state";
  const mode = config.mode || "rest";
  const functionName = config.functionName || "site-state";
  const endpoint = (key) => (
    cleanUrl + "/rest/v1/" + encodeURIComponent(table) + "?key=eq." + encodeURIComponent(key)
  );
  const functionEndpoint = cleanUrl + "/functions/v1/" + encodeURIComponent(functionName);

  const headers = () => ({
    apikey: config.supabaseAnonKey,
    Authorization: "Bearer " + config.supabaseAnonKey,
    "Content-Type": "application/json",
  });

  const get = async (key, fallback) => {
    if (!isConfigured) return fallback;
    try {
      if (mode === "function") {
        const response = await fetch(functionEndpoint + "?key=" + encodeURIComponent(key), {
          headers: headers(),
        });
        if (!response.ok) return fallback;
        const data = await response.json();
        return data && data.value !== undefined ? data.value : fallback;
      }
      const response = await fetch(endpoint(key) + "&select=value", {
        headers: headers(),
      });
      if (!response.ok) return fallback;
      const rows = await response.json();
      return rows && rows[0] && rows[0].value !== undefined ? rows[0].value : fallback;
    } catch (error) {
      return fallback;
    }
  };

  const set = async (key, value) => {
    if (!isConfigured) return false;
    try {
      if (mode === "function") {
        const response = await fetch(functionEndpoint, {
          method: "POST",
          headers: headers(),
          body: JSON.stringify({ key, value }),
        });
        return response.ok;
      }
      const response = await fetch(
        cleanUrl + "/rest/v1/" + encodeURIComponent(table) + "?on_conflict=key",
        {
          method: "POST",
          headers: Object.assign(headers(), { Prefer: "resolution=merge-duplicates" }),
          body: JSON.stringify([{ key, value, updated_at: new Date().toISOString() }]),
        }
      );
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  const trackVisit = async (page) => {
    if (!isConfigured || mode !== "function") return false;
    try {
      const response = await fetch(functionEndpoint, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ action: "visit", page }),
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  const getVisitorStats = async (fallback) => {
    if (!isConfigured || mode !== "function") return fallback;
    try {
      const response = await fetch(functionEndpoint + "?stats=visits", {
        headers: headers(),
      });
      if (!response.ok) return fallback;
      const data = await response.json();
      return data && data.value !== undefined ? data.value : fallback;
    } catch (error) {
      return fallback;
    }
  };

  const listAudio = async (fallback) => {
    if (!isConfigured || mode !== "function") return fallback;
    try {
      const response = await fetch(functionEndpoint + "?audio=list", {
        headers: headers(),
      });
      if (!response.ok) return fallback;
      const data = await response.json();
      return data && data.value !== undefined ? data.value : fallback;
    } catch (error) {
      return fallback;
    }
  };

  const audioUrl = (id) => (
    functionEndpoint + "?audio=" + encodeURIComponent(id)
  );

  const fetchAudioBlob = async (id) => {
    if (!isConfigured || mode !== "function") return null;
    try {
      const response = await fetch(audioUrl(id), {
        headers: headers(),
      });
      if (!response.ok) return null;
      return response.blob();
    } catch (error) {
      return null;
    }
  };

  const uploadAudio = async ({ title, filename, contentType, file, data }) => {
    if (!isConfigured || mode !== "function") return { ok: false };
    try {
      const isBinaryUpload = file instanceof Blob;
      const response = await fetch(functionEndpoint + (isBinaryUpload ? "?audio=upload" : ""), {
        method: "POST",
        headers: isBinaryUpload
          ? {
              apikey: config.supabaseAnonKey,
              Authorization: "Bearer " + config.supabaseAnonKey,
              "Content-Type": contentType,
              "x-audio-title": encodeURIComponent(title),
              "x-audio-filename": encodeURIComponent(filename),
            }
          : headers(),
        body: isBinaryUpload
          ? file
          : JSON.stringify({
              action: "audio-upload",
              title,
              filename,
              contentType,
              data,
            }),
      });
      const payload = await response.json().catch(() => ({}));
      return Object.assign({ ok: response.ok }, payload);
    } catch (error) {
      return { ok: false };
    }
  };

  const trackCurrentPageVisit = () => {
    const path = decodeURIComponent(window.location.pathname || "").replace(/\\/g, "/");
    if (path.endsWith("/editor.html")) return;
    const page = path.endsWith("/outputs/suno_auswahlmenue.html")
      ? "project-1"
      : path.endsWith("/prompt-designer.html")
        ? "prompt-designer"
      : path.endsWith("/suno-prompt-generator-v31.html")
        ? "suno-v31"
      : path.endsWith("/songs.html")
        ? "songs"
        : "home";
    window.setTimeout(() => trackVisit(page), 300);
  };

  window.AKRemoteStore = {
    isConfigured,
    get,
    set,
    trackVisit,
    getVisitorStats,
    listAudio,
    audioUrl,
    fetchAudioBlob,
    uploadAudio,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", trackCurrentPageVisit, { once: true });
  } else {
    trackCurrentPageVisit();
  }
})();
