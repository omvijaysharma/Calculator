self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('calculator-app-cache').then((cache) => {
            return cache.addAll([
                '/',
                './main.html',
                './style.css',
                './js/script.js',
                './src/font.ttf'
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