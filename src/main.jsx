import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { pages, pathToPage } from './pageContent.js';

const routeFiles = {
  home: 'index.html',
  routes: 'routes.html',
  community: 'community.html',
  road: 'road.html',
  track: 'track.html',
  mtb: 'mtb.html',
  gravel: 'gravel.html',
  cyclocross: 'cyclocross.html',
  bmx: 'bmx.html',
};

function pageFromLocation() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let path = window.location.pathname;
  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }
  return pages[pathToPage[path] || 'home'];
}

function hrefFor(file) {
  return `${import.meta.env.BASE_URL}${file}`.replace(/\/{2,}/g, '/');
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
    { key: 'community', href: 'community.html', label: 'Комьюнити' },
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
              <a href={hrefFor('index.html#join')}>Тренировочные планы</a>
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

function usePageEffects(pageKey) {
  useEffect(() => {
    const progressBar = document.querySelector('#race-progress span');
    const header = document.getElementById('site-header');

    const updateProgress = () => {
      if (!progressBar) return;
      const scrollEl = document.scrollingElement || document.documentElement;
      const denom = scrollEl.scrollHeight - scrollEl.clientHeight;
      const scrolled = denom > 0 ? (scrollEl.scrollTop / denom) * 100 : 0;
      progressBar.style.width = `${scrolled}%`;
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
    updateProgress();
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
          if (cap) captionEl.textContent = cap;
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

function App() {
  const initialPage = useMemo(() => pageFromLocation(), []);
  const [page] = useState(initialPage);
  useDocumentMeta(page);
  usePageEffects(page.key);

  return (
    <>
      <div id="race-progress"><span /></div>
      <Header activePage={page.nav} />
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
