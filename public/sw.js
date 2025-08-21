const CACHE_NAME = 'speech-to-sign-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico',
  '/signApp.png',
  // Cache all sign images
  '/signs/a.jpg', '/signs/b.jpg', '/signs/c.jpg', '/signs/d.jpg', 
  '/signs/e.jpg', '/signs/f.jpg', '/signs/g.jpg', '/signs/h.jpg',
  '/signs/i.jpg', '/signs/j.jpg', '/signs/k.jpg', '/signs/l.jpg',
  '/signs/m.jpg', '/signs/n.jpg', '/signs/o.jpg', '/signs/p.jpg',
  '/signs/q.jpg', '/signs/r.jpg', '/signs/s.jpg', '/signs/t.jpg',
  '/signs/u.jpg', '/signs/v.jpg', '/signs/w.jpg', '/signs/x.jpg',
  '/signs/y.jpg', '/signs/z.jpg'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Cache install failed:', error);
        // Continue anyway - some resources might not exist yet
        return caches.open(CACHE_NAME)
          .then((cache) => {
            // Cache only the essential files that definitely exist
            const essentialUrls = ['/', '/manifest.json', '/favicon.ico', '/signApp.png'];
            return cache.addAll(essentialUrls);
          });
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request because it's a stream
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response because it's a stream
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              // Only cache GET requests
              if (event.request.method === 'GET') {
                cache.put(event.request, responseToCache);
              }
            });

          return response;
        }).catch(() => {
          // Network failed, try to serve a fallback
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
          // For images, serve a placeholder if available
          if (event.request.destination === 'image') {
            return new Response('', { status: 404 });
          }
        });
      })
  );
});

// Background sync for offline usage tracking (optional)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Background sync triggered');
    // Could implement offline usage analytics here
  }
});

// Push notifications (optional for future features)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New sign language content available!',
    icon: '/signApp.png',
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Open App',
        icon: '/signApp.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon.ico'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Speech to Sign', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
