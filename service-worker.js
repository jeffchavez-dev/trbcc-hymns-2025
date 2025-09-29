const CACHE_NAME = 'trbcc-hymns-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/hymns/Hymn 6 All Ye That Fear Jehovah_s Name.mp3',
  '/hymns/Hymn 82 Unto The Hills Around Do I Lift Up.mp3',
  // add all your audio files here
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});