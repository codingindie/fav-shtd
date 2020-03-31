const version = "0.1.1";
const cacheName = `TokoSHTD-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `https://www.smarthafiztalkingdoll.com/`,
        `https://www.smarthafiztalkingdoll.com/index.html`,
        `https://www.smarthafiztalkingdoll.com/favicon.ico`,
        `https://cdn.statically.io/gh/ionic-team/ionicons/master/docs/css/ionicons.min.css`,
        `https://cdn.statically.io/gh/codeindie/open-project/toko-wa/owlCarousel2-2.3.4/asset/owl.carousel.min.css`,
        `https://cdn.statically.io/gh/codeindie/open-project/toko-wa/mfp/mfp.min.css`,
        `https://cdn.statically.io/gh/codeindie/open-project/toko-wa/owlCarousel2-2.3.4/asset/owl.theme.default.min.css`,
        `https://cdn.staticaly.com/gh/jquery/jquery-dist/master/dist/jquery.min.js`,
        `https://cdn.statically.io/gh/codeindie/open-project/toko-wa/mfp/mfp.min.js`,
        `https://cdn.statically.io/gh/codeindie/open-project/toko-wa/owlCarousel2-2.3.4/owl.carousel.min.js`,
        `https://raw.githubusercontent.com/codeindie/fav-shtd/master/install-me-script.js`,
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

importScripts(
  "/static/precache.f9cac6e832615acd35339c53b8d34f39.js"
);

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst(), 'GET');
