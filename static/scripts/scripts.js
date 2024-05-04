document.addEventListener('DOMContentLoaded', (event) => {
    // Force dark theme
    document.body.classList.add('dark-theme');
    console.log('DOM fully loaded and parsed');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}