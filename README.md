# inspect.seoryon.com

Landing page for **Inspect** — the free SEO inspector Chrome extension by
[SEOryon](https://seoryon.com).

A visual sibling of [score.seoryon.com](https://score.seoryon.com): same
LOCKED brand system v4 (`web/style.css` is reused **byte-for-byte**). Inspect
has no backend — unlike the score tool there is no URL input and no `/api`
call. The page is **100% static** and sells the extension install.

## Stack

Vanilla HTML + CSS + JS. No framework, no build step. Fonts via Google Fonts.
Deployed on Vercel as a static project.

```
web/
  index.html      Re-skinned page (Inspect copy, trilingual, i18n-tagged)
  style.css       SEOryon LOCKED brand system v4 — copied byte-for-byte, do NOT edit
  inspect.css     Additive layer: new components (screenshots, FAQ, tabs, switcher)
  app.js          Client-side i18n (EN/DE/FR) + screenshot fallback + CTA wiring
  logo.png        SEOryon mark (copied from score.seoryon.com)
  robots.txt / sitemap.xml
  assets/         Screenshot slots — see assets/README.md
vercel.json       Static serving only (no Python lambda)
```

## Trilingual

English (default) · German · French. Language is auto-detected from
`navigator.language`, overridable via the topbar switcher, and persisted in
`localStorage`. All strings live in the `I18N` dictionary in `app.js`.
**DE/FR are AI-translated and pending native review.**

## Outstanding TODOs

- **Chrome Web Store URL** — every "Add to Chrome" link is `href="#"`. Set the
  real URL on each `.js-chrome` element in `index.html` once published.
- **Screenshots** — drop the real PNGs into `web/assets/` (see its README).
- **DE/FR copy** — native review pending.

## Local preview

```sh
cd web && python3 -m http.server 8000   # then open http://localhost:8000
```
