importScripts("precache-manifest.bba151d988fe1921f1a3dc0a07e8d9a0.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest);
 //https://ng-leontest.firebaseio.com/flights.json
workbox.routing.registerRoute(
  // /https:\/\/ng\-leontest\.firebaseio\.com\/.*\.json/,
  
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

