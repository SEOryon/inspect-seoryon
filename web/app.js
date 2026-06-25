/* ============================================================
   Inspect landing — client-side i18n + UI wiring + scroll motion.
   100% static: no fetch, no API, no URL scanning. The page sells
   the Chrome extension; it does not run an audit.

   Languages: EN (default, source) · DE · FR.
   NOTE: DE and FR strings are AI-translated and PENDING NATIVE
   REVIEW. Brand/product names (SEOryon, Inspect, ChatGPT, Oryon,
   Content Studio, etc.) are intentionally left untranslated.
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
      hero_sub: "A free Chrome extension that audits 12 SEO signals on any page — technical, meta, content, and links — right in your browser. No signup, nothing leaves your tab.",
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

      feat1_h3: "Catch what blocks indexing",
      feat1_p: "Status codes, redirects, HTTPS, canonicals, and meta-robots at a glance — the signals that decide whether a page can rank at all.",
      feat1_l1: "HTTP status & redirect chains",
      feat1_l2: "Canonical & meta-robots / X-Robots-Tag",
      feat1_l3: "HTTPS, viewport & charset",
      feat1_alt: "Inspect Technical tab",
      feat1_ph: "Screenshot placeholder · drop assets/tab-technical.png",

      feat2_h3: "See what Google and social see",
      feat2_p: "Title, description, and Open Graph / Twitter cards — with live character counts and warnings the moment they’re off.",
      feat2_l1: "Title & description length checks",
      feat2_l2: "Open Graph & Twitter card preview",
      feat2_l3: "Duplicate & missing-tag flags",
      feat2_alt: "Inspect Meta tab",
      feat2_ph: "Screenshot placeholder · drop assets/tab-meta.png",

      feat3_h3: "Read structure like a crawler",
      feat3_p: "A full H1–H6 outline, alt-text coverage, and word count — so you catch thin content and broken hierarchy early.",
      feat3_l1: "H1–H6 heading outline",
      feat3_l2: "Image alt-text coverage",
      feat3_l3: "Word count & thin-content flag",
      feat3_alt: "Inspect Content tab",
      feat3_ph: "Screenshot placeholder · drop assets/tab-content.png",

      feat4_h3: "Map every link on the page",
      feat4_p: "Internal vs external, nofollow vs followed, and a live broken-link check with anchor text.",
      feat4_l1: "Internal vs external split",
      feat4_l2: "Nofollow & anchor text",
      feat4_l3: "Broken-link detection",
      feat4_alt: "Inspect Links tab",
      feat4_ph: "Screenshot placeholder · drop assets/tab-links.png",

      free_kicker: "Why is it free?",
      free_body: "Because a clean page is the best ad for what SEOryon does next. Inspect shows you what’s wrong on one page — and exactly how to fix it. SEOryon does the same across your whole site, continuously. No catch, no credit card, no account.",

      how_h2: "How it works",
      how1_h3: "Install the extension",
      how1_p: "One click from the Chrome Web Store. No account, no setup.",
      how2_h3: "Open any page",
      how2_p: "Click the Inspect icon to open the side panel on any tab.",
      how3_h3: "Read the audit",
      how3_p: "Twelve checks, color-coded pass / warn / fail — each with the fix.",

      uc_h2: "Built for the way you work",
      uc1_tag: "Agencies", uc1_h3: "Audit live on the call",
      uc1_p: "Open a prospect’s site mid-call and surface quick wins in seconds — no setup, no logins.",
      uc2_tag: "In-house marketers", uc2_h3: "Sanity-check before you ship",
      uc2_p: "Catch missing meta, broken links, and bad canonicals before a page goes live.",
      uc3_tag: "Developers", uc3_h3: "Debug without leaving the tab",
      uc3_p: "Verify status codes, canonicals, and structured signals right where you work.",

      cv_a_eyebrow: "MEET ORYON",
      cv_a_h: "One agent. Your entire SEO landscape, handled.",
      cv_a_sub: "Inspect reads one page. Oryon watches your whole search landscape — competitors, live SERPs, trends, and more — so you never guess what to write again.",

      hub_n1: "Live SERPs", hub_n2: "People Also Ask", hub_n3: "Competitor gaps", hub_n4: "Keyword difficulty",
      hub_n5: "Trends", hub_n6: "Search Console", hub_n7: "Audience questions",

      cv_b1_h: "It decides what to write",
      cv_b1_p: "Real search data in, ranked topic ideas out — each with the reasoning.",
      cv_b2_h: "You set the autonomy",
      cv_b2_p: "<strong>Semi</strong> proposes, you approve in a click. <strong>Full autopilot</strong> runs it end to end.",
      cv_b3_h: "Content Studio",
      cv_b3_p: "Dictate an idea; Oryon turns it into a real, search-optimized article — your final say.",

      cv_c_h: "Know where your traffic comes from — including AI.",
      cv_c_p: "Oryon tracks where you’re cited across ChatGPT, Perplexity, Gemini, Google AI, and Claude — and which visitors arrive from an LLM versus classic search.",
      cv_c_p1: "AI citation tracking",
      cv_c_p2: "LLM vs. classic source",
      cv_c_p3: "Competitors · backlinks · vitals",

      mon_title: "AI visibility",
      mon_live: "Live",
      mon_note: "Illustrative — sample data, not client results",
      mon_q1: "“best free seo extension”",
      mon_q2: "“how to check meta tags”",
      mon_q3: "“chrome seo audit tool”",
      mon_st_cited: "cited",
      mon_st_top: "top source",

      cv_d_eyebrow: "HOW WE WORK",
      cv_d_h: "Real organic growth. No shortcuts, no tricks.",
      cv_d_p: "No black-hat, no link pools, no spun content — ever. Oryon plays by Google’s rules, because that’s the only growth that lasts.",
      cv_d_c1: "Plays by Google’s rules",
      cv_d_c2: "No link pools, no black-hat",
      cv_d_c3: "Built for durable growth",

      cv_e_h: "Now run it across every page.",
      cv_e_sub: "Start free. Keep full control the whole way.",
      cv_e_cta: "Start your 30-day free trial →",
      cv_e_fine: "Articles written for you · Live LLM citation audit · Latest models · Cancel in two clicks.",
      cv_e_secondary: "Or keep using Inspect free — it’s yours forever.",

      faq_h2: "Questions, answered",
      faq1_q: "Is it really free?",
      faq1_a: "Yes — Inspect is free forever. No trial timer, no credit card, no account. It’s built by SEOryon as a genuinely useful front door to our paid platform.",
      faq2_q: "Does my data leave my browser?",
      faq2_a: "No. Inspect reads the page you’re already viewing and runs every check locally in your browser. Nothing is uploaded to a server.",
      faq3_q: "Which browsers are supported?",
      faq3_a: "Chrome and any Chromium browser — Edge, Brave, Arc, and Opera. A Firefox build is on the roadmap.",
      faq4_q: "How is it different from SEOryon?",
      faq4_a: "Inspect audits one page, on demand, for free. SEOryon monitors your whole site continuously, tracks where you’re cited across AI search, and writes the content that gets you ranked.",

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
      hero_sub: "Eine kostenlose Chrome-Erweiterung, die 12 SEO-Signale auf jeder Seite auditiert — Technik, Meta, Inhalt und Links — direkt in deinem Browser. Keine Anmeldung, nichts verlässt deinen Tab.",
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

      feat1_h3: "Erkenne, was die Indexierung blockiert",
      feat1_p: "Statuscodes, Weiterleitungen, HTTPS, Canonicals und Meta-Robots auf einen Blick — die Signale, die entscheiden, ob eine Seite überhaupt ranken kann.",
      feat1_l1: "HTTP-Status & Weiterleitungsketten",
      feat1_l2: "Canonical & Meta-Robots / X-Robots-Tag",
      feat1_l3: "HTTPS, Viewport & Charset",
      feat1_alt: "Inspect-Tab „Technik“",
      feat1_ph: "Screenshot-Platzhalter · assets/tab-technical.png ablegen",

      feat2_h3: "Sieh, was Google und Social sehen",
      feat2_p: "Title, Beschreibung und Open-Graph- / Twitter-Cards — mit Live-Zeichenzählung und Warnungen, sobald etwas nicht stimmt.",
      feat2_l1: "Längenprüfung für Title & Beschreibung",
      feat2_l2: "Vorschau von Open Graph & Twitter-Card",
      feat2_l3: "Markierung von Duplikaten & fehlenden Tags",
      feat2_alt: "Inspect-Tab „Meta“",
      feat2_ph: "Screenshot-Platzhalter · assets/tab-meta.png ablegen",

      feat3_h3: "Lies die Struktur wie ein Crawler",
      feat3_p: "Eine vollständige H1–H6-Gliederung, Alt-Text-Abdeckung und Wortanzahl — damit du dünne Inhalte und kaputte Hierarchien früh erkennst.",
      feat3_l1: "H1–H6-Überschriften-Gliederung",
      feat3_l2: "Abdeckung der Bild-Alt-Texte",
      feat3_l3: "Wortanzahl & Hinweis auf dünne Inhalte",
      feat3_alt: "Inspect-Tab „Inhalt“",
      feat3_ph: "Screenshot-Platzhalter · assets/tab-content.png ablegen",

      feat4_h3: "Erfasse jeden Link auf der Seite",
      feat4_p: "Intern vs. extern, nofollow vs. followed und eine Live-Prüfung defekter Links mit Ankertext.",
      feat4_l1: "Aufteilung intern vs. extern",
      feat4_l2: "Nofollow & Ankertext",
      feat4_l3: "Erkennung defekter Links",
      feat4_alt: "Inspect-Tab „Links“",
      feat4_ph: "Screenshot-Platzhalter · assets/tab-links.png ablegen",

      free_kicker: "Warum ist es kostenlos?",
      free_body: "Weil eine saubere Seite die beste Werbung dafür ist, was SEOryon als Nächstes tut. Inspect zeigt dir, was auf einer Seite falsch ist — und genau, wie du es behebst. SEOryon macht dasselbe für deine ganze Website, laufend. Kein Haken, keine Kreditkarte, kein Konto.",

      how_h2: "So funktioniert’s",
      how1_h3: "Erweiterung installieren",
      how1_p: "Ein Klick im Chrome Web Store. Kein Konto, kein Setup.",
      how2_h3: "Beliebige Seite öffnen",
      how2_p: "Klicke auf das Inspect-Symbol, um das Seitenpanel in jedem Tab zu öffnen.",
      how3_h3: "Audit lesen",
      how3_p: "Zwölf Prüfungen, farbcodiert bestanden / Warnung / Fehler — jede mit der Lösung.",

      uc_h2: "Gebaut für deine Arbeitsweise",
      uc1_tag: "Agenturen", uc1_h3: "Live im Gespräch auditieren",
      uc1_p: "Öffne die Seite eines Interessenten mitten im Gespräch und finde Quick Wins in Sekunden — kein Setup, keine Logins.",
      uc2_tag: "In-House-Marketer", uc2_h3: "Vor dem Launch absichern",
      uc2_p: "Finde fehlende Metas, defekte Links und falsche Canonicals, bevor eine Seite live geht.",
      uc3_tag: "Entwickler", uc3_h3: "Debuggen ohne den Tab zu verlassen",
      uc3_p: "Prüfe Statuscodes, Canonicals und strukturierte Signale genau dort, wo du arbeitest.",

      cv_a_eyebrow: "DAS IST ORYON",
      cv_a_h: "Ein Agent. Deine gesamte SEO-Landschaft, im Griff.",
      cv_a_sub: "Inspect liest eine Seite. Oryon beobachtet deine ganze Suchlandschaft — Wettbewerber, Live-SERPs, Trends und mehr — damit du nie wieder rätst, worüber du schreiben sollst.",

      hub_n1: "Live-SERPs", hub_n2: "Ähnliche Fragen", hub_n3: "Wettbewerber-Lücken", hub_n4: "Keyword-Schwierigkeit",
      hub_n5: "Trends", hub_n6: "Search Console", hub_n7: "Publikumsfragen",

      cv_b1_h: "Es entscheidet, was zu schreiben ist",
      cv_b1_p: "Echte Suchdaten rein, priorisierte Themenideen raus — jede mit Begründung.",
      cv_b2_h: "Du bestimmst die Autonomie",
      cv_b2_p: "<strong>Semi</strong> schlägt vor, du bestätigst per Klick. <strong>Voll-Autopilot</strong> erledigt alles.",
      cv_b3_h: "Content Studio",
      cv_b3_p: "Diktiere eine Idee; Oryon macht daraus einen echten, suchoptimierten Artikel — dein letztes Wort.",

      cv_c_h: "Wisse, woher dein Traffic kommt — auch aus der KI.",
      cv_c_p: "Oryon verfolgt, wo du in ChatGPT, Perplexity, Gemini, Google AI und Claude zitiert wirst — und welche Besucher aus einem LLM statt der klassischen Suche kommen.",
      cv_c_p1: "KI-Zitations-Tracking",
      cv_c_p2: "LLM vs. klassische Quelle",
      cv_c_p3: "Wettbewerber · Backlinks · Vitalwerte",

      mon_title: "KI-Sichtbarkeit",
      mon_live: "Live",
      mon_note: "Veranschaulichung — Beispieldaten, keine Kundenergebnisse",
      mon_q1: "„beste kostenlose seo-erweiterung“",
      mon_q2: "„meta-tags prüfen“",
      mon_q3: "„chrome seo audit tool“",
      mon_st_cited: "zitiert",
      mon_st_top: "Top-Quelle",

      cv_d_eyebrow: "SO ARBEITEN WIR",
      cv_d_h: "Echtes organisches Wachstum. Keine Abkürzungen, keine Tricks.",
      cv_d_p: "Kein Black-Hat, keine Link-Pools, kein generierter Spam — niemals. Oryon hält sich an Googles Regeln, denn nur dieses Wachstum hält.",
      cv_d_c1: "Hält sich an Googles Regeln",
      cv_d_c2: "Keine Link-Pools, kein Black-Hat",
      cv_d_c3: "Für dauerhaftes Wachstum gebaut",

      cv_e_h: "Jetzt für jede Seite.",
      cv_e_sub: "Kostenlos starten. Volle Kontrolle, durchgehend.",
      cv_e_cta: "30 Tage kostenlos testen →",
      cv_e_fine: "Artikel für dich geschrieben · Live-LLM-Zitations-Audit · Neueste Modelle · In zwei Klicks kündbar.",
      cv_e_secondary: "Oder nutze Inspect weiter kostenlos — für immer deins.",

      faq_h2: "Fragen, beantwortet",
      faq1_q: "Ist es wirklich kostenlos?",
      faq1_a: "Ja — Inspect ist für immer gratis. Kein Trial-Timer, keine Kreditkarte, kein Konto. Es wird von SEOryon als wirklich nützliche Eingangstür zu unserer kostenpflichtigen Plattform gebaut.",
      faq2_q: "Verlassen meine Daten den Browser?",
      faq2_a: "Nein. Inspect liest die Seite, die du ohnehin ansiehst, und führt jede Prüfung lokal in deinem Browser aus. Nichts wird auf einen Server hochgeladen.",
      faq3_q: "Welche Browser werden unterstützt?",
      faq3_a: "Chrome und jeder Chromium-Browser — Edge, Brave, Arc und Opera. Eine Firefox-Version ist in Planung.",
      faq4_q: "Wie unterscheidet es sich von SEOryon?",
      faq4_a: "Inspect auditiert eine Seite, auf Abruf, kostenlos. SEOryon überwacht deine gesamte Website laufend, verfolgt, wo du in der KI-Suche zitiert wirst, und schreibt die Inhalte, die dich ranken lassen.",

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
      hero_sub: "Une extension Chrome gratuite qui audite 12 signaux SEO sur n’importe quelle page — technique, meta, contenu et liens — directement dans votre navigateur. Sans inscription, rien ne quitte votre onglet.",
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
      feat1_p: "Codes de statut, redirections, HTTPS, canoniques et meta-robots d’un coup d’œil — les signaux qui décident si une page peut se classer.",
      feat1_l1: "Statut HTTP & chaînes de redirection",
      feat1_l2: "Canonique & meta-robots / X-Robots-Tag",
      feat1_l3: "HTTPS, viewport & charset",
      feat1_alt: "Onglet Technique d’Inspect",
      feat1_ph: "Espace réservé · déposer assets/tab-technical.png",

      feat2_h3: "Voyez ce que voient Google et les réseaux",
      feat2_p: "Title, description et cartes Open Graph / Twitter — avec comptage de caractères en direct et alertes dès que quelque chose cloche.",
      feat2_l1: "Contrôle de longueur du title & de la description",
      feat2_l2: "Aperçu des cartes Open Graph & Twitter",
      feat2_l3: "Signalement des balises en double & manquantes",
      feat2_alt: "Onglet Meta d’Inspect",
      feat2_ph: "Espace réservé · déposer assets/tab-meta.png",

      feat3_h3: "Lisez la structure comme un robot",
      feat3_p: "Un plan complet H1–H6, la couverture des textes alt et le nombre de mots — pour repérer tôt le contenu maigre et la hiérarchie cassée.",
      feat3_l1: "Plan des titres H1–H6",
      feat3_l2: "Couverture des textes alt d’images",
      feat3_l3: "Nombre de mots & alerte contenu maigre",
      feat3_alt: "Onglet Contenu d’Inspect",
      feat3_ph: "Espace réservé · déposer assets/tab-content.png",

      feat4_h3: "Cartographiez chaque lien de la page",
      feat4_p: "Interne vs externe, nofollow vs suivi, et une vérification en direct des liens cassés avec le texte d’ancre.",
      feat4_l1: "Répartition interne vs externe",
      feat4_l2: "Nofollow & texte d’ancre",
      feat4_l3: "Détection des liens cassés",
      feat4_alt: "Onglet Liens d’Inspect",
      feat4_ph: "Espace réservé · déposer assets/tab-links.png",

      free_kicker: "Pourquoi est-ce gratuit ?",
      free_body: "Parce qu’une page propre est la meilleure publicité pour ce que SEOryon fait ensuite. Inspect vous montre ce qui ne va pas sur une page — et exactement comment le corriger. SEOryon fait de même sur tout votre site, en continu. Sans piège, sans carte bancaire, sans compte.",

      how_h2: "Comment ça marche",
      how1_h3: "Installez l’extension",
      how1_p: "Un clic depuis le Chrome Web Store. Sans compte, sans configuration.",
      how2_h3: "Ouvrez n’importe quelle page",
      how2_p: "Cliquez sur l’icône Inspect pour ouvrir le panneau latéral sur n’importe quel onglet.",
      how3_h3: "Lisez l’audit",
      how3_p: "Douze vérifications, codées réussite / avertissement / échec — chacune avec la correction.",

      uc_h2: "Conçu pour votre façon de travailler",
      uc1_tag: "Agences", uc1_h3: "Auditez en direct pendant l’appel",
      uc1_p: "Ouvrez le site d’un prospect en plein appel et faites ressortir des gains rapides en quelques secondes — sans configuration, sans connexion.",
      uc2_tag: "Marketeurs internes", uc2_h3: "Vérifiez avant de publier",
      uc2_p: "Repérez les metas manquantes, les liens cassés et les mauvaises canoniques avant la mise en ligne d’une page.",
      uc3_tag: "Développeurs", uc3_h3: "Déboguez sans quitter l’onglet",
      uc3_p: "Vérifiez les codes de statut, les canoniques et les signaux structurés là où vous travaillez.",

      cv_a_eyebrow: "VOICI ORYON",
      cv_a_h: "Un agent. Tout votre paysage SEO, pris en main.",
      cv_a_sub: "Inspect lit une page. Oryon surveille tout votre paysage de recherche — concurrents, SERP en direct, tendances et plus — pour que vous ne deviniez plus jamais quoi écrire.",

      hub_n1: "SERP en direct", hub_n2: "Autres questions", hub_n3: "Écarts concurrents", hub_n4: "Difficulté des mots-clés",
      hub_n5: "Tendances", hub_n6: "Search Console", hub_n7: "Questions du public",

      cv_b1_h: "Il décide quoi écrire",
      cv_b1_p: "De vraies données de recherche en entrée, des idées de sujets classées en sortie — chacune avec son raisonnement.",
      cv_b2_h: "Vous réglez l’autonomie",
      cv_b2_p: "Le <strong>semi</strong> propose, vous validez en un clic. Le <strong>pilote complet</strong> fait tout.",
      cv_b3_h: "Content Studio",
      cv_b3_p: "Dictez une idée ; Oryon en fait un véritable article optimisé pour la recherche — votre décision finale.",

      cv_c_h: "Sachez d’où vient votre trafic — y compris de l’IA.",
      cv_c_p: "Oryon suit où vous êtes cité dans ChatGPT, Perplexity, Gemini, Google AI et Claude — et quels visiteurs arrivent d’un LLM plutôt que de la recherche classique.",
      cv_c_p1: "Suivi des citations IA",
      cv_c_p2: "Source LLM vs classique",
      cv_c_p3: "Concurrents · backlinks · indicateurs",

      mon_title: "Visibilité IA",
      mon_live: "En direct",
      mon_note: "Illustration — données d’exemple, pas des résultats clients",
      mon_q1: "« meilleure extension seo gratuite »",
      mon_q2: "« comment vérifier les meta tags »",
      mon_q3: "« outil d’audit seo chrome »",
      mon_st_cited: "cité",
      mon_st_top: "source nº1",

      cv_d_eyebrow: "NOTRE FAÇON DE TRAVAILLER",
      cv_d_h: "Une vraie croissance organique. Aucun raccourci, aucune astuce.",
      cv_d_p: "Pas de black-hat, pas de pools de liens, pas de contenu généré — jamais. Oryon respecte les règles de Google, car c’est la seule croissance qui dure.",
      cv_d_c1: "Respecte les règles de Google",
      cv_d_c2: "Pas de pools de liens, pas de black-hat",
      cv_d_c3: "Conçu pour une croissance durable",

      cv_e_h: "Maintenant, sur chaque page.",
      cv_e_sub: "Commencez gratuitement. Gardez le contrôle total, tout du long.",
      cv_e_cta: "Démarrer l’essai gratuit de 30 jours →",
      cv_e_fine: "Articles rédigés pour vous · Audit de citations LLM en direct · Derniers modèles · Annulation en deux clics.",
      cv_e_secondary: "Ou continuez à utiliser Inspect gratuitement — il est à vous pour toujours.",

      faq_h2: "Vos questions, nos réponses",
      faq1_q: "Est-ce vraiment gratuit ?",
      faq1_a: "Oui — Inspect est gratuit pour toujours. Pas de minuteur d’essai, pas de carte bancaire, pas de compte. C’est conçu par SEOryon comme une véritable porte d’entrée utile vers notre plateforme payante.",
      faq2_q: "Mes données quittent-elles mon navigateur ?",
      faq2_a: "Non. Inspect lit la page que vous consultez déjà et exécute chaque vérification en local dans votre navigateur. Rien n’est envoyé à un serveur.",
      faq3_q: "Quels navigateurs sont pris en charge ?",
      faq3_a: "Chrome et tout navigateur Chromium — Edge, Brave, Arc et Opera. Une version Firefox est prévue.",
      faq4_q: "En quoi est-ce différent de SEOryon ?",
      faq4_a: "Inspect audite une page, à la demande, gratuitement. SEOryon surveille tout votre site en continu, suit où vous êtes cité dans la recherche IA, et écrit le contenu qui vous fait classer.",

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

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-html")];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-alt")];
      if (v != null) el.setAttribute("alt", v);
    });

    if (dict.meta_title) document.title = dict.meta_title;
    const md = document.querySelector('meta[name="description"]');
    if (md && dict.meta_desc) md.setAttribute("content", dict.meta_desc);
    document.documentElement.setAttribute("lang", lang);

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

  // Scroll-reveal: add .in when an element enters view (pure CSS does
  // the motion). Respects reduced-motion and degrades to "show all".
  const revealEls = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach((el) => io.observe(el));
  }

  apply(pickInitialLang());
})();
