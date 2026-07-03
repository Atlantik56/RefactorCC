# Refactor Cycling Club

React/Vite version of the Refactor Cycling Club promo site. The original static HTML/CSS/vanilla JS site has been migrated to a Vite single-page React app while preserving the existing visual style, local assets, and legacy `.html` URLs.

## Live Demo

Current production site:

`https://atlantik56.github.io/RefactorCC/`

> This branch contains a React/Vite migration. To publish it on GitHub Pages, build the app and deploy the generated `dist` folder, or configure GitHub Pages deployment through a GitHub Actions workflow.

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

## Notes

- The join forms are client-side demos and do not submit data to a backend.
- Wikimedia Commons images are stored locally in `public/assets/wikimedia/`.
- The carousel captions are rendered as text, not HTML, to avoid unsafe markup insertion.

## License

MIT. See `LICENSE`.

---

# Refactor Cycling Club — русская версия

React/Vite-версия промо-сайта Refactor Cycling Club. Исходный статический сайт на HTML/CSS/vanilla JS перенесён в React-приложение, при этом сохранены текущий визуальный стиль, локальные изображения и старые URL вида `.html`.

## Демо

Текущий опубликованный сайт:

`https://atlantik56.github.io/RefactorCC/`

> Эта ветка содержит миграцию на React/Vite. Для публикации на GitHub Pages нужно собрать приложение и задеплоить папку `dist`, либо настроить деплой через GitHub Actions.

## Стек

- React
- Vite
- Обычный CSS, перенесённый из текущего `styles.css`
- Локальные изображения в `public/assets`

## Страницы

Старые URL сохранены для совместимости:

- `index.html` — главная страница
- `routes.html` — каталог маршрутов
- `community.html` — страница сообщества
- `road.html`, `track.html`, `mtb.html`, `gravel.html`, `cyclocross.html`, `bmx.html` — страницы дисциплин

При сборке `scripts/copy-routes.mjs` копирует `dist/index.html` в файлы старых `.html` маршрутов, чтобы прямые ссылки работали на статическом хостинге.

## Структура проекта

```text
.
├── public/assets/        # Локальные изображения, которые Vite копирует без обработки
├── scripts/              # Вспомогательные build-скрипты
├── src/
│   ├── main.jsx          # React entry, layout, effects, routing
│   ├── pageContent.js    # Перенесённый контент страниц и метаданные
│   └── styles.css        # Визуальная система и адаптивные стили
├── index.html            # HTML entry для Vite
├── package.json
└── vite.config.js
```

## Локальный запуск

```bash
npm install
npm run dev
```

После запуска откройте URL, который выведет Vite.

## Сборка

```bash
npm run build
```

Готовая production-версия появится в папке `dist/`.

## Примечания

- Формы присоединения работают как клиентское демо и не отправляют данные на сервер.
- Изображения из Wikimedia Commons сохранены локально в `public/assets/wikimedia/`.
- Подписи карусели выводятся как текст, а не HTML, чтобы избежать небезопасной вставки разметки.

## Лицензия

MIT. Подробности в файле `LICENSE`.
