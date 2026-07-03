# Refactor Cycling Club

<p align="center">
  <a href="README.md"><img alt="English" src="https://img.shields.io/badge/README-English-2563eb?style=for-the-badge"></a>
  <a href="README.ru.md"><img alt="Русский" src="https://img.shields.io/badge/README-Русский-dc2626?style=for-the-badge"></a>
</p>

React/Vite version of the Refactor Cycling Club promo site. The original static HTML/CSS/vanilla JS site has been migrated to a Vite single-page React app while preserving the existing visual style, local assets, and legacy `.html` URLs.

## Live Demo

Current production site:

`https://atlantik56.github.io/RefactorCC/`

> The repository uses GitHub Actions to build the React/Vite app and deploy the generated `dist` folder to GitHub Pages.

## Tech Stack

- React
- Vite
- Plain CSS, migrated from the original `styles.css`
- Local image assets in `public/assets`

## Pages

The app keeps the old page URLs for compatibility:

- `index.html` - landing page
- `routes.html` - route catalogue
- `community.html` - community page
- `road.html`, `track.html`, `mtb.html`, `gravel.html`, `cyclocross.html`, `bmx.html` - discipline pages

During build, `scripts/copy-routes.mjs` copies `dist/index.html` to each legacy `.html` route so direct links keep working on static hosting.

## Project Structure

```text
.
├── public/assets/        # Local images copied as-is by Vite
├── scripts/              # Build helpers
├── src/
│   ├── main.jsx          # React entry, layout, effects, routing
│   ├── pageContent.js    # Migrated page content and metadata
│   └── styles.css        # Existing visual system and responsive styles
├── index.html            # Vite HTML entry
├── package.json
└── vite.config.js
```

## Run Locally

```bash
npm install
npm run dev
```

Then open the URL printed by Vite.

## Build

```bash
npm run build
```

The production output is written to `dist/`.

## GitHub Pages Deploy

This repository includes `.github/workflows/deploy-react-vite.yml`. It builds the React/Vite app on pushes to `main` and deploys the generated `dist/` folder with GitHub Actions.

## Notes

- The join forms are client-side demos and do not submit data to a backend.
- Wikimedia Commons images are stored locally in `public/assets/wikimedia/`.
- The carousel captions are rendered as text, not HTML, to avoid unsafe markup insertion.

## License

MIT. See `LICENSE`.
