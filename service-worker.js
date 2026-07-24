const CACHE_NAME = 'tech-hub-v1';
const RUNTIME_CACHE = 'tech-hub-runtime-v1';
const WALLPAPER_CACHE = 'tech-hub-wallpapers-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/styles.css',
  '/css/responsive.css',
  '/js/app.js',
  '/js/data.js'
];

// Install event - cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && 
              cacheName !== RUNTIME_CACHE && 
              cacheName !== WALLPAPER_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - cache first, then network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and external URLs
  if (request.method !== 'GET') {
    return;
  }

  // API calls - Network first
  if (url.pathname.includes('/api/')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Images and wallpapers - Cache first
  if (request.destination === 'image' || url.pathname.includes('/wallpapers/')) {
    event.respondWith(cacheWallpaper(request));
    return;
  }

  // HTML, CSS, JS - Cache first, fallback to network
  event.respondWith(cacheFirst(request));
});

// Cache First Strategy
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      const clone = response.clone();
      cache.put(request, clone);
    }
    return response;
  } catch (error) {
    return new Response('Offline - Resource not available', { status: 503 });
  }
}

// Network First Strategy
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      const clone = response.clone();
      cache.put(request, clone);
    }
    return response;
  } catch (error) {
    const cache = await caches.open(RUNTIME_CACHE);
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    return new Response('Offline - Network error', { status: 503 });
  }
}

// Cache Wallpapers Strategy
async function cacheWallpaper(request) {
  const cache = await caches.open(WALLPAPER_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      const clone = response.clone();
      cache.put(request, clone);
    }
    return response;
  } catch (error) {
    // Return a placeholder if offline
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="#0a0e27" width="1920" height="1080"/><text x="960" y="540" font-size="48" fill="#00d4ff" text-anchor="middle">Wallpaper cached offline</text></svg>',
      {
        headers: { 'Content-Type': 'image/svg+xml' },
        status: 200
      }
    );
  }
}

// Background Sync for updates
self.addEventListener('sync', event => {
  if (event.tag === 'sync-wallpapers') {
    event.waitUntil(syncWallpapers());
  }
});

async function syncWallpapers() {
  try {
    const response = await fetch('/api/wallpapers');
    if (response.ok) {
      const data = await response.json();
      const cache = await caches.open(WALLPAPER_CACHE);
      cache.put('/api/wallpapers', response.clone());
    }
  } catch (error) {
    console.log('Sync failed - will retry later', error);
  }
}

// Message handler for cache clearing
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.delete(WALLPAPER_CACHE).then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
});
