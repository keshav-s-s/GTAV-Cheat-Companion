# GTAV Cheat Companion

A lightweight, installable, offline-friendly reference for **Grand Theft Auto V (PC)** cheat codes.

GTAV Cheat Companion helps players quickly find cheat codes without digging through long lists or repeatedly searching the web. It is designed as a Progressive Web App (PWA), so it can be installed on supported devices and used offline after its resources have been cached.

**Live website:** https://keshav-s-s.github.io/GTAV-Cheat-Companion/

## Features

- Browse a collection of 35 GTA V PC cheat entries.
- Explore cheats using category filters.
- Search for cheats by name, code, or available descriptive text.
- Copy a cheat code using its copy button.
- Responsive interface designed for desktop and mobile screens.
- Installable PWA experience on supported browsers and devices.
- Offline access through a service worker and cached application files.
- Standalone launch experience when installed on Android.

## Technology

This project is built with standard web technologies:

- HTML5 — page structure and content
- CSS3 — styling and responsive layout
- JavaScript — search, filtering, rendering, and copy interactions
- Web App Manifest — installation metadata and app icons
- Service Worker — application-shell caching and offline support
- GitHub Pages — static website hosting

No backend server or database is required for the current version.

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/keshav-s-s/GTAV-Cheat-Companion.git
   ```

2. Open the project folder:

   ```bash
   cd GTAV-Cheat-Companion
   ```

3. Start a local static server. For example, if Python is installed:

   ```bash
   python -m http.server 8000
   ```

4. Open `http://localhost:8000` in your browser.

You can also open `index.html` directly to inspect the basic interface, but service-worker registration and PWA installation require a secure context. `localhost` is treated as secure by modern browsers.

## Install on Android

1. Open the live website in a supported browser such as Chrome.
2. Wait for the page to finish loading.
3. Open the browser menu and choose **Install app** or **Add to Home screen**, if offered.
4. Confirm the installation.
5. Launch GTAV Cheat Companion from the home screen.

The app's offline experience depends on the service worker having successfully installed and cached the application files at least once. Open the app online before relying on it offline.

## Project structure

```text
GTAV-Cheat-Companion/
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
└── README.md
```

The `docs/` directory contains additional project documentation.

## Deployment

The project is hosted using GitHub Pages.

For the current deployment configuration:

1. Push the site files to the repository's `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Ensure Pages is configured to deploy from the `main` branch and the repository root.
4. Wait for the deployment to complete.
5. Open the live website and verify the latest changes.

Because this is a static PWA, the HTML, CSS, JavaScript, manifest, icons, and service worker are served as static files.

## Offline behavior

The service worker caches the app shell and its required local resources. After the first successful load and cache installation, the application can continue to load without an internet connection.

If the site is changed in a future release, remember that installed browsers may retain cached resources. Review the service-worker cache version and update strategy whenever application files change.

## Project documentation

See [`docs/PROJECT_DOCUMENTATION.md`](docs/PROJECT_DOCUMENTATION.md) for the project overview, architecture, file responsibilities, PWA behavior, testing notes, and known limitations.

## Disclaimer

GTAV Cheat Companion is an independent, fan-made reference project. It is not affiliated with, endorsed by, sponsored by, or connected to Rockstar Games or Take-Two Interactive. **Grand Theft Auto** and **GTA V** are trademarks of their respective owners. All trademarks and game-related names belong to their respective owners.

This project is intended for informational and personal gameplay reference purposes. Cheat availability and behavior may vary by game version and gameplay context.

## License

No license is currently specified. Unless a license is added to this repository, the source code should not be assumed to be available for reuse, redistribution, or modification under an open-source license.
