'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { applyBasePathToHtml, hrefFor } from './routing.js';
import { sanitizePageHtml } from './security.js';
import { useDocumentMeta, useHashScroll, useInternalNavigation, usePageEffects } from './pageEffects.js';

function VeloCoreLogo() {
  return (
    <svg className="wheel" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="16" cy="16" r="11.5" />
      <circle cx="16" cy="16" r="3.2" fill="currentColor" stroke="none" />
      <path d="M16 4.5v8.2M16 19.3v8.2M4.5 16h8.2M19.3 16h8.2M7.9 7.9l5.8 5.8M18.3 18.3l5.8 5.8M24.1 7.9l-5.8 5.8M13.7 18.3l-5.8 5.8" strokeLinecap="round" opacity=".86" />
      <path d="M10.4 12.1 7.8 16l2.6 3.9M21.6 12.1l2.6 3.9-2.6 3.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.6 8.7h4.8M13.6 23.3h4.8" strokeLinecap="round" />
    </svg>
  );
}

function Brand({ footer = false }) {
  return (
    <a href={hrefFor('/#top')} className="brand" style={footer ? { marginBottom: 14 } : undefined}>
      <VeloCoreLogo />
      <span className="brand-text">
        <span className="brand-name">VeloCore</span>
        <span className="brand-suffix">Cycling / IT</span>
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
    { key: 'disciplines', href: '/#disciplines', label: 'Дисциплины' },
    { key: 'routes', href: '/routes', label: 'Маршруты' },
    { key: 'news', href: '/news', label: 'Новости' },
    { key: 'community', href: '/community', label: 'Комьюнити' },
    { key: 'trainingPlans', href: '/training-plans', label: 'Планы' },
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
          <a href={hrefFor('/#join')} onClick={() => setOpen(false)}>Контакты</a>
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
        <a href={hrefFor('/#join')} className="btn btn-primary" style={{ marginLeft: 16 }}>Присоединиться</a>
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
              <a href={hrefFor('/road')}>Шоссе</a>
              <a href={hrefFor('/track')}>Трек</a>
              <a href={hrefFor('/mtb')}>Маунтинбайк</a>
              <a href={hrefFor('/gravel')}>Гравел</a>
              <a href={hrefFor('/cyclocross')}>Циклокросс</a>
              <a href={hrefFor('/bmx')}>BMX</a>
            </div>
            <div className="footer-col">
              <h4>Ресурсы</h4>
              <a href={hrefFor('/routes')}>Маршруты</a>
              <a href={hrefFor('/community')}>Комьюнити</a>
              <a href={hrefFor('/training-plans')}>Тренировочные планы</a>
              <a href={hrefFor('/news')}>Новости</a>
            </div>
            <div className="footer-col">
              <h4>Контакты</h4>
              <a href="mailto:hello@velocore.dev">hello@velocore.dev</a>
              <a href="tel:+79000000000">+7 (900) 000-00-00</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 VeloCore. Все передачи включены.</p>
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

export default function SitePage({ page }) {
  const pathname = usePathname();
  const router = useRouter();
  const safeHtml = useMemo(() => applyBasePathToHtml(sanitizePageHtml(page.html)), [page.html]);
  useDocumentMeta(page);
  useHashScroll(page.key, pathname);
  useInternalNavigation(router);
  usePageEffects(page.key);

  return (
    <>
      <div id="race-progress"><span /></div>
      <CircuitTraceLayer />
      <Header activePage={page.nav} />
      <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
      <Footer />
    </>
  );
}
