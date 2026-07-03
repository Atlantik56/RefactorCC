import { copyFileSync } from 'node:fs';

const routes = [
  'routes.html',
  'community.html',
  'road.html',
  'track.html',
  'mtb.html',
  'gravel.html',
  'cyclocross.html',
  'bmx.html',
];

for (const route of routes) {
  copyFileSync('dist/index.html', `dist/${route}`);
}
