const CACHE_NAME = 'trbcc-hymns-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/hymns/Hymn 6 All Ye That Fear Jehovah_s Name.mp3',
  '/hymns/Hymn 82 Unto The Hills Around Do I Lift Up.mp3',
  '/hymns/Hymn 108 Praise Ye, Praise Ye The Lord.mp3',
  '/hymns/Hymn 23 O Light That Knew No Dawn.mp3',
  '/hymns/Hymn 13 O Worship The King.mp3',
  '/hymns/Hymn 30 Let Us With A Gladsome Mind.mp3',
  '/hymns/Hymn 376 Thou Whose Almighty Word.mp3',
  '/hymns/Hymn 432 Jesus What A Friend For Sinners.mp3',
  '/hymns/Hymn 762 Of Mercy And Of Justice (First Tune).mp3',
  '/hymns/Hymn 763 Unto The Lord Life Thankful Voices.mp3',
  '/hymns/Hymn 765 My Heart is Firmly Fixed.mp3',
  // '/hymns/',
  // '/hymns/',
  // '/hymns/',
  // '/hymns/',
  // '/hymns/',




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