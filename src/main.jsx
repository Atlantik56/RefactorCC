import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './styles.css';
import { pages, pathToPage } from './pageContent.js';

const legacyRouteTargets = {
  'index.html': '/',
  'routes.html': '/routes',
  'community.html': '/community',
  'news.html': '/news',
  'training-plans.html': '/training-plans',
  'road.html': '/road',
  'track.html': '/track',
  'mtb.html': '/mtb',
  'gravel.html': '/gravel',
  'cyclocross.html': '/cyclocross',
  'bmx.html': '/bmx',
};

function normalizePath(pathname) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let path = pathname;
  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }
  return path || '/';
}

function pathFor(target) {
  const [rawPath, hash = ''] = target.split('#');
  const path = legacyRouteTargets[rawPath] || rawPath || '/';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedPath}${hash ? `#${hash}` : ''}`;
}

function hrefFor(file) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${pathFor(file)}`;
}

function renderSafeCaption(target, html) {
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

function WheelIcon() {
  return (
    <svg className="wheel" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
      <path d="M12 3.2v3.1M12 17.7v3.1M3.2 12h3.1M17.7 12h3.1M6.4 6.4l2.1 2.1M15.5 15.5l2.1 2.1M17.6 6.4l-2.1 2.1M8.5 15.5l-2.1 2.1" strokeLinecap="round" />
      <rect x="10.6" y="1.6" width="2.8" height="1.5" fill="currentColor" stroke="none" />
      <rect x="10.6" y="20.9" width="2.8" height="1.5" fill="currentColor" stroke="none" />
      <rect x="1.6" y="10.6" width="1.5" height="2.8" fill="currentColor" stroke="none" />
      <rect x="20.9" y="10.6" width="1.5" height="2.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Brand({ footer = false }) {
  return (
    <a href={hrefFor('index.html#top')} className="brand" style={footer ? { marginBottom: 14 } : undefined}>
      <WheelIcon />
      <span className="brand-text">
        <span className="brand-name">Refactor</span>
        <span className="brand-suffix">Cycling Club</span>
      </span>
    </a>
  );
}

function Header({ activePage }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const navItems = [
    { key: 'disciplines', href: 'index.html#disciplines', label: 'Дисциплины' },
    { key: 'routes', href: 'routes.html', label: 'Маршруты' },
    { key: 'news', href: 'news.html', label: 'Новости' },
    { key: 'community', href: 'community.html', label: 'Комьюнити' },
    { key: 'trainingPlans', href: 'training-plans.html', label: 'Планы' },
  ];

  return (
    <header id="site-header">
      <nav className="wrap">
        <Brand />
        <div className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          {navItems.map((item) => (
            <a key={item.key} href={hrefFor(item.href)} className={item.key === activePage ? 'active' : undefined} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={hrefFor('index.html#join')} onClick={() => setOpen(false)}>Контакты</a>
        </div>
        <button
          className="nav-toggle"
          id="navToggle"
          type="button"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-controls="navLinks"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <a href={hrefFor('index.html#join')} className="btn btn-primary" style={{ marginLeft: 16 }}>Присоединиться</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Brand footer />
            <p style={{ color: 'var(--text-dim)', maxWidth: '28ch', fontSize: 14 }}>Сообщество и тренировочная платформа для велосипедистов всех дисциплин.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Дисциплины</h4>
              <a href={hrefFor('road.html')}>Шоссе</a>
              <a href={hrefFor('track.html')}>Трек</a>
              <a href={hrefFor('mtb.html')}>Маунтинбайк</a>
              <a href={hrefFor('gravel.html')}>Гравел</a>
              <a href={hrefFor('cyclocross.html')}>Циклокросс</a>
              <a href={hrefFor('bmx.html')}>BMX</a>
            </div>
            <div className="footer-col">
              <h4>Ресурсы</h4>
              <a href={hrefFor('routes.html')}>Маршруты</a>
              <a href={hrefFor('community.html')}>Комьюнити</a>
              <a href={hrefFor('training-plans.html')}>Тренировочные планы</a>
              <a href={hrefFor('news.html')}>Новости</a>
            </div>
            <div className="footer-col">
              <h4>Контакты</h4>
              <a href="mailto:hello@refactorcc.dev">hello@refactorcc.dev</a>
              <a href="tel:+79000000000">+7 (900) 000-00-00</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Refactor Cycling Club. Все передачи включены.</p>
          <div className="socials">
            <a href="#" aria-label="Strava"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M9 3 15 14h-4l4 7-10-13h4L9 3Z" strokeLinejoin="round" /></svg></a>
            <a href="#" aria-label="Garmin"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CircuitTraceLayer() {
  return (
    <div className="circuit-trace-layer" aria-hidden="true">
      <svg className="circuit-traces circuit-traces-left" viewBox="0 0 260 1200" preserveAspectRatio="none" focusable="false">
        <path className="circuit-track circuit-spark-path circuit-spark-path-left track-a" d="M26 0V110H92V224H48V354H126V496H72V640H154V774H106V898H178V1050H132V1200" />
        <path className="circuit-track track-b" d="M146 0V72H206V190H164V314H226V458H170V590H228V732H188V842H232V1008H196V1200" />
        <path className="circuit-branch branch-a" d="M48 354H18M126 496H210M72 640H30M178 1050H236" />
        <g className="circuit-pads">
          <circle cx="26" cy="110" r="5" />
          <circle cx="92" cy="224" r="4" />
          <circle cx="126" cy="496" r="5" />
          <circle cx="154" cy="774" r="4" />
          <circle cx="178" cy="1050" r="5" />
          <circle cx="206" cy="190" r="4" />
          <circle cx="226" cy="458" r="5" />
          <circle cx="232" cy="842" r="4" />
        </g>
      </svg>
      <svg className="circuit-traces circuit-traces-right" viewBox="0 0 260 1200" preserveAspectRatio="none" focusable="false">
        <path className="circuit-track circuit-spark-path circuit-spark-path-right track-c" d="M218 0V96H164V216H214V338H128V488H190V616H104V762H158V884H82V1018H128V1200" />
        <path className="circuit-track track-d" d="M92 0V150H42V282H96V424H34V546H88V696H28V830H70V964H32V1200" />
        <path className="circuit-branch branch-b" d="M214 338H242M128 488H54M104 762H230M82 1018H18" />
        <g className="circuit-pads">
          <circle cx="218" cy="96" r="5" />
          <circle cx="164" cy="216" r="4" />
          <circle cx="128" cy="488" r="5" />
          <circle cx="104" cy="762" r="4" />
          <circle cx="82" cy="1018" r="5" />
          <circle cx="42" cy="282" r="4" />
          <circle cx="34" cy="546" r="5" />
          <circle cx="70" cy="964" r="4" />
        </g>
      </svg>
      <span className="circuit-spark circuit-spark-left" />
      <span className="circuit-spark circuit-spark-right" />
    </div>
  );
}

function useDocumentMeta(page) {
  useEffect(() => {
    document.title = page.title;
    const setMeta = (selector, attr, value) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('meta[property="og:title"]', 'content', page.ogTitle);
    setMeta('meta[property="og:description"]', 'content', page.ogDescription);
  }, [page]);
}

function useHashScroll(hash, pageKey) {
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView();
    });
  }, [hash, pageKey]);
}

function useInternalNavigation(navigate) {
  useEffect(() => {
    const onClick = (event) => {
      const anchor = event.target.closest?.('a[href]');
      if (!anchor || anchor.target || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const path = normalizePath(url.pathname);
      if (!pathToPage[path]) return;

      event.preventDefault();
      navigate(`${path}${url.hash}`);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);
}

function usePageEffects(pageKey) {
  useEffect(() => {
    const progressBar = document.querySelector('#race-progress span');
    const root = document.documentElement;
    const header = document.getElementById('site-header');
    const circuitLayer = document.querySelector('.circuit-trace-layer');
    const circuitSparks = [
      {
        path: document.querySelector('.circuit-spark-path-left'),
        spark: document.querySelector('.circuit-spark-left'),
        direction: 1,
        offset: 0,
      },
      {
        path: document.querySelector('.circuit-spark-path-right'),
        spark: document.querySelector('.circuit-spark-right'),
        direction: 1,
        offset: 0.46,
      },
    ];
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    let latestScrollProgress = 0;
    let circuitAnimationFrame = null;
    let circuitAnimationStart = null;

    const updateCircuitSpark = ({ path, spark, direction }, progress) => {
      if (!path || !spark || !circuitLayer) return;
      const svg = path.ownerSVGElement;
      const viewBox = svg?.viewBox?.baseVal;
      if (!svg || !viewBox?.width || !viewBox?.height) return;

      const pathLength = path.getTotalLength();
      const sparkProgress = direction === -1 ? 1 - progress : progress;
      const point = path.getPointAtLength(pathLength * sparkProgress);
      const svgRect = svg.getBoundingClientRect();
      const layerRect = circuitLayer.getBoundingClientRect();
      const x = svgRect.left - layerRect.left + (point.x / viewBox.width) * svgRect.width;
      const y = svgRect.top - layerRect.top + (point.y / viewBox.height) * svgRect.height;

      spark.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const updateProgress = () => {
      const scrollEl = document.scrollingElement || document.documentElement;
      const denom = scrollEl.scrollHeight - scrollEl.clientHeight;
      const scrolled = denom > 0 ? scrollEl.scrollTop / denom : 0;
      latestScrollProgress = scrolled;
      root.style.setProperty('--scroll-progress', scrolled.toFixed(4));
      root.style.setProperty('--circuit-layer-height', `${scrollEl.scrollHeight}px`);
      if (prefersReducedMotion) requestAnimationFrame(() => {
        circuitSparks.forEach((sparkConfig) => updateCircuitSpark(sparkConfig, scrolled));
      });
      if (progressBar) progressBar.style.width = `${scrolled * 100}%`;
    };

    const animateCircuitSignal = (timestamp) => {
      if (circuitAnimationStart === null) circuitAnimationStart = timestamp;
      const elapsed = timestamp - circuitAnimationStart;
      const signalProgress = (elapsed / 9000 + latestScrollProgress * 0.28) % 1;

      circuitSparks.forEach((sparkConfig) => {
        updateCircuitSpark(sparkConfig, (signalProgress + sparkConfig.offset) % 1);
      });
      circuitAnimationFrame = requestAnimationFrame(animateCircuitSignal);
    };

    const updateHeader = () => {
      if (!header) return;
      header.classList.toggle('scrolled', window.scrollY > 40);
    };

    let scrollTicking = false;
    const onScroll = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        updateProgress();
        updateHeader();
        scrollTicking = false;
      });
    };

    document.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(onScroll);
    resizeObserver?.observe(document.body);
    updateProgress();
    if (!prefersReducedMotion) circuitAnimationFrame = requestAnimationFrame(animateCircuitSignal);
    updateHeader();

    const revealEls = document.querySelectorAll('.reveal, .mini-profile');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    revealEls.forEach((el) => revealObserver.observe(el));

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const fmt = el.getAttribute('data-format');
        const duration = 1600;
        let startTime = null;
        const formatNumber = (n) => (fmt === 'int' ? Math.round(n).toLocaleString('ru-RU') : n.toFixed(1).replace('.', ','));
        const step = (ts) => {
          if (!startTime) startTime = ts;
          const progress = Math.min((ts - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = formatNumber(target * eased);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = formatNumber(target);
        };
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter').forEach((el) => counterObserver.observe(el));

    const forms = Array.from(document.querySelectorAll('.cta-form'));
    const formHandlers = forms.map((form) => {
      const handler = (event) => {
        event.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const note = form.parentElement?.querySelector('.cta-note');
        if (note) {
          note.textContent = `Готово — план для ${emailInput?.value || 'вас'} уже летит на почту.`;
          note.classList.add('ok');
        }
        form.reset();
      };
      form.addEventListener('submit', handler);
      return [form, handler];
    });

    const disciplineCards = Array.from(document.querySelectorAll('.discipline[data-href]'));
    const cardHandlers = disciplineCards.map((card) => {
      const go = () => { window.location.href = hrefFor(card.getAttribute('data-href')); };
      const key = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          go();
        }
      };
      card.addEventListener('click', go);
      card.addEventListener('keydown', key);
      return [card, go, key];
    });

    const carouselCleanups = Array.from(document.querySelectorAll('.ig-carousel')).map((carousel) => {
      const track = carousel.querySelector('.ig-track');
      const slides = Array.from(carousel.querySelectorAll('.ig-slide'));
      const dots = Array.from(carousel.querySelectorAll('.ig-dot'));
      const counter = carousel.querySelector('.ig-counter');
      const prevBtn = carousel.querySelector('.ig-nav.prev');
      const nextBtn = carousel.querySelector('.ig-nav.next');
      const captionEl = carousel.getAttribute('data-caption-target') ? document.getElementById(carousel.getAttribute('data-caption-target')) : null;
      let index = 0;
      let startX = null;
      if (!track || !slides.length) return () => {};

      const render = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
        if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
        if (captionEl) {
          const cap = slides[index].getAttribute('data-caption');
          renderSafeCaption(captionEl, cap);
        }
      };
      const go = (nextIndex) => {
        index = (nextIndex + slides.length) % slides.length;
        render();
      };
      const prev = () => go(index - 1);
      const next = () => go(index + 1);
      const touchStart = (event) => { startX = event.touches[0].clientX; };
      const touchEnd = (event) => {
        if (startX === null) return;
        const dx = event.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
        startX = null;
      };

      prevBtn?.addEventListener('click', prev);
      nextBtn?.addEventListener('click', next);
      const dotHandlers = dots.map((dot) => {
        const handler = () => go(parseInt(dot.getAttribute('data-i'), 10));
        dot.addEventListener('click', handler);
        return [dot, handler];
      });
      track.addEventListener('touchstart', touchStart, { passive: true });
      track.addEventListener('touchend', touchEnd, { passive: true });
      render();

      return () => {
        prevBtn?.removeEventListener('click', prev);
        nextBtn?.removeEventListener('click', next);
        dotHandlers.forEach(([dot, handler]) => dot.removeEventListener('click', handler));
        track.removeEventListener('touchstart', touchStart);
        track.removeEventListener('touchend', touchEnd);
      };
    });

    return () => {
      document.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
      resizeObserver?.disconnect();
      if (circuitAnimationFrame) cancelAnimationFrame(circuitAnimationFrame);
      root.style.removeProperty('--scroll-progress');
      root.style.removeProperty('--circuit-layer-height');
      revealObserver.disconnect();
      counterObserver.disconnect();
      formHandlers.forEach(([form, handler]) => form.removeEventListener('submit', handler));
      cardHandlers.forEach(([card, go, key]) => {
        card.removeEventListener('click', go);
        card.removeEventListener('keydown', key);
      });
      carouselCleanups.forEach((cleanup) => cleanup());
    };
  }, [pageKey]);
}

function PageFrame({ page }) {
  const location = useLocation();
  const navigate = useNavigate();
  useDocumentMeta(page);
  useHashScroll(location.hash, page.key);
  useInternalNavigation(navigate);
  usePageEffects(page.key);

  return (
    <>
      <div id="race-progress"><span /></div>
      <CircuitTraceLayer />
      <Header activePage={page.nav} />
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
      <Footer />
    </>
  );
}

function AppRoutes() {
  const routes = useMemo(() => Object.entries(pathToPage), []);

  return (
    <Routes>
      {routes.map(([path, pageKey]) => (
        <Route key={path} path={path} element={<PageFrame page={pages[pageKey]} />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
