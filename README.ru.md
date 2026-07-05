# VeloCore — Русский

<p align="center">
  <a href="README.md"><img alt="English" src="https://img.shields.io/badge/README-English-2563eb?style=for-the-badge"></a>
  <a href="README.ru.md"><img alt="Русский" src="https://img.shields.io/badge/README-Русский-dc2626?style=for-the-badge"></a>
</p>

VeloCore — сайт велосипедного и IT-клуба на Next.js static export. Проект использует App Router, локальные визуальные ассеты, clean routes и workflow деплоя на GitHub Pages.

## Текущее состояние

- Основная ветка: `main`
- Репозиторий: `https://github.com/Atlantik56/VeloCore`
- Production: `https://atlantik56.github.io/VeloCore/`
- Деплой: GitHub Actions на GitHub Pages
- Frontend: Next.js App Router static export
- Backend: пока не добавлен; формы присоединения работают как клиентское демо
- Изображения: все ассеты сайта хранятся локально в `public/assets`

## Стек

- React 19
- Next.js 16
- Обычный CSS
- pnpm
- GitHub Actions
- GitHub Pages

## Страницы

Приложение статически генерируется через Next.js с clean routes:

- `/` — главная страница
- `/routes` — каталог маршрутов
- `/community` — страница сообщества
- `/training-plans` — тренировочные планы
- `/training-plans/beginner-indoor` — подробный indoor-план для новичка
- `/training-plans/beginner-road` — подробный road-план для новичка
- `/training-plans/intermediate-indoor` — подробный indoor-план среднего уровня
- `/training-plans/intermediate-road` — подробный road-план среднего уровня
- `/road` — шоссе
- `/track` — трек
- `/mtb` — маунтинбайк
- `/gravel` — гравел
- `/cyclocross` — циклокросс
- `/bmx` — BMX

## Структура проекта

```text
.
├── .github/workflows/
│   └── deploy-next.yml        # Деплой на GitHub Pages
├── app/                       # Next.js App Router страницы и layout
├── public/assets/             # Локальные изображения, отдаваемые Next
├── src/
│   ├── SitePage.jsx           # Клиентский shell страницы
│   ├── pageEffects.js         # Browser effects и interaction hooks
│   ├── routing.js             # Base path и route helpers
│   ├── security.js            # HTML sanitizing helpers
│   ├── pageContent.js         # Контент страниц и метаданные
│   └── styles.css             # Визуальная система и адаптивные стили
├── next.config.mjs            # Static export и optional deploy base path
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── README.ru.md
```

## Локальный запуск

```bash
pnpm install
pnpm run dev
```

После запуска откройте локальный URL, который выведет Next.js.

## Сборка

```bash
pnpm run build
```

Готовая production-версия появится в папке `out/`.

## Docker

Собрать и запустить контейнер со статическим сайтом:

```bash
docker compose up --build -d
```

Сайт будет доступен на `http://localhost:8080/`.

Образ собирает Next.js static export в Node stage и отдаёт `out/` через Nginx.

## Оптимизация

Production-сборка настроена в `next.config.mjs`:

- включён static export через `output: 'export'`
- deploy base path настраивается через `NEXT_PUBLIC_BASE_PATH`
- GitHub Pages workflow собирает сайт с `NEXT_PUBLIC_BASE_PATH=/VeloCore`
- локальная сборка по умолчанию идёт в корень для проверки под custom domain или локальный хостинг
- source map отключены для production
- используются стандартные production-оптимизации Next
- ассеты остаются локально в `public/assets`
- изображения kit showcase сжаты и приведены к практичным размерам отображения

Текущие локальные изображения хранятся в `public/assets`, включая изображения из Wikimedia в `public/assets/wikimedia`.

## Деплой GitHub Pages

Деплой выполняет `.github/workflows/deploy-next.yml`.

При push в `main` workflow:

1. устанавливает зависимости через pnpm,
2. собирает Next static export,
3. загружает `out/` как Pages artifact,
4. публикует сайт на GitHub Pages.

## Заметки по безопасности

- HTML страниц проходит санитайзер перед вставкой в клиентский shell.
- Внутренние ссылки внутри санитизированного HTML переписываются через настроенный base path.
- Content Security Policy задаётся из Next layout.
- Подписи карусели проходят allowlist-санитайзер.
- Анимация дорожек кэширует геометрию и ставится на паузу в скрытой вкладке.

## Идеи для развития

- настоящий backend API для форм присоединения
- маршруты, события и участники из базы данных
- админ-панель для редактирования контента сайта
- деплой на VPS с Nginx, Docker, PostgreSQL и SSL
- полноценное переключение языка внутри публичного сайта

## Лицензия

MIT. Подробности в файле `LICENSE`.
