const CACHE_NAME = 'makrotos-portfolio-v1.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/css/main.css',
    '/assets/css/background.css',
    '/assets/css/menu.css',
    '/assets/css/skill.css',
    '/assets/css/exp.css',
    '/assets/css/gallery.css',
    '/assets/css/section.css',
    '/assets/css/loading.css',
    '/js/extMorphism.js',
    '/favicon.ico',
    '/manifest.json',
    '/icons/zdoroveevo.png',
    '/icons/github.png',
    '/icons/tgicon.png'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
}); 