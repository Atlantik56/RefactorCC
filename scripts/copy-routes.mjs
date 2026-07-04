import { copyFileSync, mkdirSync } from 'node:fs';

const legacyRoutes = [
  'routes.html',
  'community.html',
  'news.html',
  'training-plans.html',
  'road.html',
  'track.html',
  'mtb.html',
  'gravel.html',
  'cyclocross.html',
  'bmx.html',
];

const cleanRoutes = [
  'routes',
  'community',
  'news',
  'training-plans',
  'training-plans/beginner-indoor',
  'training-plans/beginner-road',
  'training-plans/intermediate-indoor',
  'training-plans/intermediate-road',
  'road',
  'track',
  'mtb',
  'gravel',
  'cyclocross',
  'bmx',
];

for (const route of legacyRoutes) {
  copyFileSync('dist/index.html', `dist/${route}`);
}

for (const route of cleanRoutes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync('dist/index.html', `dist/${route}/index.html`);
}
