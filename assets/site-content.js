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
      id: "home.planned.title",
      page: "Home",
      label: "Feldtitel Projekte in Planung",
      selector: '[data-content-key="home.planned.title"]',
      defaultText: "Projekte in Planung",
    },
    {
      id: "home.planned.text",
      page: "Home",
      label: "Text Projekte in Planung",
      selector: '[data-content-key="home.planned.text"]',
      defaultText: "Hier kannst du geplante Projekte eintragen.",
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
3. Im Bereich Datensatz die Felder bearbeiten. Änderungen werden automatisch gespeichert.
4. Copy kopiert den Prompt für SUNO Styles.
5. Reset stellt die Originaldaten wieder her. Zusatzdatensätze bleiben gespeichert.
6. Suno öffnet die SUNO Create Seite.`,
    },
    {
      id: "lyric-style.title",
      page: "Lyric Stil Generator",
      label: "Überschrift",
      selector: '[data-content-key="lyric-style.title"]',
      defaultText: "Lyric Stil Generator",
    },
    {
      id: "lyric-style.subtitle",
      page: "Lyric Stil Generator",
      label: "Untertitel",
      selector: '[data-content-key="lyric-style.subtitle"]',
      defaultText: "Die Zukunft der Musik: KI trifft Kreativität",
    },
    {
      id: "lyric-style.info.title",
      page: "Lyric Stil Generator",
      label: "Feldtitel Informationen",
      selector: '[data-content-key="lyric-style.info.title"]',
      defaultText: "Informationen",
    },
    {
      id: "lyric-style.info.text",
      page: "Lyric Stil Generator",
      label: "Text Informationen",
      selector: '[data-content-key="lyric-style.info.text"]',
      defaultText: "1. Eckige Klammern [ ] – Der Regiestuhl\n\nAlles, was in eckigen Klammern steht, singt die KI nicht, sondern liest es als musikalische Anweisung (Metatag). Sie steuern den kompletten Songaufbau.\n\nBefehl / Zeichen\n\nAuswirkung in Suno\n\n[Verse] / [Chorus]\n\nTeilt den Song in Strophen (eher ruhig) und Refrain (energiegeladen) ein.\n\n[Pre-Chorus]\n\nBaut Spannung auf, bevor der Refrain einschlägt.\n\n[Bridge]\n\nÄndert oft Melodie, Rhythmus oder Tonart, um Abwechslung zu schaffen.\n\n[Instrumental] / [Solo]\n\nUnterdrückt den Gesang komplett für eine Passage (z.B. [Guitar Solo]).\n\n[Drop] / [Beat Drop]\n\nErzeugt den plötzlichen, harten Einsatz des Beats (wichtig für EDM/Hip-Hop).\n\n[A Capella]\n\nStoppt die Instrumente, sodass die Stimme kurzzeitig alleine singt.\n\n[Outro] / [End]\n\nLeitet das Ende des Songs ein (häufig verbunden mit einem Fade-out).\n\n2. Runde Klammern ( ) – Die zweite Reihe\n\nRunde Klammern steuern Hintergrundgesang (Backing Vocals) und Echos. Die KI interpretiert diesen Text als Ebene hinter der Hauptstimme.\n\nEchos / Ad-libs: Wenn du den Haupttext doppelst.\n\nPrompt: I am flying high (flying high)\n\nErgebnis: Die Hauptstimme singt den ganzen Satz, eine zweite Stimme oder ein Chor flüstert/ruft das \"flying high\" im Hintergrund.\n\nAntwort-Gesang (Call & Response):\n\nPrompt: We want it all! (Yeah we do!)\n\n3. Sternchen * * – Geräusche und Aktionen\n\nSternchen werden genutzt, um nicht-musikalische Vokalisationen oder Geräusche zu erzwingen. (Hinweis: Die KI setzt das nicht immer zu 100 % um, aber es erhöht die Wahrscheinlichkeit enorm).\n\n*sigh* (Seufzen)\n\n*laugh* (Lachen)\n\n*cough* (Husten)\n\n*whispers* (Wechselt für das nächste Wort oft in ein Flüstern)\n\n4. Anführungszeichen \" \" – Gesprochenes Wort\n\nWenn du möchtest, dass ein bestimmter Satz gesprochen statt gesungen wird, kannst du ihn in Anführungszeichen setzen oder mit einem Metatag kombinieren.\n\nPrompt: [Spoken Word] \"This is the end of the line.\"\n\nAuswirkung: Die KI bricht aus der Melodie aus und spricht den Text (oft im Stil eines Radio-DJs oder eines dramatischen Monologs).\n\n5. Satzzeichen – Timing, Atmung und Rhythmus\n\nSuno nimmt Interpunktion sehr ernst. Satzzeichen sind deine Werkzeuge, um den Flow und die Pausen der Stimme zu dirigieren.\n\nZeichen\n\nAuswirkung auf Gesang und Rhythmus\n\nKomma ,\n\nKurze Atempause. Der Rhythmus läuft weiter, der Sänger schnappt kurz Luft.\n\nPunkt .\n\nLängere Pause. Beendet eine musikalische Phrase (\"Zeile abgeschlossen\").\n\nAusrufezeichen !\n\nErhöht die Energie. Der Sänger singt lauter, drückender oder \"schreit\" das Wort.\n\nFragezeichen ?\n\nVerändert die Intonation. Die Stimme geht am Ende des Satzes oft nach oben.\n\nAuslassungspunkte ...\n\nDie Stimme \"fadet\" oft aus oder zieht das letzte Wort dramatisch in die Länge.\n\nBindestrich -\n\nErzeugt Stottern oder Stakkato (z.B. W-w-w-wait a minute).\n\n6. Großbuchstaben (ALL CAPS) – Lautstärke\n\nKein klassisches Sonderzeichen, aber essenziell: Wenn du Wörter komplett großschreibst (z.B. I will NEVER surrender), interpretiert Suno das oft als starken Akzent (Belting/Shouting). Die KI legt auf dieses Wort besonders viel Kraft.\n\nExperten-Tipp zur Formatierung: Suno liest deinen Prompt von oben nach unten wie ein Skript. Absätze (Leerzeilen) sind extrem wichtig. Eine leere Zeile zwischen einem [Verse] und einem [Chorus] gibt der KI den nötigen \"Denkraum\", um das Instrumentalmuster zu wechseln. Klebt der Text ohne Absätze aneinander, verschwimmen die Songteile oft zu einem musikalischen Brei.\n\nBefehle zwischen zwei Sternchen (* *) sind in Suno deine Regieanweisungen für Soundeffekte, nonverbale Laute und emotionale Ausbrüche. Alles, was in diesen Sternchen steht, versucht die KI nicht zu singen, sondern als hörbares Geräusch in die Audiospur einzubauen.\n\nDa Suno auf englischsprachigen Datensätzen trainiert wurde, funktionieren ausschließlich englische Begriffe zuverlässig.\n\nHier sind die Befehle, die von der KI am besten erkannt werden:\n\n1. Emotionale Laute\n\nDiese Befehle bringen Menschlichkeit und Gefühl in die Stimme, ohne dass ein Wort gesungen wird.\n\n*laugh* oder *chuckle*: Ein hörbares Lachen oder kurzes Kichern. Perfekt für fröhliche oder verrückte Songs.\n\n*sigh*: Ein tiefes, oft melancholisches Seufzen. Gut vor einer traurigen Strophe.\n\n*cry* oder *sobs*: Weinen oder Schluchzen.\n\n*giggle*: Ein verspieltes Kichern.\n\n2. Atmung und körperliche Geräusche\n\nHiermit steuerst du die Physis des \"Sängers\" und schaffst Pausen, die sehr natürlich wirken.\n\n*breath* oder *deep breath*: Ein deutliches, hörbares Einatmen. Sehr effektiv vor einem langen, gehaltenen Ton oder nach einem schnellen Rap-Part.\n\n*gasp*: Ein erschrockenes, plötzliches Schnappen nach Luft.\n\n*cough*: Ein Husten.\n\n*clears throat* oder *ahem*: Ein Räuspern. Stark am Anfang eines Songs, bevor der eigentliche Text beginnt.\n\n*yawn*: Ein Gähnen (oft genutzt in Schlafliedern oder ruhigen Lo-Fi-Tracks).\n\n3. Stimmliche Effekte\n\n*scream*: Ein plötzlicher Schrei. (Hinweis: Wenn du möchtest, dass Text geschrien wird, nutze Großbuchstaben oder [Scream]. Die Sternchen erzeugen eher einen textlosen Schrei).\n\n*whispers*: Zwingt die KI oft dazu, in den Flüstermodus zu wechseln.\n\n*mumbles*: Die Stimme fängt an, unverständlich vor sich hin zu murmeln.\n\n*beatbox*: Die KI versucht, für einen kurzen Moment den Rhythmus mit dem Mund zu machen.\n\nSo wendest du sie richtig an\n\nDamit Suno die Sternchen-Befehle nicht aus Versehen als Text mitsingt, kommt es auf die richtige Platzierung an.\n\nVariante A: Alleinstehend für volle Wirkung Setze den Befehl in eine eigene Zeile, damit die KI Platz hat, das Geräusch zu generieren.\n\n[Verse] I walked for miles in the rain *cough* My lungs are burning today\n\nVariante B: Mitten im Satz für Dynamik Du kannst sie direkt vor ein Wort setzen, um die Betonung dieses Wortes zu ändern.\n\nI just can't believe it *laugh* you must be joking!\n\nWichtiges Detail: Suno ist eine kreative KI. Diese Befehle sind \"weiche\" Anweisungen. Wenn ein *laugh* in einem extrem traurigen Opern-Song steht, wird die KI es wahrscheinlich ignorieren, weil es musikalisch nicht passt. In passenden Genres (Pop, Musical, Rap, Theater) ist die Erfolgsquote deutlich höher.",
    },
    {
      id: "stems.title",
      page: "Stems erzeugen",
      label: "Überschrift",
      selector: '[data-content-key="stems.title"]',
      defaultText: "Stems erzeugen",
    },
    {
      id: "stems.subtitle",
      page: "Stems erzeugen",
      label: "Untertitel",
      selector: '[data-content-key="stems.subtitle"]',
      defaultText: "Die Zukunft der Musik: KI trifft Kreativität",
    },
    {
      id: "stems.explanation.title",
      page: "Stems erzeugen",
      label: "Feldtitel Erläuterungen",
      selector: '[data-content-key="stems.explanation.title"]',
      defaultText: "Erläuterungen",
    },
    {
      id: "stems.explanation.text",
      page: "Stems erzeugen",
      label: "Text Erläuterungen",
      selector: '[data-content-key="stems.explanation.text"]',
      defaultText: `Mit diesem Werkzeug kannst du eine Suno MP3 Datei hochladen und im Browser in 8 Frequenzspuren zerlegen.

Die erzeugten Spuren werden als WAV Dateien in einer ZIP Datei gespeichert.

Hinweis: Diese Version erzeugt Frequenzspuren. Eine echte KI-Trennung nach Gesang, Drums, Bass und Instrumenten benötigt einen zusätzlichen Serverdienst.`,
    },
    {
      id: "stems.notice.title",
      page: "Stems erzeugen",
      label: "Feldtitel Hinweis",
      selector: '[data-content-key="stems.notice.title"]',
      defaultText: "Hinweis",
    },
    {
      id: "stems.notice.text",
      page: "Stems erzeugen",
      label: "Text Hinweis",
      selector: '[data-content-key="stems.notice.text"]',
      defaultText: "Die 8 Spuren werden im Browser berechnet. Bei sehr langen Dateien kann die Verarbeitung je nach Gerät etwas dauern.",
    },
    {
      id: "stems.processing.title",
      page: "Stems erzeugen",
      label: "Feldtitel Suno MP3 zerlegen",
      selector: '[data-content-key="stems.processing.title"]',
      defaultText: "Suno MP3 zerlegen",
    },
    {
      id: "stems.processing.help",
      page: "Stems erzeugen",
      label: "Text Suno MP3 zerlegen",
      selector: '[data-content-key="stems.processing.help"]',
      defaultText: "MP3 laden, in 8 Frequenzspuren aufteilen und die fertigen Dateien als ZIP herunterladen.",
    },
    {
      id: "stems.processing.note",
      page: "Stems erzeugen",
      label: "Hinweis Frequenzspuren",
      selector: '[data-content-key="stems.processing.note"]',
      defaultText: "Hinweis: Diese Web-Version erzeugt 8 Frequenzspuren. Eine echte KI-Trennung nach Gesang, Drums, Bass und Instrumenten benötigt einen zusätzlichen Serverdienst.",
    },
    {
      id: "stems.mix.help",
      page: "Stems erzeugen",
      label: "Text Einzelmix Download",
      selector: '[data-content-key="stems.mix.help"]',
      defaultText: "Mit den Lautstärkereglern kannst du einzelne Spuren lauter oder leiser stellen. Der Button erstellt daraus eine neue WAV-Datei mit genau diesen Einstellungen.",
    },
    {
      id: "legal.imprint.title",
      page: "Rechtliches",
      label: "Impressum Titel",
      selector: '[data-content-key="legal.imprint.title"]',
      defaultText: "Impressum",
    },
    {
      id: "legal.imprint.text",
      page: "Rechtliches",
      label: "Impressum Text",
      selector: '[data-content-key="legal.imprint.text"]',
      defaultText: `Angaben gemaess Paragraf 5 DDG

AK AI Music Studio
Axel Koehler
[Strasse und Hausnummer einfuegen]
[PLZ und Ort einfuegen]
Deutschland

Kontakt
E-Mail: [E-Mail-Adresse einfuegen]
Telefon: [Telefonnummer einfuegen, falls vorhanden]

Verantwortlich fuer den Inhalt
Axel Koehler
[Anschrift einfuegen]

Hinweis
Bitte pruefe und ergaenze diese Angaben vor der Veroeffentlichung. Je nach Taetigkeit koennen weitere Pflichtangaben erforderlich sein, zum Beispiel Umsatzsteuer-ID, Registerangaben, Aufsichtsbehoerde oder berufsrechtliche Angaben.

Haftung fuer Inhalte
Die Inhalte dieser Seite wurden mit Sorgfalt erstellt. Fuer Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte kann jedoch keine Gewaehr uebernommen werden.

Haftung fuer Links
Diese Seite kann Links zu externen Websites enthalten. Auf deren Inhalte habe ich keinen Einfluss. Fuer externe Inhalte ist stets der jeweilige Anbieter oder Betreiber verantwortlich.`,
    },
    {
      id: "legal.privacy.title",
      page: "Rechtliches",
      label: "Datenschutz Titel",
      selector: '[data-content-key="legal.privacy.title"]',
      defaultText: "Datenschutz",
    },
    {
      id: "legal.privacy.text",
      page: "Rechtliches",
      label: "Datenschutz Text",
      selector: '[data-content-key="legal.privacy.text"]',
      defaultText: `Datenschutzerklaerung

Verantwortlicher
AK AI Music Studio
Axel Koehler
[Anschrift einfuegen]
E-Mail: [E-Mail-Adresse einfuegen]

Allgemeine Hinweise
Der Schutz personenbezogener Daten ist mir wichtig. Diese Datenschutzerklaerung informiert darueber, welche Daten beim Besuch dieser Website verarbeitet werden koennen.

Hosting und technische Zugriffsdaten
Diese Website kann ueber GitHub Pages oder einen vergleichbaren Hosting-Dienst bereitgestellt werden. Beim Aufruf der Seite koennen technisch erforderliche Daten verarbeitet werden, zum Beispiel IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem und angeforderte Dateien. Diese Verarbeitung dient der technischen Bereitstellung, Sicherheit und Stabilitaet der Website.

Rechtsgrundlage
Die Verarbeitung technisch erforderlicher Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren und funktionsfaehigen Bereitstellung der Website.

Lokaler Speicher im Browser
Diese Seite nutzt den lokalen Speicher des Browsers, um vom Nutzer vorgenommene Einstellungen, Texte und Datensaetze lokal zu speichern. Diese Daten werden im Browser des Nutzers abgelegt und nicht automatisch an den Seitenbetreiber uebermittelt.

Kontaktaufnahme
Wenn du per E-Mail Kontakt aufnimmst, werden die uebermittelten Daten zur Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage mit einem Vertrag oder vorvertraglichen Massnahmen zusammenhaengt, sonst Art. 6 Abs. 1 lit. f DSGVO.

Externe Links
Diese Website enthaelt Links zu externen Angeboten, zum Beispiel SUNO oder YouTube. Beim Aufrufen externer Seiten gelten die Datenschutzbestimmungen des jeweiligen Anbieters.

Deine Rechte
Du hast nach Massgabe der DSGVO das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung, Datenuebertragbarkeit und Widerspruch. Ausserdem besteht ein Beschwerderecht bei einer zustaendigen Datenschutzaufsichtsbehoerde.

Hinweis
Bitte pruefe und ergaenze diese Datenschutzerklaerung vor der Veroeffentlichung. Je nach eingesetzten Diensten, Analysewerkzeugen, Kontaktformularen, Cookies oder eingebetteten Medien koennen weitere Angaben erforderlich sein.`,
    },
  ];

  const readJson = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || "{}");
    } catch (error) {
      return {};
    }
  };

  const writeJson = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const appendInlineContent = (target, text) => {
    const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
    let lastIndex = 0;
    let match;
    while ((match = linkPattern.exec(text)) !== null) {
      if (match.index > lastIndex) {
        target.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }
      const link = document.createElement("a");
      link.href = match[2];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = match[1];
      target.appendChild(link);
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      target.appendChild(document.createTextNode(text.slice(lastIndex)));
    }
  };

  const appendTextWithLineBreaks = (target, text) => {
    text.split("\n").forEach((line, index) => {
      if (index > 0) target.appendChild(document.createElement("br"));
      appendInlineContent(target, line);
    });
  };

  const isBulletBlock = (block) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    return lines.length > 1 && lines.every((line) => /^(?:[-•]\s+)/.test(line));
  };

  const appendBulletList = (element, block) => {
    const list = document.createElement("ul");
    list.className = "home-feature-list";
    block.split("\n").map((line) => line.trim()).filter(Boolean).forEach((line) => {
      const item = document.createElement("li");
      item.textContent = line.replace(/^(?:[-•]\s+)/, "");
      list.appendChild(item);
    });
    element.appendChild(list);
  };

  const writeFormattedText = (element, text) => {
    const blocks = text.replace(/\r\n/g, "\n").split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
    element.replaceChildren();
    element.style.whiteSpace = "normal";

    blocks.forEach((block, index) => {
      if (isBulletBlock(block)) {
        appendBulletList(element, block);
        return;
      }

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
    if (text.includes("\n") || /\[[^\]]+\]\(https?:\/\/[^)\s]+\)/.test(text)) {
      writeFormattedText(element, text);
      return;
    }
    element.textContent = text;
    element.style.whiteSpace = "";
  };

  const fieldExists = (id) => fields.some((field) => field.id === id);

  const textFromElement = (element) => {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) return element.value.trim();
    return (element.textContent || "").trim().replace(/\n{3,}/g, "\n\n");
  };

  const labelFromKey = (key) => key
    .split(".")
    .slice(1)
    .join(" ")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toLocaleUpperCase("de")) || key;

  const discoverFields = async () => {
    const pages = Array.isArray(window.SitePages) ? window.SitePages : [];
    for (const page of pages) {
      try {
        const response = await fetch(page.path, { cache: "no-store" });
        if (!response.ok) continue;
        const html = await response.text();
        const documentFragment = new DOMParser().parseFromString(html, "text/html");
        documentFragment.querySelectorAll("[data-content-key]").forEach((element) => {
          const id = element.getAttribute("data-content-key");
          if (!id || fieldExists(id)) return;
          fields.push({
            id,
            page: element.getAttribute("data-content-page") || page.label || "Seite",
            label: element.getAttribute("data-content-label") || labelFromKey(id),
            selector: '[data-content-key="' + id.replace(/"/g, '\\"') + '"]',
            defaultText: textFromElement(element),
          });
        });
      } catch (error) {
        // Offline/local file previews may block fetch; registered fields still remain available.
      }
    }
    return fields;
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

  const loadRemoteContent = async () => {
    if (!window.AKRemoteStore?.isConfigured) return false;
    const remoteContent = await window.AKRemoteStore.get(STORAGE_KEY, null);
    const remoteStyles = await window.AKRemoteStore.get(STYLE_KEY, null);
    if (remoteContent && typeof remoteContent === "object") writeJson(STORAGE_KEY, remoteContent);
    if (remoteStyles && typeof remoteStyles === "object") writeJson(STYLE_KEY, remoteStyles);
    if (remoteContent || remoteStyles) {
      applyContent();
      return true;
    }
    return false;
  };

  const saveRemoteContent = async (content, styles) => {
    if (!window.AKRemoteStore?.isConfigured) return false;
    const contentSaved = await window.AKRemoteStore.set(STORAGE_KEY, content);
    const stylesSaved = await window.AKRemoteStore.set(STYLE_KEY, styles);
    return contentSaved && stylesSaved;
  };

  window.SiteContent = {
    fields,
    storageKey: STORAGE_KEY,
    styleKey: STYLE_KEY,
    readJson,
    writeJson,
    applyContent,
    loadRemoteContent,
    saveRemoteContent,
    discoverFields,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      applyContent();
      loadRemoteContent();
    });
  } else {
    applyContent();
    loadRemoteContent();
  }
})();
