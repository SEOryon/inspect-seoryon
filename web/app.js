/* ============================================================
   Inspect landing — client-side i18n + UI wiring + scroll motion.
   100% static: no fetch, no API, no URL scanning. The page sells
   the Chrome extension; it does not run an audit.

   Languages: EN (default, source) · DE · FR.
   Language priority: ?lang= URL param > localStorage > navigator.
   NOTE: DE and FR strings are AI-translated and PENDING NATIVE
   REVIEW. Brand/product names (SEOryon, Inspect, ChatGPT, Oryon,
   Content Studio, Ahrefs, Semrush, etc.) are left untranslated.
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

      shot_hero_alt: "Inspect Chrome extension side panel showing a page's SEO score and audits",
      shot_hero_ph: "Screenshot placeholder — Inspect side panel · drop assets/panel-hero.png",

      tab1_name: "Technical", tab1_a1: "Crawlability", tab1_a2: "Hreflang", tab1_a3: "Viewport",
      tab2_name: "Meta", tab2_a1: "Title tag", tab2_a2: "Meta description", tab2_a3: "Canonical",
      tab3_name: "Content", tab3_a1: "Alt text", tab3_a2: "Headings", tab3_a3: "Readability",
      tab4_name: "Links", tab4_a1: "Link text", tab4_a2: "Crawlable links", tab4_a3: "Broken links",

      chip1_title: "No signup required",
      chip1_sub: "Install and start inspecting in one click",
      chip2_title: "100% local",
      chip2_sub: "Audits run in your browser — nothing is sent to a server",

      feat_h2: "Everything you need to inspect, in one panel",
      feat_sub: "Four tabs. Twelve checks. Each one color-coded pass, warn, or fail — with the fix spelled out.",

      feat1_h3: "Catch what blocks indexing",
      feat1_p: "Crawlability, canonicals, hreflang, and viewport at a glance — the signals that decide whether a page can rank at all.",
      feat1_l1: "Crawlability & robots directives",
      feat1_l2: "Canonical & hreflang",
      feat1_l3: "Viewport & mobile readiness",
      feat1_alt: "Inspect Technical tab — crawlability, hreflang, and viewport audits",
      feat1_ph: "Screenshot placeholder · drop assets/tab-technical.png",

      feat2_h3: "See what Google and social see",
      feat2_p: "Title, description, and Open Graph / Twitter cards — with live character counts and warnings the moment they’re off.",
      feat2_l1: "Title & description length checks",
      feat2_l2: "Open Graph & Twitter card preview",
      feat2_l3: "Duplicate & missing-tag flags",
      feat2_alt: "Inspect Meta tab — title, description, and social card audits",
      feat2_ph: "Screenshot placeholder · drop assets/tab-meta.png",

      feat3_h3: "Read structure like a crawler",
      feat3_p: "A full H1–H6 outline, alt-text coverage, and readability — so you catch thin content and broken hierarchy early.",
      feat3_l1: "H1–H6 heading outline",
      feat3_l2: "Image alt-text coverage",
      feat3_l3: "Readability & thin-content flag",
      feat3_alt: "Inspect Content tab — headings, alt text, and readability audits",
      feat3_ph: "Screenshot placeholder · drop assets/tab-content.png",

      feat4_h3: "Map every link on the page",
      feat4_p: "Internal vs external, generic anchor text, crawlable links, and a live broken-link check.",
      feat4_l1: "Internal vs external split",
      feat4_l2: "Anchor text & crawlable links",
      feat4_l3: "Broken-link detection",
      feat4_alt: "Inspect Links tab — link text, crawlable links, and broken-link audits",
      feat4_ph: "Screenshot placeholder · drop assets/tab-links.png",

      free_kicker: "Why is it free?",
      free_body: "Because the best ad for SEOryon is showing you what you’re missing. Inspect flags what’s wrong on one page and how to fix it. SEOryon does that across your whole site — then writes the blog content that lands you in Google and AI answers. We show you the data and write the content; you stay in control of your site.",

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

      cv_e_h: "Rank in Google. Get cited by AI.",
      cv_e_sub: "SEOryon does the SEO and writes the content — you keep control of your site.",
      cv_e_cta: "Start your 30-day free trial →",
      cv_e_fine: "Articles written for you · Live LLM citation audit · Latest models · Cancel in two clicks.",
      cv_e_secondary: "Or keep using Inspect free — it’s yours forever.",

      faq_h2: "Questions, answered",
      faq_gA: "The free Inspect extension",
      faq_gB: "SEOryon vs. the alternatives",
      faq_gC: "AI search & GEO",
      faq_gD: "Trust & how it works",
      faq_gE: "Plans & practical",

      faq1_q: "Is Inspect really free — forever?",
      faq1_a: "Yes. No trial timer, no credit card, no account. Inspect is built by SEOryon as a genuinely useful front door to our paid platform.",
      faq2_q: "Does my data leave my browser?",
      faq2_a: "No. Inspect reads the page you’re already viewing and runs every check locally in your browser. Nothing is uploaded to a server.",
      faq3_q: "Which browsers are supported?",
      faq3_a: "Chrome and any Chromium browser — Edge, Brave, Arc, and Opera. A Firefox build is on the roadmap.",
      faq4_q: "How is Inspect different from SEOryon?",
      faq4_a: "Inspect audits one page, on demand, for free. SEOryon works across your whole site continuously, tracks where you’re cited in AI search, and writes the content that gets you found.",

      faq5_q: "How is SEOryon different from a keyword tool or an AI writer?",
      faq5_a: "Keyword tools hand you a list and stop; AI writers spit out generic text. SEOryon reads live search data, decides what’s worth writing and why, then writes content built to rank — research and writing in one loop.",
      faq6_q: "Do I still need Ahrefs or Semrush?",
      faq6_a: "Most teams don’t. SEOryon tracks the rankings, competitors, backlinks, and site vitals those tools show — then acts on them by publishing content. Keep them if you like; SEOryon is built to replace the busywork.",
      faq7_q: "Why SEOryon instead of an agency or doing it manually?",
      faq7_a: "An agency is slow and expensive; manual SEO eats your week. SEOryon runs the research-to-publish loop continuously at a fraction of the cost — and you approve everything.",

      faq8_q: "What is GEO (generative engine optimization)?",
      faq8_a: "GEO is optimizing to be cited in AI answers — ChatGPT, Perplexity, Gemini, Google AI — not just the ten blue links. As people ask AI instead of searching, being the source it quotes is the new front page.",
      faq9_q: "How do I get cited in ChatGPT, Perplexity, and Google AI?",
      faq9_a: "Publish clear, well-structured, genuinely useful content that answers real questions — exactly what LLMs quote. SEOryon writes for that, and tracks where you’re already being cited.",
      faq10_q: "How is ranking in AI answers different from ranking in Google?",
      faq10_a: "Google ranks pages; AI answers cite sources inside a generated reply. The fundamentals overlap — quality, structure, authority — but AI rewards content that directly answers the question. SEOryon optimizes for both.",

      faq11_q: "Is AI-written content penalized by Google?",
      faq11_a: "No — Google rewards helpful content regardless of how it’s made, and penalizes spam. SEOryon writes genuine, fact-grounded articles you review before publishing, not spun filler.",
      faq12_q: "Do you follow Google’s rules?",
      faq12_a: "Always. No black-hat tactics, no link-exchange pools, no spun content — only the fundamentals of good SEO, because that’s the only growth that lasts.",
      faq13_q: "Do you edit or touch my website?",
      faq13_a: "No. SEOryon shows you the data and writes the content; you publish and stay in full control of your own site. We never edit your site for you.",
      faq14_q: "Who controls what gets published?",
      faq14_a: "You do. On semi-autopilot you approve every piece with one click; on full autopilot SEOryon publishes on your rules. Either way, nothing goes live without your say.",

      faq15_q: "What’s included in the 30-day free trial?",
      faq15_a: "Published articles written for you, an in-depth LLM citation audit, the latest models, and full access — cancel in two clicks.",
      faq16_q: "Semi-autopilot vs. full autopilot — what’s the difference?",
      faq16_a: "Semi proposes finished recommendations you approve or skip in a click, learning your taste over time. Full autopilot runs the whole loop end to end. Start on semi, hand over as much as you want.",
      faq17_q: "Which platforms and languages do you support?",
      faq17_a: "SEOryon publishes to the major CMS platforms and writes across multiple languages and markets. Tell us your stack during the trial and we’ll confirm the fit.",

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

      shot_hero_alt: "Seitenpanel der Inspect-Chrome-Erweiterung mit SEO-Score und Audits einer Seite",
      shot_hero_ph: "Screenshot-Platzhalter — Inspect-Seitenpanel · assets/panel-hero.png ablegen",

      tab1_name: "Technik", tab1_a1: "Crawlbarkeit", tab1_a2: "Hreflang", tab1_a3: "Viewport",
      tab2_name: "Meta", tab2_a1: "Title-Tag", tab2_a2: "Meta-Beschreibung", tab2_a3: "Canonical",
      tab3_name: "Inhalt", tab3_a1: "Alt-Text", tab3_a2: "Überschriften", tab3_a3: "Lesbarkeit",
      tab4_name: "Links", tab4_a1: "Linktext", tab4_a2: "Crawlbare Links", tab4_a3: "Defekte Links",

      chip1_title: "Keine Anmeldung nötig",
      chip1_sub: "Installieren und mit einem Klick prüfen",
      chip2_title: "100% lokal",
      chip2_sub: "Audits laufen im Browser — nichts wird an einen Server gesendet",

      feat_h2: "Alles, was du brauchst, in einem Panel",
      feat_sub: "Vier Tabs. Zwölf Prüfungen. Jede farbcodiert als bestanden, Warnung oder Fehler — mit ausformulierter Lösung.",

      feat1_h3: "Erkenne, was die Indexierung blockiert",
      feat1_p: "Crawlbarkeit, Canonicals, Hreflang und Viewport auf einen Blick — die Signale, die entscheiden, ob eine Seite überhaupt ranken kann.",
      feat1_l1: "Crawlbarkeit & Robots-Direktiven",
      feat1_l2: "Canonical & Hreflang",
      feat1_l3: "Viewport & Mobiltauglichkeit",
      feat1_alt: "Inspect-Tab „Technik“ — Crawlbarkeit, Hreflang und Viewport",
      feat1_ph: "Screenshot-Platzhalter · assets/tab-technical.png ablegen",

      feat2_h3: "Sieh, was Google und Social sehen",
      feat2_p: "Title, Beschreibung und Open-Graph- / Twitter-Cards — mit Live-Zeichenzählung und Warnungen, sobald etwas nicht stimmt.",
      feat2_l1: "Längenprüfung für Title & Beschreibung",
      feat2_l2: "Vorschau von Open Graph & Twitter-Card",
      feat2_l3: "Markierung von Duplikaten & fehlenden Tags",
      feat2_alt: "Inspect-Tab „Meta“ — Title, Beschreibung und Social-Cards",
      feat2_ph: "Screenshot-Platzhalter · assets/tab-meta.png ablegen",

      feat3_h3: "Lies die Struktur wie ein Crawler",
      feat3_p: "Eine vollständige H1–H6-Gliederung, Alt-Text-Abdeckung und Lesbarkeit — damit du dünne Inhalte und kaputte Hierarchien früh erkennst.",
      feat3_l1: "H1–H6-Überschriften-Gliederung",
      feat3_l2: "Abdeckung der Bild-Alt-Texte",
      feat3_l3: "Lesbarkeit & Hinweis auf dünne Inhalte",
      feat3_alt: "Inspect-Tab „Inhalt“ — Überschriften, Alt-Text und Lesbarkeit",
      feat3_ph: "Screenshot-Platzhalter · assets/tab-content.png ablegen",

      feat4_h3: "Erfasse jeden Link auf der Seite",
      feat4_p: "Intern vs. extern, generischer Ankertext, crawlbare Links und eine Live-Prüfung defekter Links.",
      feat4_l1: "Aufteilung intern vs. extern",
      feat4_l2: "Ankertext & crawlbare Links",
      feat4_l3: "Erkennung defekter Links",
      feat4_alt: "Inspect-Tab „Links“ — Linktext, crawlbare Links und defekte Links",
      feat4_ph: "Screenshot-Platzhalter · assets/tab-links.png ablegen",

      free_kicker: "Warum ist es kostenlos?",
      free_body: "Weil die beste Werbung für SEOryon ist, dir zu zeigen, was dir fehlt. Inspect zeigt, was auf einer Seite falsch ist und wie du es behebst. SEOryon macht das für deine ganze Website — und schreibt dann die Blog-Inhalte, die dich in Google und KI-Antworten bringen. Wir liefern die Daten und schreiben die Inhalte; die Kontrolle über deine Website behältst du.",

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

      cv_e_h: "Ranke bei Google. Werde von der KI zitiert.",
      cv_e_sub: "SEOryon macht das SEO und schreibt die Inhalte — die Kontrolle über deine Website behältst du.",
      cv_e_cta: "30 Tage kostenlos testen →",
      cv_e_fine: "Artikel für dich geschrieben · Live-LLM-Zitations-Audit · Neueste Modelle · In zwei Klicks kündbar.",
      cv_e_secondary: "Oder nutze Inspect weiter kostenlos — für immer deins.",

      faq_h2: "Fragen, beantwortet",
      faq_gA: "Die kostenlose Inspect-Erweiterung",
      faq_gB: "SEOryon vs. die Alternativen",
      faq_gC: "KI-Suche & GEO",
      faq_gD: "Vertrauen & Funktionsweise",
      faq_gE: "Tarife & Praktisches",

      faq1_q: "Ist Inspect wirklich kostenlos — für immer?",
      faq1_a: "Ja. Kein Trial-Timer, keine Kreditkarte, kein Konto. Inspect wird von SEOryon als wirklich nützliche Eingangstür zu unserer kostenpflichtigen Plattform gebaut.",
      faq2_q: "Verlassen meine Daten den Browser?",
      faq2_a: "Nein. Inspect liest die Seite, die du ohnehin ansiehst, und führt jede Prüfung lokal in deinem Browser aus. Nichts wird auf einen Server hochgeladen.",
      faq3_q: "Welche Browser werden unterstützt?",
      faq3_a: "Chrome und jeder Chromium-Browser — Edge, Brave, Arc und Opera. Eine Firefox-Version ist in Planung.",
      faq4_q: "Wie unterscheidet sich Inspect von SEOryon?",
      faq4_a: "Inspect auditiert eine Seite, auf Abruf, kostenlos. SEOryon arbeitet laufend für deine ganze Website, verfolgt, wo du in der KI-Suche zitiert wirst, und schreibt die Inhalte, die dich auffindbar machen.",

      faq5_q: "Wie unterscheidet sich SEOryon von einem Keyword-Tool oder einem KI-Schreiber?",
      faq5_a: "Keyword-Tools geben dir eine Liste und hören auf; KI-Schreiber liefern generischen Text. SEOryon liest Live-Suchdaten, entscheidet, was sich zu schreiben lohnt und warum, und schreibt dann Inhalte fürs Ranking — Recherche und Schreiben in einem Loop.",
      faq6_q: "Brauche ich noch Ahrefs oder Semrush?",
      faq6_a: "Die meisten Teams nicht. SEOryon verfolgt Rankings, Wettbewerber, Backlinks und Site-Vitalwerte, die diese Tools zeigen — und handelt danach, indem es Inhalte veröffentlicht. Behalte sie, wenn du willst; SEOryon ersetzt die Fleißarbeit.",
      faq7_q: "Warum SEOryon statt einer Agentur oder manueller Arbeit?",
      faq7_a: "Eine Agentur ist langsam und teuer; manuelles SEO frisst deine Woche. SEOryon betreibt den Recherche-bis-Veröffentlichungs-Loop laufend zu einem Bruchteil der Kosten — und du gibst alles frei.",

      faq8_q: "Was ist GEO (Generative Engine Optimization)?",
      faq8_a: "GEO bedeutet, dafür zu optimieren, in KI-Antworten zitiert zu werden — ChatGPT, Perplexity, Gemini, Google AI — nicht nur in den zehn blauen Links. Da Menschen die KI fragen statt zu suchen, ist die zitierte Quelle die neue Titelseite.",
      faq9_q: "Wie werde ich in ChatGPT, Perplexity und Google AI zitiert?",
      faq9_a: "Veröffentliche klare, gut strukturierte, wirklich nützliche Inhalte, die echte Fragen beantworten — genau das, was LLMs zitieren. SEOryon schreibt dafür und verfolgt, wo du bereits zitiert wirst.",
      faq10_q: "Wie unterscheidet sich das Ranking in KI-Antworten vom Google-Ranking?",
      faq10_a: "Google rankt Seiten; KI-Antworten zitieren Quellen innerhalb einer generierten Antwort. Die Grundlagen überschneiden sich — Qualität, Struktur, Autorität —, aber KI belohnt Inhalte, die die Frage direkt beantworten. SEOryon optimiert für beides.",

      faq11_q: "Wird KI-geschriebener Inhalt von Google abgestraft?",
      faq11_a: "Nein — Google belohnt hilfreiche Inhalte unabhängig davon, wie sie erstellt wurden, und straft Spam ab. SEOryon schreibt echte, faktenbasierte Artikel, die du vor der Veröffentlichung prüfst, keinen generierten Füllstoff.",
      faq12_q: "Haltet ihr euch an Googles Regeln?",
      faq12_a: "Immer. Keine Black-Hat-Taktiken, keine Link-Tausch-Pools, kein generierter Spam — nur die Grundlagen von gutem SEO, denn nur dieses Wachstum hält.",
      faq13_q: "Bearbeitet oder verändert ihr meine Website?",
      faq13_a: "Nein. SEOryon zeigt dir die Daten und schreibt die Inhalte; du veröffentlichst und behältst die volle Kontrolle über deine eigene Website. Wir bearbeiten deine Website nie für dich.",
      faq14_q: "Wer entscheidet, was veröffentlicht wird?",
      faq14_a: "Du. Im Semi-Autopilot gibst du jedes Stück per Klick frei; im Voll-Autopilot veröffentlicht SEOryon nach deinen Regeln. So oder so geht nichts ohne deine Zustimmung live.",

      faq15_q: "Was ist in der 30-tägigen kostenlosen Testphase enthalten?",
      faq15_a: "Für dich geschriebene, veröffentlichte Artikel, ein ausführliches LLM-Zitations-Audit, die neuesten Modelle und voller Zugriff — in zwei Klicks kündbar.",
      faq16_q: "Semi-Autopilot vs. Voll-Autopilot — was ist der Unterschied?",
      faq16_a: "Semi schlägt fertige Empfehlungen vor, die du per Klick annimmst oder überspringst, und lernt mit der Zeit deinen Geschmack. Voll-Autopilot erledigt den ganzen Loop. Starte mit Semi und übergib so viel du willst.",
      faq17_q: "Welche Plattformen und Sprachen werden unterstützt?",
      faq17_a: "SEOryon veröffentlicht auf den großen CMS-Plattformen und schreibt in mehreren Sprachen und Märkten. Nenne uns in der Testphase deinen Stack und wir bestätigen die Eignung.",

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

      shot_hero_alt: "Panneau latéral de l’extension Chrome Inspect montrant le score SEO et les audits d’une page",
      shot_hero_ph: "Espace réservé à la capture — panneau Inspect · déposer assets/panel-hero.png",

      tab1_name: "Technique", tab1_a1: "Explorabilité", tab1_a2: "Hreflang", tab1_a3: "Viewport",
      tab2_name: "Meta", tab2_a1: "Balise title", tab2_a2: "Méta-description", tab2_a3: "Canonique",
      tab3_name: "Contenu", tab3_a1: "Texte alt", tab3_a2: "Titres", tab3_a3: "Lisibilité",
      tab4_name: "Liens", tab4_a1: "Texte des liens", tab4_a2: "Liens explorables", tab4_a3: "Liens cassés",

      chip1_title: "Aucune inscription",
      chip1_sub: "Installez et commencez à analyser en un clic",
      chip2_title: "100% local",
      chip2_sub: "Les audits tournent dans votre navigateur — rien n’est envoyé à un serveur",

      feat_h2: "Tout pour inspecter, dans un seul panneau",
      feat_sub: "Quatre onglets. Douze vérifications. Chacune codée par couleur — réussie, avertissement ou échec — avec la correction détaillée.",

      feat1_h3: "Repérez ce qui bloque l’indexation",
      feat1_p: "Explorabilité, canoniques, hreflang et viewport d’un coup d’œil — les signaux qui décident si une page peut se classer.",
      feat1_l1: "Explorabilité & directives robots",
      feat1_l2: "Canonique & hreflang",
      feat1_l3: "Viewport & compatibilité mobile",
      feat1_alt: "Onglet Technique d’Inspect — explorabilité, hreflang et viewport",
      feat1_ph: "Espace réservé · déposer assets/tab-technical.png",

      feat2_h3: "Voyez ce que voient Google et les réseaux",
      feat2_p: "Title, description et cartes Open Graph / Twitter — avec comptage de caractères en direct et alertes dès que quelque chose cloche.",
      feat2_l1: "Contrôle de longueur du title & de la description",
      feat2_l2: "Aperçu des cartes Open Graph & Twitter",
      feat2_l3: "Signalement des balises en double & manquantes",
      feat2_alt: "Onglet Meta d’Inspect — title, description et cartes sociales",
      feat2_ph: "Espace réservé · déposer assets/tab-meta.png",

      feat3_h3: "Lisez la structure comme un robot",
      feat3_p: "Un plan complet H1–H6, la couverture des textes alt et la lisibilité — pour repérer tôt le contenu maigre et la hiérarchie cassée.",
      feat3_l1: "Plan des titres H1–H6",
      feat3_l2: "Couverture des textes alt d’images",
      feat3_l3: "Lisibilité & alerte contenu maigre",
      feat3_alt: "Onglet Contenu d’Inspect — titres, texte alt et lisibilité",
      feat3_ph: "Espace réservé · déposer assets/tab-content.png",

      feat4_h3: "Cartographiez chaque lien de la page",
      feat4_p: "Interne vs externe, texte d’ancre générique, liens explorables et une vérification en direct des liens cassés.",
      feat4_l1: "Répartition interne vs externe",
      feat4_l2: "Texte d’ancre & liens explorables",
      feat4_l3: "Détection des liens cassés",
      feat4_alt: "Onglet Liens d’Inspect — texte des liens, liens explorables et liens cassés",
      feat4_ph: "Espace réservé · déposer assets/tab-links.png",

      free_kicker: "Pourquoi est-ce gratuit ?",
      free_body: "Parce que la meilleure publicité pour SEOryon, c’est de vous montrer ce qui vous manque. Inspect signale ce qui ne va pas sur une page et comment le corriger. SEOryon fait de même sur tout votre site — puis rédige le contenu de blog qui vous place dans Google et les réponses IA. Nous fournissons les données et écrivons le contenu ; vous gardez le contrôle de votre site.",

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

      cv_e_h: "Classez-vous sur Google. Soyez cité par l’IA.",
      cv_e_sub: "SEOryon fait le SEO et rédige le contenu — vous gardez le contrôle de votre site.",
      cv_e_cta: "Démarrer l’essai gratuit de 30 jours →",
      cv_e_fine: "Articles rédigés pour vous · Audit de citations LLM en direct · Derniers modèles · Annulation en deux clics.",
      cv_e_secondary: "Ou continuez à utiliser Inspect gratuitement — il est à vous pour toujours.",

      faq_h2: "Vos questions, nos réponses",
      faq_gA: "L’extension Inspect gratuite",
      faq_gB: "SEOryon vs les alternatives",
      faq_gC: "Recherche IA & GEO",
      faq_gD: "Confiance & fonctionnement",
      faq_gE: "Offres & pratique",

      faq1_q: "Inspect est-il vraiment gratuit — pour toujours ?",
      faq1_a: "Oui. Pas de minuteur d’essai, pas de carte bancaire, pas de compte. Inspect est conçu par SEOryon comme une véritable porte d’entrée utile vers notre plateforme payante.",
      faq2_q: "Mes données quittent-elles mon navigateur ?",
      faq2_a: "Non. Inspect lit la page que vous consultez déjà et exécute chaque vérification en local dans votre navigateur. Rien n’est envoyé à un serveur.",
      faq3_q: "Quels navigateurs sont pris en charge ?",
      faq3_a: "Chrome et tout navigateur Chromium — Edge, Brave, Arc et Opera. Une version Firefox est prévue.",
      faq4_q: "En quoi Inspect est-il différent de SEOryon ?",
      faq4_a: "Inspect audite une page, à la demande, gratuitement. SEOryon travaille en continu sur tout votre site, suit où vous êtes cité dans la recherche IA, et écrit le contenu qui vous rend trouvable.",

      faq5_q: "En quoi SEOryon diffère-t-il d’un outil de mots-clés ou d’un rédacteur IA ?",
      faq5_a: "Les outils de mots-clés vous donnent une liste et s’arrêtent ; les rédacteurs IA produisent du texte générique. SEOryon lit des données de recherche en direct, décide ce qui vaut la peine d’être écrit et pourquoi, puis rédige du contenu fait pour se classer — recherche et rédaction dans une seule boucle.",
      faq6_q: "Ai-je encore besoin d’Ahrefs ou de Semrush ?",
      faq6_a: "La plupart des équipes, non. SEOryon suit les classements, les concurrents, les backlinks et les indicateurs de site que ces outils affichent — puis agit en publiant du contenu. Gardez-les si vous le souhaitez ; SEOryon remplace le travail fastidieux.",
      faq7_q: "Pourquoi SEOryon plutôt qu’une agence ou du manuel ?",
      faq7_a: "Une agence est lente et coûteuse ; le SEO manuel mange votre semaine. SEOryon fait tourner la boucle recherche-à-publication en continu pour une fraction du coût — et vous validez tout.",

      faq8_q: "Qu’est-ce que le GEO (generative engine optimization) ?",
      faq8_a: "Le GEO consiste à optimiser pour être cité dans les réponses IA — ChatGPT, Perplexity, Gemini, Google AI — et pas seulement dans les dix liens bleus. Comme les gens demandent à l’IA au lieu de chercher, être la source qu’elle cite est la nouvelle première page.",
      faq9_q: "Comment être cité dans ChatGPT, Perplexity et Google AI ?",
      faq9_a: "Publiez un contenu clair, bien structuré et vraiment utile qui répond à de vraies questions — exactement ce que les LLM citent. SEOryon écrit pour cela et suit où vous êtes déjà cité.",
      faq10_q: "En quoi se classer dans les réponses IA diffère-t-il de Google ?",
      faq10_a: "Google classe des pages ; les réponses IA citent des sources au sein d’une réponse générée. Les fondamentaux se recoupent — qualité, structure, autorité — mais l’IA récompense le contenu qui répond directement à la question. SEOryon optimise pour les deux.",

      faq11_q: "Le contenu rédigé par IA est-il pénalisé par Google ?",
      faq11_a: "Non — Google récompense le contenu utile, quelle que soit sa création, et pénalise le spam. SEOryon écrit de vrais articles fondés sur des faits, que vous relisez avant publication, pas du remplissage généré.",
      faq12_q: "Respectez-vous les règles de Google ?",
      faq12_a: "Toujours. Pas de techniques black-hat, pas de pools d’échange de liens, pas de contenu généré sans valeur — uniquement les fondamentaux d’un bon SEO, car c’est la seule croissance qui dure.",
      faq13_q: "Modifiez-vous ou touchez-vous à mon site ?",
      faq13_a: "Non. SEOryon vous montre les données et rédige le contenu ; vous publiez et gardez le contrôle total de votre propre site. Nous ne modifions jamais votre site à votre place.",
      faq14_q: "Qui décide de ce qui est publié ?",
      faq14_a: "Vous. En semi-pilote, vous validez chaque contenu en un clic ; en pilote complet, SEOryon publie selon vos règles. Dans tous les cas, rien ne part en ligne sans votre accord.",

      faq15_q: "Qu’est-ce qui est inclus dans l’essai gratuit de 30 jours ?",
      faq15_a: "Des articles publiés rédigés pour vous, un audit approfondi des citations LLM, les derniers modèles et un accès complet — annulable en deux clics.",
      faq16_q: "Semi-pilote vs pilote complet — quelle différence ?",
      faq16_a: "Le semi propose des recommandations finalisées que vous validez ou ignorez en un clic, et apprend vos préférences au fil du temps. Le pilote complet exécute toute la boucle. Commencez en semi, déléguez autant que vous voulez.",
      faq17_q: "Quelles plateformes et langues prenez-vous en charge ?",
      faq17_a: "SEOryon publie sur les principales plateformes CMS et écrit dans plusieurs langues et marchés. Indiquez-nous votre stack pendant l’essai et nous confirmerons la compatibilité.",

      footer_note: "Inspect tourne entièrement dans votre navigateur. Conçu par SEOryon — votre moteur de croissance organique.",
    },
  };

  const SUPPORTED = ["en", "de", "fr"];
  const STORAGE_KEY = "inspect_lang";

  const pickInitialLang = () => {
    // 1) explicit ?lang= (drives hreflang alternates), 2) saved, 3) browser
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

  // FAQPage structured data — built once from the EN dict (single source
  // of truth, no drift) and injected so Google/LLMs can parse the Q&As.
  // The human-readable answers also live in static HTML for crawlers.
  const injectFaqLd = () => {
    const en = I18N.en;
    const qa = [];
    for (let i = 1; i <= 17; i++) {
      const q = en["faq" + i + "_q"], a = en["faq" + i + "_a"];
      if (q && a) qa.push({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      });
    }
    const ld = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: qa,
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
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

  injectFaqLd();
  apply(pickInitialLang());
})();
