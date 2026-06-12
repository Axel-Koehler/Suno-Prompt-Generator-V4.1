// Extracted from Code 3.txt for the static KI Song Text Generator.
export const languages = [
    'Deutsch', 'English', 'Español', 'Français', 'Italiano', 'Português',
    'Nederlands', 'Polski', 'Русский', 'Türkçe', 'العربية', '日本語',
    '한국어', '中文', 'हिन्दी', 'Svenska', 'Norsk', 'Dansk', 'Suomi',
    'Čeština', 'Română', 'Magyar', 'Ελληνικά', 'Українська',
  ];

export const metaphorOptions = [
    { value: 'keine', label: '🚫 Keine', desc: 'Direkte, bildlose Sprache' },
    { value: 'natur', label: '🌿 Natur', desc: 'Jahreszeiten, Wasser, Feuer, Erde' },
    { value: 'licht', label: '💡 Licht & Schatten', desc: 'Dunkelheit, Glanz, Dämmerung' },
    { value: 'reise', label: '🛤️ Reise', desc: 'Wege, Brücken, Horizont, Aufbruch' },
    { value: 'krieg', label: '⚔️ Kampf', desc: 'Schlachten, Narben, Stärke, Mut' },
    { value: 'meer', label: '🌊 Meer', desc: 'Wellen, Sturm, Tiefe, Strömung' },
    { value: 'stadt', label: '🏙️ Stadt', desc: 'Beton, Neon, Stille, Massen' },
    { value: 'himmel', label: '✨ Kosmos', desc: 'Sterne, Galaxien, Unendlichkeit' },
    { value: 'tier', label: '🦅 Tiere', desc: 'Adler, Wolf, Schmetterling, Löwe' },
    { value: 'musik', label: '🎵 Musik', desc: 'Melodie, Klang, Stille, Rhythmus' },
    { value: 'feuer', label: '🔥 Feuer', desc: 'Flammen, Glut, Asche, Funken' },
    { value: 'zeit', label: '⏳ Zeit', desc: 'Vergänglichkeit, Uhren, Ewigkeit' },
    { value: 'traum', label: '💭 Traum', desc: 'Schlaf, Illusion, Erwachen, Visionen' },
    { value: 'maschine', label: '⚙️ Maschine', desc: 'Zahnräder, Code, Roboter, Systeme' },
    { value: 'blut', label: '🩸 Blut & Herz', desc: 'Pulse, Adern, Herzschlag, Wunden' },
    { value: 'gefaengnis', label: '🔒 Gefängnis', desc: 'Ketten, Mauern, Freiheit, Flucht' },
    { value: 'religion', label: '✝️ Glaube', desc: 'Engel, Teufel, Himmel, Sünde' },
    { value: 'pflanze', label: '🌱 Wachstum', desc: 'Samen, Wurzeln, Blüte, Verfall' },
    { value: 'magisch', label: '🪄 Magie', desc: 'Zauber, Hexen, Portale, Runen' },
    { value: 'sport', label: '🏆 Wettkampf', desc: 'Rennen, Sieg, Niederlage, Ausdauer' },
    { value: 'kind', label: '🧸 Kindheit', desc: 'Unschuld, Spielzeug, Erinnerungen' },
    { value: 'hunger', label: '🍽️ Hunger & Durst', desc: 'Sehnsucht, Begierde, Leere, Sättigung' },
    { value: 'spiegel', label: '🪞 Spiegel & Maske', desc: 'Identität, Doppelgänger, Wahrheit' },
    { value: 'winter', label: '❄️ Winter & Kälte', desc: 'Eis, Frost, Einsamkeit, Stille' },
  ];

export const kernbotschaftOptions = [
    { value: '', label: '🚫 Keine', desc: 'Keine spezifische Botschaft' },
    { value: 'hoffnung', label: '🌅 Hoffnung', desc: 'Es wird besser – gib nicht auf' },
    { value: 'freiheit', label: '🕊️ Freiheit', desc: 'Ausbrechen, selbst bestimmen' },
    { value: 'liebe', label: '❤️ Liebe', desc: 'Zuneigung, Verbundenheit, Herz' },
    { value: 'verlust', label: '💔 Verlust', desc: 'Trauer, Abschied, Schmerz' },
    { value: 'rebellion', label: '✊ Rebellion', desc: 'Widerstand gegen das System' },
    { value: 'einsamkeit', label: '🌑 Einsamkeit', desc: 'Isolation, Stille, Sehnsucht' },
    { value: 'staerke', label: '💪 Stärke', desc: 'Aufstehen, überwinden, wachsen' },
    { value: 'vergaenglichkeit', label: '🍂 Vergänglichkeit', desc: 'Alles endet – genieße den Moment' },
    { value: 'zusammenhalt', label: '🤝 Zusammenhalt', desc: 'Gemeinschaft, Loyalität, Wir' },
    { value: 'sehnsucht', label: '🌠 Sehnsucht', desc: 'Vermissen, Träumen, Fernweh' },
    { value: 'neuanfang', label: '🌱 Neuanfang', desc: 'Loslassen, frisch starten' },
    { value: 'selbstliebe', label: '🪞 Selbstliebe', desc: 'Akzeptanz, Würde, innerer Frieden' },
    { value: 'wahrheit', label: '🔍 Wahrheit', desc: 'Ehrlichkeit, Enthüllung, Klarheit' },
    { value: 'rache', label: '🗡️ Rache', desc: 'Vergeltung, kalte Wut, Konsequenz' },
    { value: 'euphorie', label: '🎉 Euphorie', desc: 'Ekstase, Lebensfreude, Ausgelassenheit' },
  ];

export const rhymeQualityOptions = [
    { value: 'perfekt', label: '🎯 Perfekt', desc: 'Exakte Endreime, klassisch sauber' },
    { value: 'nah', label: '〰️ Nah', desc: 'Nahezu reimend, natürlich fließend' },
    { value: 'unrein', label: '🌊 Unrein', desc: 'Halbreime, locker & modern' },
    { value: 'assonanz', label: '🔊 Assonanz', desc: 'Nur Vokalklang ähnlich' },
    { value: 'frei', label: '🌿 Frei', desc: 'Kein Reim, prosaisch poetisch' },
  ];

export const rhymeOptions = [
    { value: 'ABAB', label: 'ABAB', desc: 'Kreuzreim' },
    { value: 'AABB', label: 'AABB', desc: 'Paarreim' },
    { value: 'ABBA', label: 'ABBA', desc: 'Umarmender Reim' },
    { value: 'AAAA', label: 'AAAA', desc: 'Durchreim' },
    { value: 'ABCB', label: 'ABCB', desc: 'Balladenstrophe' },
    { value: 'frei', label: 'Frei', desc: 'Kein Reimschema' },
  ];

