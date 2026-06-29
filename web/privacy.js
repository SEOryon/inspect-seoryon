/* ============================================================
   Inspect — privacy page i18n (self-contained, 100% static).
   Mirrors the main app.js language logic (priority: ?lang= >
   localStorage "inspect_lang" > navigator) and shares the same
   storage key, so a visitor's language carries across both pages.
   No FAQ/JSON-LD injection here — this is a plain legal page.
   DE/FR are natively localized, not literal translations.
   ============================================================ */
(() => {
  "use strict";

  // Privacy/support contact — the real monitored mailbox. Single source of
  // truth: drives the "Contact:" line + mailto link below (and matches the
  // static fallback in privacy.html).
  const CONTACT_EMAIL = "support@seoryon.com";

  const I18N = {
    en: {
      pp_meta_title: "Privacy Policy — Inspect by SEOryon",
      pp_meta_desc: "How the free Inspect browser extension and the inspect.seoryon.com website handle your data. Short version: everything runs locally in your browser — we set no tracking cookies and run no analytics.",
      pp_back: "← Back to Inspect",
      pp_back_short: "Inspect",

      pp_h1: "Privacy Policy",
      pp_updated: "Last updated: 26 June 2026",
      pp_intro: "This policy covers both the Inspect browser extension and this website (inspect.seoryon.com), both made by SEOryon. The short version: Inspect runs entirely in your browser, and we don't track you.",

      pp_s1_title: "The Inspect extension",
      pp_s1_lead: "Inspect runs entirely on your device, inside your browser.",
      pp_s1_b1: "It reads only the page you're actively viewing, and only when you open it, to run its SEO and GEO checks locally on your device.",
      pp_s1_b2: "It does not collect, store remotely, transmit, sell, or share any personal data or browsing data.",
      pp_s1_b3: "No analytics, no account, no login, no tracking, and no cookies are set by the extension.",
      pp_s1_scan: "The optional whole-site scan also runs entirely in your browser — it fetches your own site's pages, robots.txt, and sitemap locally to build the audit, and still sends nothing to a server.",
      pp_s1_stored_h: "What it stores, and where",
      pp_s1_stored_p: "The only things Inspect keeps are your language preference and your local scan history — saved in your own browser (via chrome.storage / localStorage). This stays on your device, we can't see it, and you can clear it anytime by removing the extension or clearing your browser data.",
      pp_s1_perm_h: "Permissions",
      pp_s1_perm_p: "Inspect asks for access to the page you're viewing so it can read that page's HTML and audit it. It uses that access only to run the audit you requested — nothing else.",
      pp_s1_net_h: "Network requests",
      pp_s1_net_p: "To check things like broken links or AI-crawler files (robots.txt and llms.txt), Inspect may request URLs that belong to the page or site you're inspecting, directly from your browser — the same kind of requests your browser already makes. Those go to the sites you're inspecting, not to SEOryon, and we never receive the results.",

      pp_s2_title: "This website (inspect.seoryon.com)",
      pp_s2_lead: "This is a static marketing site, hosted on Vercel.",
      pp_s2_b1: "We set no tracking cookies and run no analytics on this site — no Google Analytics, no tracking or advertising pixels, no marketing cookies, no fingerprinting.",
      pp_s2_b2: "Your language choice is saved locally in your browser (localStorage) so the site remembers it between visits. That preference never leaves your device.",
      pp_s2_b3: "Like any website host, our provider (Vercel) may keep standard, short-lived server logs — such as IP address, request time, and browser type — to serve the site and keep it secure. We don't use these to track, profile, or identify you.",
      pp_s2_b4: "Links out to app.seoryon.com and seoryon.com lead to SEOryon's main products, which have their own privacy terms.",

      pp_s3_title: "If you create a SEOryon account",
      pp_s3_p: "This page covers Inspect and this website only. The paid SEOryon platform at app.seoryon.com is a separate product, with its own account, data handling, and privacy terms. Creating an account there is entirely optional and never required to use Inspect.",

      pp_s4_title: "Your data & contact",
      pp_s4_p: "Because Inspect stores nothing on our servers, there's no personal data of yours for us to hold, export, or delete. If you have any question about privacy — or anything you'd like clarified — reach out and we'll gladly help.",
      pp_s4_contact_label: "Contact:",

      pp_s5_title: "Changes to this policy",
      pp_s5_p: "If anything here changes, we'll update this page and the “last updated” date above. Because this URL also serves as our Chrome Web Store privacy policy, we keep it current and accurate.",

      pp_footer_note: "Inspect runs entirely in your browser. Built by SEOryon — your organic growth engine.",
    },

    de: {
      pp_meta_title: "Datenschutzerklärung — Inspect von SEOryon",
      pp_meta_desc: "Wie die kostenlose Browser-Erweiterung Inspect und die Website inspect.seoryon.com mit deinen Daten umgehen. Kurz gesagt: Alles läuft lokal in deinem Browser – wir setzen keine Tracking-Cookies und nutzen keine Analyse-Tools.",
      pp_back: "← Zurück zu Inspect",
      pp_back_short: "Inspect",

      pp_h1: "Datenschutzerklärung",
      pp_updated: "Zuletzt aktualisiert: 26. Juni 2026",
      pp_intro: "Diese Erklärung gilt sowohl für die Browser-Erweiterung Inspect als auch für diese Website (inspect.seoryon.com) – beide von SEOryon. Kurz gesagt: Inspect läuft vollständig in deinem Browser, und wir verfolgen dich nicht.",

      pp_s1_title: "Die Inspect-Erweiterung",
      pp_s1_lead: "Inspect läuft komplett auf deinem Gerät, direkt in deinem Browser.",
      pp_s1_b1: "Sie liest ausschließlich die Seite, die du gerade ansiehst, und nur, wenn du sie öffnest – um ihre SEO- und GEO-Prüfungen lokal auf deinem Gerät auszuführen.",
      pp_s1_b2: "Sie sammelt, speichert extern, überträgt, verkauft oder teilt keinerlei personenbezogene Daten oder Surfdaten.",
      pp_s1_b3: "Keine Analyse-Tools, kein Konto, kein Login, kein Tracking – und die Erweiterung setzt keine Cookies.",
      pp_s1_scan: "Auch der optionale Whole-Site-Scan läuft komplett in deinem Browser – er ruft die Seiten, robots.txt und Sitemap deiner eigenen Website lokal ab, um das Audit zu erstellen, und sendet weiterhin nichts an einen Server.",
      pp_s1_stored_h: "Was gespeichert wird – und wo",
      pp_s1_stored_p: "Das Einzige, was Inspect behält, sind deine Spracheinstellung und dein lokaler Prüfverlauf – gespeichert in deinem eigenen Browser (über chrome.storage / localStorage). Das bleibt auf deinem Gerät, wir können es nicht einsehen, und du kannst es jederzeit löschen, indem du die Erweiterung entfernst oder deine Browserdaten leerst.",
      pp_s1_perm_h: "Berechtigungen",
      pp_s1_perm_p: "Inspect fragt Zugriff auf die Seite an, die du ansiehst, um deren HTML zu lesen und zu prüfen. Diesen Zugriff nutzt sie ausschließlich für das Audit, das du angefordert hast – für nichts anderes.",
      pp_s1_net_h: "Netzwerk-Anfragen",
      pp_s1_net_p: "Um etwa defekte Links oder KI-Crawler-Dateien (robots.txt und llms.txt) zu prüfen, ruft Inspect unter Umständen URLs ab, die zur geprüften Seite oder Website gehören – direkt aus deinem Browser, also dieselbe Art von Anfragen, die dein Browser ohnehin stellt. Diese gehen an die Seiten, die du prüfst, nicht an SEOryon, und wir erhalten die Ergebnisse nie.",

      pp_s2_title: "Diese Website (inspect.seoryon.com)",
      pp_s2_lead: "Dies ist eine statische Marketing-Website, gehostet bei Vercel.",
      pp_s2_b1: "Wir setzen auf dieser Website keine Tracking-Cookies und nutzen keine Analyse-Tools – kein Google Analytics, keine Tracking- oder Werbe-Pixel, keine Marketing-Cookies, kein Fingerprinting.",
      pp_s2_b2: "Deine Sprachwahl wird lokal in deinem Browser gespeichert (localStorage), damit die Website sie über Besuche hinweg merkt. Diese Einstellung verlässt dein Gerät nie.",
      pp_s2_b3: "Wie bei jedem Webhoster kann unser Anbieter (Vercel) übliche, kurzlebige Server-Logs führen – etwa IP-Adresse, Zeitpunkt der Anfrage und Browsertyp –, um die Website auszuliefern und sicher zu halten. Wir nutzen diese nicht, um dich zu verfolgen, zu profilieren oder zu identifizieren.",
      pp_s2_b4: "Links zu app.seoryon.com und seoryon.com führen zu den Hauptprodukten von SEOryon, die ihre eigenen Datenschutzbedingungen haben.",

      pp_s3_title: "Wenn du ein SEOryon-Konto anlegst",
      pp_s3_p: "Diese Seite gilt nur für Inspect und diese Website. Die kostenpflichtige SEOryon-Plattform unter app.seoryon.com ist ein eigenes Produkt – mit eigenem Konto, eigener Datenverarbeitung und eigenen Datenschutzbedingungen. Ein Konto dort anzulegen ist völlig freiwillig und für die Nutzung von Inspect nie erforderlich.",

      pp_s4_title: "Deine Daten & Kontakt",
      pp_s4_p: "Da Inspect nichts auf unseren Servern speichert, gibt es keine personenbezogenen Daten von dir, die wir aufbewahren, exportieren oder löschen könnten. Wenn du Fragen zum Datenschutz hast – oder etwas geklärt haben möchtest –, melde dich, wir helfen gern.",
      pp_s4_contact_label: "Kontakt:",

      pp_s5_title: "Änderungen an dieser Erklärung",
      pp_s5_p: "Sollte sich hier etwas ändern, aktualisieren wir diese Seite und das Datum „Zuletzt aktualisiert“ oben. Da diese URL zugleich unsere Datenschutzerklärung im Chrome Web Store ist, halten wir sie aktuell und korrekt.",

      pp_footer_note: "Inspect läuft vollständig in deinem Browser. Von SEOryon – deiner Engine für organisches Wachstum.",
    },

    fr: {
      pp_meta_title: "Politique de confidentialité — Inspect par SEOryon",
      pp_meta_desc: "Comment l'extension de navigateur gratuite Inspect et le site inspect.seoryon.com traitent vos données. En bref : tout se passe en local dans votre navigateur — nous ne déposons aucun cookie de suivi et n'utilisons aucun outil d'analyse.",
      pp_back: "← Retour à Inspect",
      pp_back_short: "Inspect",

      pp_h1: "Politique de confidentialité",
      pp_updated: "Dernière mise à jour : 26 juin 2026",
      pp_intro: "Cette politique couvre à la fois l'extension de navigateur Inspect et ce site (inspect.seoryon.com), tous deux édités par SEOryon. En bref : Inspect fonctionne entièrement dans votre navigateur, et nous ne vous suivons pas.",

      pp_s1_title: "L'extension Inspect",
      pp_s1_lead: "Inspect fonctionne entièrement sur votre appareil, à l'intérieur de votre navigateur.",
      pp_s1_b1: "Elle lit uniquement la page que vous consultez activement, et seulement quand vous l'ouvrez, pour exécuter ses vérifications SEO et GEO en local sur votre appareil.",
      pp_s1_b2: "Elle ne collecte, ne stocke à distance, ne transmet, ne vend ni ne partage aucune donnée personnelle ni donnée de navigation.",
      pp_s1_b3: "Aucun outil d'analyse, aucun compte, aucune connexion, aucun suivi — et l'extension ne dépose aucun cookie.",
      pp_s1_scan: "L'analyse facultative du site entier s'exécute elle aussi entièrement dans votre navigateur — elle récupère les pages, le robots.txt et le sitemap de votre propre site en local pour bâtir l'audit, et n'envoie toujours rien à un serveur.",
      pp_s1_stored_h: "Ce qui est stocké, et où",
      pp_s1_stored_p: "Les seules choses qu'Inspect conserve sont votre préférence de langue et l'historique de vos analyses — enregistrés dans votre propre navigateur (via chrome.storage / localStorage). Cela reste sur votre appareil, nous ne pouvons pas le voir, et vous pouvez l'effacer à tout moment en supprimant l'extension ou en vidant les données de votre navigateur.",
      pp_s1_perm_h: "Autorisations",
      pp_s1_perm_p: "Inspect demande l'accès à la page que vous consultez afin de lire son code HTML et de l'auditer. Elle n'utilise cet accès que pour réaliser l'audit que vous avez demandé — rien d'autre.",
      pp_s1_net_h: "Requêtes réseau",
      pp_s1_net_p: "Pour vérifier des éléments comme les liens cassés ou les fichiers destinés aux robots IA (robots.txt et llms.txt), Inspect peut interroger des URL appartenant à la page ou au site que vous inspectez, directement depuis votre navigateur — le même type de requêtes que votre navigateur effectue déjà. Elles vont vers les sites que vous inspectez, pas vers SEOryon, et nous n'en recevons jamais les résultats.",

      pp_s2_title: "Ce site (inspect.seoryon.com)",
      pp_s2_lead: "Il s'agit d'un site vitrine statique, hébergé sur Vercel.",
      pp_s2_b1: "Nous ne déposons aucun cookie de suivi et n'utilisons aucun outil d'analyse sur ce site — pas de Google Analytics, pas de pixels de suivi ou publicitaires, pas de cookies marketing, pas d'empreinte numérique (fingerprinting).",
      pp_s2_b2: "Votre choix de langue est enregistré en local dans votre navigateur (localStorage) pour que le site s'en souvienne d'une visite à l'autre. Cette préférence ne quitte jamais votre appareil.",
      pp_s2_b3: "Comme tout hébergeur, notre prestataire (Vercel) peut conserver des journaux serveur standards et de courte durée — adresse IP, heure de la requête, type de navigateur — pour servir le site et le sécuriser. Nous ne les utilisons pas pour vous suivre, vous profiler ou vous identifier.",
      pp_s2_b4: "Les liens vers app.seoryon.com et seoryon.com mènent aux produits principaux de SEOryon, qui disposent de leurs propres conditions de confidentialité.",

      pp_s3_title: "Si vous créez un compte SEOryon",
      pp_s3_p: "Cette page ne couvre qu'Inspect et ce site. La plateforme payante SEOryon, sur app.seoryon.com, est un produit distinct, avec son propre compte, son propre traitement des données et ses propres conditions de confidentialité. Y créer un compte est entièrement facultatif et jamais nécessaire pour utiliser Inspect.",

      pp_s4_title: "Vos données & contact",
      pp_s4_p: "Comme Inspect ne stocke rien sur nos serveurs, nous ne détenons aucune donnée personnelle vous concernant à conserver, exporter ou supprimer. Pour toute question sur la confidentialité — ou tout point à clarifier —, écrivez-nous, nous serons ravis de vous aider.",
      pp_s4_contact_label: "Contact :",

      pp_s5_title: "Modifications de cette politique",
      pp_s5_p: "Si quelque chose change ici, nous mettrons à jour cette page et la date de « dernière mise à jour » ci-dessus. Comme cette URL sert aussi de politique de confidentialité sur le Chrome Web Store, nous la maintenons à jour et exacte.",

      pp_footer_note: "Inspect fonctionne entièrement dans votre navigateur. Conçu par SEOryon — votre moteur de croissance organique.",
    },
  };

  const SUPPORTED = ["en", "de", "fr"];
  const STORAGE_KEY = "inspect_lang";

  const pickInitialLang = () => {
    try {
      const q = new URLSearchParams(window.location.search).get("lang");
      if (q && SUPPORTED.includes(q.toLowerCase())) return q.toLowerCase();
    } catch (_) { /* ignore */ }
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (_) { /* localStorage may be blocked */ }
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : "en";
  };

  const apply = (lang) => {
    const dict = I18N[lang] || I18N.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });

    if (dict.pp_meta_title) document.title = dict.pp_meta_title;
    const md = document.querySelector('meta[name="description"]');
    if (md && dict.pp_meta_desc) md.setAttribute("content", dict.pp_meta_desc);
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* ignore */ }
  };

  // Contact link — single source of truth (CONTACT_EMAIL).
  document.querySelectorAll(".js-contact").forEach((el) => {
    el.textContent = CONTACT_EMAIL;
    el.setAttribute("href", "mailto:" + CONTACT_EMAIL);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.getAttribute("data-lang")));
  });

  apply(pickInitialLang());
})();
