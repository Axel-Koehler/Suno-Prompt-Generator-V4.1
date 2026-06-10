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

  const trackCurrentPageVisit = () => {
    const path = decodeURIComponent(window.location.pathname || "").replace(/\\/g, "/");
    if (path.endsWith("/editor.html")) return;
    const page = path.endsWith("/outputs/suno_auswahlmenue.html") ? "project-1" : "home";
    window.setTimeout(() => trackVisit(page), 300);
  };

  window.AKRemoteStore = {
    isConfigured,
    get,
    set,
    trackVisit,
    getVisitorStats,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", trackCurrentPageVisit, { once: true });
  } else {
    trackCurrentPageVisit();
  }
})();
