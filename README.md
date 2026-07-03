# Refactor Cycling Club

<p align="center">
  <a href="README.md"><img alt="English" src="https://img.shields.io/badge/README-English-2563eb?style=for-the-badge"></a>
  <a href="README.ru.md"><img alt="Русский" src="https://img.shields.io/badge/README-Русский-dc2626?style=for-the-badge"></a>
</p>

Refactor Cycling Club is a React/Vite promo site for a cycling club. The project was migrated from static HTML/CSS/vanilla JS to a Vite-powered React app while keeping the original visual direction, local assets, and legacy `.html` page URLs.

## Current Status

- Main branch: `main`
- Production: `https://atlantik56.github.io/RefactorCC/`
- Deployment: GitHub Actions to GitHub Pages
- Frontend: React single-page app with static route compatibility
- Backend: not included yet; join forms are client-side demos
- Assets: all site images are stored locally in `public/assets`

## Tech Stack

- React 19
- Vite 7
- Plain CSS
- pnpm
- GitHub Actions
- GitHub Pages

## Pages

The app is rendered by React, but old direct `.html` links are preserved for static hosting:

- `index.html` - landing page
- `routes.html` - route catalogue
- `community.html` - community page
- `road.html` - road cycling
- `track.html` - track cycling
- `mtb.html` - mountain bike
- `gravel.html` - gravel
- `cyclocross.html` - cyclocross
- `bmx.html` - BMX

During production build, `scripts/copy-routes.mjs` copies `dist/index.html` to every legacy `.html` route so direct links work on GitHub Pages.

## Project Structure

```text
.
├── .github/workflows/
│   └── deploy-react-vite.yml  # GitHub Pages deployment
├── public/assets/             # Local images copied by Vite
├── scripts/
│   └── copy-routes.mjs        # Legacy .html route support
├── src/
│   ├── main.jsx               # React entry, layout, effects, routing
│   ├── pageContent.js         # Page content and metadata
│   └── styles.css             # Visual system and responsive styles
├── index.html                 # Vite HTML entry
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── README.ru.md
└── vite.config.js
```

## Run Locally

```bash
pnpm install
pnpm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
pnpm run build
```

The production output is written to `dist/`.

## Preview Production Build

```bash
pnpm run preview
```

## Optimization

The production build is configured in `vite.config.js`:

- JS and CSS are minified with esbuild
- CSS code splitting is enabled
- source maps are disabled for production
- React and React DOM are split into a separate chunk
- assets are kept as files instead of being inlined
- kit showcase images were compressed and normalized to practical display dimensions

Current local image assets are stored in `public/assets`, including Wikimedia-sourced images in `public/assets/wikimedia`.

## GitHub Pages Deploy

Deployment is handled by `.github/workflows/deploy-react-vite.yml`.

On push to `main`, the workflow:

1. installs dependencies with pnpm,
2. builds the Vite app,
3. uploads `dist/` as a Pages artifact,
4. deploys it to GitHub Pages.

## Security Notes

- Carousel captions are rendered as text, not HTML, to avoid unsafe markup insertion.
- Scroll progress calculation uses `document.scrollingElement` with a zero-division guard.
- Header/footer HTML is now part of the React app rather than separate runtime template files.

## Roadmap Ideas

- real backend API for join forms
- database-backed routes, events, and members
- admin panel for editing site content
- VPS deployment with Nginx, Docker, PostgreSQL, and SSL
- full in-site language switching for the public website

## License

MIT. See `LICENSE`.
