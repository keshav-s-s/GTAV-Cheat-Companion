# GTAV Cheat Companion — Project Documentation

## 1. Project overview

GTAV Cheat Companion is a static, client-side web application that provides a searchable and filterable reference for Grand Theft Auto V cheat codes on PC.

The project is designed to make cheat-code lookup quick and convenient on both desktop and mobile devices. It is also implemented as a Progressive Web App (PWA), allowing users to install it on supported devices and access its cached application shell while offline.

**Production URL:** https://keshav-s-s.github.io/GTAV-Cheat-Companion/

## 2. Goals and scope

### Primary goals

- Present GTA V PC cheat entries in a clear, organized interface.
- Let users find a cheat quickly through search and category filters.
- Make cheat codes easy to copy.
- Provide a responsive experience on desktop and mobile.
- Support installation and offline use through PWA capabilities.
- Keep the application simple to host and maintain without a backend.

### Current scope

The released application is a static reference tool. It does not require user accounts, a server-side API, or a database.

The documented release contains 35 cheat entries. The interface organizes entries into category filters and renders the available cheat information in cards.

## 3. User-facing functionality

### Cheat browsing

The application displays cheat entries as cards. Each card presents the information associated with an entry, such as its name, category, code, and descriptive notes where provided.

### Search

The search field filters the displayed cheat entries based on the searchable text implemented in the application.

### Category filters

Category buttons allow users to narrow the visible list to a selected category. The interface also provides a way to return to the unfiltered collection.

### Copy interaction

Each cheat card includes a copy control. Selecting it copies the associated code when clipboard access is available. The interface uses a toast message to communicate the result.

### Empty state and count

The application includes a result count and an empty-state message for searches or filters that produce no matching entries.

## 4. Technology and architecture

The application uses a simple static front-end architecture:

```text
Browser / Installed PWA
        |
        v
     index.html
        |
        +------ style.css
        |
        +------ script.js
        |
        +------ manifest.json
        |
        +------ service-worker.js
                       |
                       v
                 Cache Storage
```

### HTML

`index.html` defines the page structure, content containers, metadata, manifest reference, stylesheet and JavaScript references, and service-worker registration.

Important DOM IDs used by the JavaScript include:

| ID | Responsibility |
|---|---|
| `search` | Search input |
| `filters` | Category filter container |
| `count` | Visible result count |
| `cheat-list` | Cheat-card rendering container |
| `toast` | Copy-feedback message |

These IDs are part of the interface between `index.html` and `script.js`. Renaming them requires corresponding JavaScript changes.

### CSS

`style.css` contains the visual design and responsive layout. The current design uses a dark, cinematic interface with amber and coral accents.

JavaScript-generated elements use classes including:

- `.filter-btn`
- `.cheat-card`
- `.card-top`
- `.category-tag`
- `.code-row`
- `.copy-btn`
- `.description`
- `.unlock-note`
- `.empty-state`

These class names should be preserved when changing the styling or rendering logic unless both CSS and JavaScript are updated together.

### JavaScript

`script.js` handles the client-side behavior, including rendering cheat entries, search, category filtering, copy interactions, result counts, and empty-state behavior.

The application currently runs entirely in the browser.

## 5. Progressive Web App implementation

### Web app manifest

`manifest.json` provides the browser with installation metadata, including:

- Application name and short name
- Description
- Start URL and scope
- Standalone display mode
- Portrait orientation preference
- Background and theme colors
- 192 × 192 and 512 × 512 PNG icons

The manifest is linked from `index.html`.

### Service worker

`service-worker.js` provides offline support by caching the application shell and required local resources.

The cached application resources include the main HTML page, stylesheet, JavaScript, manifest, and app icons.

The service worker uses the Cache Storage API and handles page navigation so that the cached application page can be returned when the network is unavailable.

### Installation and offline verification

The application has been installed on an Android phone and verified by the project owner to:

- Launch from the Android home screen.
- Open in standalone mode rather than as a normal browser tab.
- Work while the device is offline after the initial online load and cache setup.

These are manual verification results reported during project testing.

### Cache maintenance

If a future code change is made, review the service-worker cache version. A changed cache name can trigger installation of a new cache. Test the update lifecycle and offline behavior after changing the service worker.

Do not assume that every installed copy will immediately show new files: browsers may continue to use previously cached resources until the service worker update lifecycle completes.

## 6. Repository layout

Expected project layout:

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
├── README.md
└── docs/
    └── PROJECT_DOCUMENTATION.md
```

### File responsibilities

| File or directory | Purpose |
|---|---|
| `index.html` | Main page structure and metadata |
| `style.css` | Visual styling and responsive layout |
| `script.js` | Cheat data presentation and interactions |
| `manifest.json` | PWA installation metadata |
| `service-worker.js` | Offline caching and request handling |
| `icons/` | PWA application icons |
| `README.md` | Repository introduction and usage instructions |
| `docs/` | Extended project documentation |

## 7. Local development

A local static server is recommended for testing PWA behavior.

Using Python:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Modern browsers treat `localhost` as a secure context, allowing service-worker features to be tested locally.

For ordinary UI edits, refresh the page and inspect the browser console for errors. When testing offline behavior, first load the site successfully online and confirm that the service worker has installed and cached the required resources.

## 8. Deployment

The production site is hosted with GitHub Pages from the repository's `main` branch and root directory.

Typical release workflow:

1. Make and test the changes locally.
2. Check the browser console for errors.
3. Verify the manifest and icon paths.
4. Test service-worker installation and offline loading when PWA-related files change.
5. Review the Git diff.
6. Commit and push the intended files to `main`.
7. Wait for GitHub Pages deployment.
8. Verify the production URL.

## 9. Testing and release checklist

### Functional checks

- [ ] The page loads without JavaScript errors.
- [ ] All 35 cheat entries appear.
- [ ] Search filters the expected entries.
- [ ] Category filters work.
- [ ] The result count updates correctly.
- [ ] Copy controls copy the correct code.
- [ ] Copy feedback is visible.
- [ ] The empty state appears when there are no matches.

### Responsive checks

- [ ] The layout is usable on desktop.
- [ ] The layout is usable on a narrow mobile screen.
- [ ] Text and controls do not overflow horizontally.
- [ ] Buttons and copy controls are easy to tap.

### PWA checks

- [ ] The manifest loads successfully.
- [ ] Both icon files load successfully.
- [ ] The service worker activates.
- [ ] Required app files are cached.
- [ ] The app can load offline after its initial online setup.
- [ ] The installed app opens in standalone mode.

### Repository checks

- [ ] No private credentials or personal files are included.
- [ ] All referenced local files exist.
- [ ] The README matches the actual project.
- [ ] The final Git diff contains only intended changes.

## 10. Known limitations and maintenance notes

- The application is a reference tool; it does not interact with or modify the GTA V game.
- It does not provide multiplayer functionality or guarantee that every cheat works in every game version or context.
- Offline use depends on the browser retaining the service-worker cache. Clearing browser data or uninstalling the PWA may remove cached resources.
- Clipboard behavior can depend on browser permissions and secure-context requirements.
- GitHub Pages serves the project as a static site; there is no backend or user-data synchronization.
- The current project documentation describes the implementation and behavior verified during development. It does not claim automated test coverage unless such tests are added separately.

## 11. Branding and legal notice

GTAV Cheat Companion is an independent fan-made project and is not affiliated with, endorsed by, sponsored by, or connected to Rockstar Games or Take-Two Interactive.

Grand Theft Auto, GTA V, and related marks are the property of their respective owners. The project uses these names only to identify the game to which the reference information relates.

## 12. Future maintenance

The current release is considered feature-complete. No ongoing update schedule is required.

If maintenance becomes necessary, the most relevant areas to review are:

1. Cheat data accuracy and game-version relevance.
2. Browser compatibility for clipboard and PWA features.
3. Service-worker cache versioning and update behavior.
4. Manifest metadata and icon paths.
5. GitHub Pages deployment configuration.
