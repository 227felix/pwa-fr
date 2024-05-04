if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

window.onload = function() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // User prefers dark theme
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        // User prefers light theme
        document.documentElement.setAttribute('data-theme', 'light');
    }
}