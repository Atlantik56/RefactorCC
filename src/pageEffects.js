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
    let circuitGeometryDirty = true;

    const updateCircuitGeometry = () => {
      circuitSparks.forEach((sparkConfig) => {
        if (!sparkConfig.path || !circuitLayer) return;
        const svg = sparkConfig.path.ownerSVGElement;
        const viewBox = svg?.viewBox?.baseVal;
        if (!svg || !viewBox?.width || !viewBox?.height) return;

        sparkConfig.pathLength = sparkConfig.path.getTotalLength();
        sparkConfig.viewBox = viewBox;
        sparkConfig.svgRect = svg.getBoundingClientRect();
        sparkConfig.layerRect = circuitLayer.getBoundingClientRect();
      });
      circuitGeometryDirty = false;
    };

    const updateCircuitSpark = ({ path, spark, direction }, progress) => {
      if (!path || !spark || !circuitLayer) return;
      const svg = path.ownerSVGElement;
      if (circuitGeometryDirty) updateCircuitGeometry();

      const { pathLength, viewBox, svgRect, layerRect } = circuitSparks.find((item) => item.path === path) || {};
      if (!svg || !pathLength || !viewBox?.width || !viewBox?.height || !svgRect || !layerRect) return;

      const sparkProgress = direction === -1 ? 1 - progress : progress;
      const point = path.getPointAtLength(pathLength * sparkProgress);
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
      circuitGeometryDirty = true;
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

    const startCircuitSignal = () => {
      if (prefersReducedMotion || circuitAnimationFrame) return;
      circuitAnimationFrame = requestAnimationFrame(animateCircuitSignal);
    };

    const stopCircuitSignal = () => {
      if (!circuitAnimationFrame) return;
      cancelAnimationFrame(circuitAnimationFrame);
      circuitAnimationFrame = null;
    };

    const onVisibilityChange = () => {
      if (document.hidden) stopCircuitSignal();
      else startCircuitSignal();
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
    document.addEventListener('visibilitychange', onVisibilityChange);
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(onScroll);
    resizeObserver?.observe(document.body);
    updateProgress();
    startCircuitSignal();
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
      document.removeEventListener('visibilitychange', onVisibilityChange);
      resizeObserver?.disconnect();
      stopCircuitSignal();
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
