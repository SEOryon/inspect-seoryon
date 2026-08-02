/* ============================================================
   Inspect landing — client-side i18n + UI wiring + scroll motion.
   100% static: no fetch, no API, no URL scanning. The page sells
   the Chrome extension; it does not run an audit.

   Languages: EN (default, source) · DE · FR.
   Language priority: ?lang= URL param > localStorage > navigator.
   DE and FR are natively localized (not literal translations).
   Brand/product names (SEOryon, Inspect, ChatGPT, Oryon, Content
   Studio, Ahrefs, Semrush, etc.) and technical terms kept as
   convention (hreflang, canonical, robots.txt, llms.txt, Open
   Graph, Flesch, GEO) are left as-is across all languages.
   ============================================================ */
(() => {
  "use strict";

  // ============================================================
  // CHROME WEB STORE — single source of truth for the install CTAs.
  // The extension isn't published yet (store submission blocked on company
  // registration), so every ".js-chrome" button shows a calm "Coming soon to
  // Chrome" state instead of a dead link.
  //
  // Listing is live — every CTA now points at the real Chrome Web Store page.
  // ============================================================
  const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/pkkjcnpdpflbgcpeaeggibkhhkkddoik";

  const I18N = {
    en: {
      meta_title: "Inspect — Free SEO inspector extension for Chrome · SEOryon",
      meta_desc: "Audit any page's on-page SEO in one click — a free Chrome extension checking technical, meta, content & link signals plus GEO (AI-search) readiness. Meta-tag checker, broken-link checker, runs locally, no signup. By SEOryon.",

      nav_how: "How it works",
      nav_faq: "FAQ",
      cta_add: "Add to Chrome — free",
      cta_soon: "Coming soon to Chrome",

      hero_pill: "Free forever · Runs locally · No signup",
      hero_h1: 'Inspect any page’s SEO <span class="brand-text">in one click</span>.',
      hero_sub: "A free Chrome extension for on-page SEO audits — check technical, meta, content, and link signals on any page, plus a GEO (AI-search readiness) score. Runs locally, no signup, nothing leaves your tab.",
      browsers_label: "Works on",
      cta_how: "See how it works →",
      hero_micro: "Works on any page you’re viewing · Chrome & Edge · Free forever — the install is the whole product.",

      shot_hero_alt: "Inspect Chrome extension auditing a page — Page Score and GEO score, with content quality, links health, social preview, and whole-site audit panels",
      shot_hero_ph: "Screenshot placeholder — Inspect side panel · drop assets/panel-hero.png",

      tab1_name: "Technical", tab1_a1: "Crawlability", tab1_a2: "Hreflang", tab1_a3: "Viewport",
      tab2_name: "Meta", tab2_a1: "Title tag", tab2_a2: "Meta description", tab2_a3: "Canonical",
      tab3_name: "Content", tab3_a1: "Alt text", tab3_a2: "Headings", tab3_a3: "Readability",
      tab4_name: "Links", tab4_a1: "Link text", tab4_a2: "Crawlable links", tab4_a3: "Broken links",
      tab5_name: "GEO", tab5_a1: "llms.txt", tab5_a2: "AI crawlers", tab5_a3: "Citable content",

      chip1_title: "No signup required",
      chip1_sub: "Install and start inspecting in one click",
      chip2_title: "100% local",
      chip2_sub: "Audits run in your browser — nothing is sent to a server",

      feat_h2: "Everything you need to inspect, in one panel",
      feat_sub: "One on-page SEO audit across five tabs — technical, meta, content, links, and a GEO (AI-search readiness) score. Each check is color-coded pass, warn, or fail, with the fix spelled out.",

      feat1_h3: "Catch what blocks indexing",
      feat1_p: "Crawlability, canonicals, hreflang, and viewport at a glance — the signals that decide whether a page can rank at all.",
      feat1_l1: "Crawlability & robots directives",
      feat1_l2: "Canonical & hreflang",
      feat1_l3: "Viewport & mobile readiness",
      feat1_alt: "Inspect Technical tab — crawlability, hreflang, and viewport audits",
      feat1_ph: "Screenshot placeholder · drop assets/tab-technical.png",

      feat2_h3: "See what Google and social see",
      feat2_p: "Title, description, and Open Graph / Twitter cards — a built-in meta-tag checker with live character counts and warnings the moment they’re off.",
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
      feat4_p: "Internal vs external, generic anchor text, crawlable links, and a live broken-link checker — so nothing leaks authority or 404s in silence.",
      feat4_l1: "Internal vs external split",
      feat4_l2: "Anchor text & crawlable links",
      feat4_l3: "Broken-link detection",
      feat4_alt: "Inspect Links tab — link text, crawlable links, and broken-link audits",
      feat4_ph: "Screenshot placeholder · drop assets/tab-links.png",

      feat5_h3: "See if AI search can cite you",
      feat5_p: "GEO scores whether a page is structurally ready to be cited by AI answers — ChatGPT, Perplexity, Gemini, Google AI. It checks AI-crawler access, structured data, and how citable your content is, with the fix for each.",
      feat5_l1: "AI-crawler access — llms.txt & robots (GPTBot, ClaudeBot, PerplexityBot…)",
      feat5_l2: "Structured data — the right schema for the page type",
      feat5_l3: "Citable-content & AI-readiness score, 0–100",
      feat5_alt: "Inspect GEO tab — AI-readiness score, crawler access, and structured data",
      feat5_ph: "Screenshot placeholder · drop assets/tab-geo.png",

      ss_badge: "New · Whole-site audit",
      ss_h2: "Audit your entire site — not just one page.",
      ss_sub: "In one click, Inspect crawls your whole site — up to ~100 pages — right in your browser and gives you a full audit: a site score, health distributions, and every site-wide issue, each with the fix. It runs locally and free, no signup — nothing leaves your browser.",
      ss_l1: "Broken internal links & redirect chains",
      ss_l2: "Duplicate titles & meta descriptions",
      ss_l3: "Orphan pages & pages buried too deep",
      ss_l4: "Sitemap consistency — 404s, noindex, non-canonical",
      ss_l5: "Site score & health dashboard — status codes, HTTPS, canonical, indexability, alt coverage",
      ss_l6: "Export the full audit as CSV or a shareable HTML report",
      ss_bridge: "Bigger site? SEOryon audits your entire site continuously.",
      ss_alt: "Inspect whole-site audit — site score, health distributions, and grouped site issues",
      ss_ph: "Screenshot placeholder · drop assets/tab-sitescan.png",
      ss_alt2: "Inspect Site Issues — broken links, duplicate titles, and orphan pages grouped by severity",

      free_eyebrow: "Free, on purpose",
      free_kicker: "Why is it free?",
      free_body: "Because the best ad for SEOryon is showing you what you’re missing. Inspect flags what’s wrong on one page and how to fix it. SEOryon does that across your whole site — then writes the blog content that lands you in Google and AI answers. We show you the data and write the content; you stay in control of your site.",

      how_h2: "How it works",
      how1_h3: "Install the extension",
      how1_p: "One click from the Chrome Web Store. No account, no setup.",
      how2_h3: "Open any page",
      how2_p: "Click the Inspect icon to open the side panel on any tab.",
      how3_h3: "Read the audit",
      how3_p: "Checks across all five tabs, color-coded pass / warn / fail — each with the fix.",

      uc_h2: "Built for the way you work",
      uc1_tag: "Site owners & founders", uc1_h3: "Check any page on your own site",
      uc1_p: "Run a full SEO + GEO audit on your homepage, product pages, or posts in one click — no expertise needed. See exactly what to fix and why, right where you’re looking.",
      uc2_tag: "Marketers & content teams", uc2_h3: "Sanity-check before you publish",
      uc2_p: "Catch missing meta, broken links, weak headings, and bad canonicals on any page before it goes live — and see if it’s structured to be cited by AI search.",
      uc3_tag: "Developers & builders", uc3_h3: "Debug without leaving the tab",
      uc3_p: "Verify status codes, canonicals, structured data, and crawlability right where you’re already working — no extra tools, no logins.",

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
      cv_e_cta: "Start your 3-day free trial →",
      cv_e_fine: "3-day free trial · 3 published articles · 1 in-depth LLM/GEO audit · Cancel in two clicks.",
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
      faq5_a: "Keyword tools stop at a list — they tell you what people search, then leave the hard part (deciding what’s actually worth writing, and writing it) to you. AI writers do the opposite: they generate text fast, but with no grounding in live search data, so you get generic articles that don’t rank. SEOryon closes the loop. A single agent reads real search signals — live SERPs, People Also Ask, keyword difficulty, competitor gaps, trends — decides which topics will actually move your traffic and why, then writes each article on that data and checks the facts. You get the research of a keyword tool and the output of a writer, connected, instead of paying for both and stitching them together yourself.",
      faq6_q: "Do I still need Ahrefs or Semrush?",
      faq6_a: "For most teams, no. SEOryon already tracks the things those tools surface — your rankings, your competitors, your backlinks, and your site’s technical health — but instead of stopping at a dashboard you have to act on, it acts: it turns those signals into published content that ranks. Ahrefs and Semrush are reference libraries; SEOryon is the team that reads the library and does the work. Keep them if you love the data, but you won’t need them to grow.",
      faq7_q: "Why SEOryon instead of an agency or doing it manually?",
      faq7_a: "An agency is expensive, slow, and you’re never quite sure what you’re paying for; doing SEO yourself eats hours every week on research, writing, and tracking. SEOryon runs that entire research-to-publish loop continuously, for a fraction of an agency retainer — and unlike an agency, nothing is a black box: you see every recommendation and approve every article. You get agency-scale output with full control and none of the busywork.",

      faq8_q: "What is GEO (generative engine optimization)?",
      faq8_a: "GEO is optimizing to be the source AI answers cite — in ChatGPT, Perplexity, Gemini, and Google’s AI overviews — instead of just ranking in the ten blue links. More and more people ask an AI assistant instead of scrolling a results page, and the assistant quotes a handful of sources. GEO is about being one of those sources: clear structure, genuinely useful answers, the right markup, and crawler access for AI bots. SEOryon writes for it and tracks where you’re already being cited.",
      faq9_q: "How do I get cited in ChatGPT, Perplexity, and Google AI?",
      faq9_a: "You earn citations the way you earn rankings — by being the clearest, most useful answer to a real question — but AI rewards a few extra things: well-structured content it can extract (headings, concise answers, lists, FAQ markup), demonstrated expertise and trust signals, and a site that lets AI crawlers in. SEOryon’s free Inspect tool shows whether a page is structurally ready, and the SEOryon platform writes content built to be cited and tracks where you actually appear.",
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

      faq15_q: "What’s included in the free trial?",
      faq15_a: "A 3-day free trial: 3 published articles written for you and 1 in-depth LLM/GEO audit, with full access. Cancel in two clicks — no card gymnastics.",
      faq16_q: "Semi-autopilot vs. full autopilot — what’s the difference?",
      faq16_a: "Semi proposes finished recommendations you approve or skip in a click, learning your taste over time. Full autopilot runs the whole loop end to end. Start on semi, hand over as much as you want.",
      faq17_q: "Which platforms and languages do you support?",
      faq17_a: "SEOryon publishes to the major CMS platforms and writes across multiple languages and markets. Tell us your stack during the trial and we’ll confirm the fit.",

      footer_note: "Inspect runs entirely in your browser. Built by SEOryon — your organic growth engine.",
      footer_privacy: "Privacy",
    },

    /* ---- DE · natively localized (informal "du", marketer tone) ---- */
    de: {
      meta_title: "Inspect — kostenlose SEO-Erweiterung für Chrome · SEOryon",
      meta_desc: "Prüfe die On-Page-SEO jeder Seite mit nur einem Klick: eine kostenlose Chrome-Erweiterung für technische, Meta-, Inhalts- und Link-Signale sowie die GEO-Bereitschaft (KI-Suche). Mit Meta-Tag- und Broken-Link-Checker, komplett lokal, ohne Anmeldung. Von SEOryon.",

      nav_how: "So funktioniert’s",
      nav_faq: "FAQ",
      cta_add: "Zu Chrome hinzufügen – kostenlos",
      cta_soon: "Demnächst für Chrome",

      hero_pill: "Für immer kostenlos · Läuft lokal · Ohne Anmeldung",
      hero_h1: 'Prüfe die SEO jeder Seite <span class="brand-text">mit einem Klick</span>.',
      hero_sub: "Eine kostenlose Chrome-Erweiterung für On-Page-SEO-Audits: Prüfe auf jeder Seite die technischen, Meta-, Inhalts- und Link-Signale – plus einen GEO-Score für die KI-Such-Bereitschaft. Alles lokal, ohne Anmeldung, nichts verlässt deinen Tab.",
      browsers_label: "Läuft in",
      cta_how: "So funktioniert’s →",
      hero_micro: "Funktioniert auf jeder geöffneten Seite · Chrome & Edge · Für immer kostenlos – die Installation ist schon das ganze Produkt.",

      shot_hero_alt: "Die Inspect-Chrome-Erweiterung beim Audit einer Seite – Page Score und GEO-Score, mit Panels für Content-Qualität, Link-Gesundheit, Social-Vorschau und Whole-Site-Audit",
      shot_hero_ph: "Screenshot-Platzhalter – Inspect-Seitenleiste · assets/panel-hero.png ablegen",

      tab1_name: "Technik", tab1_a1: "Crawlbarkeit", tab1_a2: "Hreflang", tab1_a3: "Viewport",
      tab2_name: "Meta", tab2_a1: "Title-Tag", tab2_a2: "Meta-Description", tab2_a3: "Canonical",
      tab3_name: "Inhalt", tab3_a1: "Alt-Text", tab3_a2: "Überschriften", tab3_a3: "Lesbarkeit",
      tab4_name: "Links", tab4_a1: "Linktext", tab4_a2: "Crawlbare Links", tab4_a3: "Defekte Links",
      tab5_name: "GEO", tab5_a1: "llms.txt", tab5_a2: "KI-Crawler", tab5_a3: "Zitierfähiger Inhalt",

      chip1_title: "Ohne Anmeldung",
      chip1_sub: "Installieren und sofort mit einem Klick prüfen",
      chip2_title: "100 % lokal",
      chip2_sub: "Audits laufen in deinem Browser – nichts geht an einen Server",

      feat_h2: "Alles, was du brauchst – in einer Seitenleiste",
      feat_sub: "Ein On-Page-SEO-Audit über fünf Tabs: Technik, Meta, Inhalt, Links und ein GEO-Score (KI-Such-Bereitschaft). Jede Prüfung ist farblich als bestanden, Warnung oder Fehler markiert – mit der passenden Lösung dazu.",

      feat1_h3: "Erkenne, was die Indexierung blockiert",
      feat1_p: "Crawlbarkeit, Canonicals, Hreflang und Viewport auf einen Blick – die Signale, die darüber entscheiden, ob eine Seite überhaupt ranken kann.",
      feat1_l1: "Crawlbarkeit & Robots-Anweisungen",
      feat1_l2: "Canonical & Hreflang",
      feat1_l3: "Viewport & Mobil-Tauglichkeit",
      feat1_alt: "Inspect-Tab „Technik“ – Crawlbarkeit, Hreflang und Viewport",
      feat1_ph: "Screenshot-Platzhalter · assets/tab-technical.png ablegen",

      feat2_h3: "Sieh, was Google und die sozialen Netzwerke sehen",
      feat2_p: "Title, Description und Open-Graph-/Twitter-Cards – ein eingebauter Meta-Tag-Checker mit Live-Zeichenzählung, der sofort warnt, wenn etwas nicht passt.",
      feat2_l1: "Längen-Check für Title & Description",
      feat2_l2: "Vorschau für Open Graph & Twitter Cards",
      feat2_l3: "Hinweise auf doppelte & fehlende Tags",
      feat2_alt: "Inspect-Tab „Meta“ – Title, Description und Social Cards",
      feat2_ph: "Screenshot-Platzhalter · assets/tab-meta.png ablegen",

      feat3_h3: "Lies die Struktur wie ein Crawler",
      feat3_p: "Eine vollständige H1–H6-Gliederung, Alt-Text-Abdeckung und Lesbarkeit – damit du dünne Inhalte und eine kaputte Struktur früh erkennst.",
      feat3_l1: "H1–H6-Gliederung der Überschriften",
      feat3_l2: "Alt-Text-Abdeckung der Bilder",
      feat3_l3: "Lesbarkeit & Warnung bei dünnem Inhalt",
      feat3_alt: "Inspect-Tab „Inhalt“ – Überschriften, Alt-Texte und Lesbarkeit",
      feat3_ph: "Screenshot-Platzhalter · assets/tab-content.png ablegen",

      feat4_h3: "Erfasse jeden Link auf der Seite",
      feat4_p: "Intern oder extern, generischer Ankertext, crawlbare Links und ein Live-Check auf defekte Links – damit nichts unbemerkt an Autorität verliert oder ins Leere läuft.",
      feat4_l1: "Aufteilung in intern & extern",
      feat4_l2: "Ankertext & crawlbare Links",
      feat4_l3: "Erkennung defekter Links",
      feat4_alt: "Inspect-Tab „Links“ – Linktext, crawlbare Links und defekte Links",
      feat4_ph: "Screenshot-Platzhalter · assets/tab-links.png ablegen",

      feat5_h3: "Sieh, ob die KI-Suche dich zitieren kann",
      feat5_p: "Der GEO-Score zeigt, ob eine Seite strukturell bereit ist, in KI-Antworten zitiert zu werden – in ChatGPT, Perplexity, Gemini und Google AI. Geprüft werden der Zugang für KI-Crawler, die strukturierten Daten und wie zitierfähig dein Inhalt ist – jeweils mit Lösung.",
      feat5_l1: "Zugang für KI-Crawler – llms.txt & robots (GPTBot, ClaudeBot, PerplexityBot…)",
      feat5_l2: "Strukturierte Daten – das passende Schema für den Seitentyp",
      feat5_l3: "Zitierfähiger Inhalt & KI-Bereitschafts-Score, 0–100",
      feat5_alt: "Inspect-Tab „GEO“ – KI-Bereitschafts-Score, Crawler-Zugang und strukturierte Daten",
      feat5_ph: "Screenshot-Platzhalter · assets/tab-geo.png ablegen",

      ss_badge: "Neu · Website-Audit",
      ss_h2: "Prüfe deine ganze Website – nicht nur eine Seite.",
      ss_sub: "Mit einem Klick crawlt Inspect deine ganze Website – bis zu ~100 Seiten – direkt in deinem Browser und liefert ein komplettes Audit: einen Website-Score, Gesundheits-Verteilungen und jedes seitenübergreifende Problem, jeweils mit der Lösung. Läuft lokal und kostenlos, ohne Anmeldung – nichts verlässt deinen Browser.",
      ss_l1: "Defekte interne Links & Weiterleitungsketten",
      ss_l2: "Doppelte Titles & Meta-Descriptions",
      ss_l3: "Verwaiste & zu tief vergrabene Seiten",
      ss_l4: "Sitemap-Konsistenz – 404s, noindex, nicht-kanonisch",
      ss_l5: "Website-Score & Gesundheits-Dashboard – Statuscodes, HTTPS, Canonical, Indexierbarkeit, Alt-Abdeckung",
      ss_l6: "Exportiere das komplette Audit als CSV oder als teilbaren HTML-Report",
      ss_bridge: "Größere Website? SEOryon auditiert deine gesamte Website laufend.",
      ss_alt: "Inspect Gesamt-Website-Audit – Website-Score, Gesundheits-Verteilungen und gruppierte Website-Probleme",
      ss_ph: "Screenshot-Platzhalter · assets/tab-sitescan.png ablegen",
      ss_alt2: "Inspect Website-Probleme – defekte Links, doppelte Titles und verwaiste Seiten nach Schweregrad gruppiert",

      free_eyebrow: "Bewusst kostenlos",
      free_kicker: "Warum ist es kostenlos?",
      free_body: "Weil die beste Werbung für SEOryon ist, dir zu zeigen, was dir entgeht. Inspect zeigt, was auf einer einzelnen Seite nicht stimmt – und wie du es behebst. SEOryon macht genau das für deine gesamte Website und schreibt dann die Blog-Inhalte, mit denen du in Google und in KI-Antworten auftauchst. Wir liefern die Daten und schreiben die Inhalte; die Kontrolle über deine Website bleibt bei dir.",

      how_h2: "So funktioniert’s",
      how1_h3: "Erweiterung installieren",
      how1_p: "Ein Klick im Chrome Web Store. Kein Konto, keine Einrichtung.",
      how2_h3: "Beliebige Seite öffnen",
      how2_p: "Klick auf das Inspect-Symbol und die Seitenleiste öffnet sich in jedem Tab.",
      how3_h3: "Audit lesen",
      how3_p: "Prüfungen über alle fünf Tabs, farblich als bestanden / Warnung / Fehler markiert – jede mit Lösung.",

      uc_h2: "Gebaut für deine Arbeitsweise",
      uc1_tag: "Website-Betreiber & Gründer", uc1_h3: "Jede Seite deiner eigenen Website prüfen",
      uc1_p: "Starte mit einem Klick ein komplettes SEO- und GEO-Audit für deine Startseite, Produktseiten oder Beiträge – ganz ohne Vorwissen. Du siehst direkt vor Ort, was zu beheben ist und warum.",
      uc2_tag: "Marketing & Content-Teams", uc2_h3: "Vor dem Veröffentlichen absichern",
      uc2_p: "Spür fehlende Meta-Tags, defekte Links, schwache Überschriften und falsche Canonicals auf, bevor eine Seite live geht – und sieh, ob sie so aufgebaut ist, dass die KI-Suche sie zitieren kann.",
      uc3_tag: "Entwickler & Macher", uc3_h3: "Debuggen, ohne den Tab zu wechseln",
      uc3_p: "Prüfe Statuscodes, Canonicals, strukturierte Daten und Crawlbarkeit genau dort, wo du ohnehin arbeitest – ohne Extra-Tools, ohne Login.",

      cv_a_eyebrow: "DAS IST ORYON",
      cv_a_h: "Ein Agent. Deine komplette SEO-Landschaft im Griff.",
      cv_a_sub: "Inspect liest eine Seite. Oryon behält deine gesamte Such-Landschaft im Blick – Wettbewerber, Live-SERPs, Trends und mehr –, damit du nie wieder raten musst, worüber du schreiben sollst.",

      hub_n1: "Live-SERPs", hub_n2: "Ähnliche Fragen", hub_n3: "Wettbewerber-Lücken", hub_n4: "Keyword-Schwierigkeit",
      hub_n5: "Trends", hub_n6: "Search Console", hub_n7: "Fragen deiner Zielgruppe",

      cv_b1_h: "Es entscheidet, worüber du schreibst",
      cv_b1_p: "Echte Suchdaten rein, priorisierte Themenideen raus – jede mit Begründung.",
      cv_b2_h: "Du bestimmst den Grad der Autonomie",
      cv_b2_p: "<strong>Semi</strong> schlägt vor, du bestätigst per Klick. <strong>Voll-Autopilot</strong> übernimmt alles von A bis Z.",
      cv_b3_h: "Content Studio",
      cv_b3_p: "Diktier eine Idee – Oryon macht daraus einen echten, suchoptimierten Artikel. Das letzte Wort hast du.",

      cv_c_h: "Wisse, woher dein Traffic kommt – auch aus der KI.",
      cv_c_p: "Oryon verfolgt, wo du in ChatGPT, Perplexity, Gemini, Google AI und Claude zitiert wirst – und welche Besucher über ein LLM statt über die klassische Suche kommen.",
      cv_c_p1: "Tracking von KI-Zitaten",
      cv_c_p2: "LLM- vs. klassische Quelle",
      cv_c_p3: "Wettbewerber · Backlinks · Core Web Vitals",

      mon_title: "KI-Sichtbarkeit",
      mon_live: "Live",
      mon_note: "Zur Veranschaulichung – Beispieldaten, keine echten Kundenergebnisse",
      mon_q1: "„beste kostenlose seo-erweiterung“",
      mon_q2: "„meta-tags prüfen“",
      mon_q3: "„seo-audit-tool für chrome“",
      mon_st_cited: "zitiert",
      mon_st_top: "Top-Quelle",

      cv_d_eyebrow: "SO ARBEITEN WIR",
      cv_d_h: "Echtes organisches Wachstum. Keine Abkürzungen, keine Tricks.",
      cv_d_p: "Kein Black Hat, keine Link-Pools, kein gesponnener Content – niemals. Oryon spielt nach Googles Regeln, denn nur dieses Wachstum hält.",
      cv_d_c1: "Spielt nach Googles Regeln",
      cv_d_c2: "Keine Link-Pools, kein Black Hat",
      cv_d_c3: "Auf dauerhaftes Wachstum ausgelegt",

      cv_e_h: "Ranke bei Google. Werde von der KI zitiert.",
      cv_e_sub: "SEOryon übernimmt das SEO und schreibt die Inhalte – die Kontrolle über deine Website behältst du.",
      cv_e_cta: "3 Tage kostenlos testen →",
      cv_e_fine: "3 Tage kostenlos testen · 3 veröffentlichte Artikel · 1 ausführliches LLM/GEO-Audit · In zwei Klicks kündbar.",
      cv_e_secondary: "Oder nutze Inspect einfach weiter – kostenlos und für immer.",

      faq_h2: "Antworten auf häufige Fragen",
      faq_gA: "Die kostenlose Inspect-Erweiterung",
      faq_gB: "SEOryon im Vergleich",
      faq_gC: "KI-Suche & GEO",
      faq_gD: "Vertrauen & Funktionsweise",
      faq_gE: "Tarife & Praktisches",

      faq1_q: "Ist Inspect wirklich kostenlos – für immer?",
      faq1_a: "Ja. Kein Ablauf-Timer, keine Kreditkarte, kein Konto. SEOryon hat Inspect als wirklich nützliche Eingangstür zu seiner kostenpflichtigen Plattform gebaut.",
      faq2_q: "Verlassen meine Daten den Browser?",
      faq2_a: "Nein. Inspect liest die Seite, die du ohnehin gerade ansiehst, und führt jede Prüfung lokal in deinem Browser aus. Nichts wird auf einen Server hochgeladen.",
      faq3_q: "Welche Browser werden unterstützt?",
      faq3_a: "Chrome und jeder Chromium-Browser – Edge, Brave, Arc und Opera. Eine Firefox-Version ist geplant.",
      faq4_q: "Wie unterscheidet sich Inspect von SEOryon?",
      faq4_a: "Inspect prüft eine einzelne Seite, auf Abruf und kostenlos. SEOryon arbeitet laufend an deiner gesamten Website, verfolgt, wo du in der KI-Suche zitiert wirst, und schreibt die Inhalte, die dich auffindbar machen.",

      faq5_q: "Wie unterscheidet sich SEOryon von einem Keyword-Tool oder einem KI-Schreiber?",
      faq5_a: "Keyword-Tools hören bei einer Liste auf: Sie sagen dir, wonach gesucht wird, und überlassen dir den schwierigen Teil – zu entscheiden, was sich wirklich zu schreiben lohnt, und es dann auch zu schreiben. KI-Schreiber machen es umgekehrt: Sie produzieren schnell Text, aber ohne Bezug zu echten Suchdaten – heraus kommen generische Artikel, die nicht ranken. SEOryon schließt diese Lücke. Ein einziger Agent wertet echte Suchsignale aus – Live-SERPs, ähnliche Fragen, Keyword-Schwierigkeit, Wettbewerber-Lücken, Trends –, entscheidet, welche Themen deinen Traffic wirklich voranbringen und warum, schreibt dann jeden Artikel auf Basis dieser Daten und prüft die Fakten. Du bekommst die Recherche eines Keyword-Tools und die Texte eines Autors aus einer Hand – statt für beides zu zahlen und es selbst zusammenzustückeln.",
      faq6_q: "Brauche ich noch Ahrefs oder Semrush?",
      faq6_a: "Für die meisten Teams nicht. SEOryon erfasst bereits, was diese Tools anzeigen – deine Rankings, deine Wettbewerber, deine Backlinks und die technische Gesundheit deiner Website. Aber statt bei einem Dashboard haltzumachen, auf das du erst reagieren musst, handelt SEOryon: Es macht aus diesen Signalen veröffentlichte Inhalte, die ranken. Ahrefs und Semrush sind Nachschlagewerke; SEOryon ist das Team, das im Nachschlagewerk liest und die Arbeit erledigt. Behalte sie, wenn du die Daten liebst – zum Wachsen brauchst du sie nicht.",
      faq7_q: "Warum SEOryon statt einer Agentur oder manueller Arbeit?",
      faq7_a: "Eine Agentur ist teuer und langsam, und du weißt nie ganz genau, wofür du zahlst; SEO selbst zu machen, frisst Woche für Woche Stunden für Recherche, Texten und Tracking. SEOryon erledigt diesen kompletten Kreislauf von der Recherche bis zur Veröffentlichung laufend – zu einem Bruchteil eines Agenturhonorars. Und anders als bei einer Agentur gibt es keine Blackbox: Du siehst jede Empfehlung und gibst jeden Artikel frei. Du bekommst Output auf Agenturniveau, mit voller Kontrolle und ohne den lästigen Aufwand.",

      faq8_q: "Was ist GEO (Generative Engine Optimization)?",
      faq8_a: "GEO bedeutet, dafür zu optimieren, die Quelle zu sein, die KI-Antworten zitieren – in ChatGPT, Perplexity, Gemini und den KI-Übersichten von Google – statt nur in den zehn blauen Links zu ranken. Immer mehr Menschen fragen einen KI-Assistenten, anstatt eine Ergebnisseite durchzuscrollen, und der Assistent zitiert eine Handvoll Quellen. Bei GEO geht es darum, eine davon zu sein: klare Struktur, wirklich hilfreiche Antworten, das richtige Markup und Zugang für KI-Crawler. SEOryon schreibt genau dafür und verfolgt, wo du bereits zitiert wirst.",
      faq9_q: "Wie werde ich in ChatGPT, Perplexity und Google AI zitiert?",
      faq9_a: "Zitate verdienst du dir wie Rankings – indem du die klarste, hilfreichste Antwort auf eine echte Frage bist. Doch die KI belohnt ein paar Dinge zusätzlich: gut strukturierten Inhalt, den sie herauslösen kann (Überschriften, knappe Antworten, Listen, FAQ-Markup), nachweisbare Expertise und Vertrauenssignale sowie eine Website, die KI-Crawler hereinlässt. Das kostenlose Inspect-Tool von SEOryon zeigt, ob eine Seite strukturell bereit ist, und die SEOryon-Plattform schreibt Inhalte, die zitiert werden sollen, und verfolgt, wo du tatsächlich auftauchst.",
      faq10_q: "Wie unterscheidet sich das Ranking in KI-Antworten vom Google-Ranking?",
      faq10_a: "Google rankt Seiten; KI-Antworten zitieren Quellen innerhalb einer generierten Antwort. Die Grundlagen überschneiden sich – Qualität, Struktur, Autorität –, aber die KI belohnt Inhalte, die die Frage direkt beantworten. SEOryon optimiert für beides.",

      faq11_q: "Wird KI-geschriebener Inhalt von Google abgestraft?",
      faq11_a: "Nein – Google belohnt hilfreiche Inhalte, egal wie sie entstanden sind, und straft Spam ab. SEOryon schreibt echte, faktenbasierte Artikel, die du vor der Veröffentlichung prüfst – keinen zusammengesponnenen Fülltext.",
      faq12_q: "Haltet ihr euch an Googles Regeln?",
      faq12_a: "Immer. Keine Black-Hat-Tricks, keine Link-Tausch-Pools, kein gesponnener Content – nur die Grundlagen von gutem SEO, denn nur dieses Wachstum hält.",
      faq13_q: "Bearbeitet oder verändert ihr meine Website?",
      faq13_a: "Nein. SEOryon zeigt dir die Daten und schreibt die Inhalte; veröffentlichen tust du, und die volle Kontrolle über deine Website bleibt bei dir. Wir bearbeiten deine Website nie für dich.",
      faq14_q: "Wer entscheidet, was veröffentlicht wird?",
      faq14_a: "Du. Im Semi-Autopilot gibst du jeden Beitrag per Klick frei; im Voll-Autopilot veröffentlicht SEOryon nach deinen Regeln. So oder so geht nichts ohne deine Zustimmung online.",

      faq15_q: "Was ist in der kostenlosen Testphase enthalten?",
      faq15_a: "Ein 3-tägiger kostenloser Test: 3 fertig für dich geschriebene, veröffentlichte Artikel und 1 ausführliches LLM/GEO-Audit, mit vollem Zugriff. In zwei Klicks kündbar – ohne Kreditkarten-Theater.",
      faq16_q: "Semi-Autopilot vs. Voll-Autopilot – was ist der Unterschied?",
      faq16_a: "Semi schlägt fertige Empfehlungen vor, die du per Klick annimmst oder überspringst, und lernt mit der Zeit deinen Geschmack. Voll-Autopilot übernimmt den gesamten Kreislauf. Starte mit Semi und übergib so viel, wie du möchtest.",
      faq17_q: "Welche Plattformen und Sprachen werden unterstützt?",
      faq17_a: "SEOryon veröffentlicht auf den großen CMS-Plattformen und schreibt in mehreren Sprachen und Märkten. Nenn uns im Test deinen Stack, und wir bestätigen dir, ob es passt.",

      footer_note: "Inspect läuft vollständig in deinem Browser. Von SEOryon – deiner Engine für organisches Wachstum.",
      footer_privacy: "Datenschutz",
    },

    /* ---- FR · natively localized (vouvoiement, marketer tone) ---- */
    fr: {
      meta_title: "Inspect — extension SEO gratuite pour Chrome · SEOryon",
      meta_desc: "Auditez le SEO on-page de n’importe quelle page en un clic : une extension Chrome gratuite qui vérifie les signaux techniques, meta, contenu et liens, ainsi que la préparation GEO (recherche IA). Vérificateur de meta tags et de liens cassés, 100 % en local, sans inscription. Par SEOryon.",

      nav_how: "Comment ça marche",
      nav_faq: "FAQ",
      cta_add: "Ajouter à Chrome — gratuit",
      cta_soon: "Bientôt sur Chrome",

      hero_pill: "Gratuit à vie · 100 % local · Sans inscription",
      hero_h1: 'Analysez le SEO de n’importe quelle page <span class="brand-text">en un clic</span>.',
      hero_sub: "Une extension Chrome gratuite pour vos audits SEO on-page : vérifiez les signaux techniques, meta, contenu et liens de n’importe quelle page, plus un score GEO (préparation à la recherche IA). Tout en local, sans inscription, rien ne sort de votre onglet.",
      browsers_label: "Compatible avec",
      cta_how: "Voir comment ça marche →",
      hero_micro: "Fonctionne sur toutes les pages que vous consultez · Chrome & Edge · Gratuit à vie — l’installation, c’est tout le produit.",

      shot_hero_alt: "L’extension Chrome Inspect auditant une page — Page Score et score GEO, avec des panneaux qualité du contenu, état des liens, aperçu social et audit du site entier",
      shot_hero_ph: "Emplacement de capture — panneau Inspect · déposez assets/panel-hero.png",

      tab1_name: "Technique", tab1_a1: "Explorabilité", tab1_a2: "Hreflang", tab1_a3: "Viewport",
      tab2_name: "Meta", tab2_a1: "Balise title", tab2_a2: "Méta-description", tab2_a3: "Canonique",
      tab3_name: "Contenu", tab3_a1: "Texte alt", tab3_a2: "Titres", tab3_a3: "Lisibilité",
      tab4_name: "Liens", tab4_a1: "Texte des liens", tab4_a2: "Liens explorables", tab4_a3: "Liens cassés",
      tab5_name: "GEO", tab5_a1: "llms.txt", tab5_a2: "Robots IA", tab5_a3: "Contenu citable",

      chip1_title: "Sans inscription",
      chip1_sub: "Installez et lancez votre première analyse en un clic",
      chip2_title: "100 % local",
      chip2_sub: "Les audits s’exécutent dans votre navigateur — rien n’est envoyé à un serveur",

      feat_h2: "Tout pour inspecter, dans un seul panneau",
      feat_sub: "Un audit SEO on-page réparti sur cinq onglets : technique, meta, contenu, liens et un score GEO (préparation à la recherche IA). Chaque vérification est signalée par une couleur — réussite, avertissement ou échec — avec la correction à appliquer.",

      feat1_h3: "Repérez ce qui bloque l’indexation",
      feat1_p: "Explorabilité, balises canoniques, hreflang et viewport en un coup d’œil — les signaux qui déterminent si une page peut se positionner.",
      feat1_l1: "Explorabilité & directives robots",
      feat1_l2: "Canonique & hreflang",
      feat1_l3: "Viewport & compatibilité mobile",
      feat1_alt: "Onglet Technique d’Inspect — explorabilité, hreflang et viewport",
      feat1_ph: "Emplacement de capture · déposez assets/tab-technical.png",

      feat2_h3: "Voyez ce que voient Google et les réseaux sociaux",
      feat2_p: "Title, description et cartes Open Graph / Twitter — un vérificateur de meta tags intégré, avec comptage des caractères en direct et alertes dès qu’un élément cloche.",
      feat2_l1: "Contrôle de longueur du title & de la description",
      feat2_l2: "Aperçu des cartes Open Graph & Twitter",
      feat2_l3: "Détection des balises en double ou manquantes",
      feat2_alt: "Onglet Meta d’Inspect — title, description et cartes sociales",
      feat2_ph: "Emplacement de capture · déposez assets/tab-meta.png",

      feat3_h3: "Lisez la structure comme un robot",
      feat3_p: "Un plan complet des titres H1–H6, la couverture des textes alternatifs et la lisibilité — pour repérer tôt le contenu trop léger et une hiérarchie cassée.",
      feat3_l1: "Plan des titres H1–H6",
      feat3_l2: "Couverture des textes alt des images",
      feat3_l3: "Lisibilité & alerte contenu trop léger",
      feat3_alt: "Onglet Contenu d’Inspect — titres, texte alt et lisibilité",
      feat3_ph: "Emplacement de capture · déposez assets/tab-content.png",

      feat4_h3: "Cartographiez chaque lien de la page",
      feat4_p: "Internes ou externes, ancres génériques, liens explorables et un vérificateur de liens cassés en temps réel — pour qu’aucun lien ne perde en autorité ni ne tombe en 404 sans que vous le sachiez.",
      feat4_l1: "Répartition internes / externes",
      feat4_l2: "Texte d’ancre & liens explorables",
      feat4_l3: "Détection des liens cassés",
      feat4_alt: "Onglet Liens d’Inspect — texte des liens, liens explorables et liens cassés",
      feat4_ph: "Emplacement de capture · déposez assets/tab-links.png",

      feat5_h3: "Voyez si la recherche IA peut vous citer",
      feat5_p: "Le score GEO indique si une page est structurellement prête à être citée par les réponses IA — ChatGPT, Perplexity, Gemini, Google AI. Il vérifie l’accès des robots IA, les données structurées et le caractère citable de votre contenu, avec la correction pour chaque point.",
      feat5_l1: "Accès des robots IA — llms.txt & robots (GPTBot, ClaudeBot, PerplexityBot…)",
      feat5_l2: "Données structurées — le bon schéma selon le type de page",
      feat5_l3: "Contenu citable & score de préparation IA, de 0 à 100",
      feat5_alt: "Onglet GEO d’Inspect — score de préparation IA, accès des robots et données structurées",
      feat5_ph: "Emplacement de capture · déposez assets/tab-geo.png",

      ss_badge: "Nouveau · Audit de tout le site",
      ss_h2: "Auditez tout votre site — pas seulement une page.",
      ss_sub: "En un clic, Inspect explore tout votre site — jusqu'à ~100 pages — directement dans votre navigateur et vous livre un audit complet : un score de site, des répartitions de santé et chaque problème à l'échelle du site, avec la correction. Tout en local et gratuit, sans inscription — rien ne quitte votre navigateur.",
      ss_l1: "Liens internes cassés & chaînes de redirection",
      ss_l2: "Titles & méta-descriptions en double",
      ss_l3: "Pages orphelines & trop profondes",
      ss_l4: "Cohérence du sitemap — 404, noindex, non canonique",
      ss_l5: "Score de site & tableau de bord de santé — codes de statut, HTTPS, canonique, indexabilité, couverture alt",
      ss_l6: "Exportez l'audit complet en CSV ou en rapport HTML partageable",
      ss_bridge: "Site plus grand ? SEOryon audite l'intégralité de votre site en continu.",
      ss_alt: "Audit de tout le site Inspect — score de site, répartitions de santé et problèmes du site groupés",
      ss_ph: "Espace réservé · déposer assets/tab-sitescan.png",
      ss_alt2: "Problèmes du site Inspect — liens cassés, titles en double et pages orphelines groupés par gravité",

      free_eyebrow: "Gratuit, volontairement",
      free_kicker: "Pourquoi est-ce gratuit ?",
      free_body: "Parce que la meilleure publicité pour SEOryon, c’est de vous montrer ce qui vous échappe. Inspect signale ce qui ne va pas sur une page et comment le corriger. SEOryon fait la même chose sur l’ensemble de votre site, puis rédige les articles de blog qui vous placent dans Google et dans les réponses IA. Nous fournissons les données et écrivons le contenu ; vous, vous gardez la main sur votre site.",

      how_h2: "Comment ça marche",
      how1_h3: "Installez l’extension",
      how1_p: "Un clic depuis le Chrome Web Store. Aucun compte, aucune configuration.",
      how2_h3: "Ouvrez n’importe quelle page",
      how2_p: "Cliquez sur l’icône Inspect pour ouvrir le panneau latéral sur n’importe quel onglet.",
      how3_h3: "Lisez l’audit",
      how3_p: "Des vérifications sur les cinq onglets, à code couleur réussite / avertissement / échec — chacune avec sa correction.",

      uc_h2: "Conçu pour votre façon de travailler",
      uc1_tag: "Propriétaires de site & fondateurs", uc1_h3: "Analysez n’importe quelle page de votre site",
      uc1_p: "Lancez un audit SEO + GEO complet sur votre page d’accueil, vos fiches produits ou vos articles en un clic — aucune expertise requise. Vous voyez précisément quoi corriger et pourquoi, là où vous regardez.",
      uc2_tag: "Marketing & équipes de contenu", uc2_h3: "Contrôlez tout avant de publier",
      uc2_p: "Repérez les balises meta manquantes, les liens cassés, les titres faibles et les mauvaises canoniques avant la mise en ligne — et voyez si la page est structurée pour être citée par l’IA.",
      uc3_tag: "Développeurs & créateurs", uc3_h3: "Déboguez sans quitter l’onglet",
      uc3_p: "Vérifiez les codes de statut, les canoniques, les données structurées et la crawlabilité là où vous travaillez déjà — sans outil supplémentaire, sans connexion.",

      cv_a_eyebrow: "VOICI ORYON",
      cv_a_h: "Un seul agent. Tout votre paysage SEO, géré.",
      cv_a_sub: "Inspect lit une page. Oryon surveille tout votre paysage de recherche — concurrents, SERP en direct, tendances et plus encore — pour que vous ne deviniez plus jamais quoi écrire.",

      hub_n1: "SERP en direct", hub_n2: "Autres questions posées", hub_n3: "Écarts concurrentiels", hub_n4: "Difficulté des mots-clés",
      hub_n5: "Tendances", hub_n6: "Search Console", hub_n7: "Questions de votre audience",

      cv_b1_h: "Il décide quoi écrire",
      cv_b1_p: "De vraies données de recherche en entrée, des idées de sujets priorisées en sortie — chacune avec son raisonnement.",
      cv_b2_h: "Vous réglez le niveau d’autonomie",
      cv_b2_p: "En <strong>semi</strong>, il propose et vous validez en un clic. En <strong>pilote complet</strong>, il fait tout de bout en bout.",
      cv_b3_h: "Content Studio",
      cv_b3_p: "Dictez une idée ; Oryon en fait un véritable article optimisé pour la recherche — vous avez le dernier mot.",

      cv_c_h: "Sachez d’où vient votre trafic — IA comprise.",
      cv_c_p: "Oryon suit où vous êtes cité dans ChatGPT, Perplexity, Gemini, Google AI et Claude — et distingue les visiteurs venus d’un LLM de ceux venus de la recherche classique.",
      cv_c_p1: "Suivi des citations IA",
      cv_c_p2: "Source LLM vs classique",
      cv_c_p3: "Concurrents · backlinks · Core Web Vitals",

      mon_title: "Visibilité IA",
      mon_live: "En direct",
      mon_note: "À titre indicatif — données d’exemple, pas des résultats clients",
      mon_q1: "« meilleure extension seo gratuite »",
      mon_q2: "« comment vérifier les meta tags »",
      mon_q3: "« outil d’audit seo pour chrome »",
      mon_st_cited: "cité",
      mon_st_top: "source nº 1",

      cv_d_eyebrow: "NOTRE FAÇON DE TRAVAILLER",
      cv_d_h: "Une vraie croissance organique. Aucun raccourci, aucune astuce.",
      cv_d_p: "Pas de black hat, pas de réseaux de liens, pas de contenu généré à la chaîne — jamais. Oryon respecte les règles de Google, car c’est la seule croissance qui dure.",
      cv_d_c1: "Respecte les règles de Google",
      cv_d_c2: "Pas de réseaux de liens, pas de black hat",
      cv_d_c3: "Pensé pour durer",

      cv_e_h: "Positionnez-vous sur Google. Faites-vous citer par l’IA.",
      cv_e_sub: "SEOryon fait le SEO et rédige le contenu — vous gardez la main sur votre site.",
      cv_e_cta: "Démarrer l’essai gratuit de 3 jours →",
      cv_e_fine: "Essai gratuit de 3 jours · 3 articles publiés · 1 audit LLM/GEO approfondi · Annulation en deux clics.",
      cv_e_secondary: "Ou continuez à utiliser Inspect gratuitement — il est à vous, pour toujours.",

      faq_h2: "Vos questions, nos réponses",
      faq_gA: "L’extension Inspect gratuite",
      faq_gB: "SEOryon face aux alternatives",
      faq_gC: "Recherche IA & GEO",
      faq_gD: "Confiance & fonctionnement",
      faq_gE: "Offres & questions pratiques",

      faq1_q: "Inspect est-il vraiment gratuit — pour toujours ?",
      faq1_a: "Oui. Aucun compte à rebours d’essai, aucune carte bancaire, aucun compte. SEOryon a conçu Inspect comme une véritable porte d’entrée, utile, vers sa plateforme payante.",
      faq2_q: "Mes données quittent-elles mon navigateur ?",
      faq2_a: "Non. Inspect lit la page que vous consultez déjà et exécute chaque vérification en local, dans votre navigateur. Rien n’est envoyé à un serveur.",
      faq3_q: "Quels navigateurs sont pris en charge ?",
      faq3_a: "Chrome et tous les navigateurs Chromium — Edge, Brave, Arc et Opera. Une version Firefox est prévue.",
      faq4_q: "En quoi Inspect est-il différent de SEOryon ?",
      faq4_a: "Inspect audite une page, à la demande et gratuitement. SEOryon travaille en continu sur l’ensemble de votre site, suit où vous êtes cité dans la recherche IA et rédige le contenu qui vous rend visible.",

      faq5_q: "En quoi SEOryon diffère-t-il d’un outil de mots-clés ou d’un rédacteur IA ?",
      faq5_a: "Les outils de mots-clés s’arrêtent à une liste : ils vous disent ce que les gens recherchent, puis vous laissent le plus dur — décider de ce qui mérite vraiment d’être écrit, et l’écrire. Les rédacteurs IA font l’inverse : ils produisent du texte vite, mais sans ancrage dans des données de recherche réelles, d’où des articles génériques qui ne se positionnent pas. SEOryon referme la boucle. Un seul agent analyse de vrais signaux de recherche — SERP en direct, autres questions posées, difficulté des mots-clés, écarts avec les concurrents, tendances —, décide quels sujets feront réellement bouger votre trafic et pourquoi, puis rédige chaque article à partir de ces données et en vérifie les faits. Vous obtenez la recherche d’un outil de mots-clés et la production d’un rédacteur, reliées entre elles, au lieu de payer les deux et de tout assembler vous-même.",
      faq6_q: "Ai-je encore besoin d’Ahrefs ou de Semrush ?",
      faq6_a: "Pour la plupart des équipes, non. SEOryon suit déjà ce que ces outils font remonter — vos positions, vos concurrents, vos backlinks et la santé technique de votre site — mais au lieu de s’arrêter à un tableau de bord sur lequel vous devez encore agir, il agit : il transforme ces signaux en contenu publié qui se positionne. Ahrefs et Semrush sont des bibliothèques de référence ; SEOryon, c’est l’équipe qui lit la bibliothèque et fait le travail. Gardez-les si vous aimez les données, mais vous n’en aurez pas besoin pour grandir.",
      faq7_q: "Pourquoi SEOryon plutôt qu’une agence ou du manuel ?",
      faq7_a: "Une agence coûte cher, avance lentement, et vous ne savez jamais vraiment ce que vous payez ; faire son SEO soi-même engloutit des heures chaque semaine en recherche, rédaction et suivi. SEOryon fait tourner toute cette boucle, de la recherche à la publication, en continu, pour une fraction d’un forfait d’agence — et contrairement à une agence, rien n’est une boîte noire : vous voyez chaque recommandation et validez chaque article. Vous obtenez une production à l’échelle d’une agence, avec un contrôle total et sans la corvée.",

      faq8_q: "Qu’est-ce que le GEO (generative engine optimization) ?",
      faq8_a: "Le GEO consiste à optimiser pour devenir la source que citent les réponses IA — dans ChatGPT, Perplexity, Gemini et les aperçus IA de Google — au lieu de seulement se positionner dans les dix liens bleus. De plus en plus de gens interrogent un assistant IA plutôt que de parcourir une page de résultats, et l’assistant cite une poignée de sources. Le GEO, c’est être l’une d’elles : une structure claire, des réponses vraiment utiles, le bon balisage et un accès ouvert aux robots IA. SEOryon rédige dans cet esprit et suit où vous êtes déjà cité.",
      faq9_q: "Comment être cité dans ChatGPT, Perplexity et Google AI ?",
      faq9_a: "Les citations se gagnent comme les positions — en étant la réponse la plus claire et la plus utile à une vraie question — mais l’IA récompense quelques éléments supplémentaires : un contenu bien structuré qu’elle peut extraire (titres, réponses concises, listes, balisage FAQ), une expertise et des signaux de confiance démontrés, et un site qui laisse entrer les robots IA. L’outil gratuit Inspect de SEOryon indique si une page est structurellement prête, et la plateforme SEOryon rédige un contenu fait pour être cité et suit où vous apparaissez réellement.",
      faq10_q: "En quoi se classer dans les réponses IA diffère-t-il de Google ?",
      faq10_a: "Google classe des pages ; les réponses IA citent des sources au sein d’une réponse générée. Les fondamentaux se recoupent — qualité, structure, autorité — mais l’IA récompense le contenu qui répond directement à la question. SEOryon optimise pour les deux.",

      faq11_q: "Le contenu rédigé par IA est-il pénalisé par Google ?",
      faq11_a: "Non — Google récompense le contenu utile, quelle que soit la façon dont il a été créé, et pénalise le spam. SEOryon rédige de vrais articles fondés sur des faits, que vous relisez avant publication, pas du remplissage produit à la chaîne.",
      faq12_q: "Respectez-vous les règles de Google ?",
      faq12_a: "Toujours. Aucune technique black hat, aucun réseau d’échange de liens, aucun contenu généré sans valeur — uniquement les fondamentaux d’un bon SEO, car c’est la seule croissance qui dure.",
      faq13_q: "Modifiez-vous ou touchez-vous à mon site ?",
      faq13_a: "Non. SEOryon vous montre les données et rédige le contenu ; c’est vous qui publiez et qui gardez le contrôle total de votre propre site. Nous ne modifions jamais votre site à votre place.",
      faq14_q: "Qui décide de ce qui est publié ?",
      faq14_a: "Vous. En semi-pilote, vous validez chaque contenu en un clic ; en pilote complet, SEOryon publie selon vos règles. Dans tous les cas, rien ne part en ligne sans votre accord.",

      faq15_q: "Qu’est-ce qui est inclus dans l’essai gratuit ?",
      faq15_a: "Un essai gratuit de 3 jours : 3 articles publiés rédigés pour vous et 1 audit LLM/GEO approfondi, avec un accès complet. Annulable en deux clics — sans gymnastique de carte bancaire.",
      faq16_q: "Semi-pilote vs pilote complet — quelle différence ?",
      faq16_a: "Le semi propose des recommandations finalisées que vous validez ou ignorez en un clic, et apprend vos préférences au fil du temps. Le pilote complet exécute toute la boucle. Commencez en semi et déléguez autant que vous le souhaitez.",
      faq17_q: "Quelles plateformes et langues prenez-vous en charge ?",
      faq17_a: "SEOryon publie sur les principales plateformes CMS et écrit dans plusieurs langues et marchés. Indiquez-nous votre stack pendant l’essai et nous vous confirmerons la compatibilité.",

      footer_note: "Inspect fonctionne entièrement dans votre navigateur. Conçu par SEOryon — votre moteur de croissance organique.",
      footer_privacy: "Confidentialité",
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

    applyChromeCta(dict);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* ignore */ }
  };

  // Drive every "Add to Chrome" CTA from CHROME_STORE_URL. Until it's set, the
  // buttons show "Coming soon to Chrome" (calm, non-clickable). When set, they
  // become real store links. Runs on every apply() so the label tracks the locale.
  const applyChromeCta = (dict) => {
    document.querySelectorAll(".js-chrome").forEach((el) => {
      if (CHROME_STORE_URL) {
        el.textContent = dict.cta_add;
        el.setAttribute("href", CHROME_STORE_URL);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
        el.classList.remove("is-soon");
        el.removeAttribute("aria-disabled");
      } else {
        el.textContent = dict.cta_soon;
        el.setAttribute("href", "#");
        el.removeAttribute("target");
        el.removeAttribute("rel");
        el.classList.add("is-soon");
        el.setAttribute("aria-disabled", "true");
      }
    });
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
    const optional = img.closest("[data-optional]");
    const onMissing = () => {
      // An optional shot (e.g. the secondary site-issues image) hides its whole
      // figure when absent, so the section stays clean with just the primary shot.
      if (optional) { optional.hidden = true; return; }
      img.style.display = "none";
      const ph = img.parentElement && img.parentElement.querySelector(".shot-ph");
      if (ph) ph.hidden = false;
    };
    img.addEventListener("error", onMissing);
    if (img.complete && img.naturalWidth === 0) onMissing();
  });

  // Chrome CTA — while CHROME_STORE_URL is null the buttons are in the
  // "Coming soon" state (href="#"); swallow the click so they never 404.
  // Once CHROME_STORE_URL is set, href is a real link and this guard no-ops.
  document.querySelectorAll(".js-chrome").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (!CHROME_STORE_URL || el.getAttribute("href") === "#") {
        e.preventDefault();
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
