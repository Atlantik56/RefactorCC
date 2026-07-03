# Refactor Cycling Club — русская версия

<p align="center">
  <a href="README.md"><img alt="English" src="https://img.shields.io/badge/README-English-2563eb?style=for-the-badge"></a>
  <a href="README.ru.md"><img alt="Русский" src="https://img.shields.io/badge/README-Русский-dc2626?style=for-the-badge"></a>
</p>

React/Vite-версия промо-сайта Refactor Cycling Club. Исходный статический сайт на HTML/CSS/vanilla JS перенесён в React-приложение, при этом сохранены текущий визуальный стиль, локальные изображения и старые URL вида `.html`.

## Демо

Текущий опубликованный сайт:

`https://atlantik56.github.io/RefactorCC/`

> Репозиторий использует GitHub Actions: workflow собирает React/Vite-приложение и публикует папку `dist` на GitHub Pages.

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

## Деплой GitHub Pages

Репозиторий содержит `.github/workflows/deploy-react-vite.yml`. Workflow собирает React/Vite-приложение при push в `main` и публикует папку `dist/` через GitHub Actions.

## Примечания

- Формы присоединения работают как клиентское демо и не отправляют данные на сервер.
- Изображения из Wikimedia Commons сохранены локально в `public/assets/wikimedia/`.
- Подписи карусели выводятся как текст, а не HTML, чтобы избежать небезопасной вставки разметки.

## Лицензия

MIT. Подробности в файле `LICENSE`.
