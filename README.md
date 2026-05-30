# 🌴 Miami Staycation

A single-page, installable web app (PWA) — a personalized, interactive itinerary
for a 48-hour Miami Beach staycation. Tap through activities, spin a "what should
we do" wheel, earn badges, and check things off as the weekend unfolds.

It's a hand-built static site: **no framework, no build step, no dependencies to
install.** Just HTML, CSS, and vanilla JavaScript.

---

## Quick start

Because there's no build step, you can run it with any static file server:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then open <http://localhost:8000>.

> Tip: use a real server rather than opening `index.html` via `file://` — the
> service worker (`sw.js`) and `manifest.json` only work over `http(s)`.

---

## Project structure

| File            | Purpose                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------- |
| `index.html`    | Page shell and layout. Loads the versioned `styles.css` and `app.js` (see cache busting). |
| `app.js`        | All the logic **and all the content**. A single `CONFIG` object holds the itinerary, restaurant/café categories, badges, compliments, etc. The rest of the file renders and animates it. |
| `styles.css`    | All styling — the pink/beach theme, cards, progress bars, wheel, disco mode, animations.  |
| `manifest.json` | PWA manifest (name, icons, theme color) so it can be added to a phone home screen.         |
| `sw.js`         | Service worker. **Network-first** caching so the installed app always pulls the freshest version when online, and falls back to cache when offline. |

### Editing the content

Almost everything you'd want to change lives in the `CONFIG` object at the top of
`app.js`:

- **`itinerary`** — the day-by-day plan (Friday / Saturday / Sunday). Each day has
  `entries` with a `time`, `title`, `note`, and optional `place` + `mapsQuery`
  (which renders a "directions" link).
- **`categories`** — the tappable lists: Matcha, Coffee, dining, dessert, etc.
  Each category has `items`, and items can have a list of `options`.
- **`badges`, `compliments`, `gifs`, `hints`** — the playful extras.

You generally don't need to touch the rendering code below `CONFIG` to update the
plan — just edit the data.

---

## ⚠️ Cache busting (read this before you deploy a change!)

**Every time you change `app.js` or `styles.css`, you must bump their version
query string in `index.html`.** This is a manual step and easy to forget.

In `index.html`:

```html
<link rel="stylesheet" href="styles.css?v=12" />
...
<script src="app.js?v=12"></script>
```

Bump **both** numbers together on each release (they're kept in lockstep), e.g.
`?v=12` → `?v=13`.

### Why this is necessary

`sw.js` is intentionally **network-first** (it fetches with `cache: "no-store"`),
so the service worker itself won't serve a stale `app.js`. But that's not the only
cache in play:

- The **browser's HTTP cache** (and any CDN / GitHub Pages edge cache) can still
  hold a previously downloaded `app.js?v=12`. As long as the URL is identical,
  the browser is free to reuse the old bytes and never ask the network.
- Changing the query string (`?v=12` → `?v=13`) makes it a **brand-new URL**, which
  forces a fresh download of the updated file.
- `index.html` itself is requested fresh on each visit, so the new `?v=` reference
  is what propagates the update to everyone.

In short: the service worker keeps the app working offline; the `?v=` bump is what
guarantees a code or style change actually reaches users. Skip the bump and people
on a previous visit may keep seeing the old version until their cache happens to
expire.

> Rule of thumb: **touched `app.js` or `styles.css`? Bump `?v=` in `index.html` in
> the same commit.**

---

## Deployment

This is a static site served straight from the **`main`** branch (GitHub Pages,
repo root) — there is **no CI pipeline and no build**. Deploying is simply:
get the change onto `main`, and it's live.

A typical change therefore looks like:

1. Edit content in `app.js` (or styles in `styles.css`).
2. **Bump `?v=` for both assets in `index.html`** (see above).
3. Commit, push, and merge to `main`.

Because `sw.js` is network-first, installed home-screen (PWA) copies pull the
latest version on their next launch.

---

Made with 💛 for a very good weekend.
