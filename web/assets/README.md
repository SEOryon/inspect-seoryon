# Inspect — screenshot assets

These are the real product screenshots referenced by the landing page. Each
`<img>` falls back to a clearly-labeled placeholder (wired in `app.js`) if a
file is ever missing, so the page never shows a broken image.

| File                | Where it appears on the page                      | Status      |
| ------------------- | ------------------------------------------------- | ----------- |
| `panel-hero.png`    | Hero — Page Score + GEO paired dashboard          | ✅ provided |
| `tab-technical.png` | Feature row 1 — Technical tab (Indexability)      | ✅ provided |
| `tab-meta.png`      | Feature row 2 — Meta tab (Meta Overview)          | ✅ provided |
| `tab-content.png`   | Feature row 3 — Content tab (Flesch + keywords)   | ✅ provided |
| `tab-links.png`     | Feature row 4 — Links tab (Links Health)          | ✅ provided |
| `tab-geo.png`       | Feature row 5 — GEO tab (AI-readiness + crawlers) | ✅ provided |

All six were placed 2026-06-26 from the founder's captures (≈1850px-wide PNGs,
retina-crisp). Frames apply the rounded corner + border + soft shadow and size
to the image automatically (`.shot { width:100%; height:auto }`).

To refresh any shot, drop a new PNG here with the same filename — no code change
needed. The hero reads best landscape (~16:9–16:10); tab shots can be any ratio.
