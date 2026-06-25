/* ============================================================
   Inspect landing — client-side i18n + UI wiring.
   100% static: no fetch, no API, no URL scanning. The page
   sells the Chrome extension; it does not run an audit.

   Languages: EN (default, source) · DE · FR.
   NOTE: DE and FR strings are AI-translated and PENDING NATIVE
   REVIEW. Brand/product names (SEOryon, Inspect, ChatGPT, etc.)
   are intentionally left untranslated.
   ============================================================ */
(() => {
  "use strict";

  const I18N = {
    en: {
      meta_title: "Inspect — Free SEO inspector for Chrome · SEOryon",
      meta_desc: "Inspect any page's SEO in one click. A free Chrome extension that audits technical, meta, content, and link signals — locally, no signup. Built by SEOryon.",

      nav_how: "How it works",
      nav_faq: "FAQ",
      cta_add: "Add to Chrome — free",

      hero_pill: "Free forever · Runs locally · No signup",
      hero_h1: 'Inspect any page’s SEO <span class="brand-text">in one click</span>.',
      hero_sub: "Inspect is a free Chrome extension that opens a side panel on any page and audits 12 SEO signals across technical, meta, content, and links — instantly, in your browser. No signup, and nothing leaves your tab.",
      cta_how: "See how it works →",
      hero_micro: "Works on any page you’re viewing · Chrome & Edge · Free forever — the install is the whole product.",

      shot_hero_alt: "Inspect side panel auditing a page",
      shot_hero_ph: "Screenshot placeholder — Inspect side panel · drop assets/panel-hero.png",

      tab1_name: "Technical", tab1_a1: "HTTPS & status code", tab1_a2: "Indexability & robots", tab1_a3: "Canonical URL",
      tab2_name: "Meta", tab2_a1: "Title tag", tab2_a2: "Meta description", tab2_a3: "Open Graph & social",
      tab3_name: "Content", tab3_a1: "Heading outline", tab3_a2: "Image alt text", tab3_a3: "Word count",
      tab4_name: "Links", tab4_a1: "Internal links", tab4_a2: "External & nofollow", tab4_a3: "Broken links",

      chip1_title: "No signup required",
      chip1_sub: "Install and start inspecting in one click",
      chip2_title: "100% local",
      chip2_sub: "Audits run in your browser — nothing is sent to a server",

      feat_h2: "Everything you need to inspect, in one panel",
      feat_sub: "Four tabs. Twelve checks. Each one color-coded pass, warn, or fail — with the fix spelled out.",

      feat1_h3: "Catch the issues that block indexing",
      feat1_p: "See status codes, redirects, HTTPS, canonical tags, and meta-robots at a glance — the signals that decide whether a page can rank at all.",
      feat1_l1: "HTTP status & redirect chains",
      feat1_l2: "Canonical & meta-robots / X-Robots-Tag",
      feat1_l3: "HTTPS, viewport & charset",
      feat1_alt: "Inspect Technical tab",
      feat1_ph: "Screenshot placeholder · drop assets/tab-technical.png",

      feat2_h3: "See exactly what Google and social see",
      feat2_p: "Title, meta description, and Open Graph / Twitter cards — with live character counts and warnings when they’re too long, too short, or missing.",
      feat2_l1: "Title & description length checks",
      feat2_l2: "Open Graph & Twitter card preview",
      feat2_l3: "Duplicate & missing-tag flags",
      feat2_alt: "Inspect Meta tab",
      feat2_ph: "Screenshot placeholder · drop assets/tab-meta.png",

      feat3_h3: "Check structure the way crawlers read it",
      feat3_p: "A full H1–H6 outline, image alt-text coverage, and word count — so you can spot thin content and broken hierarchy before they cost you rankings.",
      feat3_l1: "H1–H6 heading outline",
      feat3_l2: "Image alt-text coverage",
      feat3_l3: "Word count & thin-content flag",
      feat3_alt: "Inspect Content tab",
      feat3_ph: "Screenshot placeholder · drop assets/tab-content.png",

      feat4_h3: "Map every link on the page",
      feat4_p: "Internal versus external, nofollow versus followed, and a live broken-link check — with anchor text — so nothing leaks authority or 404s in silence.",
      feat4_l1: "Internal vs external split",
      feat4_l2: "Nofollow & anchor text",
      feat4_l3: "Broken-link detection",
      feat4_alt: "Inspect Links tab",
      feat4_ph: "Screenshot placeholder · drop assets/tab-links.png",

      free_kicker: "Why is it free?",
      free_body: "Because a clean page is the best ad for what SEOryon does next. Inspect shows you what’s wrong on one page; SEOryon fixes it across your whole site. No catch, no credit card, no account.",

      how_h2: "How it works",
      how1_h3: "Install the extension",
      how1_p: "Add Inspect to Chrome in one click. No account, no onboarding, no setup.",
      how2_h3: "Open any page",
      how2_p: "Click the Inspect icon to open the side panel on whatever page you’re viewing.",
      how3_h3: "Read the audit",
      how3_p: "Twelve checks across four tabs, color-coded pass / warn / fail, each with the fix spelled out.",

      uc_h2: "Built for the way you work",
      uc1_tag: "Agencies", uc1_h3: "Audit live on the call",
      uc1_p: "Open a prospect’s site on a sales call and surface quick wins in seconds — no tooling setup, no logins.",
      uc2_tag: "In-house marketers", uc2_h3: "Sanity-check before you ship",
      uc2_p: "Catch missing meta, broken links, and bad canonicals on every page before it goes live.",
      uc3_tag: "Developers", uc3_h3: "Debug without leaving the tab",
      uc3_p: "Verify status codes, canonicals, and structured signals right where you’re already working.",

      faq_h2: "Questions, answered",
      faq1_q: "Is it really free?",
      faq1_a: "Yes — Inspect is free forever. No trial timer, no credit card, no account. It’s built by SEOryon as a genuinely useful front door to our paid platform.",
      faq2_q: "Does my data leave my browser?",
      faq2_a: "No. Inspect reads the page you’re already viewing and runs every check locally in your browser. Nothing is uploaded to a server.",
      faq3_q: "Which browsers are supported?",
      faq3_a: "Chrome and any Chromium browser — Edge, Brave, Arc, and Opera. A Firefox build is on the roadmap.",
      faq4_q: "How is it different from SEOryon?",
      faq4_a: "Inspect audits one page, on demand, for free. SEOryon monitors your whole site continuously, tracks where you’re cited across AI search, and writes the content that gets you ranked.",

      up_h2: 'One page is the demo. <span class="brand-text">Your whole site is the product.</span>',
      up_p: "Inspect audits the page in front of you. SEOryon audits every page on your site continuously, tracks where you show up across ChatGPT, Perplexity, Gemini, and Google AI — then writes the articles that get you cited.",
      up_cta: "Start 30-day free trial →",
      up_micro: "3 published articles · 1 in-depth LLM audit · Latest models · Cancel in two clicks.",
      up_s1: "ChatGPT mentions secured for clients",
      up_s2: "Ranking articles created",
      up_s3: "Avg organic growth in 6 months",

      footer_note: "Inspect runs entirely in your browser. Built by SEOryon — your organic growth engine.",
    },

    /* ---- DE · AI-translated, PENDING NATIVE REVIEW ---- */
    de: {
      meta_title: "Inspect — Kostenloser SEO-Inspektor für Chrome · SEOryon",
      meta_desc: "Prüfe die SEO jeder Seite mit einem Klick. Eine kostenlose Chrome-Erweiterung, die technische, Meta-, Inhalts- und Link-Signale auditiert — lokal, ohne Anmeldung. Von SEOryon.",

      nav_how: "So funktioniert’s",
      nav_faq: "FAQ",
      cta_add: "Zu Chrome hinzufügen — gratis",

      hero_pill: "Für immer gratis · Läuft lokal · Keine Anmeldung",
      hero_h1: 'Prüfe die SEO jeder Seite <span class="brand-text">mit einem Klick</span>.',
      hero_sub: "Inspect ist eine kostenlose Chrome-Erweiterung, die auf jeder Seite ein Seitenpanel öffnet und 12 SEO-Signale über Technik, Meta, Inhalt und Links auditiert — sofort, in deinem Browser. Keine Anmeldung, und nichts verlässt deinen Tab.",
      cta_how: "So funktioniert’s ansehen →",
      hero_micro: "Funktioniert auf jeder geöffneten Seite · Chrome & Edge · Für immer gratis — die Installation ist das ganze Produkt.",

      shot_hero_alt: "Inspect-Seitenpanel beim Auditieren einer Seite",
      shot_hero_ph: "Screenshot-Platzhalter — Inspect-Seitenpanel · assets/panel-hero.png ablegen",

      tab1_name: "Technik", tab1_a1: "HTTPS & Statuscode", tab1_a2: "Indexierbarkeit & Robots", tab1_a3: "Canonical-URL",
      tab2_name: "Meta", tab2_a1: "Title-Tag", tab2_a2: "Meta-Beschreibung", tab2_a3: "Open Graph & Social",
      tab3_name: "Inhalt", tab3_a1: "Überschriften-Gliederung", tab3_a2: "Bild-Alt-Text", tab3_a3: "Wortanzahl",
      tab4_name: "Links", tab4_a1: "Interne Links", tab4_a2: "Extern & nofollow", tab4_a3: "Defekte Links",

      chip1_title: "Keine Anmeldung nötig",
      chip1_sub: "Installieren und mit einem Klick prüfen",
      chip2_title: "100% lokal",
      chip2_sub: "Audits laufen im Browser — nichts wird an einen Server gesendet",

      feat_h2: "Alles, was du brauchst, in einem Panel",
      feat_sub: "Vier Tabs. Zwölf Prüfungen. Jede farbcodiert als bestanden, Warnung oder Fehler — mit ausformulierter Lösung.",

      feat1_h3: "Erkenne die Probleme, die die Indexierung blockieren",
      feat1_p: "Sieh Statuscodes, Weiterleitungen, HTTPS, Canonical-Tags und Meta-Robots auf einen Blick — die Signale, die entscheiden, ob eine Seite überhaupt ranken kann.",
      feat1_l1: "HTTP-Status & Weiterleitungsketten",
      feat1_l2: "Canonical & Meta-Robots / X-Robots-Tag",
      feat1_l3: "HTTPS, Viewport & Charset",
      feat1_alt: "Inspect-Tab „Technik“",
      feat1_ph: "Screenshot-Platzhalter · assets/tab-technical.png ablegen",

      feat2_h3: "Sieh genau, was Google und Social sehen",
      feat2_p: "Title, Meta-Beschreibung und Open-Graph- / Twitter-Cards — mit Live-Zeichenzählung und Warnungen, wenn sie zu lang, zu kurz oder nicht vorhanden sind.",
      feat2_l1: "Längenprüfung für Title & Beschreibung",
      feat2_l2: "Vorschau von Open Graph & Twitter-Card",
      feat2_l3: "Markierung von Duplikaten & fehlenden Tags",
      feat2_alt: "Inspect-Tab „Meta“",
      feat2_ph: "Screenshot-Platzhalter · assets/tab-meta.png ablegen",

      feat3_h3: "Prüfe die Struktur so, wie Crawler sie lesen",
      feat3_p: "Eine vollständige H1–H6-Gliederung, Abdeckung der Bild-Alt-Texte und Wortanzahl — damit du dünne Inhalte und kaputte Hierarchien erkennst, bevor sie Rankings kosten.",
      feat3_l1: "H1–H6-Überschriften-Gliederung",
      feat3_l2: "Abdeckung der Bild-Alt-Texte",
      feat3_l3: "Wortanzahl & Hinweis auf dünne Inhalte",
      feat3_alt: "Inspect-Tab „Inhalt“",
      feat3_ph: "Screenshot-Platzhalter · assets/tab-content.png ablegen",

      feat4_h3: "Erfasse jeden Link auf der Seite",
      feat4_p: "Intern gegen extern, nofollow gegen followed und eine Live-Prüfung auf defekte Links — mit Ankertext — damit nichts unbemerkt Autorität verliert oder 404 wird.",
      feat4_l1: "Aufteilung intern vs. extern",
      feat4_l2: "Nofollow & Ankertext",
      feat4_l3: "Erkennung defekter Links",
      feat4_alt: "Inspect-Tab „Links“",
      feat4_ph: "Screenshot-Platzhalter · assets/tab-links.png ablegen",

      free_kicker: "Warum ist es kostenlos?",
      free_body: "Weil eine saubere Seite die beste Werbung dafür ist, was SEOryon als Nächstes tut. Inspect zeigt dir, was auf einer Seite falsch ist; SEOryon behebt es auf deiner gesamten Website. Kein Haken, keine Kreditkarte, kein Konto.",

      how_h2: "So funktioniert’s",
      how1_h3: "Erweiterung installieren",
      how1_p: "Füge Inspect mit einem Klick zu Chrome hinzu. Kein Konto, kein Onboarding, kein Setup.",
      how2_h3: "Beliebige Seite öffnen",
      how2_p: "Klicke auf das Inspect-Symbol, um das Seitenpanel auf der gerade geöffneten Seite zu öffnen.",
      how3_h3: "Audit lesen",
      how3_p: "Zwölf Prüfungen über vier Tabs, farbcodiert bestanden / Warnung / Fehler, jede mit ausformulierter Lösung.",

      uc_h2: "Gebaut für deine Arbeitsweise",
      uc1_tag: "Agenturen", uc1_h3: "Live im Gespräch auditieren",
      uc1_p: "Öffne die Seite eines Interessenten im Verkaufsgespräch und finde Quick Wins in Sekunden — kein Tool-Setup, keine Logins.",
      uc2_tag: "In-House-Marketer", uc2_h3: "Vor dem Launch absichern",
      uc2_p: "Finde fehlende Metas, defekte Links und falsche Canonicals auf jeder Seite, bevor sie live geht.",
      uc3_tag: "Entwickler", uc3_h3: "Debuggen ohne den Tab zu verlassen",
      uc3_p: "Prüfe Statuscodes, Canonicals und strukturierte Signale genau dort, wo du ohnehin arbeitest.",

      faq_h2: "Fragen, beantwortet",
      faq1_q: "Ist es wirklich kostenlos?",
      faq1_a: "Ja — Inspect ist für immer gratis. Kein Trial-Timer, keine Kreditkarte, kein Konto. Es wird von SEOryon als wirklich nützliche Eingangstür zu unserer kostenpflichtigen Plattform gebaut.",
      faq2_q: "Verlassen meine Daten den Browser?",
      faq2_a: "Nein. Inspect liest die Seite, die du ohnehin ansiehst, und führt jede Prüfung lokal in deinem Browser aus. Nichts wird auf einen Server hochgeladen.",
      faq3_q: "Welche Browser werden unterstützt?",
      faq3_a: "Chrome und jeder Chromium-Browser — Edge, Brave, Arc und Opera. Eine Firefox-Version ist in Planung.",
      faq4_q: "Wie unterscheidet es sich von SEOryon?",
      faq4_a: "Inspect auditiert eine Seite, auf Abruf, kostenlos. SEOryon überwacht deine gesamte Website laufend, verfolgt, wo du in der KI-Suche zitiert wirst, und schreibt die Inhalte, die dich ranken lassen.",

      up_h2: 'Eine Seite ist die Demo. <span class="brand-text">Deine ganze Website ist das Produkt.</span>',
      up_p: "Inspect auditiert die Seite vor dir. SEOryon auditiert jede Seite deiner Website laufend, verfolgt, wo du in ChatGPT, Perplexity, Gemini und Google AI auftauchst — und schreibt dann die Artikel, die dich zitiert werden lassen.",
      up_cta: "30-Tage gratis testen →",
      up_micro: "3 veröffentlichte Artikel · 1 ausführliches LLM-Audit · Neueste Modelle · Mit zwei Klicks kündbar.",
      up_s1: "Für Kunden gesicherte ChatGPT-Erwähnungen",
      up_s2: "Erstellte rankende Artikel",
      up_s3: "Durchschn. organisches Wachstum in 6 Monaten",

      footer_note: "Inspect läuft vollständig in deinem Browser. Von SEOryon — deiner Engine für organisches Wachstum.",
    },

    /* ---- FR · AI-translated, PENDING NATIVE REVIEW ---- */
    fr: {
      meta_title: "Inspect — Inspecteur SEO gratuit pour Chrome · SEOryon",
      meta_desc: "Analysez le SEO de n’importe quelle page en un clic. Une extension Chrome gratuite qui audite les signaux techniques, meta, contenu et liens — en local, sans inscription. Par SEOryon.",

      nav_how: "Comment ça marche",
      nav_faq: "FAQ",
      cta_add: "Ajouter à Chrome — gratuit",

      hero_pill: "Gratuit pour toujours · Tourne en local · Sans inscription",
      hero_h1: 'Analysez le SEO de n’importe quelle page <span class="brand-text">en un clic</span>.',
      hero_sub: "Inspect est une extension Chrome gratuite qui ouvre un panneau latéral sur n’importe quelle page et audite 12 signaux SEO — technique, meta, contenu et liens — instantanément, dans votre navigateur. Sans inscription, et rien ne quitte votre onglet.",
      cta_how: "Voir comment ça marche →",
      hero_micro: "Fonctionne sur toute page ouverte · Chrome & Edge · Gratuit pour toujours — l’installation est tout le produit.",

      shot_hero_alt: "Panneau latéral Inspect auditant une page",
      shot_hero_ph: "Espace réservé à la capture — panneau Inspect · déposer assets/panel-hero.png",

      tab1_name: "Technique", tab1_a1: "HTTPS & code de statut", tab1_a2: "Indexabilité & robots", tab1_a3: "URL canonique",
      tab2_name: "Meta", tab2_a1: "Balise title", tab2_a2: "Méta-description", tab2_a3: "Open Graph & social",
      tab3_name: "Contenu", tab3_a1: "Plan des titres", tab3_a2: "Texte alt des images", tab3_a3: "Nombre de mots",
      tab4_name: "Liens", tab4_a1: "Liens internes", tab4_a2: "Externes & nofollow", tab4_a3: "Liens cassés",

      chip1_title: "Aucune inscription",
      chip1_sub: "Installez et commencez à analyser en un clic",
      chip2_title: "100% local",
      chip2_sub: "Les audits tournent dans votre navigateur — rien n’est envoyé à un serveur",

      feat_h2: "Tout pour inspecter, dans un seul panneau",
      feat_sub: "Quatre onglets. Douze vérifications. Chacune codée par couleur — réussie, avertissement ou échec — avec la correction détaillée.",

      feat1_h3: "Repérez ce qui bloque l’indexation",
      feat1_p: "Voyez d’un coup d’œil les codes de statut, redirections, HTTPS, balises canoniques et meta-robots — les signaux qui décident si une page peut se classer.",
      feat1_l1: "Statut HTTP & chaînes de redirection",
      feat1_l2: "Canonique & meta-robots / X-Robots-Tag",
      feat1_l3: "HTTPS, viewport & charset",
      feat1_alt: "Onglet Technique d’Inspect",
      feat1_ph: "Espace réservé · déposer assets/tab-technical.png",

      feat2_h3: "Voyez exactement ce que voient Google et les réseaux",
      feat2_p: "Title, méta-description et cartes Open Graph / Twitter — avec comptage de caractères en direct et alertes si c’est trop long, trop court ou absent.",
      feat2_l1: "Contrôle de longueur du title & de la description",
      feat2_l2: "Aperçu des cartes Open Graph & Twitter",
      feat2_l3: "Signalement des balises en double & manquantes",
      feat2_alt: "Onglet Meta d’Inspect",
      feat2_ph: "Espace réservé · déposer assets/tab-meta.png",

      feat3_h3: "Vérifiez la structure comme la lisent les robots",
      feat3_p: "Un plan complet H1–H6, la couverture des textes alt et le nombre de mots — pour repérer le contenu maigre et la hiérarchie cassée avant qu’ils ne coûtent des positions.",
      feat3_l1: "Plan des titres H1–H6",
      feat3_l2: "Couverture des textes alt d’images",
      feat3_l3: "Nombre de mots & alerte contenu maigre",
      feat3_alt: "Onglet Contenu d’Inspect",
      feat3_ph: "Espace réservé · déposer assets/tab-content.png",

      feat4_h3: "Cartographiez chaque lien de la page",
      feat4_p: "Interne contre externe, nofollow contre suivi, et une vérification en direct des liens cassés — avec le texte d’ancre — pour que rien ne fuie d’autorité ni ne tombe en 404 en silence.",
      feat4_l1: "Répartition interne vs externe",
      feat4_l2: "Nofollow & texte d’ancre",
      feat4_l3: "Détection des liens cassés",
      feat4_alt: "Onglet Liens d’Inspect",
      feat4_ph: "Espace réservé · déposer assets/tab-links.png",

      free_kicker: "Pourquoi est-ce gratuit ?",
      free_body: "Parce qu’une page propre est la meilleure publicité pour ce que SEOryon fait ensuite. Inspect vous montre ce qui ne va pas sur une page ; SEOryon le corrige sur tout votre site. Sans piège, sans carte bancaire, sans compte.",

      how_h2: "Comment ça marche",
      how1_h3: "Installez l’extension",
      how1_p: "Ajoutez Inspect à Chrome en un clic. Sans compte, sans onboarding, sans configuration.",
      how2_h3: "Ouvrez n’importe quelle page",
      how2_p: "Cliquez sur l’icône Inspect pour ouvrir le panneau latéral sur la page que vous consultez.",
      how3_h3: "Lisez l’audit",
      how3_p: "Douze vérifications sur quatre onglets, codées réussite / avertissement / échec, chacune avec la correction détaillée.",

      uc_h2: "Conçu pour votre façon de travailler",
      uc1_tag: "Agences", uc1_h3: "Auditez en direct pendant l’appel",
      uc1_p: "Ouvrez le site d’un prospect en rendez-vous commercial et faites ressortir des gains rapides en quelques secondes — sans installation d’outils, sans connexion.",
      uc2_tag: "Marketeurs internes", uc2_h3: "Vérifiez avant de publier",
      uc2_p: "Repérez les metas manquantes, les liens cassés et les mauvaises canoniques sur chaque page avant la mise en ligne.",
      uc3_tag: "Développeurs", uc3_h3: "Déboguez sans quitter l’onglet",
      uc3_p: "Vérifiez les codes de statut, les canoniques et les signaux structurés là où vous travaillez déjà.",

      faq_h2: "Vos questions, nos réponses",
      faq1_q: "Est-ce vraiment gratuit ?",
      faq1_a: "Oui — Inspect est gratuit pour toujours. Pas de minuteur d’essai, pas de carte bancaire, pas de compte. C’est conçu par SEOryon comme une véritable porte d’entrée utile vers notre plateforme payante.",
      faq2_q: "Mes données quittent-elles mon navigateur ?",
      faq2_a: "Non. Inspect lit la page que vous consultez déjà et exécute chaque vérification en local dans votre navigateur. Rien n’est envoyé à un serveur.",
      faq3_q: "Quels navigateurs sont pris en charge ?",
      faq3_a: "Chrome et tout navigateur Chromium — Edge, Brave, Arc et Opera. Une version Firefox est prévue.",
      faq4_q: "En quoi est-ce différent de SEOryon ?",
      faq4_a: "Inspect audite une page, à la demande, gratuitement. SEOryon surveille tout votre site en continu, suit où vous êtes cité dans la recherche IA, et écrit le contenu qui vous fait classer.",

      up_h2: 'Une page, c’est la démo. <span class="brand-text">Tout votre site, c’est le produit.</span>',
      up_p: "Inspect audite la page devant vous. SEOryon audite chaque page de votre site en continu, suit où vous apparaissez dans ChatGPT, Perplexity, Gemini et Google AI — puis écrit les articles qui vous font citer.",
      up_cta: "Démarrer l’essai gratuit de 30 jours →",
      up_micro: "3 articles publiés · 1 audit LLM approfondi · Modèles les plus récents · Annulable en deux clics.",
      up_s1: "Mentions ChatGPT obtenues pour des clients",
      up_s2: "Articles classés créés",
      up_s3: "Croissance organique moyenne en 6 mois",

      footer_note: "Inspect tourne entièrement dans votre navigateur. Conçu par SEOryon — votre moteur de croissance organique.",
    },
  };

  const SUPPORTED = ["en", "de", "fr"];
  const STORAGE_KEY = "inspect_lang";

  const pickInitialLang = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (_) { /* localStorage may be blocked */ }
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : "en";
  };

  const apply = (lang) => {
    const dict = I18N[lang] || I18N.en;

    // textContent
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    // innerHTML (strings that contain a <span class="brand-text">)
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-html")];
      if (v != null) el.innerHTML = v;
    });
    // alt attributes on screenshot slots
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-alt")];
      if (v != null) el.setAttribute("alt", v);
    });

    // <head> + lang attribute
    if (dict.meta_title) document.title = dict.meta_title;
    const md = document.querySelector('meta[name="description"]');
    if (md && dict.meta_desc) md.setAttribute("content", dict.meta_desc);
    document.documentElement.setAttribute("lang", lang);

    // switcher active state
    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* ignore */ }
  };

  // Language switcher
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.getAttribute("data-lang")));
  });

  // Screenshot fallback: if a real PNG isn't present yet, swap the
  // <img> for its labeled placeholder sibling (no broken-image icon).
  document.querySelectorAll("img.shot").forEach((img) => {
    const showPlaceholder = () => {
      img.style.display = "none";
      const ph = img.parentElement && img.parentElement.querySelector(".shot-ph");
      if (ph) ph.hidden = false;
    };
    img.addEventListener("error", showPlaceholder);
    // Catch images that already failed before this script ran.
    if (img.complete && img.naturalWidth === 0) showPlaceholder();
  });

  // Chrome CTA — placeholder until the Web Store listing is live.
  document.querySelectorAll(".js-chrome").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el.getAttribute("href") === "#") {
        e.preventDefault();
        // TODO: Chrome Web Store URL — once published, set the href on
        // every .js-chrome link and remove this guard.
      }
    });
  });

  apply(pickInitialLang());
})();
