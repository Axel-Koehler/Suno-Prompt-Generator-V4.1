(() => {
  const pages = [
    { id: "home", label: "Home", path: "index.html" },
    { id: "project-1", label: "Projekt 1", path: "outputs/suno_auswahlmenue.html" }
  ];

  const currentPath = decodeURIComponent(window.location.pathname || "").replace(/\\/g, "/");
  const inferredActive = currentPath.endsWith("/outputs/suno_auswahlmenue.html") ? "project-1" : "home";

  document.querySelectorAll(".site-nav").forEach((nav) => {
    const root = nav.dataset.root || "";
    const active = nav.dataset.active || inferredActive;

    nav.innerHTML = pages.map((page) => {
      const isActive = page.id === active;
      const ariaCurrent = isActive ? ' aria-current="page"' : "";
      return '<a class="site-nav-link' + (isActive ? ' is-active' : '') + '" href="' + root + page.path + '"' + ariaCurrent + '><span>' + page.label + '</span></a>';
    }).join("");
  });
})();
