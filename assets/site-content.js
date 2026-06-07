(() => {
  const STORAGE_KEY = "ak-ai-music-editor-content-v1";
  const STYLE_KEY = "ak-ai-music-editor-styles-v1";

  const fields = [
    {
      id: "home.title",
      page: "Home",
      label: "Überschrift",
      selector: '[data-content-key="home.title"]',
      defaultText: "AK AI Music Studio",
    },
    {
      id: "home.subtitle",
      page: "Home",
      label: "Untertitel",
      selector: '[data-content-key="home.subtitle"]',
      defaultText: "Die Zukunft der Musik: KI trifft Kreativität",
    },
    {
      id: "home.about.title",
      page: "Home",
      label: "Feldtitel Über mich",
      selector: '[data-content-key="home.about.title"]',
      defaultText: "Über mich",
    },
    {
      id: "home.about.text",
      page: "Home",
      label: "Text Über mich",
      selector: '[data-content-key="home.about.text"]',
      defaultText: `Hallo, ich bin Axel Köhler – Gründer von AK AI Music Studio und leidenschaftlicher Experte für die Verbindung von Musik, Technologie und künstlicher Intelligenz.

Musik war schon immer ein kreativer Ausdruck von Emotionen, Ideen und Geschichten. Mit den heutigen Möglichkeiten der KI eröffnen sich völlig neue Wege, Musik zu erschaffen, zu produzieren und zu erleben. Genau hier setzt meine Arbeit an.

Auf AK AI Music Studio kombiniere ich moderne KI-Technologien mit musikalischer Kreativität, um innovative Klangwelten, individuelle Songs und zukunftsweisende Musikprojekte zu entwickeln. Dabei nutze ich die neuesten Werkzeuge der künstlichen Intelligenz, um einzigartige musikalische Konzepte zu realisieren – von der ersten Idee bis zum fertigen Track.

Mein Ziel ist es, Menschen, Unternehmen und Kreative dabei zu unterstützen, die Möglichkeiten der KI-Musikproduktion zu entdecken und für ihre eigenen Projekte zu nutzen. Ob individuelle Musikstücke, Sounddesign, kreative Experimente oder professionelle Produktionen – ich glaube daran, dass Technologie und Kreativität gemeinsam etwas Außergewöhnliches schaffen können.`,
    },
    {
      id: "home.inspiration.title",
      page: "Home",
      label: "Feldtitel Inspiration",
      selector: '[data-content-key="home.inspiration.title"]',
      defaultText: "Inspiration",
    },
    {
      id: "home.idea.title",
      page: "Home",
      label: "Feldtitel Von der Idee zum Song",
      selector: '[data-content-key="home.idea.title"]',
      defaultText: "Von der Idee zum Song",
    },
    {
      id: "home.idea.text",
      page: "Home",
      label: "Text Von der Idee zum Song",
      selector: '[data-content-key="home.idea.text"]',
      defaultText: `„Von der Idee zum Song – intelligente Prompts für bessere KI-Musik.“

Musik mit KI zu erzeugen ist heute einfacher denn je. Die eigentliche Herausforderung liegt jedoch darin, die richtigen Anweisungen zu formulieren. Genau hier setzt unser erstes Projekt an.

Mit den Prompt Generatoren für Suno AI entwickeln wir eine eigene Plattform, die kreative Ideen automatisch in professionelle Musik-Prompts übersetzt.

Anstatt komplexe Beschreibungen manuell zu erstellen, können Nutzer ihre Vorstellungen eingeben und erhalten optimierte Prompts für hochwertige KI-generierte Songs.

Das System analysiert Musikstile, Stimmungen, Songstrukturen, Instrumentierungen und Gesangskonzepte und kombiniert diese zu präzisen Eingaben für Suno.

Dadurch entstehen konsistentere Ergebnisse, bessere Klangqualität und ein deutlich effizienterer kreativer Workflow.

Unser Ziel ist es, die Brücke zwischen kreativer Vision und künstlicher Intelligenz zu schlagen. Es soll nicht nur die Erstellung von Musik vereinfachen, sondern auch neue kreative Möglichkeiten eröffnen, die mit klassischen Produktionsmethoden nur schwer erreichbar wären.

Features

Automatische Generierung professioneller Suno-Prompts
Genre- und Stilassistent
Vorlagen für verschiedene Musikrichtungen
Mehrsprachige Prompt-Erstellung
Kontinuierliche Weiterentwicklung durch Praxistests

Vision

Wir möchten Werkzeuge entwickeln, die Kreativität nicht ersetzen, sondern erweitern soll. Dies ist der erste Schritt auf dem Weg zu einer neuen Generation intelligenter Musikproduktions-Tools, die das Beste aus menschlicher Kreativität und künstlicher Intelligenz verbindet.`,
    },
    {
      id: "home.vision.title",
      page: "Home",
      label: "Feldtitel Meine Vision",
      selector: '[data-content-key="home.vision.title"]',
      defaultText: "Meine Vision",
    },
    {
      id: "project.title",
      page: "SUNO Prompt Generator V4.1",
      label: "Überschrift",
      selector: '[data-content-key="project.title"]',
      defaultText: "SUNO Prompt Generator V4.1",
    },
    {
      id: "project.subtitle",
      page: "SUNO Prompt Generator V4.1",
      label: "Untertitel",
      selector: '[data-content-key="project.subtitle"]',
      defaultText: "Die Zukunft der Musik: KI trifft Kreativität",
    },
    {
      id: "project.prompt.title",
      page: "SUNO Prompt Generator V4.1",
      label: "Prompt Überschrift",
      selector: '[data-content-key="project.prompt.title"]',
      defaultText: "Prompt - kopieren und in SUNO Styles einfügen",
    },
    {
      id: "project.manual.title",
      page: "SUNO Prompt Generator V4.1",
      label: "Bedienungsanleitung Titel",
      selector: '[data-content-key="project.manual.title"]',
      defaultText: "Bedienungsanleitung",
    },
    {
      id: "project.manual.text",
      page: "SUNO Prompt Generator V4.1",
      label: "Bedienungsanleitung Text",
      selector: '[data-content-key="project.manual.text"]',
      defaultText: `1. Links einen Datensatz auswählen.
2. Mit Jahr, Genre oder Interpret filtern.
3. Im Bereich Datensatz die Felder bearbeiten.
4. Speichern sichert Änderungen im Browser.
5. + Neu legt einen neuen leeren Datensatz an.
6. Copy kopiert den Prompt für SUNO Styles.
7. Reset stellt die Originaldaten wieder her.`,
    },
  ];

  const readJson = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || "{}");
    } catch (error) {
      return {};
    }
  };

  const appendTextWithLineBreaks = (target, text) => {
    text.split("\n").forEach((line, index) => {
      if (index > 0) target.appendChild(document.createElement("br"));
      target.appendChild(document.createTextNode(line));
    });
  };

  const writeFormattedText = (element, text) => {
    const blocks = text.replace(/\r\n/g, "\n").split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
    element.replaceChildren();
    element.style.whiteSpace = "normal";

    blocks.forEach((block, index) => {
      const lower = block.toLocaleLowerCase("de");
      const isSectionTitle = lower === "features" || lower === "vision";
      const node = document.createElement(isSectionTitle ? "div" : "p");

      if (isSectionTitle) {
        node.className = "home-section-title";
      } else if (index === 0 && block.startsWith("„")) {
        node.className = "home-kicker";
      }

      appendTextWithLineBreaks(node, block);
      element.appendChild(node);
    });
  };

  const writeText = (element, text) => {
    if (element instanceof HTMLTextAreaElement || element instanceof HTMLInputElement) {
      element.value = text;
      return;
    }
    if (text.includes("\n")) {
      writeFormattedText(element, text);
      return;
    }
    element.textContent = text;
    element.style.whiteSpace = "";
  };

  const applyContent = () => {
    const content = readJson(STORAGE_KEY);
    const styles = readJson(STYLE_KEY);

    fields.forEach((field) => {
      document.querySelectorAll(field.selector).forEach((element) => {
        const text = content[field.id];
        if (typeof text === "string") writeText(element, text);

        const style = styles[field.id] || {};
        element.style.fontSize = style.fontSize ? style.fontSize + "px" : "";
        element.style.color = style.color || "";
        element.style.textAlign = style.textAlign || "";
      });
    });

    if (typeof window.autoGrowTextareas === "function") {
      requestAnimationFrame(window.autoGrowTextareas);
    }
  };

  window.SiteContent = {
    fields,
    storageKey: STORAGE_KEY,
    styleKey: STYLE_KEY,
    readJson,
    applyContent,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyContent);
  } else {
    applyContent();
  }
})();
