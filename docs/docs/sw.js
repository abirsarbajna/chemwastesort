// docs/sw.js

// Give your cache a name
const CACHE_NAME = 'chemwastesort-v1';

// List all files you want to cache
const ASSETS = [
  './',            // the root (loads index.html)
  './index.html',  // your main HTML
  './manifest.json',
  // if you have any CSS/JS/images add them here, e.g.:
  // './style.css',
  // './app.js',
  // './icon-192.png',
  // './icon-512.png'
];

// On install: open the cache and add all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// On fetch: try the cache first, then network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});
