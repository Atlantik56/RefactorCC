import { useEffect } from 'react';
import { pathToPage } from './pageContent.js';
import { hrefFor, normalizePath } from './routing.js';
import { renderSafeCaption } from './security.js';

export function useDocumentMeta(page) {
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

export function useHashScroll(pageKey, pathname) {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView();
    });
  }, [pageKey, pathname]);
}

export function useInternalNavigation(router) {
  useEffect(() => {
    const onClick = (event) => {
      const anchor = event.target.closest?.('a[href]');
      if (!anchor || anchor.target || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const path = normalizePath(url.pathname);
      if (!pathToPage[path]) return;

      event.preventDefault();
      router.push(`${path}${url.hash}`);
      if (url.hash) {
        requestAnimationFrame(() => {
          document.getElementById(url.hash.slice(1))?.scrollIntoView();
        });
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [router]);
}

export function usePageEffects(pageKey) {
  useEffect(() => {
    const progressBar = document.querySelector('#race-progress span');
    const root = document.documentElement;
    const header = document.getElementById('site-header');

    // The "heartbeat" pulse riding each trace is a <use> overlay whose
    // stroke-dashoffset is driven entirely by CSS (--scroll-progress), so the
    // only thing JS has to do is tell each overlay how long its own path is —
    // once, since these paths are static and their length in path-units never
    // changes with viewport size. No per-frame measurement or rAF loop needed.
    document.querySelectorAll('.circuit-glow[data-track]').forEach((glow) => {
      const path = document.getElementById(`track-${glow.dataset.track}-path`);
      if (path) glow.style.setProperty('--scan-len', path.getTotalLength());
    });

    const updateProgress = () => {
      const scrollEl = document.scrollingElement || document.documentElement;
      // Use body's own content height, not scrollEl.scrollHeight: the circuit layer
      // below is an absolutely-positioned decorative overlay anchored to the initial
      // containing block, so it inflates document.documentElement.scrollHeight once
      // sized. Feeding that inflated value back into its own height would create a
      // runaway feedback loop on every scroll/resize tick.
      const contentHeight = document.body.scrollHeight;
      const denom = contentHeight - scrollEl.clientHeight;
      const scrolled = denom > 0 ? scrollEl.scrollTop / denom : 0;
      root.style.setProperty('--scroll-progress', scrolled.toFixed(4));
      root.style.setProperty('--circuit-layer-height', `${contentHeight}px`);
      if (progressBar) progressBar.style.width = `${scrolled * 100}%`;
    };

    const updateHeader = () => {
      if (!header) return;
      header.classList.toggle('scrolled', window.scrollY > 40);
      // Content below the closing heading (CTA copy length, footer) varies a bit
      // page to page, so this clears with room to spare rather than tracking the
      // header's own height exactly.
      const distanceFromBottom = document.body.scrollHeight - (window.scrollY + window.innerHeight);
      header.classList.toggle('at-bottom', distanceFromBottom < header.offsetHeight * 2.5);
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
    updateHeader();

    document.querySelectorAll('img').forEach((img) => {
      if (!img.closest('.hero, .d-hero') && !img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    });

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
