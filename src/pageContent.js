export const pages = {
  home: {
    key: 'home',
    nav: 'home',
    title: `Refactor Cycling Club — Велоспорт без компромиссов`,
    description: `Refactor Cycling Club — статический сайт велосипедного клуба с дисциплинами, маршрутами, профилями высот и тренировочным CTA.`,
    ogTitle: `Refactor Cycling Club — Велоспорт без компромиссов`,
    ogDescription: `Дисциплины, маршруты с профилем высот и сообщество райдеров для сезона 2026.`,
    html: `<main id="top">

  <!-- HERO -->
  <section class="hero circuit-grid">
    <div class="speed-lines">
      <div class="row" style="top:18%; animation-duration:4.2s;"></div>
      <div class="row" style="top:34%; animation-duration:6.1s;"></div>
      <div class="row" style="top:52%; animation-duration:3.4s;"></div>
      <div class="row" style="top:68%; animation-duration:5.3s;"></div>
      <div class="row" style="top:84%; animation-duration:4.8s;"></div>
    </div>

    <div class="wrap hero-inner">
      <span class="eyebrow">Сезон 2026 · шоссе / трек / mtb</span>
      <h1>
        <span class="line"><span>Каждый оборот</span></span>
        <span class="line"><span>педалей —</span></span>
        <span class="line"><span>шаг к финишу</span></span>
      </h1>
      <p class="lead">Тренировочные планы, маршруты с профилем высот и сообщество райдеров — для тех, кто выбирает шоссе, трек, грунт или город. Разгоняйся с теми, кто держит темп.</p>
      <div class="hero-ctas">
        <a href="#join" class="btn btn-primary">
          Начать тренироваться
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
        <a href="routes.html" class="btn btn-ghost">Смотреть маршруты</a>
      </div>

      <div class="climb-wrap">
        <div class="climb-legend">
          <span><i class="dot" style="background:var(--green)"></i>0–4%</span>
          <span><i class="dot" style="background:var(--yellow)"></i>4–7%</span>
          <span><i class="dot" style="background:var(--orange)"></i>7–10%</span>
          <span><i class="dot" style="background:var(--red)"></i>10%+</span>
          <span style="margin-left:auto; color:var(--text-dim-2);">Профиль подъёма · перевал Асфальтовый, 14.2 км</span>
        </div>
        <svg aria-hidden="true" class="climb-svg" viewBox="0 0 1000 190" preserveAspectRatio="none">
          <defs>
            <linearGradient id="climbGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stop-color="#6fd07a"/>
              <stop offset="22%" stop-color="#e4ff3c"/>
              <stop offset="45%" stop-color="#ff9a3c"/>
              <stop offset="62%" stop-color="#ff4d4d"/>
              <stop offset="80%" stop-color="#ff9a3c"/>
              <stop offset="100%" stop-color="#6fd07a"/>
            </linearGradient>
            <linearGradient id="climbFillGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.20"/>
              <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <path class="climb-fill" fill="url(#climbFillGrad)" d="M0,170 C 90,150 140,90 230,80 C 320,70 360,140 460,120 C 560,100 600,20 700,30 C 800,40 840,110 1000,60 L1000,190 L0,190 Z"/>
          <path id="climbLine" class="climb-path" stroke="url(#climbGrad)" d="M0,170 C 90,150 140,90 230,80 C 320,70 360,140 460,120 C 560,100 600,20 700,30 C 800,40 840,110 1000,60"/>
          <circle class="rider-dot" r="6" fill="#f2f1ea">
            <animateMotion dur="7s" repeatCount="indefinite" rotate="auto"
              path="M0,170 C 90,150 140,90 230,80 C 320,70 360,140 460,120 C 560,100 600,20 700,30 C 800,40 840,110 1000,60" />
          </circle>
        </svg>
      </div>
    </div>

    <div class="scroll-cue"><div class="stick"></div>Скролль</div>
  </section>

  <!-- STATS -->
  <section class="stats circuit-grid">
    <div class="wrap stats-grid">
      <div class="stat reveal">
        <div class="num"><span class="counter" data-target="34.2">0</span><span class="unit">км/ч</span></div>
        <div class="label">Средняя скорость в группе</div>
      </div>
      <div class="stat reveal">
        <div class="num"><span class="counter" data-target="128540" data-format="int">0</span><span class="unit">км</span></div>
        <div class="label">Пройдено сообществом за сезон</div>
      </div>
      <div class="stat reveal">
        <div class="num"><span class="counter" data-target="2300" data-format="int">0</span><span class="unit">+</span></div>
        <div class="label">Активных райдеров</div>
      </div>
      <div class="stat reveal">
        <div class="num"><span class="counter" data-target="1850" data-format="int">0</span><span class="unit">тыс. м</span></div>
        <div class="label">Суммарный набор высоты</div>
      </div>
    </div>
  </section>

  <!-- DISCIPLINES -->
  <section class="pad" id="disciplines">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Шесть дисциплин,<br>один пульс</h2>
        <p>От гладкого асфальта до велодрома — выбери свой формат или пробуй все по очереди. Нажми на карточку, чтобы узнать больше.</p>
      </div>

      <div class="disciplines-grid stagger">
        <div class="discipline reveal" data-href="road.html" tabindex="0" role="link" aria-label="Открыть страницу дисциплины Шоссе">
          <div class="discipline-photo">
            <img src="assets/wikimedia/tdf-2022-tuzaguet-arri-re-du-peloton.jpg" alt="Пелотон шоссейных велогонщиков на асфальтовой дороге" loading="lazy">
            <span class="idx mono">D—01</span>
          </div>
          <div class="body">
            <svg aria-hidden="true" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M5.5 17.5 10 8h5l3.5 9.5"/><path d="M10 8 12.5 12"/></svg>
            <h3>Шоссе</h3>
            <p>Групповые заезды, темповые тренировки и гонки на выносливость по асфальту.</p>
            <span class="tag">Endurance</span>
            <span class="more">Подробнее
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
        <div class="discipline reveal" data-href="track.html" tabindex="0" role="link" aria-label="Открыть страницу дисциплины Трек">
          <div class="discipline-photo">
            <img src="assets/wikimedia/cyclists-on-the-valley-preferred-cycling-center-track.jpg" alt="Велосипедисты на велодроме" loading="lazy">
            <span class="idx mono">D—02</span>
          </div>
          <div class="body">
            <svg aria-hidden="true" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="12" rx="9" ry="5"/><ellipse cx="12" cy="12" rx="5" ry="2.6"/></svg>
            <h3>Трек</h3>
            <p>Спринты на велодроме, точная тактика и работа с фиксированной передачей.</p>
            <span class="tag">Sprint</span>
            <span class="more">Подробнее
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
        <div class="discipline reveal" data-href="mtb.html" tabindex="0" role="link" aria-label="Открыть страницу дисциплины Маунтинбайк">
          <div class="discipline-photo">
            <img src="assets/wikimedia/cross-country-biker.jpg" alt="Райдер на маунтинбайке на лесной тропе" loading="lazy">
            <span class="idx mono">D—03</span>
          </div>
          <div class="body">
            <svg aria-hidden="true" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M5.5 17.5 9 9l4 3-2 5.5" stroke-linejoin="round"/><path d="M13 12 16 6" /></svg>
            <h3>Маунтинбайк</h3>
            <p>Кросс-кантри и эндуро по лесным тропам — техника и контроль скорости.</p>
            <span class="tag">Terrain</span>
            <span class="more">Подробнее
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
        <div class="discipline reveal" data-href="gravel.html" tabindex="0" role="link" aria-label="Открыть страницу дисциплины Гравел">
          <div class="discipline-photo">
            <img src="assets/wikimedia/cyclist-on-gravel-bike-descending-eldridge-grade.jpg" alt="Велосипедист на гравийном велосипеде на грунтовой дороге" loading="lazy">
            <span class="idx mono">D—04</span>
          </div>
          <div class="body">
            <svg aria-hidden="true" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M5.5 17.5 9.5 8h4l4.5 9.5" stroke-dasharray="1.5 2"/></svg>
            <h3>Гравел</h3>
            <p>Смешанное покрытие, дальние дистанции и приключенческий формат.</p>
            <span class="tag">Adventure</span>
            <span class="more">Подробнее
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
        <div class="discipline reveal" data-href="cyclocross.html" tabindex="0" role="link" aria-label="Открыть страницу дисциплины Циклокросс">
          <div class="discipline-photo">
            <img src="assets/wikimedia/toronto-cyclocross-2010-5090881203.jpg" alt="Гонщик на трассе циклокросса" loading="lazy">
            <span class="idx mono">D—05</span>
          </div>
          <div class="body">
            <svg aria-hidden="true" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M5.5 17.5 8 11l3 1 1-4 4.5 1 2 8.5" /></svg>
            <h3>Циклокросс</h3>
            <p>Короткие круги, грязь, барьеры и взрывная выносливость поздней осенью.</p>
            <span class="tag">Grit</span>
            <span class="more">Подробнее
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
        <div class="discipline reveal" data-href="bmx.html" tabindex="0" role="link" aria-label="Открыть страницу дисциплины BMX">
          <div class="discipline-photo">
            <img src="assets/wikimedia/bmx-racing-action-photo.jpg" alt="Гонщик BMX в прыжке" loading="lazy">
            <span class="idx mono">D—06</span>
          </div>
          <div class="body">
            <svg aria-hidden="true" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="17" r="3"/><circle cx="17" cy="17" r="3"/><path d="M6 17 11 8h5l-3.5 9" /><path d="M11 8h-2" /></svg>
            <h3>BMX</h3>
            <p>Прыжки, рампы и контроль байка на пределе — дисциплина для смелых.</p>
            <span class="tag">Airtime</span>
            <span class="more">Подробнее
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURED ROUTE -->
  <section class="pad" id="route" style="background:var(--bg-alt); border-top:1px solid var(--line); border-bottom:1px solid var(--line);">
    <div class="wrap route">
      <div class="route-card reveal">
        <span class="eyebrow">Маршрут недели</span>
        <h3 style="margin-top:14px; font-size:26px;">Перевал Асфальтовый</h3>
        <p style="color:var(--text-dim); margin-top:8px; font-size:14.5px;">Классический подъём для проверки формы: длинные пологие участки чередуются с резкими секциями у вершины.</p>

        <svg aria-hidden="true" class="mini-profile" id="miniProfile" viewBox="0 0 1000 140" preserveAspectRatio="none">
          <path stroke="url(#climbGrad)" d="M0,120 C 90,110 140,70 230,60 C 320,50 360,100 460,88 C 560,76 600,15 700,22 C 800,29 840,80 1000,44"/>
        </svg>

        <div class="route-meta">
          <div><div class="v">14.2</div><div class="k">км</div></div>
          <div><div class="v">612</div><div class="k">м набора</div></div>
          <div><div class="v">7.4%</div><div class="k">ср. уклон</div></div>
        </div>
        <div class="difficulty">
          <i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i>
        </div>
      </div>

      <div class="route-side reveal">
        <h2>Маршруты с честным<br>профилем высот</h2>
        <p>Каждый маршрут в каталоге размечен по километражу и уклону — без сюрпризов на последнем километре. Фильтруй по сложности, покрытию и региону.</p>
        <p>Более 340 проверенных маршрутов от сообщества: от равнинных покатушек до горных серпантинов.</p>
        <a href="routes.html" class="btn btn-ghost">Открыть каталог маршрутов
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- COMMUNITY -->
  <section class="pad" id="community">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Голос пелотона</h2>
        <p>Что говорят райдеры, которые уже тренируются с нами. <a href="community.html" style="color:var(--accent); white-space:nowrap;">Всё о комьюнити →</a></p>
      </div>
      <div class="quotes stagger">
        <div class="quote reveal">
          <div class="stars">★★★★★</div>
          <p>«Профили подъёмов на маршрутах — то, чего мне не хватало. Больше никаких неожиданных стен на 10-м километре».</p>
          <div class="who">
            <div class="avatar">МК</div>
            <div><div class="name">Марина К.</div><div class="role">Шоссе, 3 сезона</div></div>
          </div>
        </div>
        <div class="quote reveal">
          <div class="stars">★★★★★</div>
          <p>«Начал с трека полгода назад — тренировочные планы помогли не перегореть в первый же месяц».</p>
          <div class="who">
            <div class="avatar">ДС</div>
            <div><div class="name">Даниил С.</div><div class="role">Трек, новичок</div></div>
          </div>
        </div>
        <div class="quote reveal">
          <div class="stars">★★★★★</div>
          <p>«Сообщество реально живое: находишь группу под свой темп в любой день недели».</p>
          <div class="who">
            <div class="avatar">АЛ</div>
            <div><div class="name">Анна Л.</div><div class="role">Гравел, 5 сезонов</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём вводный тренировочный план и подборку маршрутов рядом с вами.</p>
      <form class="cta-form" id="joinForm">
        <input type="email" placeholder="you@mail.ru" required id="joinEmail">
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note" id="joinNote">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  routes: {
    key: 'routes',
    nav: 'routes',
    title: `Маршруты — Refactor Cycling Club`,
    description: `Каталог велосипедных маршрутов Refactor Cycling Club с километражом, набором высоты, покрытием и уровнем сложности.`,
    ogTitle: `Маршруты — Refactor Cycling Club`,
    ogDescription: `Проверенные маршруты для шоссе, гравела и городских поездок с честным профилем высот.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero" style="min-height:66vh;">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/cyclists-on-buttertubs-geograph-org-uk-2418147.jpg" alt="Велосипедисты поднимаются по горному перевалу">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="index.html">Главная</a> / <span>Маршруты</span>
      </div>
      <span class="idx-big mono">КАТАЛОГ · 340+ МАРШРУТОВ</span>
      <h1>Маршруты</h1>
      <p class="sub">Каждый маршрут размечен по километражу, набору высоты и покрытию — с честным профилем высот, без сюрпризов на последнем километре. От равнинных покатушек до горных серпантинов.</p>
    </div>
  </section>

  <!-- SPEC STRIP -->
  <section class="spec-strip circuit-grid">
    <div class="wrap spec-grid">
      <div class="spec"><div class="v">340+</div><div class="k">маршрутов в каталоге</div></div>
      <div class="spec"><div class="v">12</div><div class="k">регионов</div></div>
      <div class="spec"><div class="v">5</div><div class="k">типов покрытия</div></div>
      <div class="spec"><div class="v">5</div><div class="k">уровней сложности</div></div>
    </div>
  </section>

  <!-- ROUTES GRID -->
  <section class="pad">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Проверенные маршруты</h2>
        <p>Подборка от сообщества — с профилем высот, точками воды и рекомендациями по сезону.</p>
      </div>

      <div class="routes-grid stagger">

        <div class="route-tile reveal">
          <div class="photo">
            <span class="diff-badge mono">●●●●○ Сложный</span>
            <img src="assets/wikimedia/cyclists-on-buttertubs-geograph-org-uk-2418147.jpg" alt="Велосипедисты на горном перевале Асфальтовый" loading="lazy">
          </div>
          <div class="body">
            <h3>Перевал Асфальтовый</h3>
            <p>Классический подъём для проверки формы: длинные пологие участки чередуются с резкими секциями у вершины.</p>
            <svg aria-hidden="true" class="mini-profile in" viewBox="0 0 1000 90" preserveAspectRatio="none" style="margin-bottom:10px;">
              <path stroke="url(#climbGradR)" d="M0,80 C 90,70 140,45 230,38 C 320,30 360,60 460,52 C 560,44 600,10 700,14 C 800,18 840,48 1000,26"/>
            </svg>
            <div class="route-meta">
              <div><div class="v">14.2</div><div class="k">км</div></div>
              <div><div class="v">612</div><div class="k">м набора</div></div>
              <div><div class="v">7.4%</div><div class="k">ср. уклон</div></div>
            </div>
          </div>
        </div>

        <div class="route-tile reveal">
          <div class="photo">
            <span class="diff-badge mono">●●○○○ Средний</span>
            <img src="assets/wikimedia/cyclist-on-gravel-bike-descending-eldridge-grade.jpg" alt="Велосипедист на гравийной дороге среди леса" loading="lazy">
          </div>
          <div class="body">
            <h3>Лесная петля Эльдридж</h3>
            <p>Смешанное покрытие через сосновый лес: укатанный грунт, пара бродов и открытые виды на спуске.</p>
            <div class="route-meta" style="border-top:none; padding-top:0; margin-top:6px;">
              <div><div class="v">42</div><div class="k">км</div></div>
              <div><div class="v">380</div><div class="k">м набора</div></div>
              <div><div class="v">Грунт</div><div class="k">покрытие</div></div>
            </div>
          </div>
        </div>

        <div class="route-tile reveal">
          <div class="photo">
            <span class="diff-badge mono">●○○○○ Лёгкий</span>
            <img src="assets/wikimedia/a-cyclist-rides-on-a-paved-square-surrounded-by-beautiful-historic-buildings-dur.jpg" alt="Велосипедист на вечерней городской площади" loading="lazy">
          </div>
          <div class="body">
            <h3>Вечерний город</h3>
            <p>Спокойный кольцевой маршрут по историческому центру — отличный вариант для восстановительной поездки.</p>
            <div class="route-meta" style="border-top:none; padding-top:0; margin-top:6px;">
              <div><div class="v">18</div><div class="k">км</div></div>
              <div><div class="v">60</div><div class="k">м набора</div></div>
              <div><div class="v">Асфальт</div><div class="k">покрытие</div></div>
            </div>
          </div>
        </div>

        <div class="route-tile reveal">
          <div class="photo">
            <span class="diff-badge mono">●●●○○ Средне-сложный</span>
            <img src="assets/wikimedia/cycle-sunset-road-photography.jpg" alt="Велосипедист на дороге на закате" loading="lazy">
          </div>
          <div class="body">
            <h3>Закатное шоссе</h3>
            <p>Длинный равнинный отрезок с плавными холмами — популярен для темповых вечерних заездов летом.</p>
            <div class="route-meta" style="border-top:none; padding-top:0; margin-top:6px;">
              <div><div class="v">65</div><div class="k">км</div></div>
              <div><div class="v">240</div><div class="k">м набора</div></div>
              <div><div class="v">Асфальт</div><div class="k">покрытие</div></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- HOW WE MAP -->
  <section class="pad" style="background:var(--bg-alt); border-top:1px solid var(--line); border-bottom:1px solid var(--line);">
    <div class="wrap route">
      <div class="route-side reveal">
        <h2>Как мы размечаем маршруты</h2>
        <p>Каждый маршрут проезжает и проверяет вручную кто-то из сообщества: фиксируем точный профиль высот, отмечаем опасные участки и сезонные ограничения.</p>
        <p>На каждой странице маршрута — интерактивный профиль подъёма с цветовой кодировкой по крутизне, точки для воды и еды, а также рекомендации по типу покрышек.</p>
        <a href="index.html#join" class="btn btn-primary">Получить доступ к каталогу
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
      <div class="route-card reveal">
        <span class="eyebrow">Легенда уклона</span>
        <div style="margin-top:20px; display:flex; flex-direction:column; gap:14px;">
          <div style="display:flex; align-items:center; gap:12px;"><i style="width:16px;height:16px;border-radius:4px;background:var(--green);display:block;"></i><span style="color:var(--text-dim); font-size:14px;">0–4% — легко держать разговорный темп</span></div>
          <div style="display:flex; align-items:center; gap:12px;"><i style="width:16px;height:16px;border-radius:4px;background:var(--yellow);display:block;"></i><span style="color:var(--text-dim); font-size:14px;">4–7% — стабильная работа, нужен ритм</span></div>
          <div style="display:flex; align-items:center; gap:12px;"><i style="width:16px;height:16px;border-radius:4px;background:var(--orange);display:block;"></i><span style="color:var(--text-dim); font-size:14px;">7–10% — ощутимо, выбирайте передачу заранее</span></div>
          <div style="display:flex; align-items:center; gap:12px;"><i style="width:16px;height:16px;border-radius:4px;background:var(--red);display:block;"></i><span style="color:var(--text-dim); font-size:14px;">10%+ — стенка, темп по ощущениям</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Каталог открыт</span>
      <h2 style="margin-top:16px;">Найдите свой следующий маршрут</h2>
      <p>Оставьте почту — пришлём подборку маршрутов рядом с вами и доступ к полному каталогу.</p>
      <form class="cta-form" id="joinForm">
        <input type="email" placeholder="you@mail.ru" required id="joinEmail">
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note" id="joinNote">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main><svg aria-hidden="true" width="0" height="0" style="position:absolute;">
  <defs>
    <linearGradient id="climbGradR" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"  stop-color="#6fd07a"/>
      <stop offset="22%" stop-color="#e4ff3c"/>
      <stop offset="45%" stop-color="#ff9a3c"/>
      <stop offset="62%" stop-color="#ff4d4d"/>
      <stop offset="80%" stop-color="#ff9a3c"/>
      <stop offset="100%" stop-color="#6fd07a"/>
    </linearGradient>
  </defs>
</svg>`,
  },
  community: {
    key: 'community',
    nav: 'community',
    title: `Комьюнити — Refactor Cycling Club`,
    description: `Комьюнити Refactor Cycling Club: групповые тренировки, ценности клуба, расписание и форма команды.`,
    ogTitle: `Комьюнити — Refactor Cycling Club`,
    ogDescription: `Живое велосипедное сообщество с тренировками, групповыми выездами и клубной культурой.`,
    html: `<main>

  <!-- COMMUNITY HERO -->
  <section class="c-hero">
    <div class="c-hero-photo">
      <img src="assets/wikimedia/silhouette-of-a-pack-of-cyclists.jpg" alt="Силуэты группы велосипедистов на закате">
    </div>
    <div class="wrap c-hero-inner">
      <span class="eyebrow reveal">120+ райдеров · старт в 2026</span>
      <h1 style="margin-top:16px;">Комьюнити</h1>
      <p class="sub">Refactor Cycling Club — это не только тренировочные планы. Это люди, с которыми вы выезжаете по субботам, делитесь маршрутами и празднуете личные рекорды.</p>
    </div>
  </section>

  <!-- SPEC STRIP -->
  <section class="spec-strip circuit-grid">
    <div class="wrap spec-grid">
      <div class="spec"><div class="v">120+</div><div class="k">активных райдеров</div></div>
      <div class="spec"><div class="v">12</div><div class="k">групповых заездов в месяц</div></div>
      <div class="spec"><div class="v">2</div><div class="k">города присутствия</div></div>
      <div class="spec"><div class="v">2026</div><div class="k">год основания</div></div>
    </div>
  </section>

  <!-- VALUES -->
  <section class="pad">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>На чём мы держимся</h2>
        <p>Три принципа, которые определяют, как устроено сообщество.</p>
      </div>
      <div class="values-grid stagger">
        <div class="value-card reveal">
          <span class="num mono">01</span>
          <h3>Любой темп — свой</h3>
          <p>Группы делятся по среднему темпу, а не по амбициям. Новичок и гонщик находят компанию в один и тот же вечер.</p>
        </div>
        <div class="value-card reveal">
          <span class="num mono">02</span>
          <h3>Никого не бросаем</h3>
          <p>На каждом групповом заезде есть замыкающий — темп группы равен темпу самого медленного участника.</p>
        </div>
        <div class="value-card reveal">
          <span class="num mono">03</span>
          <h3>Прогресс важнее эго</h3>
          <p>Мы отмечаем личные рекорды наравне с призовыми местами — километраж и техника растут у всех по-своему.</p>
        </div>
      </div>

      <!-- PHOTO STORY 1 -->
      <div class="photo-story reveal">
        <div class="photo-col">
          <img src="assets/wikimedia/cool-morning-bike-ride-49995169181.jpg" alt="Групповой утренний заезд сообщества">
        </div>
        <div>
          <span class="eyebrow">Утренние заезды</span>
          <h3 style="margin-top:14px;">Суббота начинается в 7:00</h3>
          <p>Каждую субботу три группы стартуют с разным темпом — от спокойного восстановительного до темпового с элементами интервалов. Маршрут меняется каждую неделю, а после — общий сбор в оговорённой точке.</p>
          <p>Присоединиться может любой: регистрация в приложении клуба, велосипед и шлем — всё, что нужно для старта.</p>
        </div>
      </div>

      <!-- PHOTO STORY 2 -->
      <div class="photo-story reverse reveal">
        <div class="photo-col">
          <img src="assets/wikimedia/cyclists-at-blacksmiths-coffee-shop-belsay-geograph-org-uk-3504052.jpg" alt="Велосипедисты на кофе-паузе у кофейни после заезда">
        </div>
        <div>
          <span class="eyebrow">Кофе-паузы</span>
          <h3 style="margin-top:14px;">Половина клуба — это разговоры после финиша</h3>
          <p>Групповой выезд редко заканчивается на финишной точке — добрая половина клуба обычно остаётся на кофе. Именно здесь чаще всего рождаются новые маршруты, обмен опытом и компании для длинных стартов.</p>
          <p>Партнёрские кофейни на маршрутах отмечены в приложении отдельным значком — с местом под велосипед и розетками для навигаторов.</p>
        </div>
      </div>

      <!-- KIT SHOWCASE -->
      <div class="kit-showcase reveal">
        <div class="kit-carousel-col">
          <div class="ig-carousel" data-caption-target="kitCaption">
            <div class="ig-track">
              <div class="ig-slide" data-caption="<strong>Runtime</strong> — тёмно-синяя база и бирюзовые полосы «потока данных»: будто лог выполнения прямо на спине.">
                <img src="assets/kit-showcase-1.png" alt="Форма Refactor Cycling Club, версия Runtime — тёмно-синее джерси с бирюзовым цифровым узором">
              </div>
              <div class="ig-slide" data-caption="<strong>Architecture</strong> — светлая версия с чертежом системы: базы данных, API и модули связаны линиями прямо на джерси.">
                <img src="assets/kit-showcase-2.png" alt="Форма Refactor Cycling Club, версия Architecture — белое джерси со схемой архитектуры системы">
              </div>
              <div class="ig-slide" data-caption="<strong>Terminal</strong> — чёрная форма со столбцом кода вдоль спины и печатной платой на рукавах: вечерний вариант клуба.">
                <img src="assets/kit-showcase-3.png" alt="Форма Refactor Cycling Club, версия Terminal — чёрное джерси с кодом на спине и узором печатной платы на рукавах">
              </div>
              <div class="ig-slide" data-caption="<strong>Architecture RoadSuit</strong> — светлая версия с чертежом системы: базы данных, API и модули связаны линиями прямо на велокомбинезоне для шоссейных гонок.">
                <img src="assets/kit-showcase-4.png" alt="Форма Refactor Cycling Club, версия Architecture RoadSuit — светлый шоссейный велокомбинезон со схемой архитектуры системы">
              </div>
            </div>
            <button class="ig-nav prev" aria-label="Предыдущий вариант">‹</button>
            <button class="ig-nav next" aria-label="Следующий вариант">›</button>
            <div class="ig-counter">1 / 4</div>
            <div class="ig-dots">
              <button class="ig-dot active" data-i="0" aria-label="Вариант 1"></button>
              <button class="ig-dot" data-i="1" aria-label="Вариант 2"></button>
              <button class="ig-dot" data-i="2" aria-label="Вариант 3"></button>
              <button class="ig-dot" data-i="3" aria-label="Вариант 4"></button>
            </div>
          </div>
          <p class="ig-caption" id="kitCaption"><strong>Runtime</strong> — тёмно-синяя база и бирюзовые полосы «потока данных»: будто лог выполнения прямо на спине.</p>
        </div>
        <div>
          <span class="eyebrow">Форма клуба · сезон 2026</span>
          <h3 style="margin-top:14px;">Четыре версии одного кода</h3>
          <p>Джерси клуба выходит в четырёх раскладках — но идея одна на всех: узор читается как графики нагрузки и схема системы, а не просто орнамент. Листайте карточки, чтобы увидеть все варианты.</p>
          <p>Каждому райдеру доступна именная версия — с ником из тренировочного приложения на спине, как второй репозиторий с историей заездов.</p>
          <div class="tag-row">
            <span>Нейлон 75%, Спандекс 25%</span>
            <span>Полный zip</span>
            <span>3 кармана</span>
            <span>Светоотражающие вставки</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SCHEDULE -->
  <section class="pad" style="background:var(--bg-alt); border-top:1px solid var(--line); border-bottom:1px solid var(--line);">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Расписание недели</h2>
        <p>Регулярные групповые заезды — приходите без предварительной записи.</p>
      </div>
      <div class="schedule reveal">
        <div class="schedule-row head">
          <div>День</div><div>Время</div><div>Формат</div><div>Темп</div>
        </div>
        <div class="schedule-row">
          <div class="day">Вторник</div><div>19:00</div><div>Трек, интервалы</div><div>Высокий</div>
        </div>
        <div class="schedule-row">
          <div class="day">Четверг</div><div>18:30</div><div>Шоссе, темповая</div><div>Средний–высокий</div>
        </div>
        <div class="schedule-row">
          <div class="day">Суббота</div><div>07:00</div><div>Шоссе, длинная</div><div>Любой</div>
        </div>
        <div class="schedule-row">
          <div class="day">Воскресенье</div><div>09:00</div><div>Гравел / MTB</div><div>Спокойный</div>
        </div>
      </div>
    </div>
  </section>

  <!-- QUOTES -->
  <section class="pad" id="community">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Голос пелотона</h2>
        <p>Что говорят райдеры, которые уже тренируются с нами.</p>
      </div>
      <div class="quotes stagger">
        <div class="quote reveal">
          <div class="stars">★★★★★</div>
          <p>«Профили подъёмов на маршрутах — то, чего мне не хватало. Больше никаких неожиданных стен на 10-м километре».</p>
          <div class="who">
            <div class="avatar">МК</div>
            <div><div class="name">Марина К.</div><div class="role">Шоссе, с основания клуба</div></div>
          </div>
        </div>
        <div class="quote reveal">
          <div class="stars">★★★★★</div>
          <p>«Начал с трека полгода назад — тренировочные планы помогли не перегореть в первый же месяц».</p>
          <div class="who">
            <div class="avatar">ДС</div>
            <div><div class="name">Даниил С.</div><div class="role">Трек, новичок</div></div>
          </div>
        </div>
        <div class="quote reveal">
          <div class="stars">★★★★★</div>
          <p>«Сообщество реально живое: находишь группу под свой темп в любой день недели».</p>
          <div class="who">
            <div class="avatar">АЛ</div>
            <div><div class="name">Анна Л.</div><div class="role">Гравел, с первого дня</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Присоединяйтесь</span>
      <h2 style="margin-top:16px;">Первый заезд — за нами</h2>
      <p>Оставьте почту — пришлём расписание ближайших групповых заездов в вашем городе.</p>
      <form class="cta-form" id="joinForm">
        <input type="email" placeholder="you@mail.ru" required id="joinEmail">
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note" id="joinNote">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  road: {
    key: 'road',
    nav: 'disciplines',
    title: `Шоссе — Refactor Cycling Club`,
    description: `Шоссейный велоспорт в Refactor Cycling Club: групповые заезды, выносливость, тактика пелотона и тренировочный подход.`,
    ogTitle: `Шоссе — Refactor Cycling Club`,
    ogDescription: `Страница дисциплины шоссе: с чего начать, что понадобится и как строить тренировки.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/tdf-2022-tuzaguet-arri-re-du-peloton.jpg" alt="Пелотон шоссейных велогонщиков на асфальтовой дороге">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="index.html">Главная</a> / <a href="index.html#disciplines">Дисциплины</a> / <span>Шоссе</span>
      </div>
      <span class="idx-big mono">D—01 · ДИСЦИПЛИНА</span>
      <h1>Шоссе</h1>
      <p class="sub">Гонки и групповые заезды по асфальту: тактика пелотона, длинные дистанции и работа на выносливость от равнины до горных перевалов.</p>
      <div class="tags">
        <span>Асфальт</span>
        <span>Выносливость</span>
        <span>Групповая езда</span>
        <span>60–200 км</span>
      </div>
    </div>
  </section>

  <!-- SPEC STRIP -->
  <section class="spec-strip circuit-grid">
    <div class="wrap spec-grid">
      <div class="spec"><div class="v">28–45</div><div class="k">км/ч в группе</div></div>
      <div class="spec"><div class="v">60–200</div><div class="k">км за выезд</div></div>
      <div class="spec"><div class="v">6.5–8.5</div><div class="k">кг вес байка</div></div>
      <div class="spec"><div class="v">700×25c</div><div class="k">типовые колёса</div></div>
    </div>
  </section>

  <!-- CONTENT -->
  <section class="pad">
    <div class="wrap d-content">
      <div class="d-main">
        <h2 class="reveal">Что это за дисциплина</h2>
        <p class="reveal">Шоссейный велоспорт — самая массовая и узнаваемая дисциплина: гладкий асфальт, лёгкие аэродинамичные байки и ставка на выносливость. Гонки проходят от коротких критериумов на закрытых кругах до многодневных туров с горными этапами.</p>
        <p class="reveal">Ключевую роль играет пелотон — плотная группа гонщиков, которая экономит силы за счёт аэродинамики. Умение читать тактику группы и правильно выбирать момент для атаки часто важнее чистой мощности.</p>

        <h2 class="reveal">С чего начать</h2>
        <ul class="reveal">
          <li>Начните с шоссейного байка правильного размера — посадка влияет на комфорт и эффективность больше, чем вес рамы</li>
          <li>Первые месяцы — накатывайте объём в спокойном темпе, прежде чем добавлять интервалы</li>
          <li>Освойте базовые навыки групповой езды: держать колесо, ровно тормозить, сигналить</li>
          <li>Постепенно подключайте темповые и пороговые тренировки для роста FTP</li>
        </ul>

        <h2 class="reveal">Тренировочный подход</h2>
        <p class="reveal">Базовый сезон строится вокруг развития аэробной базы, затем — блоков интенсивности перед стартами. Мы подбираем план по вашему текущему уровню и календарю гонок, с ориентиром на пороговую мощность (FTP) и работу в группе.</p>
      </div>

      <aside class="d-sidebar reveal">
        <h3>Что понадобится</h3>
        <ul class="gear-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Шоссейный велосипед</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Контактные педали и туфли</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Аэродинамичный шлем</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Велокомпьютер с пульсометром</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Ремкомплект и запасная камера</li>
        </ul>
        <a href="index.html#join" class="btn btn-primary">Получить план тренировок</a>
      </aside>
    </div>
  </section>

  <!-- OTHER DISCIPLINES -->
  <section class="pad d-others">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Другие дисциплины</h2>
        <p>Попробуйте себя в другом формате.</p>
      </div>
      <div class="d-others-grid">
        <a class="d-other" href="track.html"><span>D—02</span>Трек</a>
        <a class="d-other" href="mtb.html"><span>D—03</span>Маунтинбайк</a>
        <a class="d-other" href="gravel.html"><span>D—04</span>Гравел</a>
        <a class="d-other" href="cyclocross.html"><span>D—05</span>Циклокросс</a>
        <a class="d-other" href="bmx.html"><span>D—06</span>BMX</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём вводный тренировочный план по шоссе и подборку маршрутов рядом с вами.</p>
      <form class="cta-form" id="joinForm">
        <input type="email" placeholder="you@mail.ru" required id="joinEmail">
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note" id="joinNote">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  track: {
    key: 'track',
    nav: 'disciplines',
    title: `Трек — Refactor Cycling Club`,
    description: `Трековый велоспорт в Refactor Cycling Club: спринты на велодроме, фиксированная передача, техника и тактика.`,
    ogTitle: `Трек — Refactor Cycling Club`,
    ogDescription: `Страница дисциплины трек: формат, стартовые советы, экипировка и тренировки.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/cyclists-on-the-valley-preferred-cycling-center-track.jpg" alt="Велосипедисты на велодроме">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="index.html">Главная</a> / <a href="index.html#disciplines">Дисциплины</a> / <span>Трек</span>
      </div>
      <span class="idx-big mono">D—02 · ДИСЦИПЛИНА</span>
      <h1>Трек</h1>
      <p class="sub">Гонки на velodrome: фиксированная передача, без тормозов, чистая скорость и тактика на коротких дистанциях.</p>
      <div class="tags">
        <span>Велодром</span>
        <span>Спринт</span>
        <span>Фикс-гир</span>
        <span>200–4000 м</span>
      </div>
    </div>
  </section>

  <!-- SPEC STRIP -->
  <section class="spec-strip circuit-grid">
    <div class="wrap spec-grid">
      <div class="spec"><div class="v">55–70</div><div class="k">км/ч в спринте</div></div>
      <div class="spec"><div class="v">200–4000</div><div class="k">м дистанция</div></div>
      <div class="spec"><div class="v">6.0–7.2</div><div class="k">кг вес байка</div></div>
      <div class="spec"><div class="v">Fixed</div><div class="k">тип передачи</div></div>
    </div>
  </section>

  <!-- CONTENT -->
  <section class="pad">
    <div class="wrap d-content">
      <div class="d-main">
        <h2 class="reveal">Что это за дисциплина</h2>
        <p class="reveal">Трековый велоспорт проходит на овальном велодроме с наклонным полотном — райдеры используют байки без тормозов и с фиксированной передачей, где нельзя перестать крутить педали. Дисциплина требует взрывной мощности и идеальной техники входа в вираж.</p>
        <p class="reveal">Форматы разные: от чистого спринта один на один до групповых гонок на выбывание и командного преследования, где решает синхронность всей четвёрки.</p>

        <h2 class="reveal">С чего начать</h2>
        <ul class="reveal">
          <li>Первые тренировки проходят под контролем тренера — трек прощает ошибки хуже шоссе</li>
          <li>Освойте педалирование по кругу без остановки — это базовый навык фикс-гира</li>
          <li>Начните с низкой линии полотна, постепенно поднимаясь к виражам</li>
          <li>Развивайте взрывную силу через короткие спринтерские интервалы</li>
        </ul>

        <h2 class="reveal">Тренировочный подход</h2>
        <p class="reveal">Программа строится вокруг силовых и спринтерских блоков в зале и на треке, с акцентом на технику входа в вираж и стартовое ускорение. Аэробная база нужна меньше, чем на шоссе — на первый план выходит мощность.</p>
      </div>

      <aside class="d-sidebar reveal">
        <h3>Что понадобится</h3>
        <ul class="gear-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Трековый велосипед (фикс-гир)</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Шлем, сертифицированный для трека</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Обтягивающая форма без карманов</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Контактные педали</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Перчатки</li>
        </ul>
        <a href="index.html#join" class="btn btn-primary">Получить план тренировок</a>
      </aside>
    </div>
  </section>

  <!-- OTHER DISCIPLINES -->
  <section class="pad d-others">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Другие дисциплины</h2>
        <p>Попробуйте себя в другом формате.</p>
      </div>
      <div class="d-others-grid">
        <a class="d-other" href="road.html"><span>D—01</span>Шоссе</a>
        <a class="d-other" href="mtb.html"><span>D—03</span>Маунтинбайк</a>
        <a class="d-other" href="gravel.html"><span>D—04</span>Гравел</a>
        <a class="d-other" href="cyclocross.html"><span>D—05</span>Циклокросс</a>
        <a class="d-other" href="bmx.html"><span>D—06</span>BMX</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём вводный тренировочный план по треку и расписание открытых заездов.</p>
      <form class="cta-form" id="joinForm">
        <input type="email" placeholder="you@mail.ru" required id="joinEmail">
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note" id="joinNote">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  mtb: {
    key: 'mtb',
    nav: 'disciplines',
    title: `Маунтинбайк — Refactor Cycling Club`,
    description: `Маунтинбайк в Refactor Cycling Club: лесные тропы, техника контроля, кросс-кантри, эндуро и тренировки.`,
    ogTitle: `Маунтинбайк — Refactor Cycling Club`,
    ogDescription: `Страница дисциплины MTB: снаряжение, техника и план развития райдера.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/cross-country-biker.jpg" alt="Райдер на маунтинбайке на лесной тропе">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="index.html">Главная</a> / <a href="index.html#disciplines">Дисциплины</a> / <span>Маунтинбайк</span>
      </div>
      <span class="idx-big mono">D—03 · ДИСЦИПЛИНА</span>
      <h1>Маунтинбайк</h1>
      <p class="sub">Кросс-кантри и эндуро по лесным и горным тропам: техника, контроль скорости на спусках и работа с рельефом.</p>
      <div class="tags">
        <span>Грунт</span>
        <span>Техника</span>
        <span>Подвеска</span>
        <span>20–80 км</span>
      </div>
    </div>
  </section>

  <!-- SPEC STRIP -->
  <section class="spec-strip circuit-grid">
    <div class="wrap spec-grid">
      <div class="spec"><div class="v">12–35</div><div class="k">км/ч по трейлу</div></div>
      <div class="spec"><div class="v">20–80</div><div class="k">км за выезд</div></div>
      <div class="spec"><div class="v">11–14</div><div class="k">кг вес байка</div></div>
      <div class="spec"><div class="v">100–170</div><div class="k">мм ход подвески</div></div>
    </div>
  </section>

  <!-- CONTENT -->
  <section class="pad">
    <div class="wrap d-content">
      <div class="d-main">
        <h2 class="reveal">Что это за дисциплина</h2>
        <p class="reveal">Маунтинбайк объединяет несколько форматов: кросс-кантри (XC) с акцентом на выносливость и подъёмы, и эндуро с упором на техничные спуски. Байк оснащён амортизационной вилкой, часто и задней подвеской, широкими покрышками для сцепления на грунте.</p>
        <p class="reveal">Ключевые навыки — чтение линии на тропе, работа с весом тела на спусках и подъёмах, торможение в повороте и преодоление препятствий: корней, камней, бродов.</p>

        <h2 class="reveal">С чего начать</h2>
        <ul class="reveal">
          <li>Подберите байк под формат: XC-хардтейл для скорости или двухподвес для спусков</li>
          <li>Начните с зелёных и синих трасс, постепенно переходя на технично сложные</li>
          <li>Освойте базовую посадку: локти в стороны, вес на педалях на спусках</li>
          <li>Тренируйте баланс на низкой скорости — это основа контроля на тропе</li>
        </ul>

        <h2 class="reveal">Тренировочный подход</h2>
        <p class="reveal">Тренировки сочетают аэробные выезды по пересечённой местности с отдельными сессиями по технике: работа с обратной связью тренера на конкретных элементах трассы — корнях, камнях, бермах.</p>
      </div>

      <aside class="d-sidebar reveal">
        <h3>Что понадобится</h3>
        <ul class="gear-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Маунтинбайк (хардтейл или двухподвес)</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Шлем с расширенным покрытием затылка</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Перчатки и наколенники</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Контактные или платформенные педали</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Гидратор или флягодержатель</li>
        </ul>
        <a href="index.html#join" class="btn btn-primary">Получить план тренировок</a>
      </aside>
    </div>
  </section>

  <!-- OTHER DISCIPLINES -->
  <section class="pad d-others">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Другие дисциплины</h2>
        <p>Попробуйте себя в другом формате.</p>
      </div>
      <div class="d-others-grid">
        <a class="d-other" href="road.html"><span>D—01</span>Шоссе</a>
        <a class="d-other" href="track.html"><span>D—02</span>Трек</a>
        <a class="d-other" href="gravel.html"><span>D—04</span>Гравел</a>
        <a class="d-other" href="cyclocross.html"><span>D—05</span>Циклокросс</a>
        <a class="d-other" href="bmx.html"><span>D—06</span>BMX</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём подборку трейлов рядом с вами и вводный план по технике.</p>
      <form class="cta-form" id="joinForm">
        <input type="email" placeholder="you@mail.ru" required id="joinEmail">
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note" id="joinNote">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  gravel: {
    key: 'gravel',
    nav: 'disciplines',
    title: `Гравел — Refactor Cycling Club`,
    description: `Гравел в Refactor Cycling Club: смешанное покрытие, дальние маршруты, приключенческий формат и подготовка.`,
    ogTitle: `Гравел — Refactor Cycling Club`,
    ogDescription: `Страница дисциплины гравел: маршруты, снаряжение и тренировочный подход для смешанного покрытия.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/cyclist-on-gravel-bike-descending-eldridge-grade.jpg" alt="Велосипедист на гравийном велосипеде на грунтовой дороге">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="index.html">Главная</a> / <a href="index.html#disciplines">Дисциплины</a> / <span>Гравел</span>
      </div>
      <span class="idx-big mono">D—04 · ДИСЦИПЛИНА</span>
      <h1>Гравел</h1>
      <p class="sub">Смешанное покрытие и дальние дистанции: асфальт переходит в грунтовку, а гонка — в приключение.</p>
      <div class="tags">
        <span>Смешанное покрытие</span>
        <span>Дальние дистанции</span>
        <span>Автономность</span>
        <span>80–300 км</span>
      </div>
    </div>
  </section>

  <!-- SPEC STRIP -->
  <section class="spec-strip circuit-grid">
    <div class="wrap spec-grid">
      <div class="spec"><div class="v">22–32</div><div class="k">км/ч в среднем</div></div>
      <div class="spec"><div class="v">80–300</div><div class="k">км за выезд</div></div>
      <div class="spec"><div class="v">8.5–10.5</div><div class="k">кг вес байка</div></div>
      <div class="spec"><div class="v">700×38–45c</div><div class="k">типовые покрышки</div></div>
    </div>
  </section>

  <!-- CONTENT -->
  <section class="pad">
    <div class="wrap d-content">
      <div class="d-main">
        <h2 class="reveal">Что это за дисциплина</h2>
        <p class="reveal">Гравел — это гибрид шоссейного и туристического велосипеда: рама с посадкой под длинные дистанции, широкие покрышки для грунта и крепления под сумки. Маршруты соединяют асфальт, лесовозные дороги и полевые тропы.</p>
        <p class="reveal">В отличие от шоссе, здесь меньше значит групповая тактика и больше — самостоятельность: навигация, планирование питания и умение чинить байк в полевых условиях.</p>

        <h2 class="reveal">С чего начать</h2>
        <ul class="reveal">
          <li>Выберите гравел-байк с запасом клиренса под шире покрышки</li>
          <li>Начните с маршрутов до 60 км смешанного покрытия, постепенно увеличивая дистанцию</li>
          <li>Освойте базовый ремонт: прокол, цепь, регулировка тормозов</li>
          <li>Возьмите за привычку планировать точки для воды и еды заранее</li>
        </ul>

        <h2 class="reveal">Тренировочный подход</h2>
        <p class="reveal">План строится вокруг длинных базовых выездов с постепенным ростом дистанции, плюс отдельные сессии по управлению байком на грунте. Для многодневных гонок добавляется работа над выносливостью на второй-третий день подряд.</p>
      </div>

      <aside class="d-sidebar reveal">
        <h3>Что понадобится</h3>
        <ul class="gear-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Гравел-байк с широким клиренсом</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Сумки под раму и подседельный штырь</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Покрышки с защитой от проколов</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Навигатор или велокомпьютер с картами</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Ремкомплект расширенного состава</li>
        </ul>
        <a href="index.html#join" class="btn btn-primary">Получить план тренировок</a>
      </aside>
    </div>
  </section>

  <!-- OTHER DISCIPLINES -->
  <section class="pad d-others">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Другие дисциплины</h2>
        <p>Попробуйте себя в другом формате.</p>
      </div>
      <div class="d-others-grid">
        <a class="d-other" href="road.html"><span>D—01</span>Шоссе</a>
        <a class="d-other" href="track.html"><span>D—02</span>Трек</a>
        <a class="d-other" href="mtb.html"><span>D—03</span>Маунтинбайк</a>
        <a class="d-other" href="cyclocross.html"><span>D—05</span>Циклокросс</a>
        <a class="d-other" href="bmx.html"><span>D—06</span>BMX</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём подборку гравел-маршрутов и список снаряжения для дальних выездов.</p>
      <form class="cta-form" id="joinForm">
        <input type="email" placeholder="you@mail.ru" required id="joinEmail">
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note" id="joinNote">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  cyclocross: {
    key: 'cyclocross',
    nav: 'disciplines',
    title: `Циклокросс — Refactor Cycling Club`,
    description: `Циклокросс в Refactor Cycling Club: короткие круги, грязь, барьеры, техника и взрывная выносливость.`,
    ogTitle: `Циклокросс — Refactor Cycling Club`,
    ogDescription: `Страница дисциплины циклокросс: формат гонок, экипировка и подготовка.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/toronto-cyclocross-2010-5090881203.jpg" alt="Гонщик на трассе циклокросса">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="index.html">Главная</a> / <a href="index.html#disciplines">Дисциплины</a> / <span>Циклокросс</span>
      </div>
      <span class="idx-big mono">D—05 · ДИСЦИПЛИНА</span>
      <h1>Циклокросс</h1>
      <p class="sub">Короткие круги, грязь и барьеры: взрывная выносливость и техника переноски байка поздней осенью и зимой.</p>
      <div class="tags">
        <span>Грязь</span>
        <span>Барьеры</span>
        <span>Короткие круги</span>
        <span>30–60 мин</span>
      </div>
    </div>
  </section>

  <!-- SPEC STRIP -->
  <section class="spec-strip circuit-grid">
    <div class="wrap spec-grid">
      <div class="spec"><div class="v">18–26</div><div class="k">км/ч в среднем</div></div>
      <div class="spec"><div class="v">30–60</div><div class="k">мин гонка</div></div>
      <div class="spec"><div class="v">7.5–9</div><div class="k">кг вес байка</div></div>
      <div class="spec"><div class="v">700×33c</div><div class="k">типовые покрышки</div></div>
    </div>
  </section>

  <!-- CONTENT -->
  <section class="pad">
    <div class="wrap d-content">
      <div class="d-main">
        <h2 class="reveal">Что это за дисциплина</h2>
        <p class="reveal">Циклокросс — гонки по коротким кругам (2.5–3.5 км) с искусственными и естественными препятствиями: барьерами, песком, лестницами, где приходится спрыгивать и нести байк на плече. Сезон приходится на осень и зиму, трассы часто раскисшие от дождя.</p>
        <p class="reveal">Дисциплина требует не только выносливости, но и специфической техники: быстрого спешивания, переноски байка, работы в грязи и на скользких поворотах.</p>

        <h2 class="reveal">С чего начать</h2>
        <ul class="reveal">
          <li>Начните с базового шоссейного или гравел-байка с покрышками пошире, прежде чем брать выделенный циклокроссовый</li>
          <li>Отрабатывайте технику спешивания и посадки на скорости на пустой площадке</li>
          <li>Тренируйте перенос байка через плечо — это экономит секунды на барьерах</li>
          <li>Готовьтесь к работе в грязи: низкое давление в шинах и уверенное торможение</li>
        </ul>

        <h2 class="reveal">Тренировочный подход</h2>
        <p class="reveal">Гонки короткие и интенсивные, поэтому тренировки строятся вокруг высокоинтенсивных интервалов и силовой выносливости, плюс отдельные сессии по технике барьеров и спешивания.</p>
      </div>

      <aside class="d-sidebar reveal">
        <h3>Что понадобится</h3>
        <ul class="gear-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Циклокроссовый велосипед</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Покрышки с агрессивным протектором</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Запасное колесо или сервис в яме</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Перчатки и грязезащитная одежда</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Второй комплект формы на смену</li>
        </ul>
        <a href="index.html#join" class="btn btn-primary">Получить план тренировок</a>
      </aside>
    </div>
  </section>

  <!-- OTHER DISCIPLINES -->
  <section class="pad d-others">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Другие дисциплины</h2>
        <p>Попробуйте себя в другом формате.</p>
      </div>
      <div class="d-others-grid">
        <a class="d-other" href="road.html"><span>D—01</span>Шоссе</a>
        <a class="d-other" href="track.html"><span>D—02</span>Трек</a>
        <a class="d-other" href="mtb.html"><span>D—03</span>Маунтинбайк</a>
        <a class="d-other" href="gravel.html"><span>D—04</span>Гравел</a>
        <a class="d-other" href="bmx.html"><span>D—06</span>BMX</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём вводный план по циклокроссу и календарь ближайших стартов.</p>
      <form class="cta-form" id="joinForm">
        <input type="email" placeholder="you@mail.ru" required id="joinEmail">
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note" id="joinNote">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  bmx: {
    key: 'bmx',
    nav: 'disciplines',
    title: `BMX — Refactor Cycling Club`,
    description: `BMX в Refactor Cycling Club: прыжки, рампы, контроль велосипеда и динамичные тренировки.`,
    ogTitle: `BMX — Refactor Cycling Club`,
    ogDescription: `Страница дисциплины BMX: техника, безопасность, снаряжение и первые тренировки.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/bmx-racing-action-photo.jpg" alt="Гонщик BMX в прыжке">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="index.html">Главная</a> / <a href="index.html#disciplines">Дисциплины</a> / <span>BMX</span>
      </div>
      <span class="idx-big mono">D—06 · ДИСЦИПЛИНА</span>
      <h1>BMX</h1>
      <p class="sub">Прыжки, рампы и стартовые эстакады: взрывная мощность, контроль байка в воздухе и гонки на грани риска.</p>
      <div class="tags">
        <span>Рампы</span>
        <span>Прыжки</span>
        <span>Взрывная сила</span>
        <span>30–50 сек</span>
      </div>
    </div>
  </section>

  <!-- SPEC STRIP -->
  <section class="spec-strip circuit-grid">
    <div class="wrap spec-grid">
      <div class="spec"><div class="v">40–60</div><div class="k">км/ч на стартовой горке</div></div>
      <div class="spec"><div class="v">30–50</div><div class="k">сек гонка (BMX race)</div></div>
      <div class="spec"><div class="v">9.5–11</div><div class="k">кг вес байка</div></div>
      <div class="spec"><div class="v">20"</div><div class="k">размер колёс</div></div>
    </div>
  </section>

  <!-- CONTENT -->
  <section class="pad">
    <div class="wrap d-content">
      <div class="d-main">
        <h2 class="reveal">Что это за дисциплина</h2>
        <p class="reveal">BMX существует в двух основных форматах: гоночный (BMX race) — короткие трассы с трамплинами и виражами, и фристайл — прыжки и трюки на рампах и в парках. Байк компактный, прочный, с одной передачей.</p>
        <p class="reveal">Дисциплина требует взрывной стартовой мощности, мгновенной реакции и уверенного контроля байка в воздухе — большая часть тренировок посвящена именно технике, а не объёму.</p>

        <h2 class="reveal">С чего начать</h2>
        <ul class="reveal">
          <li>Начните с проката байка нужного размера в местном скейт- или BMX-парке</li>
          <li>Осваивайте базовые прыжки на низких трамплинах под контролем тренера</li>
          <li>Тренируйте стартовый рывок с эстакады — это решает исход гонки</li>
          <li>Всегда используйте полную защиту: шлем, наколенники, налокотники</li>
        </ul>

        <h2 class="reveal">Тренировочный подход</h2>
        <p class="reveal">Программа сочетает силовые тренировки для взрывного старта с регулярной практикой техники на рампе — прогресс здесь измеряется не километрами, а освоенными элементами.</p>
      </div>

      <aside class="d-sidebar reveal">
        <h3>Что понадобится</h3>
        <ul class="gear-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>BMX-велосипед</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Full-face шлем</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Наколенники и налокотники</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Перчатки с защитой ладони</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Прочная закрытая обувь</li>
        </ul>
        <a href="index.html#join" class="btn btn-primary">Получить план тренировок</a>
      </aside>
    </div>
  </section>

  <!-- OTHER DISCIPLINES -->
  <section class="pad d-others">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Другие дисциплины</h2>
        <p>Попробуйте себя в другом формате.</p>
      </div>
      <div class="d-others-grid">
        <a class="d-other" href="road.html"><span>D—01</span>Шоссе</a>
        <a class="d-other" href="track.html"><span>D—02</span>Трек</a>
        <a class="d-other" href="mtb.html"><span>D—03</span>Маунтинбайк</a>
        <a class="d-other" href="gravel.html"><span>D—04</span>Гравел</a>
        <a class="d-other" href="cyclocross.html"><span>D—05</span>Циклокросс</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём расписание открытых тренировок в BMX-парке и вводный план.</p>
      <form class="cta-form" id="joinForm">
        <input type="email" placeholder="you@mail.ru" required id="joinEmail">
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note" id="joinNote">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
};

export const pathToPage = {
  '/': 'home',
  '/index.html': 'home',
  '/routes.html': 'routes',
  '/community.html': 'community',
  '/road.html': 'road',
  '/track.html': 'track',
  '/mtb.html': 'mtb',
  '/gravel.html': 'gravel',
  '/cyclocross.html': 'cyclocross',
  '/bmx.html': 'bmx',
};
