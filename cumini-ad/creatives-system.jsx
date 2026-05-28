// CUMINI — Creative Batch System
// Componenti riutilizzabili per creative social/ads
// Filosofia: logo piccolo, overlay leggero, foto come protagonista, geometria svizzera

const CFONT = '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif';

// ─── LOGO ─ usa ESCLUSIVAMENTE i file SVG forniti dal cliente
// (assets/logo-black.svg e assets/logo-white.svg). Niente font wordmark.
//
// Sistema dimensioni — UNA SOLA SIZE. Il logo deve apparire VISIVAMENTE
// uguale e CONTENUTO su tutti i formati (1:1, 9:16, 16:9). Quindi NON è
// in pixel fissi: è scalato in proporzione al lato corto del primo
// antenato "artboard" (qualsiasi elemento positioned con offsetWidth>0).
//
// LOGO_PCT = ~9% lato corto, capped 56–84px. È L'UNICA size ammessa.
// Il prop `size` è ignorato (mantenuto per backwards-compat).
const LOGO_PCT = 0.09;
const LOGO_MIN = 56;
const LOGO_MAX = 84;

const CLogo = ({ width, color = 'black' }) => {
  const src = color === 'white' ? 'assets/logo-white.svg' : 'assets/logo-black.svg';
  const ref = React.useRef(null);
  const [autoW, setAutoW] = React.useState(null);
  React.useEffect(() => {
    if (width != null) return; // pixel mode — skip auto
    const el = ref.current;
    if (!el) return;
    let p = el.parentElement;
    let host = null;
    while (p) {
      const cs = getComputedStyle(p);
      if ((cs.position === 'relative' || cs.position === 'absolute') && p.offsetWidth > 0 && p.offsetHeight > 0) {
        host = p;
        let outer = p.parentElement;
        while (outer) {
          const ocs = getComputedStyle(outer);
          if ((ocs.position === 'relative' || ocs.position === 'absolute') && outer.offsetWidth > 0 && outer.offsetHeight > 0) {
            host = outer;
          }
          outer = outer.parentElement;
        }
        break;
      }
      p = p.parentElement;
    }
    if (!host) return;
    const compute = () => {
      const shortSide = Math.min(host.offsetWidth, host.offsetHeight);
      setAutoW(Math.max(LOGO_MIN, Math.min(LOGO_MAX, Math.round(shortSide * LOGO_PCT))));
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(host);
    return () => ro.disconnect();
  }, [width]);
  const w = width != null ? width : (autoW ?? LOGO_MIN);
  return <img ref={ref} src={src} alt="CUMINI" style={{ width: w, height: 'auto', display: 'block' }} />;
};

// ─── LEGACY constants — kept for any old code that still imports them.
// They are NO LONGER read by <CLogo>; everything uses the auto-scale.
const LOGO_SM = 78;
const LOGO_LG = 78;

// ─── OVERLAY UTILS ────────────────────────────────────────
// Soft, mai troppo scuro, mai troppo chiaro
const overlayDarkSoft   = 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.42) 100%)';
const overlayLightSoft  = 'linear-gradient(180deg, rgba(255,250,245,0.0) 0%, rgba(255,250,245,0.0) 60%, rgba(255,250,245,0.55) 100%)';
const overlayCenterDark = 'radial-gradient(ellipse at center, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.05) 70%)';
const overlayTopDark    = 'linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.0) 50%)';
const overlayEvenSoft   = 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.18) 100%)';

// ─── ATOM: photo box ──────────────────────────────────────
const Photo = ({ src, position = 'center', scale = 1, x = 0, y = 0 }) => (
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: `url(../uploads/${src})`,
    backgroundSize: `${100 * scale}% auto`,
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#d8cfc4',
    transform: `translate(${x}px, ${y}px)`,
  }}/>
);

const PhotoCover = ({ src, position = 'center 30%' }) => (
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: `url(../uploads/${src})`,
    backgroundSize: 'cover',
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#d8cfc4',
  }}/>
);

// ─── ATOM: small CUMINI wordmark — usa il file SVG fornito dal cliente.
// Definito sotto, dopo PlacedLogo (è solo un alias).

// ─── ATOM: striscia DPA (per Facebook ads) ───────────────
// Striscia sotto + logo, in 4 varianti stagionali
const DPAStrip = ({ variant = 'black', label }) => {
  const bg = {
    black:  '#0a0a0a',
    summer: 'linear-gradient(90deg, #e25c29 0%, #7e1e1e 100%)',
    winter: 'linear-gradient(90deg, #0b1c2d 0%, #1f3a5f 100%)',
    archive:'linear-gradient(90deg, #2a2a2a 0%, #8a8580 100%)',
  }[variant];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      background: bg, padding: '14px 22px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 16,
    }}>
      <CLogo size="sm" color="white" />
      {label && (
        <span style={{
          fontFamily: CFONT, fontSize: 9, color: '#fff', letterSpacing: '0.32em',
          textTransform: 'uppercase', opacity: 0.92,
        }}>{label}</span>
      )}
    </div>
  );
};

// ─── ATOM: corner logo (quasi-watermark) ─────────────────
const CornerLogo = ({ pos = 'bl', color = '#fff', size = 64, padding = 28 }) => {
  const placement = {
    tl: { top: padding, left: padding },
    tr: { top: padding, right: padding },
    bl: { bottom: padding, left: padding },
    br: { bottom: padding, right: padding },
    tc: { top: padding, left: '50%', transform: 'translateX(-50%)' },
    bc: { bottom: padding, left: '50%', transform: 'translateX(-50%)' },
    cc: { top: '50%', left: '50%', transform: 'translate(-50%,-50%)' },
  }[pos];
  return (
    <div style={{ position: 'absolute', ...placement }}>
      <CLogo width={size} color={color} />
    </div>
  );
};

// ─── ATOM: CUMINI logo posizionato. Accetta SOLO 2 size: 'sm' | 'lg'
// Niente più valori liberi di width — sistema rigoroso.
//
// safe="story" — Instagram Stories safe-zone mode. Rimappa le posizioni
// "rischiose" (top/bottom edge → coperte da status bar / caption + action
// rail) verso le zone visibili. Geometria 9:16 (1080×1920):
//   top safe-zone:    18% dall'alto (sotto status bar + username + timer)
//   bottom safe-zone: 70% dall'alto (sopra avatar + caption + actions)
// Mappatura quando safe="story":
//   tl/tc/tr → all'altezza 18% (orizzontale invariato)
//   bl/bc/br → all'altezza 70% (orizzontale invariato)
//   cc       → invariato (sempre safe)
const PlacedLogo = ({ pos = 'bl', color = '#fff', size = 'sm', padding = 32, safe = null }) => {
  const isStorySafe = safe === 'story';
  const TOP_SAFE = '18%';
  const BOT_SAFE = '70%';
  const placement = isStorySafe ? ({
    tl: { top: TOP_SAFE, left: padding },
    tr: { top: TOP_SAFE, right: padding },
    tc: { top: TOP_SAFE, left: '50%', transform: 'translateX(-50%)' },
    bl: { top: BOT_SAFE, left: padding },
    br: { top: BOT_SAFE, right: padding },
    bc: { top: BOT_SAFE, left: '50%', transform: 'translateX(-50%)' },
    cc: { top: '50%', left: '50%', transform: 'translate(-50%,-50%)' },
  })[pos] : ({
    tl: { top: padding, left: padding },
    tr: { top: padding, right: padding },
    bl: { bottom: padding, left: padding },
    br: { bottom: padding, right: padding },
    bc: { bottom: padding, left: '50%', transform: 'translateX(-50%)' },
    tc: { top: padding, left: '50%', transform: 'translateX(-50%)' },
    cc: { top: '50%', left: '50%', transform: 'translate(-50%,-50%)' },
  })[pos];
  const variant = (color === '#1a1a1a' || color === '#0a0a0a' || color === 'black' || color === '#000' || color === '#000000') ? 'black' : 'white';
  return (
    <div style={{ position: 'absolute', ...placement }}>
      <CLogo size={size} color={variant} />
    </div>
  );
};

// Alias for backwards compat (old templates use this name) — same component.
const CuminiTextLogo = PlacedLogo;
const Wordmark = ({ color = '#fff', size = 'sm' }) => {
  const variant = (color === '#1a1a1a' || color === '#0a0a0a' || color === 'black' || color === '#000' || color === '#000000') ? 'black' : 'white';
  return <CLogo size={size} color={variant} />;
};

// ─── ATOM: eyebrow (small uppercase label) ───────────────
const Eyebrow = ({ children, color = '#fff', size = 10, track = '0.36em' }) => (
  <div style={{
    fontFamily: CFONT, fontSize: size, color, letterSpacing: track,
    textTransform: 'uppercase', fontWeight: 400, lineHeight: 1,
  }}>{children}</div>
);

// ─── ATOM: hairline divider ──────────────────────────────
const Hairline = ({ color = 'rgba(255,255,255,0.6)', w = 28 }) => (
  <div style={{ width: w, height: 1, background: color }}/>
);

// ====================================================================
// TEMPLATE BUILDERS
// Tutti accettano una "size" prop {w, h} così funzionano sia 1:1 che 16:9
// ====================================================================

// ---- 1) BRANDED · solo logo + overlay ------------------
// logoPos='cc' → LOGO_LG, ovunque altro → LOGO_SM. Non si discute più.
const TplBrandedLogo = ({ photo, position = 'center 30%', logoPos = 'bc', logoColor = 'white', overlay = 'soft', safe = null }) => {
  const ovBg = overlay === 'soft' ? overlayDarkSoft
             : overlay === 'top' ? overlayTopDark
             : overlay === 'center' ? overlayCenterDark
             : overlay === 'even' ? overlayEvenSoft
             : overlayLightSoft;
  const col = logoColor === 'white' ? '#ffffff' : '#1a1a1a';
  const sz = logoPos === 'cc' ? 'lg' : 'sm';
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <PhotoCover src={photo} position={position} />
      <div style={{ position: 'absolute', inset: 0, background: ovBg }}/>
      <PlacedLogo pos={logoPos} color={col} size={sz} padding={32} safe={safe} />
    </div>
  );
};

// ---- 2) Just-in style: eyebrow + display + logo ─────────
const TplEditorial = ({ photo, position = 'center 25%', eyebrow, title, sub, logoPos = 'bl', textColor = 'white', overlay = 'soft', size = 'lg', safe = null }) => {
  const ovBg = overlay === 'soft' ? overlayDarkSoft
             : overlay === 'top' ? overlayTopDark
             : overlayLightSoft;
  const col = textColor === 'white' ? '#ffffff' : '#1a1a1a';
  const titleSize = size === 'lg' ? 64 : size === 'md' ? 48 : 36;
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <PhotoCover src={photo} position={position} />
      <div style={{ position: 'absolute', inset: 0, background: ovBg }}/>
      <div style={{ position: 'absolute', top: 36, left: 36, right: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {eyebrow && <Eyebrow color={col} size={10} track="0.42em">{eyebrow}</Eyebrow>}
        <div style={{
          fontFamily: CFONT, fontSize: titleSize, color: col, letterSpacing: '-0.02em',
          lineHeight: 1, fontWeight: 400, maxWidth: '85%',
        }}>{title}</div>
        {sub && (
          <div style={{ fontFamily: CFONT, fontSize: 12, color: col, opacity: 0.85, letterSpacing: '0.04em', maxWidth: '70%', lineHeight: 1.5 }}>{sub}</div>
        )}
      </div>
      <PlacedLogo pos={logoPos} color={col} size="sm" padding={32} />
    </div>
  );
};

// ---- 3) Bottom-aligned: title big + logo at top ─────────
const TplBottomTitle = ({ photo, position = 'center 25%', eyebrow, title, sub, logoPos = 'tl', textColor = 'white', overlay = 'soft' }) => {
  const ovBg = overlay === 'soft' ? overlayDarkSoft
             : overlay === 'top' ? overlayTopDark
             : overlayLightSoft;
  const col = textColor === 'white' ? '#ffffff' : '#1a1a1a';
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <PhotoCover src={photo} position={position} />
      <div style={{ position: 'absolute', inset: 0, background: ovBg }}/>
      <PlacedLogo pos={logoPos} color={col} size="sm" padding={32} />
      <div style={{ position: 'absolute', bottom: 36, left: 36, right: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {eyebrow && <Eyebrow color={col} size={10} track="0.42em">{eyebrow}</Eyebrow>}
        <div style={{
          fontFamily: CFONT, fontSize: 56, color: col, letterSpacing: '-0.02em',
          lineHeight: 0.98, fontWeight: 400, maxWidth: '92%',
        }}>{title}</div>
        {sub && (
          <div style={{ fontFamily: CFONT, fontSize: 11, color: col, opacity: 0.85, letterSpacing: '0.04em', maxWidth: '70%', lineHeight: 1.5 }}>{sub}</div>
        )}
      </div>
    </div>
  );
};

// ---- 4) DPA / DABA Facebook ad: foto + striscia logo ────
const TplDPA = ({ photo, position = 'center', variant = 'black', label }) => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#fff' }}>
    <PhotoCover src={photo} position={position} />
    <DPAStrip variant={variant} label={label} />
  </div>
);

// ---- 4b) DPA cutout: prodotto scontornato su fondo cream + striscia logo ──
const TplDPACutout = ({ photo, variant = 'black', label, bg = '#f0e8dc', pad = 60 }) => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: bg }}>
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `url(../uploads/${photo})`,
      backgroundSize: 'contain',
      backgroundPosition: `center ${pad}%`,
      backgroundRepeat: 'no-repeat',
    }}/>
    <DPAStrip variant={variant} label={label} />
  </div>
);

// ---- 5) Lead gen: split layout text/photo ───────────────
const TplLeadGen = ({ photo, position = 'center 25%', headline, sub, layout = 'split-right', accent = 'cream' }) => {
  // accent panel color (warm cream/sand, mai bianco puro)
  const panelBg = accent === 'cream' ? '#f0e8dc' : accent === 'sand' ? '#e6dcc9' : '#1a1a1a';
  const panelInk = accent === 'ink' ? '#ffffff' : '#1a1a1a';
  if (layout === 'overlay') {
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <PhotoCover src={photo} position={position} />
        <div style={{ position: 'absolute', inset: 0, background: overlayDarkSoft }}/>
        <PlacedLogo pos="tl" color="#fff" size="sm" padding={32} />
        <div style={{ position: 'absolute', left: 36, right: 36, bottom: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Eyebrow color="#fff" size={10} track="0.42em">Lead generation · iscriviti</Eyebrow>
          <div style={{ fontFamily: CFONT, fontSize: 44, color: '#fff', letterSpacing: '-0.015em', lineHeight: 1.02, fontWeight: 400, maxWidth: '85%' }}>{headline}</div>
          {sub && <div style={{ fontFamily: CFONT, fontSize: 11, color: '#fff', opacity: 0.85, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{sub}</div>}
        </div>
      </div>
    );
  }
  // split layout
  const isSplitRight = layout === 'split-right';
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', background: panelBg }}>
      <div style={{ position: 'relative', order: isSplitRight ? 1 : 2 }}>
        <PhotoCover src={photo} position={position} />
      </div>
      <div style={{ position: 'relative', order: isSplitRight ? 2 : 1, padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: panelInk }}>
        <CLogo size="sm" color={panelInk === '#ffffff' ? 'white' : 'black'} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Eyebrow color={panelInk} size={10} track="0.42em">Iscriviti · newsletter</Eyebrow>
          <div style={{ fontFamily: CFONT, fontSize: 36, color: panelInk, letterSpacing: '-0.015em', lineHeight: 1.05, fontWeight: 400 }}>{headline}</div>
          {sub && <div style={{ fontFamily: CFONT, fontSize: 11, color: panelInk, opacity: 0.7, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{sub}</div>}
        </div>
        <div style={{ fontFamily: CFONT, fontSize: 9, color: panelInk, opacity: 0.55, letterSpacing: '0.32em', textTransform: 'uppercase' }}>SS · 26</div>
      </div>
    </div>
  );
};

// ---- 6) Raccolta / collage 1:1 (5 photos) ───────────────
// Layout svizzero: hero centrale alta + 4 thumbnail a piedi
const TplCollage5 = ({ hero, thumbs, position = 'center 25%' }) => (
  <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'grid', gridTemplateRows: '3.2fr 1fr', gap: 4, padding: 4, overflow: 'hidden' }}>
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <PhotoCover src={hero} position={position} />
      <PlacedLogo pos="bc" color="#fff" size="sm" padding={28} />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
      {thumbs.map((t, i) => (
        <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
          <PhotoCover src={t.src} position={t.position || 'center'} />
        </div>
      ))}
    </div>
  </div>
);

// ---- 7) Raccolta / collage 16:9 (5 photos in row) ──────
// Hero a sx grande + 4 thumb a dx griglia 2x2
const TplCollage5Wide = ({ hero, thumbs, position = 'center 25%' }) => (
  <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 4, padding: 4, overflow: 'hidden' }}>
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <PhotoCover src={hero} position={position} />
      <PlacedLogo pos="bc" color="#fff" size="sm" padding={28} />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 4 }}>
      {thumbs.map((t, i) => (
        <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
          <PhotoCover src={t.src} position={t.position || 'center'} />
        </div>
      ))}
    </div>
  </div>
);

// ---- 7b) Raccolta / collage 9:16 stories (5 photos) ────
// Hero in alto (3/5) + 2x2 thumb in basso. Logo bottom-center sull'hero.
const TplCollage5Story = ({ hero, thumbs, position = 'center 22%', safe = null }) => (
  <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'grid', gridTemplateRows: '2.4fr 1fr', gap: 4, padding: 4, overflow: 'hidden' }}>
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <PhotoCover src={hero} position={position} />
      <PlacedLogo pos="bc" color="#fff" size="sm" padding={32} safe={safe} />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 4 }}>
      {thumbs.slice(0, 4).map((t, i) => (
        <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
          <PhotoCover src={t.src} position={t.position || 'center'} />
        </div>
      ))}
    </div>
  </div>
);

// ---- 7c) Raccolta / collage 9:16 stories — vertical strips (3 photos) ──
// 3 strisce verticali a piena altezza, logo center
const TplCollage3Story = ({ photos, logoColor = 'white', safe = null }) => (
  <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: 4, padding: 4, overflow: 'hidden' }}>
    {photos.slice(0, 3).map((p, i) => (
      <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
        <PhotoCover src={p.src} position={p.position || 'center 25%'} />
        {i === 1 && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)' }}/>
        )}
        {i === 1 && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
            <CLogo size="lg" color={logoColor} />
          </div>
        )}
      </div>
    ))}
  </div>
);

// ---- 8) Magazine spread: 3 photos vertically split ─────
const TplTriptych = ({ photos, logoPos = 'bc', safe = null }) => (
  <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3, padding: 3, overflow: 'hidden' }}>
    {photos.map((p, i) => (
      <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
        <PhotoCover src={p.src} position={p.position || 'center'} />
        {i === 1 && <PlacedLogo pos={logoPos} color="#fff" size="sm" padding={24} safe={safe} />}
      </div>
    ))}
  </div>
);

// ---- 9) Cumini archive style — bold typo over photo ────
const TplArchive = ({ photo, position = 'center 25%', safe = null }) => {
  const isStory = safe === 'story';
  const topY = isStory ? '18%' : 32;
  const botY = isStory ? '70%' : 32;
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <PhotoCover src={photo} position={position} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.55) 100%)' }}/>
      <div style={{ position: 'absolute', top: topY, left: 32, right: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <CLogo size="sm" color="white" />
        <Eyebrow color="#fff" size={9} track="0.36em">Archive</Eyebrow>
      </div>
      <div style={{ position: 'absolute', ...(isStory ? { top: botY } : { bottom: botY }), left: 32, right: 32, display: 'flex', justifyContent: 'space-between', alignItems: isStory ? 'center' : 'flex-end' }}>
        <div style={{ fontFamily: CFONT, fontSize: 11, color: '#fff', letterSpacing: '0.32em', textTransform: 'uppercase', opacity: 0.85 }}>SS · 26</div>
        <Hairline color="rgba(255,255,255,0.5)" w={42} />
      </div>
    </div>
  );
};

// ---- 10) Eme-style editorial — code, claim, category list, logo bottom-left
// Sistema: tutto allineato a sinistra, sans-serif bianco, foto full-bleed.
// - code: numero collezione tipo "001 — SS26"
// - claim: 1-2 righe, regolari (no italic forzato — tieni proxima)
// - cats: lista capslock, allineata a sx, leading stretto
// - logo: LOGO_LG bianco in basso a sinistra
// Padding identico (40) per tutti gli elementi della colonna.
const TplEmeStyle = ({ photo, position = 'center 35%', code = '001 — SS26', claim = ['I miss who I was', 'Collection'], cats = ['BAGS','SHOES','BELTS','SUNGLASSES','SCARVES','JEWELLERY','OUTERWEAR','READY TO WEAR'], overlay = 'none', logoColor = 'white' }) => {
  const ovBg = overlay === 'soft' ? 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.04) 35%, rgba(0,0,0,0.04) 65%, rgba(0,0,0,0.22) 100%)'
            : overlay === 'darker' ? 'linear-gradient(180deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.10) 35%, rgba(0,0,0,0.10) 65%, rgba(0,0,0,0.34) 100%)'
            : 'transparent';
  const ink = '#ffffff';
  const PAD = 40;
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', fontFamily: CFONT }}>
      <PhotoCover src={photo} position={position} />
      {ovBg !== 'transparent' && <div style={{ position: 'absolute', inset: 0, background: ovBg }}/>}
      {/* Code top-left */}
      <div style={{ position: 'absolute', top: PAD, left: PAD, color: ink, fontSize: 13, letterSpacing: '0.06em', fontWeight: 400 }}>
        {code}
      </div>
      {/* Claim middle-upper */}
      <div style={{ position: 'absolute', top: '38%', left: PAD, color: ink, fontSize: 22, lineHeight: 1.18, fontWeight: 400, letterSpacing: '-0.005em', maxWidth: '60%' }}>
        {claim.map((l, i) => (<div key={i}>{l}</div>))}
      </div>
      {/* Categories list */}
      <div style={{ position: 'absolute', top: '52%', left: PAD, color: ink, fontSize: 14, lineHeight: 1.45, fontWeight: 400, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        {cats.map((c, i) => (<div key={i}>{c}</div>))}
      </div>
      {/* Logo bottom-left */}
      <div style={{ position: 'absolute', bottom: PAD, left: PAD }}>
        <CLogo size="lg" color={logoColor} />
      </div>
    </div>
  );
};

Object.assign(window, {
  CLogo, CFONT, LOGO_SM, LOGO_LG, Photo, PhotoCover, Wordmark, DPAStrip, CornerLogo, CuminiTextLogo, PlacedLogo, Eyebrow, Hairline,
  TplBrandedLogo, TplEditorial, TplBottomTitle, TplDPA, TplDPACutout, TplLeadGen, TplCollage5, TplCollage5Wide, TplCollage5Story, TplCollage3Story, TplTriptych, TplArchive, TplEmeStyle,
  overlayDarkSoft, overlayLightSoft, overlayCenterDark, overlayTopDark, overlayEvenSoft,
});
