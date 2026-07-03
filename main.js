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
          '<button class="nav-toggle" id="navToggle" type="button" aria-label="Открыть меню" aria-controls="navLinks" aria-expanded="false">' +
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


(function(){
  // ---- Race progress bar ----
  var progressBar = document.querySelector('#race-progress span');
  function updateProgress(){
    if(!progressBar) return;
    var h = document.documentElement;
    var scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progressBar.style.width = (scrolled || 0) + '%';
  }

  // ---- Header solid on scroll ----
  var header = document.getElementById('site-header');
  function updateHeader(){
    if(!header) return;
    if(window.scrollY > 40){ header.classList.add('scrolled'); }
    else{ header.classList.remove('scrolled'); }
  }

  // ---- Throttle scroll work to one pass per animation frame ----
  // Avoids running updateProgress/updateHeader on every fired scroll event
  // (which can fire dozens of times per frame), keeping scroll smooth on
  // lower-powered phones.
  var scrollTicking = false;
  function onScroll(){
    if(scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(function(){
      updateProgress();
      updateHeader();
      scrollTicking = false;
    });
  }
  document.addEventListener('scroll', onScroll, { passive:true });
  updateProgress();
  updateHeader();

  // ---- Mobile nav toggle ----
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if(toggle && links){
    function setMenuOpen(isOpen){
      links.classList.toggle('open', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    }
    toggle.addEventListener('click', function(){
      setMenuOpen(!links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ setMenuOpen(false); });
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){ setMenuOpen(false); }
    });
  }

  // ---- Scroll reveal ----
  var revealEls = document.querySelectorAll('.reveal, .mini-profile');
  if(revealEls.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.18 });
    revealEls.forEach(function(el){ io.observe(el); });
  }

  // ---- Animated counters ----
  var counters = document.querySelectorAll('.counter');
  function formatNumber(n, fmt){
    if(fmt === 'int'){ return Math.round(n).toLocaleString('ru-RU'); }
    return n.toFixed(1).replace('.', ',');
  }
  if(counters.length){
    var counterIO = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-target'));
        var fmt = el.getAttribute('data-format');
        var duration = 1600;
        var startTime = null;
        function step(ts){
          if(!startTime) startTime = ts;
          var progress = Math.min((ts - startTime) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = formatNumber(target * eased, fmt);
          if(progress < 1){ requestAnimationFrame(step); }
          else{ el.textContent = formatNumber(target, fmt); }
        }
        requestAnimationFrame(step);
        counterIO.unobserve(el);
      });
    }, { threshold:0.5 });
    counters.forEach(function(el){ counterIO.observe(el); });
  }

  // ---- Join form ----
  var form = document.getElementById('joinForm');
  var note = document.getElementById('joinNote');
  if(form && note){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var emailInput = document.getElementById('joinEmail');
      var email = emailInput ? emailInput.value : '';
      note.textContent = 'Готово — план для ' + email + ' уже летит на почту.';
      note.classList.add('ok');
      form.reset();
    });
  }

  // ---- Discipline cards -> navigate on click (whole card clickable) ----
  document.querySelectorAll('.discipline[data-href]').forEach(function(card){
    card.addEventListener('click', function(){
      window.location.href = card.getAttribute('data-href');
    });
    card.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        window.location.href = card.getAttribute('data-href');
      }
    });
  });
  // ---- Instagram-style carousels ----
  document.querySelectorAll('.ig-carousel').forEach(function(carousel){
    var track = carousel.querySelector('.ig-track');
    var slides = carousel.querySelectorAll('.ig-slide');
    var dots = carousel.querySelectorAll('.ig-dot');
    var counter = carousel.querySelector('.ig-counter');
    var prevBtn = carousel.querySelector('.ig-nav.prev');
    var nextBtn = carousel.querySelector('.ig-nav.next');
    var captionEl = null;
    if(carousel.getAttribute('data-caption-target')){
      captionEl = document.getElementById(carousel.getAttribute('data-caption-target'));
    }
    var total = slides.length;
    var index = 0;
    if(!total) return;

    function render(){
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dots.forEach(function(d, di){ d.classList.toggle('active', di === index); });
      if(counter){ counter.textContent = (index + 1) + ' / ' + total; }
      if(captionEl){
        var cap = slides[index].getAttribute('data-caption');
        if(cap){ captionEl.innerHTML = cap; }
      }
    }
    function go(i){
      index = (i + total) % total;
      render();
    }

    if(prevBtn){ prevBtn.addEventListener('click', function(){ go(index - 1); }); }
    if(nextBtn){ nextBtn.addEventListener('click', function(){ go(index + 1); }); }
    dots.forEach(function(d){
      d.addEventListener('click', function(){ go(parseInt(d.getAttribute('data-i'), 10)); });
    });

    // touch / pointer swipe
    var startX = null;
    track.addEventListener('touchstart', function(e){ startX = e.touches[0].clientX; }, { passive:true });
    track.addEventListener('touchend', function(e){
      if(startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if(Math.abs(dx) > 40){ dx < 0 ? go(index + 1) : go(index - 1); }
      startX = null;
    }, { passive:true });

    render();
  });
})();

