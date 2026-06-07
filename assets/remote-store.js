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
  const endpoint = (key) => (
    cleanUrl + "/rest/v1/" + encodeURIComponent(table) + "?key=eq." + encodeURIComponent(key)
  );

  const headers = () => ({
    apikey: config.supabaseAnonKey,
    Authorization: "Bearer " + config.supabaseAnonKey,
    "Content-Type": "application/json",
  });

  const get = async (key, fallback) => {
    if (!isConfigured) return fallback;
    try {
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

  window.AKRemoteStore = {
    isConfigured,
    get,
    set,
  };
})();
