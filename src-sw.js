workbox.precaching.precacheAndRoute(self.__precacheManifest);
 //https://ng-leontest.firebaseio.com/flights.json
 
  // /https:\/\/ng\-leontest\.firebaseio\.com\/.*\.json/,

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
