// ============================================================================
// Service Worker del portfolio
// ----------------------------------------------------------------------------
// Un Service Worker es un script que corre en segundo plano, en su propio hilo,
// separado de la página (no tiene acceso a `window` ni al DOM). Funciona como un
// proxy entre la web y la red: puede interceptar cada petición y decidir si la
// responde desde la red, desde la caché, o una mezcla.
//
// ¿Por qué existe este archivo? Porque Chrome exige un Service Worker con un
// handler de `fetch` para considerar la web "instalable" y disparar el evento
// `beforeinstallprompt` (el que habilita el diálogo de instalación como PWA).
//
// Estrategia elegida: network-first con fallback a caché. Priorizamos contenido
// fresco de la red y usamos la caché solo como red de seguridad para offline.
// ============================================================================

// Nombre del "cajón" de caché. El sufijo de versión (-v1) permite invalidar todo
// lo viejo de golpe: al subir a "portfolio-v2", el handler `activate` borra las
// cachés que no coincidan con este nombre.
const CACHE = "portfolio-v1";

// URLs que pre-cacheamos al instalar para garantizar que la app abra sin red.
// Con la home ("/") alcanza como fallback offline para este portfolio.
const OFFLINE_URLS = ["/"];

// ---- Evento `install`: se dispara UNA vez, cuando el navegador instala esta
// ---- versión del Service Worker. Momento ideal para pre-cachear.
self.addEventListener("install", event => {
  // `waitUntil` mantiene el SW "instalándose" hasta que la promesa se resuelva;
  // sin esto el navegador podría matarlo antes de terminar de cachear.
  event.waitUntil(
    // Abrimos (o creamos) nuestro cajón de caché...
    caches.open(CACHE).then(cache =>
      // ...y descargamos + guardamos las URLs de pre-cacheo dentro de él.
      cache.addAll(OFFLINE_URLS),
    ),
  );

  // Por defecto una versión nueva del SW queda "en espera" hasta que se cierren
  // todas las pestañas con la versión vieja. `skipWaiting` la activa de una,
  // para que los cambios se apliquen sin esperar.
  self.skipWaiting();
});

// ---- Evento `activate`: se dispara cuando esta versión toma el control.
// ---- Momento ideal para limpiar cachés de versiones anteriores.
self.addEventListener("activate", event => {
  event.waitUntil(
    caches
      // Nombres de TODAS las cachés existentes (ej: ["portfolio-v1", "portfolio-v0"]).
      .keys()
      .then(keys =>
        // Esperamos a que se borren todas en paralelo antes de terminar `activate`.
        Promise.all(
          keys
            // Nos quedamos con las que NO son la versión actual...
            .filter(key => key !== CACHE)
            // ...y las eliminamos para no acumular cachés obsoletas.
            .map(key => caches.delete(key)),
        ),
      ),
  );

  // Toma control inmediato de las pestañas ya abiertas (sin esperar una recarga),
  // para que el SW empiece a interceptar peticiones cuanto antes.
  self.clients.claim();
});

// ---- Evento `fetch`: se dispara por CADA recurso que pide la web (HTML, CSS,
// ---- JS, imágenes, fuentes...). Es el corazón de la estrategia de caché.
self.addEventListener("fetch", event => {
  // La petición que originó el evento.
  const { request } = event;

  // Solo manejamos GET: dejamos pasar POST y demás (formulario de contacto,
  // analytics, etc.) sin tocarlos, porque no tiene sentido cachearlos.
  if (request.method !== "GET") return;

  // Solo manejamos peticiones a nuestro propio dominio: no interferimos con
  // terceros (Google Tag Manager, Sentry...), cuyas respuestas suelen ser
  // "opacas" y ensuciarían la caché.
  if (new URL(request.url).origin !== self.location.origin) return;

  // `respondWith` le dice al navegador "yo me encargo de responder esta
  // petición; usá lo que devuelva esta promesa".
  event.respondWith(
    // 1) Primero intentamos la red (por eso "network-first": contenido fresco).
    fetch(request)
      .then(response => {
        // Una respuesta HTTP es un stream que se lee una sola vez. Como la
        // necesitamos DOS veces (guardarla y devolverla), clonamos una copia.
        const copy = response.clone();

        // Guardamos la copia en caché para poder servirla si más adelante no
        // hay red. (No usamos `await`: la escritura ocurre en segundo plano.)
        caches.open(CACHE).then(cache => cache.put(request, copy));

        // Devolvemos la respuesta original de la red al navegador.
        return response;
      })
      // 2) Si la red falla (offline, servidor caído), vamos a la caché:
      .catch(async () =>
        // Buscamos una respuesta cacheada para esta misma petición...
        (await caches.match(request)) ||
        // ...y si no hay nada específico, devolvemos al menos la home cacheada.
        caches.match("/"),
      ),
  );
});
