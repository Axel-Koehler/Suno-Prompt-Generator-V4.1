(() => {
  const pages = [
    { id: "home", label: "Home", path: "index.html" },
    { id: "project-1", label: "SUNO Prompt Generator V4.1", path: "outputs/suno_auswahlmenue.html" },
    { id: "prompt-designer", label: "Suno Prompt Generator V2.1", path: "prompt-designer.html" },
    { id: "songs", label: "Meine Song`s", path: "songs.html" },
    { id: "editor", label: "Editor", path: "editor.html" }
  ];

  const currentPath = decodeURIComponent(window.location.pathname || "").replace(/\\/g, "/");
  const inferredActive = currentPath.endsWith("/outputs/suno_auswahlmenue.html")
    ? "project-1"
    : currentPath.endsWith("/prompt-designer.html")
      ? "prompt-designer"
    : currentPath.endsWith("/songs.html")
      ? "songs"
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

  const legalItems = [
    { id: "imprint", button: "Impressum", titleKey: "legal.imprint.title", textKey: "legal.imprint.text" },
    { id: "privacy", button: "Datenschutz", titleKey: "legal.privacy.title", textKey: "legal.privacy.text" }
  ];

  const legalHost = document.querySelector(".home-shell, .holo-shell, .prompt-shell, .editor-shell");
  if (legalHost && !document.querySelector(".legal-footer")) {
    const footer = document.createElement("div");
    footer.className = "legal-footer";
    footer.innerHTML = legalItems.map((item) => (
      '<button class="legal-link" type="button" data-legal-open="' + item.id + '">' + item.button + '</button>'
    )).join("");
    legalHost.insertAdjacentElement("afterend", footer);

    const modal = document.createElement("div");
    modal.className = "legal-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = (
      '<div class="legal-dialog">' +
        '<div class="legal-dialog-head">' +
          '<h2 class="legal-dialog-title"></h2>' +
          '<button class="legal-close" type="button" aria-label="Fenster schließen">&times;</button>' +
        '</div>' +
        '<div class="legal-dialog-body"></div>' +
      '</div>'
    );
    document.body.appendChild(modal);

    const title = modal.querySelector(".legal-dialog-title");
    const body = modal.querySelector(".legal-dialog-body");
    const closeButton = modal.querySelector(".legal-close");

    const openModal = (item) => {
      title.setAttribute("data-content-key", item.titleKey);
      body.setAttribute("data-content-key", item.textKey);
      title.textContent = item.button;
      body.textContent = "";
      window.SiteContent?.applyContent?.();
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      closeButton.focus();
    };

    const closeModal = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    };

    footer.addEventListener("click", (event) => {
      const button = event.target.closest("[data-legal-open]");
      if (!button) return;
      const item = legalItems.find((entry) => entry.id === button.dataset.legalOpen);
      if (item) openModal(item);
    });

    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
  }

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
