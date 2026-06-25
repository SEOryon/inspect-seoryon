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

      cv_a_eyebrow: "MEET ORYON",
      cv_a_h: "One agent. Your entire SEO landscape, handled.",
      cv_a_sub: "Inspect shows you one page. Oryon runs your whole strategy. It’s a single AI agent with specialist sub-agents that watch everything that moves your rankings — what competitors publish, live SERPs, People Also Ask, keyword difficulty, trends — so you never have to guess what to write about again. You don’t chase keywords. Oryon brings the whole picture to you.",

      cv_b1_h: "It decides what’s worth writing",
      cv_b1_p: "Oryon doesn’t just hand you a keyword list. It reads real search data — SERPs, People Also Ask, difficulty, trends, and what competitors are ranking for — and tells you the topics that will actually move your traffic, with the reasoning behind each one.",
      cv_b2_h: "You choose how hands-on you are",
      cv_b2_p: "Run it your way. <strong>Semi-autopilot</strong> proposes finished recommendations you approve or skip with one click — and it learns from every choice you make, getting more like you over time. <strong>Full autopilot</strong> does the work end to end. We suggest starting on semi for the first months so Oryon learns your business, then handing over as much as you want. You’re always in control.",
      cv_b3_h: "Content Studio: your ideas, made to rank",
      cv_b3_p: "Have something you actually want to say? Just dictate it. Speak a topic into Content Studio and Oryon turns it into a real, SEO-optimized article built on live search data — then you review and publish on your terms. Google rewards genuine content from real people, and no competitor combines it the way we do: your idea, our SEO rigor, your final say.",

      cv_c_h: "Know exactly where your traffic comes from — including AI.",
      cv_c_p: "Search isn’t just Google anymore. Oryon tracks where you show up in AI answers — ChatGPT, Perplexity, Gemini, Google AI — and shows you which visitors arrive from an LLM versus classic search. In one dashboard you also track competitors, backlinks, and your website’s technical vitals, and watch your organic growth over time. The full landscape, in one view.",
      cv_c_p1: "AI citation tracking — see where LLMs cite you",
      cv_c_p2: "Visitor source — Google vs. ChatGPT / Perplexity / Gemini",
      cv_c_p3: "Competitor tracking",
      cv_c_p4: "Backlinks & website vitals",
      cv_c_p5: "Organic growth over time",

      cv_d_eyebrow: "HOW WE WORK",
      cv_d_h: "Real organic growth. No shortcuts, no tricks.",
      cv_d_p: "A lot of SEO tools cut corners — black-hat tactics, link-exchange pools, spun content. We don’t, and we never will. Oryon plays by Google’s rules and the fundamentals of good SEO, because that’s the only growth that lasts. The engine behind it is genuinely complex — that’s the point: it does the hard, legitimate work so you get results that hold up, not a penalty waiting to happen.",
      cv_d_c1: "Plays by Google’s rules",
      cv_d_c2: "No link-exchange pools, no black-hat",
      cv_d_c3: "Built for durable, organic growth",

      cv_e_h: "Put your SEO on Oryon.",
      cv_e_sub: "Start free. Keep full control. See what an agent watching your whole landscape can do.",
      cv_e_cta: "Start your 30-day free trial →",
      cv_e_fine: "Articles written for you · Live LLM citation audit · Latest models · Cancel in two clicks.",
      cv_e_secondary: "Or keep using Inspect free — it’s yours forever.",

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

      cv_a_eyebrow: "DAS IST ORYON",
      cv_a_h: "Ein Agent. Deine gesamte SEO-Landschaft, im Griff.",
      cv_a_sub: "Inspect zeigt dir eine Seite. Oryon steuert deine ganze Strategie. Ein einzelner KI-Agent mit spezialisierten Sub-Agenten beobachtet alles, was deine Rankings bewegt — was Wettbewerber veröffentlichen, Live-SERPs, „Ähnliche Fragen“, Keyword-Schwierigkeit, Trends — damit du nie wieder raten musst, worüber du schreiben sollst. Du jagst keine Keywords mehr. Oryon bringt dir das ganze Bild.",

      cv_b1_h: "Es entscheidet, was sich zu schreiben lohnt",
      cv_b1_p: "Oryon gibt dir nicht einfach eine Keyword-Liste. Es liest echte Suchdaten — SERPs, „Ähnliche Fragen“, Schwierigkeit, Trends und wofür Wettbewerber ranken — und nennt dir die Themen, die deinen Traffic wirklich bewegen, jeweils mit der Begründung dahinter.",
      cv_b2_h: "Du bestimmst, wie viel du selbst machst",
      cv_b2_p: "Mach es auf deine Art. <strong>Semi-Autopilot</strong> schlägt fertige Empfehlungen vor, die du mit einem Klick annimmst oder überspringst — und lernt aus jeder Entscheidung, wird mit der Zeit immer mehr wie du. <strong>Voll-Autopilot</strong> übernimmt alles von Anfang bis Ende. Wir empfehlen, die ersten Monate mit Semi zu starten, damit Oryon dein Geschäft kennenlernt, und dann so viel zu übergeben, wie du willst. Du behältst immer die Kontrolle.",
      cv_b3_h: "Content Studio: deine Ideen, fürs Ranking gemacht",
      cv_b3_p: "Du hast etwas, das du wirklich sagen willst? Diktiere es einfach. Sprich ein Thema ins Content Studio und Oryon macht daraus einen echten, SEO-optimierten Artikel auf Basis von Live-Suchdaten — dann prüfst und veröffentlichst du zu deinen Bedingungen. Google belohnt echte Inhalte von echten Menschen, und kein Wettbewerber kombiniert das so wie wir: deine Idee, unsere SEO-Präzision, dein letztes Wort.",

      cv_c_h: "Wisse genau, woher dein Traffic kommt — auch aus der KI.",
      cv_c_p: "Suche ist längst nicht mehr nur Google. Oryon verfolgt, wo du in KI-Antworten auftauchst — ChatGPT, Perplexity, Gemini, Google AI — und zeigt dir, welche Besucher aus einem LLM statt aus der klassischen Suche kommen. In einem Dashboard verfolgst du außerdem Wettbewerber, Backlinks und die technischen Vitalwerte deiner Website und beobachtest dein organisches Wachstum über die Zeit. Die ganze Landschaft, in einer Ansicht.",
      cv_c_p1: "KI-Zitations-Tracking — sieh, wo LLMs dich zitieren",
      cv_c_p2: "Besucherquelle — Google vs. ChatGPT / Perplexity / Gemini",
      cv_c_p3: "Wettbewerber-Tracking",
      cv_c_p4: "Backlinks & Website-Vitalwerte",
      cv_c_p5: "Organisches Wachstum über die Zeit",

      cv_d_eyebrow: "SO ARBEITEN WIR",
      cv_d_h: "Echtes organisches Wachstum. Keine Abkürzungen, keine Tricks.",
      cv_d_p: "Viele SEO-Tools nehmen Abkürzungen — Black-Hat-Taktiken, Link-Tausch-Pools, generierter Spam-Content. Wir nicht, und wir werden es nie tun. Oryon hält sich an Googles Regeln und die Grundlagen von gutem SEO, denn nur dieses Wachstum hält. Die Engine dahinter ist wirklich komplex — und das ist der Punkt: Sie macht die harte, seriöse Arbeit, damit du Ergebnisse bekommst, die Bestand haben, statt einer Strafe, die nur darauf wartet zu kommen.",
      cv_d_c1: "Hält sich an Googles Regeln",
      cv_d_c2: "Keine Link-Tausch-Pools, kein Black-Hat",
      cv_d_c3: "Gebaut für dauerhaftes, organisches Wachstum",

      cv_e_h: "Übergib dein SEO an Oryon.",
      cv_e_sub: "Kostenlos starten. Volle Kontrolle behalten. Sieh, was ein Agent leisten kann, der deine ganze Landschaft beobachtet.",
      cv_e_cta: "30 Tage kostenlos testen →",
      cv_e_fine: "Artikel für dich geschrieben · Live-LLM-Zitations-Audit · Neueste Modelle · In zwei Klicks kündbar.",
      cv_e_secondary: "Oder nutze Inspect weiter kostenlos — für immer deins.",

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

      cv_a_eyebrow: "VOICI ORYON",
      cv_a_h: "Un agent. Tout votre paysage SEO, pris en main.",
      cv_a_sub: "Inspect vous montre une page. Oryon pilote toute votre stratégie. Un seul agent IA, avec des sous-agents spécialisés, surveille tout ce qui fait bouger votre référencement — ce que publient vos concurrents, les SERP en direct, « Autres questions posées », la difficulté des mots-clés, les tendances — pour que vous n’ayez plus jamais à deviner quoi écrire. Vous ne courez plus après les mots-clés. Oryon vous apporte la vue d’ensemble.",

      cv_b1_h: "Il décide ce qui vaut la peine d’être écrit",
      cv_b1_p: "Oryon ne se contente pas de vous donner une liste de mots-clés. Il lit de vraies données de recherche — SERP, « Autres questions posées », difficulté, tendances et ce sur quoi vos concurrents se positionnent — et vous indique les sujets qui feront vraiment bouger votre trafic, avec le raisonnement derrière chacun.",
      cv_b2_h: "Vous choisissez votre niveau d’implication",
      cv_b2_p: "À votre façon. Le <strong>semi-pilote automatique</strong> propose des recommandations finalisées que vous approuvez ou ignorez en un clic — et il apprend de chaque choix, devenant de plus en plus comme vous au fil du temps. Le <strong>pilote automatique complet</strong> fait tout, de bout en bout. Nous conseillons de commencer en semi les premiers mois pour qu’Oryon apprenne votre activité, puis de lui confier autant que vous le souhaitez. Vous gardez toujours le contrôle.",
      cv_b3_h: "Content Studio : vos idées, faites pour se classer",
      cv_b3_p: "Vous avez quelque chose à dire ? Dictez-le, tout simplement. Énoncez un sujet dans Content Studio et Oryon en fait un véritable article optimisé SEO, bâti sur des données de recherche en direct — puis vous le relisez et le publiez à vos conditions. Google récompense le contenu authentique de vraies personnes, et aucun concurrent ne combine cela comme nous : votre idée, notre rigueur SEO, votre décision finale.",

      cv_c_h: "Sachez exactement d’où vient votre trafic — y compris de l’IA.",
      cv_c_p: "La recherche, ce n’est plus seulement Google. Oryon suit où vous apparaissez dans les réponses IA — ChatGPT, Perplexity, Gemini, Google AI — et vous montre quels visiteurs arrivent d’un LLM plutôt que de la recherche classique. Dans un seul tableau de bord, vous suivez aussi vos concurrents, vos backlinks et les indicateurs techniques de votre site, et vous observez votre croissance organique dans le temps. Tout le paysage, en une seule vue.",
      cv_c_p1: "Suivi des citations IA — voyez où les LLM vous citent",
      cv_c_p2: "Source des visiteurs — Google vs ChatGPT / Perplexity / Gemini",
      cv_c_p3: "Suivi des concurrents",
      cv_c_p4: "Backlinks et indicateurs du site",
      cv_c_p5: "Croissance organique dans le temps",

      cv_d_eyebrow: "NOTRE FAÇON DE TRAVAILLER",
      cv_d_h: "Une vraie croissance organique. Aucun raccourci, aucune astuce.",
      cv_d_p: "Beaucoup d’outils SEO prennent des raccourcis — techniques black-hat, pools d’échange de liens, contenu généré sans valeur. Pas nous, et jamais. Oryon respecte les règles de Google et les fondamentaux d’un bon SEO, car c’est la seule croissance qui dure. Le moteur qui l’anime est vraiment complexe — et c’est tout l’intérêt : il fait le travail difficile et légitime pour que vous obteniez des résultats solides, pas une pénalité qui ne demande qu’à tomber.",
      cv_d_c1: "Respecte les règles de Google",
      cv_d_c2: "Pas de pools d’échange de liens, pas de black-hat",
      cv_d_c3: "Conçu pour une croissance organique durable",

      cv_e_h: "Confiez votre SEO à Oryon.",
      cv_e_sub: "Commencez gratuitement. Gardez le contrôle total. Découvrez ce que peut faire un agent qui surveille tout votre paysage.",
      cv_e_cta: "Démarrer l’essai gratuit de 30 jours →",
      cv_e_fine: "Articles rédigés pour vous · Audit de citations LLM en direct · Derniers modèles · Annulation en deux clics.",
      cv_e_secondary: "Ou continuez à utiliser Inspect gratuitement — il est à vous pour toujours.",

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
