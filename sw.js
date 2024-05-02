self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('your-cache-name').then(function (cache) {
            console.log('[Service Worker] Pre-caching App Shell');
            return cache.addAll([
                '/',
                '/login'
            ]);
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});