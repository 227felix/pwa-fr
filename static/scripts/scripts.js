function setThemeBasedOnPrefersColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
        console.log('Dark theme detected');
    } else {
        document.body.classList.remove('dark-theme');
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    setThemeBasedOnPrefersColorScheme();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? "dark" : "light";
        if (newColorScheme === "dark") {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    });
});

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        setThemeBasedOnPrefersColorScheme();
    }
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

