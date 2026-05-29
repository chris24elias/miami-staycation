/* ===========================================================
   Network-first service worker.
   Always serves the freshest version when online; falls back
   to the cached copy only when offline. This is what lets the
   home-screen (PWA) app pull the latest changes on each launch.
   =========================================================== */

const CACHE = "staycation-cache-v1";

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  // Let cross-origin requests (fonts, confetti CDN, weather API, gifs) go straight to the network.
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Network-first: try the network (bypassing HTTP cache), cache the result for offline,
  // and fall back to the cached copy if the network is unavailable.
  event.respondWith(
    fetch(req, { cache: "no-store" })
      .then((res) => {
        const copy = res.clone();
        caches
          .open(CACHE)
          .then((c) => c.put(req, copy))
          .catch(() => {});
        return res;
      })
      .catch(() => caches.match(req))
  );
});
