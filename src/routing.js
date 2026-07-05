const DEFAULT_BASE_PATH = '';

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? DEFAULT_BASE_PATH;

export function normalizePath(pathname) {
  const base = BASE_PATH.replace(/\/$/, '');
  let path = pathname;
  while (base && path.startsWith(base)) {
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
  const path = pathFor(file);
  return base && path.startsWith(`${base}/`) ? path : `${base}${path}`;
}

function shouldPrefixPath(value) {
  return value?.startsWith('/') && !value.startsWith('//');
}

function pathWithBase(value) {
  const base = BASE_PATH.replace(/\/$/, '');
  if (shouldPrefixPath(value)) return base ? hrefFor(value) : value;
  if (value?.startsWith('assets/')) return `${base}/${value}`;
  return value;
}

export function applyBasePathToHtml(html) {
  if (typeof document === 'undefined') {
    return (html || '').replace(/\s(href|src|data-href)=(["'])([^"']+)\2/g, (match, attr, quote, value) => {
      const nextValue = pathWithBase(value);
      return nextValue === value ? match : ` ${attr}=${quote}${nextValue}${quote}`;
    });
  }

  const template = document.createElement('template');
  template.innerHTML = html || '';

  template.content.querySelectorAll('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href');
    const nextHref = pathWithBase(href);
    if (nextHref !== href) anchor.setAttribute('href', nextHref);
  });

  template.content.querySelectorAll('[data-href]').forEach((element) => {
    const href = element.getAttribute('data-href');
    const nextHref = pathWithBase(href);
    if (nextHref !== href) element.setAttribute('data-href', nextHref);
  });

  template.content.querySelectorAll('img[src]').forEach((image) => {
    const src = image.getAttribute('src');
    const nextSrc = pathWithBase(src);
    if (nextSrc !== src) image.setAttribute('src', nextSrc);
  });

  return template.innerHTML;
}
