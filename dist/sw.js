importScripts("precache-manifest.a162a3c347b67daaf554f0e016dc1749.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
  /https:\/\/pluralsight\-pwa\-scratch\.firebaseio\.com\/.*\.json/,
  new workbox.strategies.CacheFirst({
    cacheName: "api-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        purgeOnQuotaError: true,
        maxAgeSeconds: 10 * 86400 // 10 days
      })
    ]
  })
);

