# Refactor Cycling Club — русская версия

<p align="center">
  <a href="README.md"><img alt="English" src="https://img.shields.io/badge/README-English-2563eb?style=for-the-badge"></a>
  <a href="README.ru.md"><img alt="Русский" src="https://img.shields.io/badge/README-Русский-dc2626?style=for-the-badge"></a>
</p>

Refactor Cycling Club — промо-сайт велосипедного клуба на React/Vite. Проект был перенесён со статического HTML/CSS/vanilla JS в React-приложение на Vite, при этом сохранены исходное визуальное направление, локальные изображения и старые URL вида `.html`.

## Текущее состояние

- Основная ветка: `main`
- Production: `https://atlantik56.github.io/RefactorCC/`
- Деплой: GitHub Actions на GitHub Pages
- Frontend: React single-page app с поддержкой старых статических маршрутов
- Backend: пока не добавлен; формы присоединения работают как клиентское демо
- Изображения: все ассеты сайта хранятся локально в `public/assets`

## Стек

- React 19
- Vite 7
- Обычный CSS
- pnpm
- GitHub Actions
- GitHub Pages

## Страницы

Приложение рендерится через React, но старые прямые `.html` ссылки сохранены для статического хостинга:

- `index.html` — главная страница
- `routes.html` — каталог маршрутов
- `community.html` — страница сообщества
- `road.html` — шоссе
- `track.html` — трек
- `mtb.html` — маунтинбайк
- `gravel.html` — гравел
- `cyclocross.html` — циклокросс
- `bmx.html` — BMX

При production-сборке `scripts/copy-routes.mjs` копирует `dist/index.html` в каждый старый `.html` маршрут, чтобы прямые ссылки работали на GitHub Pages.

## Структура проекта

```text
.
├── .github/workflows/
│   └── deploy-react-vite.yml  # Деплой на GitHub Pages
├── public/assets/             # Локальные изображения, копируемые Vite
├── scripts/
│   └── copy-routes.mjs        # Поддержка старых .html маршрутов
├── src/
│   ├── main.jsx               # React entry, layout, effects, routing
│   ├── pageContent.js         # Контент страниц и метаданные
│   └── styles.css             # Визуальная система и адаптивные стили
├── index.html                 # HTML entry для Vite
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── README.ru.md
└── vite.config.js
```

## Локальный запуск

```bash
pnpm install
pnpm run dev
```

После запуска откройте локальный URL, который выведет Vite.

## Сборка

```bash
pnpm run build
```

Готовая production-версия появится в папке `dist/`.

## Просмотр production-сборки

```bash
pnpm run preview
```

## Оптимизация

Production-сборка настроена в `vite.config.js`:

- JS и CSS минифицируются через esbuild
- включено разделение CSS
- source map отключены для production
- React и React DOM вынесены в отдельный chunk
- ассеты сохраняются отдельными файлами, а не встраиваются inline
- изображения kit showcase сжаты и приведены к практичным размерам отображения

Текущие локальные изображения хранятся в `public/assets`, включая изображения из Wikimedia в `public/assets/wikimedia`.

## Деплой GitHub Pages

Деплой выполняет `.github/workflows/deploy-react-vite.yml`.

При push в `main` workflow:

1. устанавливает зависимости через pnpm,
2. собирает Vite-приложение,
3. загружает `dist/` как Pages artifact,
4. публикует сайт на GitHub Pages.

## Заметки по безопасности

- Подписи карусели выводятся как текст, а не HTML, чтобы избежать небезопасной вставки разметки.
- Расчёт прогресса скролла использует `document.scrollingElement` и защиту от деления на ноль.
- Header/footer теперь находятся внутри React-приложения, а не в отдельных runtime-шаблонах.

## Идеи для развития

- настоящий backend API для форм присоединения
- маршруты, события и участники из базы данных
- админ-панель для редактирования контента сайта
- деплой на VPS с Nginx, Docker, PostgreSQL и SSL
- полноценное переключение языка внутри публичного сайта

## Лицензия

MIT. Подробности в файле `LICENSE`.
