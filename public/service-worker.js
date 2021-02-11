importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
	console.log('Workbox berhasil dimuat');
else 
	console.log('Workbox gagal dimuat');

workbox.precaching.precacheAndRoute([
	'/manifest.json',
	'/nav.html',
	'/index.html',
	'/pages/home.html',
	'/pages/jadwal.html',
	'/pages/myteams.html',
	'/pages/about.html',
	'/pages/findus.html',
	'/assets/css/style.css',
	'/assets/css/materialize.min.css',
	'/assets/js/materialize.min.js',
	'/assets/js/main.js',
	'/assets/js/moment.js',
	'/assets/js/moment-timezone-with-data.js',
	'/assets/js/data/api.js',
	'/assets/js/data/data.js',
	'/assets/js/comp/fav.js',
	'/assets/js/comp/home.js',
	'/assets/js/comp/jadwal.js',
	'/assets/js/comp/myTeams.js',
	'/assets/js/comp/utilities.js',
	'/assets/js/sw-register.js',
	'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0',
    'https://unpkg.com/dexie@latest/dist/dexie.js',
	'/assets/favicon/apple-touch-icon.png',
	'/assets/favicon/maskable_icon.png',
	'/assets/favicon/favicon-16x16.png',
	'/assets/favicon/favicon-32x32.png',
	'/assets/favicon/android-chrome-192x192.png',
	'/assets/favicon/android-chrome-512x512.png',
	'/assets/images/loading.svg',
	'/assets/images/noimage.webp',
	'/assets/images/stadium1-lg.jpg',
	'/assets/images/stadium1.jpg',
	'/assets/images/stadium4.jpg',
	'/assets/images/stadium3.jpg',
	'/assets/images/stadium2.jpg',
	'/pages/report.html'
])

workbox.routing.registerRoute(
	new RegExp('/pages/'),
	  workbox.strategies.staleWhileRevalidate({
		  cacheName: 'pages'
	  })
  );

