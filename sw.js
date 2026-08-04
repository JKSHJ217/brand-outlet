const CACHE = "brand-outlet-v1";

const OFFLINE_PAGE = "/brand-outlet/calibre-run.html";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll([
        "/brand-outlet/",
        "/brand-outlet/index.html",
        "/brand-outlet/calibre-run.html"
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(OFFLINE_PAGE);
    })
  );
});
