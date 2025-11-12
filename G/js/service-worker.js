self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('calculator-app-cache').then((cache) => {
            return cache.addAll([
                '/',
                './main.html',
                './css/style.css',
                './js/script.js',
                './js/list.js',
                './js/btn.js',
                './svg.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});