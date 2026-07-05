export function renderSafeCaption(target, html) {
  const allowedTags = new Set(['STRONG', 'EM', 'B', 'I', 'BR']);
  const template = document.createElement('template');
  template.innerHTML = html || '';

  const sanitizeNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return document.createTextNode(node.textContent || '');
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return document.createDocumentFragment();
    }

    if (!allowedTags.has(node.tagName)) {
      const fragment = document.createDocumentFragment();
      node.childNodes.forEach((child) => fragment.append(sanitizeNode(child)));
      return fragment;
    }

    const element = document.createElement(node.tagName.toLowerCase());
    node.childNodes.forEach((child) => element.append(sanitizeNode(child)));
    return element;
  };

  const fragment = document.createDocumentFragment();
  template.content.childNodes.forEach((node) => fragment.append(sanitizeNode(node)));
  target.replaceChildren(fragment);
}

function sanitizeInlineStyle(value) {
  return /url\s*\(|expression\s*\(|@import|javascript:/i.test(value) ? '' : value;
}

function sanitizeUrl(value, attrName, tagName) {
  if (!value || value.startsWith('#')) return value;

  try {
    if (attrName === 'src' && tagName === 'IMG' && /^data:image\/(?:png|jpe?g|gif|webp|svg\+xml);base64,/i.test(value)) return value;
    const url = new URL(value, window.location.href);
    if (attrName === 'src') return url.origin === window.location.origin ? value : '';
    if (['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol)) return value;
  } catch {
    return '';
  }

  return '';
}

export function sanitizePageHtml(html) {
  if (typeof document === 'undefined') return sanitizePageHtmlString(html);

  const blockedTags = new Set(['SCRIPT', 'IFRAME', 'OBJECT', 'EMBED', 'LINK', 'META', 'BASE']);
  const template = document.createElement('template');
  template.innerHTML = html || '';

  template.content.querySelectorAll('*').forEach((element) => {
    if (blockedTags.has(element.tagName)) {
      element.remove();
      return;
    }

    Array.from(element.attributes).forEach((attr) => {
      const name = attr.name.toLowerCase();
      if (name.startsWith('on') || name === 'srcdoc' || name === 'http-equiv') {
        element.removeAttribute(attr.name);
        return;
      }

      if (name === 'style') {
        const safeStyle = sanitizeInlineStyle(attr.value);
        if (safeStyle) element.setAttribute(attr.name, safeStyle);
        else element.removeAttribute(attr.name);
        return;
      }

      if (name === 'href' || name === 'src') {
        const safeUrl = sanitizeUrl(attr.value, name, element.tagName);
        if (safeUrl) element.setAttribute(attr.name, safeUrl);
        else element.removeAttribute(attr.name);
      }
    });

    if (element.tagName === 'A' && element.getAttribute('target') === '_blank') {
      element.setAttribute('rel', 'noopener noreferrer');
    }
  });

  return template.innerHTML;
}

function sanitizePageHtmlString(html) {
  return (html || '')
    .replace(/<\s*(script|iframe|object|embed|link|meta|base)\b[\s\S]*?<\s*\/\s*\1\s*>/gi, '')
    .replace(/<\s*(script|iframe|object|embed|link|meta|base)\b[^>]*\/?\s*>/gi, '')
    .replace(/\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/\s+(srcdoc|http-equiv)\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/\s+(href|src)\s*=\s*(['"])\s*javascript:[\s\S]*?\2/gi, '')
    .replace(/\s+style\s*=\s*(['"])[\s\S]*?(?:url\s*\(|expression\s*\(|@import|javascript:)[\s\S]*?\1/gi, '');
}
