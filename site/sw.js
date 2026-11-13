const CACHE_NAME = 'kidclient-arcade-v3';
const CORE_ASSETS = [
  '/',
  '/manifest.json',
  '/icon.svg',
  '/logo.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/assets/brand/kidclient-avatar.png',
  '/assets/brand/kidclient-logo-3d.png',
  '/assets/brand/kidclient-banner.png',
  '/shared/kidclient-shell.js',
  '/templates/3d-threejs/',
  '/templates/2d-arcade/',
  '/templates/voice-story-toy/',
  '/tutorials/path-a-shark-truck/'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Network-first for HTML navigation so redirected /index.html responses are never served stale
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, { redirect: 'follow' })
        .then((response) => {
          if (response && response.status === 200 && !response.redirected) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request, { redirect: 'follow' })
          .then((response) => {
            if (response && response.status === 200 && !response.redirected) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return response;
          })
          .catch(() => cached)
      );
    })
  );
});
