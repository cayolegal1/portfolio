// Service Worker mínimo para habilitar la instalación como PWA.
// Chrome exige un SW con handler de `fetch` para disparar `beforeinstallprompt`.
// Estrategia: network-first con fallback a caché para funcionar offline.

const CACHE = "portfolio-v1";
const OFFLINE_URLS = ["/"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(OFFLINE_URLS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const { request } = event;

  // Solo GET del mismo origen: dejamos pasar POST, analytics, etc.
  if (request.method !== "GET") return;
  if (new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(request, copy));
        return response;
      })
      .catch(async () => (await caches.match(request)) || caches.match("/")),
  );
});
