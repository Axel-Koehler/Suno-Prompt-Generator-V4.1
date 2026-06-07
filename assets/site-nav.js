(() => {
  const pages = [
    { id: "home", label: "Home", path: "index.html" },
    { id: "project-1", label: "SUNO Prompt Generator V4.1", path: "outputs/suno_auswahlmenue.html" },
    { id: "editor", label: "Editor", path: "editor.html" }
  ];

  const currentPath = decodeURIComponent(window.location.pathname || "").replace(/\\/g, "/");
  const inferredActive = currentPath.endsWith("/outputs/suno_auswahlmenue.html")
    ? "project-1"
    : currentPath.endsWith("/editor.html")
      ? "editor"
      : "home";

  document.querySelectorAll(".site-nav").forEach((nav) => {
    const root = nav.dataset.root || "";
    const active = nav.dataset.active || inferredActive;

    nav.innerHTML = pages.map((page) => {
      const isActive = page.id === active;
      const ariaCurrent = isActive ? ' aria-current="page"' : "";
      return '<a class="site-nav-link' + (isActive ? ' is-active' : '') + '" href="' + root + page.path + '"' + ariaCurrent + '><span>' + page.label + '</span></a>';
    }).join("");
  });

  const resizeTextarea = (textarea) => {
    if (!(textarea instanceof HTMLTextAreaElement)) return;
    if (textarea.dataset.noAutoGrow === "true") return;
    if (textarea.style.position === "fixed") return;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const resizeAllTextareas = () => {
    document.querySelectorAll("textarea").forEach(resizeTextarea);
  };

  window.autoGrowTextareas = resizeAllTextareas;
  document.addEventListener("input", (event) => resizeTextarea(event.target));
  new MutationObserver(() => requestAnimationFrame(resizeAllTextareas))
    .observe(document.documentElement, { childList: true, subtree: true });
  requestAnimationFrame(resizeAllTextareas);
  window.addEventListener("load", resizeAllTextareas);
})();
