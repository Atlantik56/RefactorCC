# Refactor Cycling Club

Static promo site for a fictional cycling club and training platform. The project is built with plain HTML, CSS, and vanilla JavaScript, so it can be opened locally or deployed to any static hosting without a build step.

## Live Demo

GitHub Pages can serve this repository directly from the `main` branch:

`https://atlantik56.github.io/RefactorCC/`

## Pages

- `index.html` - landing page with hero, disciplines, route highlight, community quotes, and CTA form.
- `routes.html` - route catalogue preview with difficulty and elevation metadata.
- `community.html` - community story, values, schedule, and kit showcase.
- `road.html`, `track.html`, `mtb.html`, `gravel.html`, `cyclocross.html`, `bmx.html` - discipline detail pages.

## Project Structure

```text
.
├── assets/              # Local showcase images
├── main.js              # Shared components and page interactions
├── styles.css           # Global layout, visual system, responsive styles
└── *.html               # Static pages
```

## Run Locally

Open `index.html` in a browser, or start any small static server from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

- The join forms are client-side demos and do not submit data to a backend.
- Some page photos are loaded from Wikimedia Commons URLs.
- For production, optimize large images in `assets/` to WebP/AVIF and add a real form handler.

## License

MIT. See `LICENSE`.
