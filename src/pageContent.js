export const pages = {
  home: {
    key: 'home',
    nav: 'home',
    title: `VeloCore — Велоспорт без компромиссов`,
    description: `VeloCore — статический сайт велосипедного клуба с дисциплинами, маршрутами, профилями высот и тренировочным CTA.`,
    ogTitle: `VeloCore — Велоспорт без компромиссов`,
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
        <a href="/routes" class="btn btn-ghost">Смотреть маршруты</a>
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
        <div class="discipline reveal" data-href="/road" tabindex="0" role="link" aria-label="Открыть страницу дисциплины Шоссе">
          <div class="discipline-photo">
            <img src="assets/wikimedia/tdf-2022-tuzaguet-arri-re-du-peloton.jpg" alt="Пелотон шоссейных велогонщиков на асфальтовой дороге" loading="lazy">
            <span class="idx mono">D—01</span>
          </div>
          <div class="body">
            <h3>Шоссе</h3>
            <p>Групповые заезды, темповые тренировки и гонки на выносливость по асфальту.</p>
            <span class="tag">Endurance</span>
            <span class="more">Подробнее
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
        <div class="discipline reveal" data-href="/track" tabindex="0" role="link" aria-label="Открыть страницу дисциплины Трек">
          <div class="discipline-photo">
            <img src="assets/wikimedia/cyclists-on-the-valley-preferred-cycling-center-track.jpg" alt="Велосипедисты на велодроме" loading="lazy">
            <span class="idx mono">D—02</span>
          </div>
          <div class="body">
            <h3>Трек</h3>
            <p>Спринты на велодроме, точная тактика и работа с фиксированной передачей.</p>
            <span class="tag">Sprint</span>
            <span class="more">Подробнее
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
        <div class="discipline reveal" data-href="/mtb" tabindex="0" role="link" aria-label="Открыть страницу дисциплины Маунтинбайк">
          <div class="discipline-photo">
            <img src="assets/wikimedia/cross-country-biker.jpg" alt="Райдер на маунтинбайке на лесной тропе" loading="lazy">
            <span class="idx mono">D—03</span>
          </div>
          <div class="body">
            <h3>Маунтинбайк</h3>
            <p>Кросс-кантри и эндуро по лесным тропам — техника и контроль скорости.</p>
            <span class="tag">Terrain</span>
            <span class="more">Подробнее
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
        <div class="discipline reveal" data-href="/gravel" tabindex="0" role="link" aria-label="Открыть страницу дисциплины Гравел">
          <div class="discipline-photo">
            <img src="assets/wikimedia/cyclist-on-gravel-bike-descending-eldridge-grade.jpg" alt="Велосипедист на гравийном велосипеде на грунтовой дороге" loading="lazy">
            <span class="idx mono">D—04</span>
          </div>
          <div class="body">
            <h3>Гравел</h3>
            <p>Смешанное покрытие, дальние дистанции и приключенческий формат.</p>
            <span class="tag">Adventure</span>
            <span class="more">Подробнее
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
        <div class="discipline reveal" data-href="/cyclocross" tabindex="0" role="link" aria-label="Открыть страницу дисциплины Циклокросс">
          <div class="discipline-photo">
            <img src="assets/wikimedia/toronto-cyclocross-2010-5090881203.jpg" alt="Гонщик на трассе циклокросса" loading="lazy">
            <span class="idx mono">D—05</span>
          </div>
          <div class="body">
            <h3>Циклокросс</h3>
            <p>Короткие круги, грязь, барьеры и взрывная выносливость поздней осенью.</p>
            <span class="tag">Grit</span>
            <span class="more">Подробнее
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
        <div class="discipline reveal" data-href="/bmx" tabindex="0" role="link" aria-label="Открыть страницу дисциплины BMX">
          <div class="discipline-photo">
            <img src="assets/wikimedia/bmx-racing-action-photo.jpg" alt="Гонщик BMX в прыжке" loading="lazy">
            <span class="idx mono">D—06</span>
          </div>
          <div class="body">
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
        <a href="/routes" class="btn btn-ghost">Открыть каталог маршрутов
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
        <p>Что говорят райдеры, которые уже тренируются с нами. <a href="/community" style="color:var(--accent); white-space:nowrap;">Всё о комьюнити →</a></p>
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
      <form class="cta-form">
        <input type="email" placeholder="you@mail.ru" required>
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  routes: {
    key: 'routes',
    nav: 'routes',
    title: `Маршруты — VeloCore`,
    description: `Каталог велосипедных маршрутов VeloCore с километражом, набором высоты, покрытием и уровнем сложности.`,
    ogTitle: `Маршруты — VeloCore`,
    ogDescription: `Проверенные маршруты для шоссе, гравела и городских поездок с честным профилем высот.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero" style="min-height:66vh;">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/cyclists-on-buttertubs-geograph-org-uk-2418147.jpg" alt="Велосипедисты поднимаются по горному перевалу">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="/">Главная</a> / <span>Маршруты</span>
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
        <a href="/#join" class="btn btn-primary">Получить доступ к каталогу
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
      <form class="cta-form">
        <input type="email" placeholder="you@mail.ru" required>
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note">Без спама. Один тренировочный план в неделю.</div>
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
    title: `Комьюнити — VeloCore`,
    description: `Комьюнити VeloCore: групповые тренировки, ценности клуба, расписание и форма команды.`,
    ogTitle: `Комьюнити — VeloCore`,
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
      <p class="sub">VeloCore — это не только тренировочные планы. Это люди, с которыми вы выезжаете по субботам, делитесь маршрутами и празднуете личные рекорды.</p>
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
                <img src="assets/kit-showcase-1.png" alt="Форма VeloCore, версия Runtime — тёмно-синее джерси с бирюзовым цифровым узором">
              </div>
              <div class="ig-slide" data-caption="<strong>Architecture</strong> — светлая версия с чертежом системы: базы данных, API и модули связаны линиями прямо на джерси.">
                <img src="assets/kit-showcase-2.png" alt="Форма VeloCore, версия Architecture — белое джерси со схемой архитектуры системы">
              </div>
              <div class="ig-slide" data-caption="<strong>Terminal</strong> — чёрная форма со столбцом кода вдоль спины и печатной платой на рукавах: вечерний вариант клуба.">
                <img src="assets/kit-showcase-3.png" alt="Форма VeloCore, версия Terminal — чёрное джерси с кодом на спине и узором печатной платы на рукавах">
              </div>
              <div class="ig-slide" data-caption="<strong>Architecture RoadSuit</strong> — светлая версия с чертежом системы: базы данных, API и модули связаны линиями прямо на велокомбинезоне для шоссейных гонок.">
                <img src="assets/kit-showcase-4.png" alt="Форма VeloCore, версия Architecture RoadSuit — светлый шоссейный велокомбинезон со схемой архитектуры системы">
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
      <form class="cta-form">
        <input type="email" placeholder="you@mail.ru" required>
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  road: {
    key: 'road',
    nav: 'disciplines',
    title: `Шоссе — VeloCore`,
    description: `Шоссейный велоспорт в VeloCore: групповые заезды, выносливость, тактика пелотона и тренировочный подход.`,
    ogTitle: `Шоссе — VeloCore`,
    ogDescription: `Страница дисциплины шоссе: с чего начать, что понадобится и как строить тренировки.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/tdf-2022-tuzaguet-arri-re-du-peloton.jpg" alt="Пелотон шоссейных велогонщиков на асфальтовой дороге">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="/">Главная</a> / <a href="/#disciplines">Дисциплины</a> / <span>Шоссе</span>
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
        <a href="/#join" class="btn btn-primary">Получить план тренировок</a>
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
        <a class="d-other" href="/track"><span>D—02</span>Трек</a>
        <a class="d-other" href="/mtb"><span>D—03</span>Маунтинбайк</a>
        <a class="d-other" href="/gravel"><span>D—04</span>Гравел</a>
        <a class="d-other" href="/cyclocross"><span>D—05</span>Циклокросс</a>
        <a class="d-other" href="/bmx"><span>D—06</span>BMX</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём вводный тренировочный план по шоссе и подборку маршрутов рядом с вами.</p>
      <form class="cta-form">
        <input type="email" placeholder="you@mail.ru" required>
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  track: {
    key: 'track',
    nav: 'disciplines',
    title: `Трек — VeloCore`,
    description: `Трековый велоспорт в VeloCore: спринты на велодроме, фиксированная передача, техника и тактика.`,
    ogTitle: `Трек — VeloCore`,
    ogDescription: `Страница дисциплины трек: формат, стартовые советы, экипировка и тренировки.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/cyclists-on-the-valley-preferred-cycling-center-track.jpg" alt="Велосипедисты на велодроме">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="/">Главная</a> / <a href="/#disciplines">Дисциплины</a> / <span>Трек</span>
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
        <a href="/#join" class="btn btn-primary">Получить план тренировок</a>
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
        <a class="d-other" href="/road"><span>D—01</span>Шоссе</a>
        <a class="d-other" href="/mtb"><span>D—03</span>Маунтинбайк</a>
        <a class="d-other" href="/gravel"><span>D—04</span>Гравел</a>
        <a class="d-other" href="/cyclocross"><span>D—05</span>Циклокросс</a>
        <a class="d-other" href="/bmx"><span>D—06</span>BMX</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём вводный тренировочный план по треку и расписание открытых заездов.</p>
      <form class="cta-form">
        <input type="email" placeholder="you@mail.ru" required>
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  mtb: {
    key: 'mtb',
    nav: 'disciplines',
    title: `Маунтинбайк — VeloCore`,
    description: `Маунтинбайк в VeloCore: лесные тропы, техника контроля, кросс-кантри, эндуро и тренировки.`,
    ogTitle: `Маунтинбайк — VeloCore`,
    ogDescription: `Страница дисциплины MTB: снаряжение, техника и план развития райдера.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/cross-country-biker.jpg" alt="Райдер на маунтинбайке на лесной тропе">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="/">Главная</a> / <a href="/#disciplines">Дисциплины</a> / <span>Маунтинбайк</span>
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
        <a href="/#join" class="btn btn-primary">Получить план тренировок</a>
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
        <a class="d-other" href="/road"><span>D—01</span>Шоссе</a>
        <a class="d-other" href="/track"><span>D—02</span>Трек</a>
        <a class="d-other" href="/gravel"><span>D—04</span>Гравел</a>
        <a class="d-other" href="/cyclocross"><span>D—05</span>Циклокросс</a>
        <a class="d-other" href="/bmx"><span>D—06</span>BMX</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём подборку трейлов рядом с вами и вводный план по технике.</p>
      <form class="cta-form">
        <input type="email" placeholder="you@mail.ru" required>
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  gravel: {
    key: 'gravel',
    nav: 'disciplines',
    title: `Гравел — VeloCore`,
    description: `Гравел в VeloCore: смешанное покрытие, дальние маршруты, приключенческий формат и подготовка.`,
    ogTitle: `Гравел — VeloCore`,
    ogDescription: `Страница дисциплины гравел: маршруты, снаряжение и тренировочный подход для смешанного покрытия.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/cyclist-on-gravel-bike-descending-eldridge-grade.jpg" alt="Велосипедист на гравийном велосипеде на грунтовой дороге">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="/">Главная</a> / <a href="/#disciplines">Дисциплины</a> / <span>Гравел</span>
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
        <a href="/#join" class="btn btn-primary">Получить план тренировок</a>
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
        <a class="d-other" href="/road"><span>D—01</span>Шоссе</a>
        <a class="d-other" href="/track"><span>D—02</span>Трек</a>
        <a class="d-other" href="/mtb"><span>D—03</span>Маунтинбайк</a>
        <a class="d-other" href="/cyclocross"><span>D—05</span>Циклокросс</a>
        <a class="d-other" href="/bmx"><span>D—06</span>BMX</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём подборку гравел-маршрутов и список снаряжения для дальних выездов.</p>
      <form class="cta-form">
        <input type="email" placeholder="you@mail.ru" required>
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  cyclocross: {
    key: 'cyclocross',
    nav: 'disciplines',
    title: `Циклокросс — VeloCore`,
    description: `Циклокросс в VeloCore: короткие круги, грязь, барьеры, техника и взрывная выносливость.`,
    ogTitle: `Циклокросс — VeloCore`,
    ogDescription: `Страница дисциплины циклокросс: формат гонок, экипировка и подготовка.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/toronto-cyclocross-2010-5090881203.jpg" alt="Гонщик на трассе циклокросса">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="/">Главная</a> / <a href="/#disciplines">Дисциплины</a> / <span>Циклокросс</span>
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
        <a href="/#join" class="btn btn-primary">Получить план тренировок</a>
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
        <a class="d-other" href="/road"><span>D—01</span>Шоссе</a>
        <a class="d-other" href="/track"><span>D—02</span>Трек</a>
        <a class="d-other" href="/mtb"><span>D—03</span>Маунтинбайк</a>
        <a class="d-other" href="/gravel"><span>D—04</span>Гравел</a>
        <a class="d-other" href="/bmx"><span>D—06</span>BMX</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём вводный план по циклокроссу и календарь ближайших стартов.</p>
      <form class="cta-form">
        <input type="email" placeholder="you@mail.ru" required>
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  bmx: {
    key: 'bmx',
    nav: 'disciplines',
    title: `BMX — VeloCore`,
    description: `BMX в VeloCore: прыжки, рампы, контроль велосипеда и динамичные тренировки.`,
    ogTitle: `BMX — VeloCore`,
    ogDescription: `Страница дисциплины BMX: техника, безопасность, снаряжение и первые тренировки.`,
    html: `<main>

  <!-- DETAIL HERO -->
  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/bmx-racing-action-photo.jpg" alt="Гонщик BMX в прыжке">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="/">Главная</a> / <a href="/#disciplines">Дисциплины</a> / <span>BMX</span>
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
        <a href="/#join" class="btn btn-primary">Получить план тренировок</a>
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
        <a class="d-other" href="/road"><span>D—01</span>Шоссе</a>
        <a class="d-other" href="/track"><span>D—02</span>Трек</a>
        <a class="d-other" href="/mtb"><span>D—03</span>Маунтинбайк</a>
        <a class="d-other" href="/gravel"><span>D—04</span>Гравел</a>
        <a class="d-other" href="/cyclocross"><span>D—05</span>Циклокросс</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta pad circuit-grid" id="join">
    <div class="wrap">
      <span class="eyebrow" style="justify-content:center;">Старт открыт</span>
      <h2 style="margin-top:16px;">Готовы выйти на старт?</h2>
      <p>Оставьте почту — пришлём расписание открытых тренировок в BMX-парке и вводный план.</p>
      <form class="cta-form">
        <input type="email" placeholder="you@mail.ru" required>
        <button type="submit" class="btn btn-primary">Присоединиться</button>
      </form>
      <div class="cta-note">Без спама. Один тренировочный план в неделю.</div>
    </div>
  </section>

</main>`,
  },
  news: {
    key: 'news',
    nav: 'news',
    title: `Новости — VeloCore`,
    description: `Новости VeloCore: заезды, тренировки, маршруты недели и обновления сообщества.`,
    ogTitle: `Новости — VeloCore`,
    ogDescription: `Лента новостей VeloCore: события, маршруты и обновления сезона 2026.`,
    html: `<main>

  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/cyclists-at-blacksmiths-coffee-shop-belsay-geograph-org-uk-3504052.jpg" alt="Велосипедисты у кофейни после групповой поездки">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="/">Главная</a> / <span>Новости</span>
      </div>
      <span class="idx-big mono">NEWS · СЕЗОН 2026</span>
      <h1>Новости клуба</h1>
      <p class="sub">Заезды, открытые тренировки, маршруты недели и короткие обновления сообщества.</p>
      <div class="tags">
        <span>События</span>
        <span>Маршруты</span>
        <span>Тренировки</span>
        <span>Комьюнити</span>
      </div>
    </div>
  </section>

  <section class="pad">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Лента обновлений</h2>
        <p>Пока новости хранятся статически внутри проекта. Структура страницы подготовлена так, чтобы позже заменить источник на API.</p>
      </div>
      <div class="routes-list stagger">
        <article class="route-row reveal">
          <div>
            <span class="idx mono">04.07.2026</span>
            <h3>Открыт летний блок групповых тренировок</h3>
            <p>Запускаем регулярные шоссейные и гравел-заезды по будням и длинную endurance-сессию по воскресеньям.</p>
          </div>
          <span class="tag">Training</span>
        </article>
        <article class="route-row reveal">
          <div>
            <span class="idx mono">30.06.2026</span>
            <h3>Маршрут недели: Перевал Асфальтовый</h3>
            <p>Классический подъём для проверки формы теперь доступен в каталоге с профилем высоты и оценкой сложности.</p>
          </div>
          <span class="tag">Route</span>
        </article>
        <article class="route-row reveal">
          <div>
            <span class="idx mono">24.06.2026</span>
            <h3>Комьюнити-день для новичков</h3>
            <p>Знакомство с клубом, разбор посадки, безопасная езда в группе и первая спокойная покатушка.</p>
          </div>
          <span class="tag">Community</span>
        </article>
      </div>
    </div>
  </section>

</main>`,
  },
  trainingPlans: {
    key: 'trainingPlans',
    nav: 'trainingPlans',
    title: `Планы тренировок — VeloCore`,
    description: `Планы тренировок VeloCore для шоссейного велоспорта: 6-недельные программы для новичка и среднего уровня, станок и улица.`,
    ogTitle: `Планы тренировок — VeloCore`,
    ogDescription: `Оригинальные тренировочные планы в логике Zwift и TrainingPeaks: FTP-зоны, RPE, пульс, интервалы и восстановление.`,
    html: `<main>

  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/cycle-sunset-road-photography.jpg" alt="Велосипедист едет по дороге на закате">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="/">Главная</a> / <span>Планы тренировок</span>
      </div>
      <span class="idx-big mono">TRAINING · ROAD</span>
      <h1>Планы тренировок</h1>
      <p class="sub">Оригинальные 6-недельные программы в стиле Zwift, TrainingPeaks и TrainerRoad: станок по %FTP, улица по ощущениям и пульсу.</p>
      <div class="tags">
        <span>6 недель</span>
        <span>%FTP</span>
        <span>RPE / HR</span>
        <span>Road base</span>
      </div>
    </div>
  </section>

  <section class="spec-strip circuit-grid">
    <div class="wrap spec-grid">
      <div class="spec"><div class="v">4</div><div class="k">готовых плана</div></div>
      <div class="spec"><div class="v">3–4</div><div class="k">тренировки в неделю</div></div>
      <div class="spec"><div class="v">45–150</div><div class="k">минут на сессию</div></div>
      <div class="spec"><div class="v">Z2–VO2</div><div class="k">зоны нагрузки</div></div>
    </div>
  </section>

  <section class="pad">
    <div class="wrap d-content">
      <div class="d-main">
        <h2 class="reveal">Как выбрать план</h2>
        <p class="reveal">Эти программы не копируют платные планы Zwift, TrainingPeaks или TrainerRoad. Они собраны как оригинальные шаблоны по той же понятной логике: прогрессия нагрузки, разгрузочная неделя, работа с FTP-зонами и перенос тренировок на улицу через RPE/пульс.</p>

        <div class="training-plan-grid stagger">
          <article class="training-plan-card reveal">
            <div class="plan-visual">
              <img src="assets/flickr/road-bike-on-indoor-trainer-1.jpg" alt="Шоссейный велосипед закреплён на смарт-станке дома" loading="lazy">
              <span>Indoor base · smart trainer</span>
            </div>
            <div class="plan-head">
              <span class="idx mono">PLAN 01</span>
              <span class="tag">Beginner · Indoor</span>
            </div>
            <h3>Новичок · станок</h3>
            <p>Для первого структурного блока на Zwift/Wattbike/смарт-станке. Цель: привыкнуть к регулярности, ровной каденции и базовой выносливости.</p>
            <div class="plan-meta">
              <span>6 недель</span><span>3 сессии</span><span>45–75 мин</span>
            </div>
            <div class="plan-week-table">
              <div><b>1</b><span>2x endurance 55–65% FTP · каденс 90–100 rpm</span></div>
              <div><b>2</b><span>3x6 мин tempo 76–82% FTP · длинная Z2</span></div>
              <div><b>3</b><span>4x5 мин sweet spot 88–90% FTP · техника</span></div>
              <div><b>4</b><span>разгрузка: 2 лёгкие Z2 · 1 короткий spin-up</span></div>
              <div><b>5</b><span>3x8 мин tempo/sweet spot · endurance 75 мин</span></div>
              <div><b>6</b><span>контроль: 2x12 мин 85–90% FTP · лёгкий финал</span></div>
            </div>
            <a href="/training-plans/beginner-indoor" class="btn btn-ghost">Открыть подробный план</a>
          </article>

          <article class="training-plan-card reveal">
            <div class="plan-visual">
              <img src="assets/wikimedia/cycle-sunset-road-photography.jpg" alt="Велосипедист едет по спокойной дороге на закате" loading="lazy">
              <span>Road start · endurance</span>
            </div>
            <div class="plan-head">
              <span class="idx mono">PLAN 02</span>
              <span class="tag">Beginner · Road</span>
            </div>
            <h3>Новичок · улица</h3>
            <p>Для спокойного входа в шоссе без измерителя мощности. Ориентиры: разговорный темп, RPE и пульс, безопасная езда в группе.</p>
            <div class="plan-meta">
              <span>6 недель</span><span>2–3 выезда</span><span>45–120 мин</span>
            </div>
            <div class="plan-week-table">
              <div><b>1</b><span>2 лёгких выезда RPE 3/10 · навык торможения и посадки</span></div>
              <div><b>2</b><span>1 техника + 1 endurance 75 мин · пульс Z2</span></div>
              <div><b>3</b><span>4 подъёма по 3 мин RPE 6/10 · длинная ровная поездка</span></div>
              <div><b>4</b><span>разгрузка: 2 коротких выезда без интенсивности</span></div>
              <div><b>5</b><span>групповой endurance · 3x8 мин устойчивый темп</span></div>
              <div><b>6</b><span>90–120 мин Z2 · последние 20 мин ровно, без рывков</span></div>
            </div>
            <a href="/training-plans/beginner-road" class="btn btn-ghost">Открыть подробный план</a>
          </article>

          <article class="training-plan-card reveal">
            <div class="plan-visual">
              <img src="assets/flickr/road-bike-on-indoor-trainer-2.jpg" alt="Велосипед на роликовом станке для интервальной тренировки дома" loading="lazy">
              <span>Power build · FTP / VO2</span>
            </div>
            <div class="plan-head">
              <span class="idx mono">PLAN 03</span>
              <span class="tag">Intermediate · Indoor</span>
            </div>
            <h3>Средний уровень · станок</h3>
            <p>Блок для райдера с FTP-тестом и базой. Цель: поднять устойчивую мощность, добавить VO2max и сохранить endurance-объём.</p>
            <div class="plan-meta">
              <span>6 недель</span><span>4 сессии</span><span>50–95 мин</span>
            </div>
            <div class="plan-week-table">
              <div><b>1</b><span>2x12 мин sweet spot 88–92% · 1 endurance · 1 recovery</span></div>
              <div><b>2</b><span>3x10 мин 90–94% · 5x2 мин VO2 110–115%</span></div>
              <div><b>3</b><span>over-under 3x9 мин 88/102% · длинная Z2</span></div>
              <div><b>4</b><span>разгрузка: объём -35% · короткие openers 3x1 мин</span></div>
              <div><b>5</b><span>4x8 мин 95–100% · 6x3 мин VO2 108–112%</span></div>
              <div><b>6</b><span>2x20 мин 88–92% · мини-ramp или 20-мин контроль</span></div>
            </div>
            <a href="/training-plans/intermediate-indoor" class="btn btn-ghost">Открыть подробный план</a>
          </article>

          <article class="training-plan-card reveal">
            <div class="plan-visual">
              <img src="assets/wikimedia/silhouette-of-a-pack-of-cyclists.jpg" alt="Группа шоссейных велосипедистов едет плотной группой на закате" loading="lazy">
              <span>Road build · hills / group</span>
            </div>
            <div class="plan-head">
              <span class="idx mono">PLAN 04</span>
              <span class="tag">Intermediate · Road</span>
            </div>
            <h3>Средний уровень · улица</h3>
            <p>Для шоссейника, который хочет перенести структуру TrainingPeaks на реальные маршруты: подъёмы, ветер, группа и восстановление.</p>
            <div class="plan-meta">
              <span>6 недель</span><span>3–4 выезда</span><span>60–150 мин</span>
            </div>
            <div class="plan-week-table">
              <div><b>1</b><span>2 tempo-блока по 15 мин · 1 лёгкая раскатка</span></div>
              <div><b>2</b><span>5 подъёмов по 3 мин RPE 8/10 · endurance 2 ч</span></div>
              <div><b>3</b><span>over-under на холмах: 4x8 мин · групповая Z2</span></div>
              <div><b>4</b><span>разгрузка: техника поворотов, каденс, лёгкий объём</span></div>
              <div><b>5</b><span>2x20 мин устойчивый темп · 6 коротких ускорений</span></div>
              <div><b>6</b><span>контрольный маршрут 60–90 мин · ровный negative split</span></div>
            </div>
            <a href="/training-plans/intermediate-road" class="btn btn-ghost">Открыть подробный план</a>
          </article>
        </div>

        <h2 class="reveal">Библиотека тренировок</h2>
        <div class="workout-library reveal">
          <div><b>Endurance</b><span>45–120 мин · 55–70% FTP · RPE 3–4 · пульс Z2</span></div>
          <div><b>Tempo</b><span>3–4 блока по 6–12 мин · 76–87% FTP · RPE 5–6</span></div>
          <div><b>Sweet spot</b><span>2–4 блока по 8–20 мин · 88–94% FTP · RPE 7</span></div>
          <div><b>VO2max</b><span>4–6 повторов по 2–4 мин · 106–120% FTP · RPE 8–9</span></div>
          <div><b>Recovery</b><span>30–50 мин · до 55% FTP · легко, без борьбы за среднюю</span></div>
        </div>
      </div>

      <aside class="d-sidebar reveal">
        <h3>Как пользоваться</h3>
        <ul class="gear-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Сделайте FTP-тест или выберите план по RPE</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Не увеличивайте объём больше чем на 10% в неделю</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>После тяжёлого дня ставьте recovery или отдых</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>При болезни, боли или сильной усталости снижайте нагрузку</li>
        </ul>
        <div class="training-zones">
          <h4>Зоны FTP</h4>
          <span>Z1: до 55%</span>
          <span>Z2: 56–75%</span>
          <span>Z3: 76–87%</span>
          <span>SS: 88–94%</span>
          <span>Z4: 95–105%</span>
          <span>Z5: 106–120%</span>
        </div>
        <a href="/#join" class="btn btn-primary">Присоединиться к клубу</a>
      </aside>
    </div>
  </section>

</main>`,
  },
  beginnerIndoorPlan: {
    key: 'beginnerIndoorPlan',
    nav: 'trainingPlans',
    title: `Новичок · станок — VeloCore`,
    description: `Подробный 6-недельный план для новичка на станке: FTP-зоны, каденс, endurance, tempo и разгрузка.`,
    ogTitle: `Новичок · станок — VeloCore`,
    ogDescription: `6-недельная indoor-программа для первого структурного блока на смарт-станке.`,
    html: `<main>

  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/flickr/road-bike-on-indoor-trainer-1.jpg" alt="Шоссейный велосипед закреплён на смарт-станке дома">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal">
        <a href="/training-plans">Планы тренировок</a> / <span>Новичок · станок</span>
      </div>
      <span class="idx-big mono">PLAN 01 · INDOOR</span>
      <h1>Новичок · станок</h1>
      <p class="sub">6 недель для регулярности, ровной каденции и базовой аэробной формы. Подходит для Zwift, Wattbike, Wahoo, Tacx и любого ERG-режима.</p>
      <div class="tags"><span>3 тренировки</span><span>45–75 мин</span><span>55–90% FTP</span><span>RPE 3–7</span></div>
    </div>
  </section>

  <section class="pad">
    <div class="wrap plan-detail">
      <div class="plan-detail-main">
        <h2 class="reveal">Перед стартом</h2>
        <p class="reveal">Если FTP неизвестен, сделайте ramp test или задайте мощность так, чтобы Z2 ощущалась как спокойная работа с ровным дыханием. Каждая тренировка начинается с 8–12 минут разминки и заканчивается 5–10 минутами заминки.</p>
        <div class="load-chart reveal" role="img" aria-label="Относительная нагрузка по неделям: рост 1–3, разгрузка на неделе 4, пик на неделе 5, контроль на неделе 6">
          <div class="load-chart-head"><span>Нагрузка по неделям</span><span class="load-chart-note">неделя 4 — разгрузка</span></div>
          <div class="load-chart-bars">
            <div class="load-bar" style="height:45%"></div>
            <div class="load-bar" style="height:55%"></div>
            <div class="load-bar" style="height:65%"></div>
            <div class="load-bar deload" style="height:30%"></div>
            <div class="load-bar" style="height:72%"></div>
            <div class="load-bar" style="height:50%"></div>
          </div>
          <div class="load-chart-scale"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span></div>
        </div>
        <div class="detail-week-list">
          <article class="detail-week reveal"><h3>Неделя 1 · Вход</h3><div><b>Вт</b><span>45 мин endurance: 3x8 мин 55–65% FTP, каденс 85–95 rpm.</span></div><div><b>Чт</b><span>50 мин техника: 6x1 мин spin-up 100–110 rpm, отдых 2 мин Z1.</span></div><div><b>Сб</b><span>60 мин Z2: 55–68% FTP, последние 10 мин максимально ровно.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 2 · Tempo</h3><div><b>Вт</b><span>50 мин: 3x6 мин 76–82% FTP, отдых 4 мин Z1.</span></div><div><b>Чт</b><span>45 мин recovery + каденс: 4x3 мин 95–100 rpm на 60% FTP.</span></div><div><b>Сб</b><span>70 мин endurance: 60–70% FTP, питание каждые 25–30 мин.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 3 · Sweet Spot Lite</h3><div><b>Вт</b><span>55 мин: 4x5 мин 88–90% FTP, отдых 4 мин.</span></div><div><b>Чт</b><span>50 мин: 2x12 мин tempo 78–84% FTP, каденс 85–95.</span></div><div><b>Сб</b><span>75 мин Z2: 55–70% FTP, без финишного ускорения.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 4 · Разгрузка</h3><div><b>Вт</b><span>40 мин easy spin: до 60% FTP, RPE 2–3.</span></div><div><b>Чт</b><span>35 мин: 5x30 сек spin-up, не выше 75% FTP.</span></div><div><b>Сб</b><span>50 мин лёгкая Z2: остановиться свежим, не уставшим.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 5 · Сборка</h3><div><b>Вт</b><span>60 мин: 3x8 мин 84–90% FTP, отдых 5 мин.</span></div><div><b>Чт</b><span>50 мин: 5x2 мин 95–100% FTP, отдых 3 мин.</span></div><div><b>Сб</b><span>75 мин endurance: 60–72% FTP, последние 15 мин 75–80% FTP.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 6 · Контроль</h3><div><b>Вт</b><span>55 мин: 2x12 мин 85–90% FTP, держать ровную мощность.</span></div><div><b>Чт</b><span>40 мин recovery: до 55% FTP, каденс свободный.</span></div><div><b>Сб</b><span>Мини-контроль: 20 мин прогрессивно от 80 до 92% FTP, оценить ощущения.</span></div></article>
        </div>
      </div>
      <aside class="d-sidebar reveal">
        <h3>Правила замены</h3>
        <ul class="gear-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Нет сил: замените интервалы на 40 мин Z2</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Пропуск недели: повторите её, не прыгайте дальше</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>FTP завышен, если Z2 не разговорная</li>
        </ul>
        <a href="/training-plans" class="btn btn-primary">Все планы</a>
      </aside>
    </div>
  </section>

</main>`,
  },
  beginnerRoadPlan: {
    key: 'beginnerRoadPlan',
    nav: 'trainingPlans',
    title: `Новичок · улица — VeloCore`,
    description: `Подробный 6-недельный план для новичка на улице: RPE, пульс, техника группы, endurance и безопасная прогрессия.`,
    ogTitle: `Новичок · улица — VeloCore`,
    ogDescription: `6-недельная road-программа без измерителя мощности: RPE, пульс, техника и endurance.`,
    html: `<main>

  <section class="d-hero">
    <div class="d-hero-photo">
      <img src="assets/wikimedia/cyclists-on-buttertubs-geograph-org-uk-2418147.jpg" alt="Велосипедисты на дороге с подъёмами">
    </div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal"><a href="/training-plans">Планы тренировок</a> / <span>Новичок · улица</span></div>
      <span class="idx-big mono">PLAN 02 · ROAD</span>
      <h1>Новичок · улица</h1>
      <p class="sub">6 недель для спокойного входа в шоссе: техника, базовая выносливость, первые подъёмы и уверенность в группе.</p>
      <div class="tags"><span>2–3 выезда</span><span>45–120 мин</span><span>RPE 3–7</span><span>HR Z2</span></div>
    </div>
  </section>

  <section class="pad">
    <div class="wrap plan-detail">
      <div class="plan-detail-main">
        <h2 class="reveal">Ориентиры усилия</h2>
        <p class="reveal">Если нет пульсометра, используйте RPE: Z2 = можно говорить фразами, tempo = говорить короткими фразами, подъёмный интервал = говорить уже сложно. Любой выезд переносится, если плохая погода или накопилась усталость.</p>
        <div class="load-chart reveal" role="img" aria-label="Относительная нагрузка по неделям: рост 1–3, разгрузка на неделе 4, пик на неделе 5, контроль на неделе 6">
          <div class="load-chart-head"><span>Нагрузка по неделям</span><span class="load-chart-note">неделя 4 — разгрузка</span></div>
          <div class="load-chart-bars">
            <div class="load-bar" style="height:40%"></div>
            <div class="load-bar" style="height:55%"></div>
            <div class="load-bar" style="height:65%"></div>
            <div class="load-bar deload" style="height:32%"></div>
            <div class="load-bar" style="height:70%"></div>
            <div class="load-bar" style="height:55%"></div>
          </div>
          <div class="load-chart-scale"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span></div>
        </div>
        <div class="detail-week-list">
          <article class="detail-week reveal"><h3>Неделя 1 · Безопасность</h3><div><b>Вт</b><span>45 мин легко: торможение, переключения, посадка, RPE 3.</span></div><div><b>Чт</b><span>50 мин ровно: 4x3 мин каденс выше обычной, без закисления.</span></div><div><b>Сб</b><span>60 мин Z2, маршрут без сложных перекрёстков.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 2 · Длиннее</h3><div><b>Вт</b><span>50 мин: 3x5 мин устойчивый темп RPE 5, отдых легко.</span></div><div><b>Чт</b><span>45 мин техника поворотов и езды одной рукой на безопасном участке.</span></div><div><b>Вс</b><span>75 мин endurance, еда/вода по расписанию.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 3 · Подъёмы</h3><div><b>Вт</b><span>4 подъёма по 3 мин RPE 6, вниз восстановление.</span></div><div><b>Чт</b><span>50 мин лёгкая Z2 с 6 короткими ускорениями по 10 сек.</span></div><div><b>Сб</b><span>90 мин ровно, держать темп ниже эго.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 4 · Разгрузка</h3><div><b>Вт</b><span>40 мин легко, без интервалов.</span></div><div><b>Чт</b><span>45 мин техника: каденс, торможение, взгляд в поворот.</span></div><div><b>Сб</b><span>60 мин Z2, закончить с запасом.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 5 · Группа</h3><div><b>Вт</b><span>3x8 мин tempo RPE 5–6 на ровном участке.</span></div><div><b>Чт</b><span>45 мин recovery или полный отдых.</span></div><div><b>Вс</b><span>90–110 мин с группой комфортного темпа, без смен на пределе.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 6 · Контрольный маршрут</h3><div><b>Вт</b><span>50 мин: 2x10 мин устойчиво RPE 6.</span></div><div><b>Чт</b><span>40 мин easy spin.</span></div><div><b>Сб</b><span>90–120 мин Z2, последние 20 мин ровно и спокойно.</span></div></article>
        </div>
      </div>
      <aside class="d-sidebar reveal">
        <h3>Проверка готовности</h3>
        <ul class="gear-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Перед каждым выездом: шлем, свет, давление, тормоза</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>На длинные выезды: вода и 30–60 г углеводов/ч</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Не делайте интервалы в плотном трафике</li>
        </ul>
        <a href="/training-plans" class="btn btn-primary">Все планы</a>
      </aside>
    </div>
  </section>

</main>`,
  },
  intermediateIndoorPlan: {
    key: 'intermediateIndoorPlan',
    nav: 'trainingPlans',
    title: `Средний уровень · станок — VeloCore`,
    description: `Подробный 6-недельный indoor-план среднего уровня: sweet spot, threshold, VO2max, over-under и контроль FTP.`,
    ogTitle: `Средний уровень · станок — VeloCore`,
    ogDescription: `6-недельная indoor-программа для роста устойчивой мощности и VO2max.`,
    html: `<main>

  <section class="d-hero">
    <div class="d-hero-photo"><img src="assets/flickr/road-bike-on-indoor-trainer-2.jpg" alt="Велосипед на роликовом станке для интервальной тренировки дома"></div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal"><a href="/training-plans">Планы тренировок</a> / <span>Средний уровень · станок</span></div>
      <span class="idx-big mono">PLAN 03 · POWER</span>
      <h1>Средний уровень · станок</h1>
      <p class="sub">4 тренировки в неделю: sweet spot, over-under, VO2max и контрольная неделя. Для райдера, который уже выдерживает 2–3 часа Z2.</p>
      <div class="tags"><span>4 сессии</span><span>50–95 мин</span><span>88–120% FTP</span><span>Build</span></div>
    </div>
  </section>

  <section class="pad">
    <div class="wrap plan-detail">
      <div class="plan-detail-main">
        <h2 class="reveal">Структура недели</h2>
        <p class="reveal">Два качественных дня, один endurance, один recovery. Если неделя тяжёлая по работе или сну, первым делом убирайте VO2max, а не лёгкую выносливость.</p>
        <div class="load-chart reveal" role="img" aria-label="Относительная нагрузка по неделям: рост 1–3, разгрузка на неделе 4, пик на неделе 5, контроль/тест на неделе 6">
          <div class="load-chart-head"><span>Нагрузка по неделям</span><span class="load-chart-note">неделя 4 — разгрузка</span></div>
          <div class="load-chart-bars">
            <div class="load-bar" style="height:60%"></div>
            <div class="load-bar" style="height:70%"></div>
            <div class="load-bar" style="height:78%"></div>
            <div class="load-bar deload" style="height:35%"></div>
            <div class="load-bar" style="height:85%"></div>
            <div class="load-bar" style="height:45%"></div>
          </div>
          <div class="load-chart-scale"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span></div>
        </div>
        <div class="detail-week-list">
          <article class="detail-week reveal"><h3>Неделя 1 · Sweet Spot</h3><div><b>Вт</b><span>2x12 мин 88–92% FTP, отдых 6 мин.</span></div><div><b>Ср</b><span>45 мин recovery до 55% FTP.</span></div><div><b>Чт</b><span>3x8 мин tempo 82–87% FTP с высоким каденсом.</span></div><div><b>Сб</b><span>85 мин Z2 60–72% FTP.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 2 · VO2 вход</h3><div><b>Вт</b><span>3x10 мин 90–94% FTP, отдых 5 мин.</span></div><div><b>Ср</b><span>40 мин easy spin.</span></div><div><b>Чт</b><span>5x2 мин 110–115% FTP, отдых 3 мин.</span></div><div><b>Сб</b><span>90 мин Z2, последние 20 мин 75% FTP.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 3 · Over-under</h3><div><b>Вт</b><span>3x9 мин: 2 мин 88% + 1 мин 102%, повторить 3 раза.</span></div><div><b>Ср</b><span>45 мин recovery.</span></div><div><b>Чт</b><span>4x4 мин 106–110% FTP, отдых 4 мин.</span></div><div><b>Вс</b><span>95 мин endurance 60–72% FTP.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 4 · Разгрузка</h3><div><b>Вт</b><span>50 мин Z2 с 3x1 мин openers 100% FTP.</span></div><div><b>Чт</b><span>40 мин легко, каденс свободный.</span></div><div><b>Сб</b><span>60 мин endurance, без tempo.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 5 · Пиковая</h3><div><b>Вт</b><span>4x8 мин 95–100% FTP, отдых 5 мин.</span></div><div><b>Ср</b><span>45 мин recovery.</span></div><div><b>Чт</b><span>6x3 мин 108–112% FTP, отдых 3 мин.</span></div><div><b>Сб</b><span>90 мин Z2 + 3x10 мин 80% FTP.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 6 · Контроль</h3><div><b>Вт</b><span>2x20 мин 88–92% FTP, без героизма.</span></div><div><b>Чт</b><span>35 мин recovery + 3x30 сек openers.</span></div><div><b>Сб</b><span>Ramp test или 20 мин тест, затем 10 мин лёгкой заминки.</span></div></article>
        </div>
      </div>
      <aside class="d-sidebar reveal">
        <h3>Контроль нагрузки</h3>
        <ul class="gear-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>VO2max не чаще 1 раза в неделю</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Если пульс необычно высокий, снизьте FTP на 3–5%</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>После теста 2 дня только easy/recovery</li>
        </ul>
        <a href="/training-plans" class="btn btn-primary">Все планы</a>
      </aside>
    </div>
  </section>

</main>`,
  },
  intermediateRoadPlan: {
    key: 'intermediateRoadPlan',
    nav: 'trainingPlans',
    title: `Средний уровень · улица — VeloCore`,
    description: `Подробный 6-недельный road-план среднего уровня: tempo, подъёмы, over-under на холмах, группа и контрольный маршрут.`,
    ogTitle: `Средний уровень · улица — VeloCore`,
    ogDescription: `6-недельная уличная программа для устойчивого темпа, подъёмов и групповых заездов.`,
    html: `<main>

  <section class="d-hero">
    <div class="d-hero-photo"><img src="assets/wikimedia/silhouette-of-a-pack-of-cyclists.jpg" alt="Группа шоссейных велосипедистов едет плотной группой на закате"></div>
    <div class="wrap d-hero-inner">
      <div class="breadcrumb reveal"><a href="/training-plans">Планы тренировок</a> / <span>Средний уровень · улица</span></div>
      <span class="idx-big mono">PLAN 04 · ROAD BUILD</span>
      <h1>Средний уровень · улица</h1>
      <p class="sub">Структурный road-блок для райдера с базой: tempo на ровном, подъёмы, групповой endurance и контрольный маршрут.</p>
      <div class="tags"><span>3–4 выезда</span><span>60–150 мин</span><span>RPE 4–9</span><span>Climbs</span></div>
    </div>
  </section>

  <section class="pad">
    <div class="wrap plan-detail">
      <div class="plan-detail-main">
        <h2 class="reveal">Как выполнять на улице</h2>
        <p class="reveal">Выберите безопасные участки: ровный отрезок для tempo, подъём 3–6 минут для VO2 и круг без светофоров для endurance. Если есть мощемер, используйте те же зоны FTP; если нет, ориентируйтесь по RPE и дыханию.</p>
        <div class="load-chart reveal" role="img" aria-label="Относительная нагрузка по неделям: рост 1–3, разгрузка на неделе 4, пик на неделе 5, контрольный маршрут на неделе 6">
          <div class="load-chart-head"><span>Нагрузка по неделям</span><span class="load-chart-note">неделя 4 — разгрузка</span></div>
          <div class="load-chart-bars">
            <div class="load-bar" style="height:55%"></div>
            <div class="load-bar" style="height:68%"></div>
            <div class="load-bar" style="height:78%"></div>
            <div class="load-bar deload" style="height:33%"></div>
            <div class="load-bar" style="height:88%"></div>
            <div class="load-bar" style="height:50%"></div>
          </div>
          <div class="load-chart-scale"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span></div>
        </div>
        <div class="detail-week-list">
          <article class="detail-week reveal"><h3>Неделя 1 · Ровный темп</h3><div><b>Вт</b><span>2x15 мин tempo RPE 6, отдых 8 мин легко.</span></div><div><b>Чт</b><span>60 мин Z2 + 6 ускорений по 10 сек.</span></div><div><b>Сб</b><span>2 часа endurance, без гонки за средней.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 2 · Подъёмы</h3><div><b>Вт</b><span>5 подъёмов по 3 мин RPE 8, спуск восстановление.</span></div><div><b>Чт</b><span>75 мин tempo: 3x10 мин RPE 6.</span></div><div><b>Вс</b><span>2–2.5 часа Z2, питание 40–70 г углеводов/ч.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 3 · Over-under</h3><div><b>Вт</b><span>4x8 мин на холмах: 2 мин RPE 6 + 1 мин RPE 8.</span></div><div><b>Чт</b><span>60 мин recovery или лёгкая групповая покатушка.</span></div><div><b>Сб</b><span>Групповой endurance 90–120 мин, держать колёса без рывков.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 4 · Разгрузка</h3><div><b>Вт</b><span>50 мин легко, техника поворотов и торможения.</span></div><div><b>Чт</b><span>45 мин Z2 с 4 короткими openers.</span></div><div><b>Сб</b><span>75 мин спокойно, без подъёмных интервалов.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 5 · Пиковая</h3><div><b>Вт</b><span>2x20 мин устойчивый tempo/threshold RPE 7.</span></div><div><b>Чт</b><span>6 подъёмов по 2 мин RPE 9, полный отдых между.</span></div><div><b>Вс</b><span>2.5 часа endurance, последние 30 мин ровно RPE 5.</span></div></article>
          <article class="detail-week reveal"><h3>Неделя 6 · Контроль</h3><div><b>Вт</b><span>60 мин: 3x6 мин RPE 7, без полного отказа.</span></div><div><b>Чт</b><span>40 мин easy spin.</span></div><div><b>Сб</b><span>Контрольный маршрут 60–90 мин: negative split, вторая половина быстрее первой.</span></div></article>
        </div>
      </div>
      <aside class="d-sidebar reveal">
        <h3>Безопасность</h3>
        <ul class="gear-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Интервалы только на знакомых участках</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Не делайте VO2 в плотной группе</li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>При плохой погоде переносите работу на станок</li>
        </ul>
        <a href="/training-plans" class="btn btn-primary">Все планы</a>
      </aside>
    </div>
  </section>

</main>`,
  },
};

export const pathToPage = {
  '/': 'home',
  '/routes': 'routes',
  '/community': 'community',
  '/news': 'news',
  '/training-plans': 'trainingPlans',
  '/training-plans/beginner-indoor': 'beginnerIndoorPlan',
  '/training-plans/beginner-road': 'beginnerRoadPlan',
  '/training-plans/intermediate-indoor': 'intermediateIndoorPlan',
  '/training-plans/intermediate-road': 'intermediateRoadPlan',
  '/road': 'road',
  '/track': 'track',
  '/mtb': 'mtb',
  '/gravel': 'gravel',
  '/cyclocross': 'cyclocross',
  '/bmx': 'bmx',
};
