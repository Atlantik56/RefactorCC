export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function normalizePath(pathname) {
  const base = BASE_PATH.replace(/\/$/, '');
  let path = pathname;
  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }
  return path || '/';
}

export function pathFor(target) {
  const [rawPath, hash = ''] = target.split('#');
  const path = rawPath || '/';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedPath}${hash ? `#${hash}` : ''}`;
}

export function hrefFor(file) {
  const base = BASE_PATH.replace(/\/$/, '');
  return `${base}${pathFor(file)}`;
}
