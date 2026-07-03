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
    toggle.addEventListener('click', function(){
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ links.classList.remove('open'); });
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
      note.textContent = 'Готово — план для ' + email + ' уже летит на почту 🚴';
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
