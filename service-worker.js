self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
  });
  
  self.addEventListener('fetch', (event) => {
    // Pass-through for network requests
  });
  