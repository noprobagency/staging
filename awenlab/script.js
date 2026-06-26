/* ============================================================
   AwenLab homepage — interactions & content hydration
   Static prototype, no dependencies.
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };

  /* ---------- Product data ---------- */
  const MULTI = {
    brand: "Prestige",
    name: "Supergelèe Multiflora Prebiotico - 60pz",
    tag: "Offerta", price: "€11,90", old: "€14,90", per: "€0,19/pezzo",
    img: "assets/products/product-multiflora.png",
  };
  const FLASH = {
    brand: "Flashvig",
    name: "FLASHVIG® – Lo Spray Sublinguale che contrasta i Colpo di Sonno. Prontezza e Sicurezza alla Guida",
    tag: "Offerta", price: "€12,90", old: "€18,00", per: "€0,19/pezzo",
    img: "assets/products/product-flashvig.png",
  };
  const PRODUCTS = { img: [MULTI.img, FLASH.img, "assets/products/product-collagen.png"] };

  const RAILS = {
    offerte:     Array(6).fill(FLASH),
    bestseller:  Array(8).fill(MULTI),
    energizzanti:Array(6).fill(MULTI),
    peso:        Array(6).fill(MULTI),
    supergelee:  Array(8).fill(MULTI),
  };

  const cardHTML = (p) => `
    <article class="card">
      <div class="card__imgwrap"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="card__brand">${p.brand}</div>
      <h3 class="card__name">${p.name}</h3>
      <div class="card__tag">${p.tag}</div>
      <div class="card__price"><b>${p.price}</b> <s>${p.old}</s></div>
      <div class="card__per">${p.per}</div>
      <button class="btn btn--lime card__add">Aggiungi</button>
    </article>`;

  $$("[data-rail]").forEach((sec) => {
    const key = sec.getAttribute("data-rail");
    const track = $("[data-rail-track]", sec);
    if (!track || !RAILS[key]) return;
    RAILS[key].forEach((p) => track.appendChild(el(cardHTML(p))));
  });

  /* ---------- Category pills (marquee / scroll) ---------- */
  const PILLS = [
    "Più popolari", "In Offerta", "Stomaco", "Dieta", "Immunità",
    "Muscoli", "Sonno/Relax", "Energia", "Pelle", "Capelli",
  ];
  const ACTIVE_PILL = "Immunità";
  const pillsHost = $("[data-pills]");
  if (pillsHost) {
    PILLS.forEach((label, i) => {
      const p = el(`<a href="#" class="pill${label === ACTIVE_PILL ? " is-active" : ""}">
        <span class="pill__thumb"><img src="${PRODUCTS.img[i % PRODUCTS.img.length]}" alt="" loading="lazy"></span>
        <span>${label}</span></a>`);
      pillsHost.appendChild(p);
    });
  }

  /* ---------- Goals tiles ---------- */
  const GOALS = [
    { t: "Più Energia e Focus",   g: "linear-gradient(160deg,#0a6b6e,#00BABE)", i: `<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8Z"/>` },
    { t: "Corpo più Snello",      g: "linear-gradient(160deg,#0a4257,#0a8aa0)", i: `<path d="M12 3c2.5 3 5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 2.5-6 5-9Z"/>` },
    { t: "Miglior Sonno e Relax", g: "linear-gradient(160deg,#13324a,#3a5a8a)", i: `<path d="M21 12.8A8 8 0 0 1 11.2 3 7 7 0 1 0 21 12.8Z"/>` },
    { t: "Pelle più Radiosa",     g: "linear-gradient(160deg,#0a6b6e,#7bd6c9)", i: `<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3Z"/>` },
    { t: "Stomaco più Sano",      g: "linear-gradient(160deg,#0a4257,#00BABE)", i: `<path d="M6 18c-1-7 4-12 12-12 1 7-4 12-12 12Z"/><path d="M9 15c2-3 4-4.5 7-5.5" stroke-linecap="round"/>` },
    { t: "Più Massa Muscolare",   g: "linear-gradient(160deg,#13324a,#0a6b6e)", i: `<path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" stroke-linecap="round"/>` },
  ];
  const goalsHost = $("[data-goals]");
  if (goalsHost) GOALS.forEach((x) => goalsHost.appendChild(
    el(`<a href="#" class="goal" style="background:${x.g}"><svg class="goal__ico" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round">${x.i}</svg><span>${x.t}</span></a>`)));

  /* ---------- Gelée gallery (feature) ---------- */
  const geleeHost = $("[data-gelee]");
  if (geleeHost) {
    const swatches = ["#F2C94C", "#EB5757", "#9B51E0", "#27AE60", "#56CCF2", "#F2994A"];
    const tiles = [
      `<div class="gelee"><img src="${MULTI.img}" alt="" aria-hidden="true"></div>`,
      ...swatches.slice(0, 3).map((c) =>
        `<div class="gelee"><span style="width:54%;height:54%;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff7,${c})"></span></div>`),
      `<div class="gelee"><img src="${FLASH.img}" alt="" aria-hidden="true"></div>`,
      ...swatches.slice(3).map((c) =>
        `<div class="gelee"><span style="width:54%;height:54%;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff7,${c})"></span></div>`),
      `<div class="gelee"><img src="${MULTI.img}" alt="" aria-hidden="true"></div>`,
    ];
    tiles.forEach((h) => geleeHost.appendChild(el(h)));
  }

  /* ---------- Reviews ---------- */
  const verifiedIco = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4 10-10" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const reviewHTML = () => `
    <article class="review">
      <div class="review__stars">★★★★★</div>
      <div class="review__title">Ottimo prodotto</div>
      <div class="review__person">
        <span class="review__avatar">M</span>
        <span class="review__who"><b>Marco R.</b><span>21 maggio, 2026</span></span>
      </div>
      <p class="review__body">Veramente un buon prodotto e ho notato risultati positivi da subito!! Consigliato! Consegna veloce!</p>
      <span class="review__verified">${verifiedIco} Acquisto verificato</span>
      <div class="review__product"><img src="${MULTI.img}" alt=""><span>Supergelèe Multiflora Prebiotico - 60pz</span></div>
    </article>`;
  const reviewsTrack = $("[data-rail='reviews'] [data-rail-track]");
  if (reviewsTrack) for (let i = 0; i < 8; i++) reviewsTrack.appendChild(el(reviewHTML()));

  /* ---------- FAQ ---------- */
  const FAQ = [
    ["Le formulazioni sono clinicamente testate?", "Sì. Ogni formula AwenLab nasce da attivi con dosaggi clinicamente documentati e viene prodotta in stabilimenti certificati, con controlli su purezza e concentrazione di ogni lotto."],
    ["Posso assumere più integratori insieme?", "Nella maggior parte dei casi sì: le nostre formule sono pensate per essere combinate. Per esigenze specifiche o terapie in corso consigliamo comunque il parere del medico."],
    ["Quando vedrò i risultati?", "Dipende dal prodotto e dall'obiettivo. Molti benefici si percepiscono nelle prime 2–4 settimane di uso costante; per gli effetti strutturali consigliamo cicli di almeno 2–3 mesi."],
    ["I prodotti sono adatti a vegetariani e vegani?", "Gran parte della gamma è adatta a vegetariani e vegani. Trovi sempre l'indicazione nella scheda di ogni prodotto, insieme alla lista completa degli ingredienti."],
    ["Quali sono i metodi di pagamento accettati?", "Accettiamo carte di credito e debito, PayPal, Apple Pay e pagamento rateale con Klarna. Tutte le transazioni sono protette e crittografate."],
    ["Qual è la politica di reso?", "Hai 14 giorni per richiedere il reso. Se il prodotto non ti soddisfa, ti rimborsiamo: scrivi a supporto@awenlab.com e ti guidiamo passo passo."],
  ];
  const faqHost = $("[data-faq]");
  if (faqHost) FAQ.forEach(([q, a], i) => faqHost.appendChild(el(
    `<details class="faq__item"${i === 0 ? " open" : ""}>
       <summary class="faq__q">${q}<span class="plus" aria-hidden="true"></span></summary>
       <div class="faq__a">${a}</div>
     </details>`)));

  /* ---------- Blog ---------- */
  const POSTS = [
    { t: "Colpo di sonno, pericolosità e soluzioni: come non addormentarsi alla guida", c: "Sicurezza", g: "linear-gradient(150deg,#0a4257,#00BABE)", f: true },
    { t: "Magnesio Supremo: I Benefici, A Cosa Serve e Perché Non Potrai Più Farne a Meno", c: "Integratori", g: "linear-gradient(150deg,#13324a,#3a5a8a)" },
    { t: "Berberina: un supporto naturale per la glicemia, il peso corporeo e la salute del cuore", c: "Salute", g: "linear-gradient(150deg,#0a6b6e,#7bd6c9)" },
    { t: "Stai danneggiando il tuo intestino? Ecco i cibi peggiori e le alternative consigliate", c: "Nutrizione", g: "linear-gradient(150deg,#0a4257,#0a8aa0)" },
  ];
  const blogHost = $("[data-blog]");
  if (blogHost) POSTS.forEach((p) => blogHost.appendChild(el(
    `<article class="post${p.f ? " post--feature" : ""}">
       <div class="post__img" style="background:${p.g}"><span>${p.c}</span></div>
       <div class="post__body">
         <h3 class="post__title">${p.t}</h3>
         <a href="#" class="link-arrow">Leggi articolo <span aria-hidden="true">→</span></a>
       </div>
     </article>`)));

  /* ---------- Payment badges ---------- */
  const payHost = $("[data-pay]");
  if (payHost) ["VISA", "Mastercard", "PayPal", "Amex", "Klarna", "Apple Pay"]
    .forEach((n) => payHost.appendChild(el(`<span class="paybadge">${n}</span>`)));

  /* ---------- Comparison check / cross ---------- */
  $$("[data-yes]").forEach((c) => c.appendChild(el(`<span class="cmp-check">✓</span>`)));
  $$("[data-no]").forEach((c) => c.appendChild(el(`<span class="cmp-cross">×</span>`)));

  /* ---------- Marquees ---------- */
  $$("[data-marquee]").forEach((track) => {
    const group = track.firstElementChild;
    if (!group) return;
    track.appendChild(group.cloneNode(true)); // duplicate for seamless -50% loop
    const speed = parseFloat(track.getAttribute("data-marquee-speed")) || 60; // px/s
    requestAnimationFrame(() => {
      const w = group.getBoundingClientRect().width;
      const dur = Math.max(12, w / speed);
      track.style.setProperty("--dur", dur + "s");
      track.classList.add("is-running");
    });
  });

  /* ---------- Rail sliders (next arrow + drag) ---------- */
  function stepFor(track) {
    const card = track.querySelector(".card,.review");
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 20;
    const cw = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
    const perView = Math.max(1, Math.floor(track.clientWidth / cw));
    // scroll by the whole-cards that fit, never more than one viewport
    return Math.min(perView * cw, track.clientWidth);
  }
  $$("[data-rail-next]").forEach((btn) => {
    const sec = btn.closest("[data-rail], .reviews, .rail");
    const track = $("[data-rail-track]", sec);
    if (!track) return;
    btn.addEventListener("click", () => {
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: stepFor(track), behavior: "smooth" });
    });
  });

  // drag-to-scroll for all horizontal tracks (desktop nicety)
  $$(".rail__track, .reviews__track").forEach((track) => {
    let down = false, sx = 0, sl = 0, moved = false;
    track.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return;
      down = true; moved = false; sx = e.clientX; sl = track.scrollLeft;
      track.setPointerCapture(e.pointerId);
    });
    track.addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - sx;
      if (Math.abs(dx) > 4) { moved = true; track.classList.add("is-dragging"); }
      track.scrollLeft = sl - dx;
    });
    const end = () => { down = false; track.classList.remove("is-dragging"); };
    track.addEventListener("pointerup", end);
    track.addEventListener("pointercancel", end);
    // suppress only the click that immediately follows a drag, then clear the flag
    track.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } moved = false; }, true);
  });

  /* ---------- Goals "Carica altro" (mobile) ---------- */
  const goalsMore = $("[data-goals-more]");
  if (goalsMore) goalsMore.addEventListener("click", () => document.body.classList.add("goals-expanded"));

  /* ---------- Mobile nav (with focus + aria management) ---------- */
  const mnav = $("[data-mobile-nav]");
  const navToggle = $("[data-nav-toggle]");
  let lastFocus = null;
  const openNav = () => {
    if (!mnav) return;
    lastFocus = document.activeElement;
    const s = $(".search");
    if (s && s.classList.contains("is-open")) {
      s.classList.remove("is-open");
      $("[data-search-toggle]")?.setAttribute("aria-expanded", "false");
    }
    mnav.hidden = false;
    document.body.style.overflow = "hidden";
    navToggle?.setAttribute("aria-expanded", "true");
    navToggle?.setAttribute("aria-label", "Chiudi menu");
    $(".mobile-nav__close", mnav)?.focus();
  };
  const closeNav = () => {
    if (!mnav) return;
    mnav.hidden = true;
    document.body.style.overflow = "";
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Apri menu");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  };
  navToggle?.addEventListener("click", openNav);
  $("[data-nav-close]")?.addEventListener("click", closeNav);
  mnav?.addEventListener("click", (e) => { if (e.target === mnav) closeNav(); });
  $$(".mobile-nav__panel a").forEach((a) => a.addEventListener("click", closeNav));

  /* ---------- Mobile search toggle ---------- */
  $("[data-search-toggle]")?.addEventListener("click", (e) => {
    const s = $(".search");
    const open = s.classList.toggle("is-open");
    e.currentTarget.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) $("input", s)?.focus();
  });

  /* ---------- Esc closes overlays ---------- */
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (mnav && !mnav.hidden) closeNav();
    const s = $(".search");
    if (s && s.classList.contains("is-open")) {
      s.classList.remove("is-open");
      $("[data-search-toggle]")?.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Recompute marquee width after images/fonts load ---------- */
  window.addEventListener("load", () => {
    $$("[data-marquee]").forEach((track) => {
      const group = track.firstElementChild;
      if (!group) return;
      const speed = parseFloat(track.getAttribute("data-marquee-speed")) || 60;
      const w = group.getBoundingClientRect().width;
      if (w) track.style.setProperty("--dur", Math.max(12, w / speed) + "s");
    });
  });
})();
