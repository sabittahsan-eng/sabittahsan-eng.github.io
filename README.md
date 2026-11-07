# Sabit Hossain — Portfolio

Personal portfolio site. Design work, photography, film and experience.
Static HTML/CSS/JS — no build step, no dependencies, no framework.

**→ To publish this online, read [START-HERE.md](START-HERE.md).**

## Structure

```
index.html              page markup — section shells only
.nojekyll               tells GitHub Pages to serve files as-is
assets/
  css/style.css         all styling. Design tokens live in :root at the top.
  js/data.js            ALL CONTENT. This is the file to edit.
  js/main.js            all interaction. Reads data.js and builds the page.
  img/profile/          portrait + hero background
  img/design/           design work (covers and case-study galleries)
  img/photo/            photography
  img/moments/          competition photos
  docs/                 CV PDF
```

## How it works

`index.html` contains empty section shells. `main.js` reads `SITE` from `data.js` and
renders every card, tile, filter and list into them. So adding a project means adding
an object to an array — never touching HTML.

Images use a placeholder-first pattern: each tile renders a labelled placeholder, then
an `<img>` over it. If the file is missing, the image removes itself and the placeholder
stays. A wrong filename degrades gracefully instead of leaving a broken-image icon.

## Local development

Double-click `index.html`. That's it — scripts are classic (non-module) specifically so
the site works over `file://` with no server.

## Interaction

Custom cursor, film-grain overlay, cursor-tracking hero glow, scroll progress bar,
animated counters, scroll reveals, filterable design grid with case-study modal,
filterable photo grid with keyboard/swipe lightbox, click-to-load video embeds,
animated skill bars, mobile menu.

All of it respects `prefers-reduced-motion`, and the cursor/glow are disabled on touch.

## Theme

Dark editorial. Tokens are at the top of `style.css`:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0A0A0B` | page background |
| `--ink` | `#F4F1EA` | primary text |
| `--accent` | `#E9A23B` | the single accent — amber |
| `--font-display` | Instrument Serif | headings |
| `--font-sans` | Inter | body |
| `--font-mono` | JetBrains Mono | labels and metadata |

Changing `--accent` in one place re-tints the whole site.

## Image sources

All images were pulled from the owner's Google Drive, resized to a 1600px long edge
and re-encoded as JPEG q80 — 114 MB down to 19 MB. Keep new images under ~500 KB;
GitHub Pages has a soft 1 GB limit but page weight matters more than quota.
