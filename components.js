/*
 * components.js
 * -----------------------------------------------------------------------
 * Единый источник правды для шапки (<site-header>) и подвала (<site-footer>).
 * Раньше эта разметка была продублирована в каждом из 9 HTML-файлов —
 * теперь логотип, навигация и подвал меняются в одном месте.
 *
 * Работает как обычные Custom Elements без сборки и без fetch(), поэтому
 * корректно открывается и локально (file://), и с любого статического
 * хостинга. Каждый элемент заменяет сам себя на семантический
 * <header>/<footer> через outerHTML сразу при вставке в DOM — это
 * происходит синхронно во время парсинга страницы, поэтому CSS-селекторы
 * (header.scrolled и т.д.) и script.js работают без каких-либо изменений.
 * -----------------------------------------------------------------------
 */
(function(){

  var WHEEL_ICON =
    '<svg class="wheel" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="9"/>' +
      '<circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/>' +
      '<path d="M12 3.2v3.1M12 17.7v3.1M3.2 12h3.1M17.7 12h3.1M6.4 6.4l2.1 2.1M15.5 15.5l2.1 2.1M17.6 6.4l-2.1 2.1M8.5 15.5l-2.1 2.1" stroke-linecap="round"/>' +
      '<rect x="10.6" y="1.6" width="2.8" height="1.5" fill="currentColor" stroke="none"/>' +
      '<rect x="10.6" y="20.9" width="2.8" height="1.5" fill="currentColor" stroke="none"/>' +
      '<rect x="1.6" y="10.6" width="1.5" height="2.8" fill="currentColor" stroke="none"/>' +
      '<rect x="20.9" y="10.6" width="1.5" height="2.8" fill="currentColor" stroke="none"/>' +
    '</svg>';

  var BRAND_MARK =
    '<span class="brand-text"><span class="brand-name">Refactor</span><span class="brand-suffix">Cycling Club</span></span>';

  // Каждой странице соответствует ключ, определяющий подсветку пункта меню.
  // "home" (index.html) — ни один пункт не активен.
  var NAV_ITEMS = [
    { key: 'disciplines', href: 'index.html#disciplines', label: 'Дисциплины' },
    { key: 'routes',      href: 'routes.html',            label: 'Маршруты' },
    { key: 'community',   href: 'community.html',         label: 'Комьюнити' }
  ];

  function headerTemplate(activePage){
    var links = NAV_ITEMS.map(function(item){
      var cls = item.key === activePage ? ' class="active"' : '';
      return '<a href="' + item.href + '"' + cls + '>' + item.label + '</a>';
    }).join('\n      ');

    return (
      '<header id="site-header">' +
        '<nav class="wrap">' +
          '<a href="index.html#top" class="brand">' + WHEEL_ICON + BRAND_MARK + '</a>' +
          '<div class="nav-links" id="navLinks">' +
            links +
            '<a href="index.html#join">Контакты</a>' +
          '</div>' +
          '<button class="nav-toggle" id="navToggle" aria-label="Меню">' +
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
              '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>' +
            '</svg>' +
          '</button>' +
          '<a href="index.html#join" class="btn btn-primary" style="margin-left:16px;">Присоединиться</a>' +
        '</nav>' +
      '</header>'
    );
  }

  function footerTemplate(){
    return (
      '<footer>' +
        '<div class="wrap">' +
          '<div class="footer-top">' +
            '<div>' +
              '<a href="index.html#top" class="brand" style="margin-bottom:14px;">' + WHEEL_ICON + BRAND_MARK + '</a>' +
              '<p style="color:var(--text-dim); max-width:28ch; font-size:14px;">Сообщество и тренировочная платформа для велосипедистов всех дисциплин.</p>' +
            '</div>' +
            '<div class="footer-cols">' +
              '<div class="footer-col">' +
                '<h4>Дисциплины</h4>' +
                '<a href="road.html">Шоссе</a>' +
                '<a href="track.html">Трек</a>' +
                '<a href="mtb.html">Маунтинбайк</a>' +
                '<a href="gravel.html">Гравел</a>' +
                '<a href="cyclocross.html">Циклокросс</a>' +
                '<a href="bmx.html">BMX</a>' +
              '</div>' +
              '<div class="footer-col">' +
                '<h4>Ресурсы</h4>' +
                '<a href="routes.html">Маршруты</a>' +
                '<a href="community.html">Комьюнити</a>' +
                '<a href="index.html#join">Тренировочные планы</a>' +
              '</div>' +
              '<div class="footer-col">' +
                '<h4>Контакты</h4>' +
                '<a href="#">hello@refactorcc.dev</a>' +
                '<a href="#">+7 (900) 000-00-00</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<p>© 2026 Refactor Cycling Club. Все передачи включены.</p>' +
            '<div class="socials">' +
              '<a href="#" aria-label="Strava"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M9 3 15 14h-4l4 7-10-13h4L9 3Z" stroke-linejoin="round"/></svg></a>' +
              '<a href="#" aria-label="Garmin"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg></a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</footer>'
    );
  }

  class SiteHeader extends HTMLElement{
    connectedCallback(){
      var page = this.getAttribute('page') || 'home';
      this.outerHTML = headerTemplate(page);
    }
  }

  class SiteFooter extends HTMLElement{
    connectedCallback(){
      this.outerHTML = footerTemplate();
    }
  }

  if(!customElements.get('site-header')){ customElements.define('site-header', SiteHeader); }
  if(!customElements.get('site-footer')){ customElements.define('site-footer', SiteFooter); }

})();
