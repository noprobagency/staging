// CUMINI — Mobile PDP · 3 ottimizzazioni CRO (A · B · C)
// Tutto ancorato al design system v1.1 — Proxima Nova, palette neutra, 4-base spacing

const FONT_M = '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif';

// ─── PRODUCT DATA (condiviso tra le 3 varianti) ───────────
const PRODUCT = {
  brand: 'CHLOÉ',
  brandHouse: 'Paris · dal 1952',
  name: 'Mini zaino Faye in pelle, rosa antico',
  price: '1.750 €',
  retail: '1.890 €',
  klarna: '3 rate da 583,33 € · 0 interessi',
  sku: '24SS-CL-FB-031',
  hero: 'assets/products/hero-1.jpg',
  alts: [
    'assets/products/hero-1.jpg',
    'assets/products/hero-2.jpg',
    'assets/products/detail-1.jpg',
    'assets/products/detail-2.jpg',
    'assets/products/variants.jpg',
  ],
};

// ─── PHONE SHELL ──────────────────────────────────────────
const PhoneShell = ({ children, height = 3200 }) => (
  <div style={{
    width: 390, height,
    background: '#fff', overflow: 'hidden',
    border: '1px solid #e8e8e8',
    fontFamily: FONT_M, color: '#1a1a1a',
    boxShadow: '0 1px 0 rgba(0,0,0,0.02)',
    position: 'relative',
  }}>
    {/* iOS status bar */}
    <div style={{
      height: 44, padding: '0 22px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontSize: 14, letterSpacing: '0.01em', color: '#1a1a1a',
      background: '#fff',
    }}>
      <span style={{ fontWeight: 500 }}>9:41</span>
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        <svg width="17" height="11" viewBox="0 0 18 11" fill="none"><rect x="0" y="6" width="3" height="5" rx="0.5" fill="#1a1a1a"/><rect x="5" y="4" width="3" height="7" rx="0.5" fill="#1a1a1a"/><rect x="10" y="2" width="3" height="9" rx="0.5" fill="#1a1a1a"/><rect x="15" y="0" width="3" height="11" rx="0.5" fill="#1a1a1a"/></svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><path d="M8 2.5C10.2 2.5 12.2 3.3 13.7 4.7L15.3 3.1C13.3 1.3 10.8 0.2 8 0.2C5.2 0.2 2.7 1.3 0.7 3.1L2.3 4.7C3.8 3.3 5.8 2.5 8 2.5Z" fill="#1a1a1a"/><path d="M8 5.7C9.5 5.7 10.9 6.3 11.9 7.3L13.5 5.7C12.1 4.3 10.1 3.4 8 3.4C5.9 3.4 4 4.3 2.5 5.7L4.1 7.3C5.1 6.3 6.5 5.7 8 5.7Z" fill="#1a1a1a"/><path d="M8 8.9C8.7 8.9 9.3 9.1 9.8 9.6L8 11L6.2 9.6C6.7 9.1 7.3 8.9 8 8.9Z" fill="#1a1a1a"/></svg>
        <svg width="27" height="13" viewBox="0 0 28 13" fill="none"><rect x="0.5" y="0.5" width="23" height="12" rx="3.2" stroke="#1a1a1a" fill="none"/><rect x="2" y="2" width="18" height="9" rx="1.8" fill="#1a1a1a"/><rect x="24.5" y="4" width="2" height="5" rx="0.8" fill="#1a1a1a"/></svg>
      </div>
    </div>
    {children}
  </div>
);

// ─── CUMINI LOGO inline (small) ──────────────────────────
const LogoMini = ({ w = 78, color = '#1a1a1a' }) => (
  <svg width={w} viewBox="0 0 204 37" fill="none" style={{ display: 'block' }}>
    <path d="M11.66 1.09C8.65 2.32 7.13 3.37 4.87 5.86c-8.35 9.11-5.61 23.55 5.57 29.46 2.22 1.18 2.65 1.27 7.57 1.27 4.7 0 5.44-.13 7.61-1.14 1.31-.61 3.05-1.66 3.83-2.36l1.44-1.23-2.48-2.54-2.52-2.58-1.13 1.09c-3.61 3.5-10.14 3.15-13.79-.7-7-7.44-2.44-20.48 7.18-20.52 2.48 0 5 .88 6.4 2.19.91.88.91.84 3.43-1.7l2.52-2.58-1.83-1.36C25.58.92 22.62.04 18.1.04c-3.18 0-4.52.22-6.44 1.05Z" fill={color}/>
    <path d="M40.59.7c-.18.4-.18 6.04-.09 12.6.17 10.94.31 12.13 1.18 14.36 1.26 3.37 3.83 6.17 7.1 7.79 2.34 1.18 3.08 1.36 6.38 1.36 5.23 0 7.45-.88 10.71-4.16 4.18-4.2 4.31-4.64 4.48-19.83L70.48 0l-3.74.13-3.74.13-.09 12.04c-.09 11.55-.13 12.12-1.09 13.87-3.13 6-10.88 5.3-13.05-1.14-.35-1.01-.52-5.38-.52-13.22V.04h-3.7c-2.91 0-3.78.13-3.96.66Z" fill={color}/>
    <path d="M82.62 18.42v18.38h7.83l.09-11.55.13-11.56 5 7.84c2.74 4.29 5.14 7.83 5.31 7.83.13 0 2.48-3.54 5.22-7.83l4.92-7.84.13 11.55.09 11.6 3.83-.13 3.78-.13V18.42.26L114.26.13 110.52 0l-5.09 8.1C102.65 12.56 100.21 16.28 100.04 16.41c-.18 0-2.66-3.46-5.48-8.01L89.39.04h-3.88L82.62.04v18.38Z" fill={color}/>
    <path d="M132.65 18.42v18.38h7.4V.04h-7.4v18.38Z" fill={color}/>
    <path d="M153.97 18.42v18.38h7.4l.09-11.16.13-11.16 6.74 11.16 6.74 11.16h7.69V.04h-7.4v11.25c0 6.17-.13 11.07-.31 10.9-.21-.18-3.3-5.17-6.91-11.12L161.5.26 157.75.13l-3.78-.13v18.42Z" fill={color}/>
    <path d="M196.6 18.42v18.38H204V.04h-7.4v18.38Z" fill={color}/>
  </svg>
);

// ─── ATOMI CONDIVISI ──────────────────────────────────────
const SectionDivider = () => <div style={{ height: 1, background: '#ececec', margin: '0 20px' }}/>;

const Star = ({ size = 11, color = '#1a1a1a' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
);

const Stars = ({ score = 4.9, size = 11 }) => (
  <div style={{ display: 'flex', gap: 2 }}>
    {[0,1,2,3,4].map(i => <Star key={i} size={size} color={i < Math.round(score) ? '#1a1a1a' : '#d4d4d4'} />)}
  </div>
);

const Icon = ({ name, size = 14, stroke = '#1a1a1a', sw = 1.4 }) => {
  const paths = {
    truck: <><rect x="1" y="6" width="13" height="11" /><path d="M14 10h5l3 3v4h-8"/><circle cx="6" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></>,
    'return': <><path d="M3 12a9 9 0 1 1 3 6.7"/><path d="M3 18v-6h6"/></>,
    shield: <><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/><path d="m9 12 2 2 4-4"/></>,
    check: <path d="m4 12 5 5L20 6"/>,
    heart: <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z"/>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></>,
    bag: <><path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 5-6 8-6s7 2 8 6"/></>,
    menu: <><path d="M3 7h18M3 12h18M3 17h18"/></>,
    back: <><path d="M15 6l-6 6 6 6"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <><path d="M5 12h14"/></>,
    chev: <><path d="m6 9 6 6 6-6"/></>,
    chevR: <><path d="m9 6 6 6-6 6"/></>,
    zoom: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3M8 11h6M11 8v6"/></>,
    phone: <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z"/>,
    mail: <><rect x="3" y="6" width="18" height="13"/><path d="m3 7 9 7 9-7"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    spark: <><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M6 18l4-4M14 10l4-4"/></>,
    pin: <><path d="M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></>,
    eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
    rotate: <><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 5v6h-6"/></>,
    play: <path d="M8 5v14l11-7L8 5z"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      {paths[name]}
    </svg>
  );
};

const Eyebrow = ({ children, color = '#a8a8a8', mb = 12, size = 9, ls = '0.32em' }) => (
  <div style={{ fontSize: size, letterSpacing: ls, textTransform: 'uppercase', color, marginBottom: mb }}>{children}</div>
);

// ─── HEADER + ANNOUNCEMENT BAR ────────────────────────────
const TopBar = ({ label = 'SPEDIZIONE GRATUITA SOPRA 200€ · RESI ESTESI 30 GIORNI' }) => (
  <div style={{ background: '#1a1a1a', color: '#fff', height: 28, fontSize: 9, letterSpacing: '0.22em', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px' }}>
    {label}
  </div>
);

const Header = () => (
  <div style={{ borderBottom: '1px solid #ececec', padding: '14px 18px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
    <Icon name="menu" size={20} />
    <LogoMini w={74} />
    <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Icon name="search" size={17} />
      <Icon name="user" size={18} />
      <div style={{ position: 'relative' }}>
        <Icon name="bag" size={18} />
        <div style={{ position: 'absolute', top: -4, right: -5, width: 13, height: 13, borderRadius: '50%', background: '#1a1a1a', color: '#fff', fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: 0 }}>2</div>
      </div>
    </div>
  </div>
);

const Breadcrumb = ({ items }) => (
  <div style={{ padding: '11px 20px', fontSize: 10, color: '#a8a8a8', letterSpacing: '0.06em', display: 'flex', gap: 6, alignItems: 'center' }}>
    {items.map((it, i) => (
      <React.Fragment key={i}>
        <span style={{ color: i === items.length - 1 ? '#525252' : '#a8a8a8' }}>{it}</span>
        {i < items.length - 1 && <span style={{ color: '#d4d4d4' }}>/</span>}
      </React.Fragment>
    ))}
  </div>
);

// ─── ACCORDION ROW ────────────────────────────────────────
const AccordionRow = ({ title, sub, open, children }) => (
  <div style={{ padding: '18px 20px', borderTop: '1px solid #ececec' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: 12, letterSpacing: '0.02em', color: '#1a1a1a' }}>{title}</div>
        {sub && <div style={{ fontSize: 10, color: '#a8a8a8', marginTop: 3, letterSpacing: '0.04em' }}>{sub}</div>}
      </div>
      <Icon name={open ? 'minus' : 'plus'} size={14} stroke="#525252" />
    </div>
    {open && children && <div style={{ marginTop: 14 }}>{children}</div>}
  </div>
);

// ─── RELATED PRODUCT CARD (mobile, slim) ──────────────────
const MiniCard = ({ img, brand, name, price, badge, oldPrice, w = 132 }) => (
  <div style={{ width: w, flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden', background: '#f4f4f4' }}>
      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
      {badge && <div style={{ position: 'absolute', top: 8, left: 0, height: 16, padding: '0 8px', background: 'linear-gradient(90deg, #000 0%, #e9ae88 100%)', color: '#fff', fontSize: 7, letterSpacing: '0.24em', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>{badge}</div>}
    </div>
    <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>{brand}</div>
    <div style={{ fontSize: 10, color: '#767676', lineHeight: 1.45, marginTop: -3 }}>{name}</div>
    <div style={{ display: 'flex', gap: 6, alignItems: 'baseline', marginTop: -2 }}>
      {oldPrice && <span style={{ fontSize: 9, color: '#a8a8a8', textDecoration: 'line-through' }}>{oldPrice}</span>}
      <span style={{ fontSize: 11, color: oldPrice ? '#7e1e1e' : '#1a1a1a' }}>{price}</span>
    </div>
  </div>
);

// ─── REVIEWS SUMMARY ─────────────────────────────────────
const ReviewBar = ({ stars, pct }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '34px 1fr 30px', alignItems: 'center', gap: 8, fontSize: 9, color: '#767676' }}>
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>{stars}<Star size={9}/></div>
    <div style={{ height: 4, background: '#ececec' }}><div style={{ width: pct + '%', height: '100%', background: '#1a1a1a' }}/></div>
    <div style={{ textAlign: 'right', letterSpacing: '0.04em' }}>{pct}%</div>
  </div>
);

// ─── FOOTER COMMON ───────────────────────────────────────
const FooterCommon = () => (
  <>
    <div style={{ padding: '36px 20px 28px', borderTop: '1px solid #ececec' }}>
      <Eyebrow mb={8}>Resi facili</Eyebrow>
      <div style={{ fontSize: 12, color: '#525252', lineHeight: 1.6 }}>Hai 30 giorni di tempo per cambiare idea. Reso gratuito o cambio in boutique.</div>
    </div>
    <div style={{ padding: '0 20px 28px' }}>
      <Eyebrow mb={8}>Pagamenti sicuri</Eyebrow>
      <div style={{ fontSize: 12, color: '#525252', lineHeight: 1.6 }}>Carte, PayPal, Klarna · transazioni protette SSL · circuiti Visa, MasterCard, Amex.</div>
    </div>
    <div style={{ padding: '0 20px 36px' }}>
      <Eyebrow mb={8}>Lusso garantito</Eyebrow>
      <div style={{ fontSize: 12, color: '#525252', lineHeight: 1.6 }}>Ogni pezzo è autenticato in boutique e spedito con sigillo Cumini.</div>
    </div>
    <div style={{ borderTop: '1px solid #ececec', padding: '32px 20px 16px', textAlign: 'center' }}>
      <LogoMini w={92}/>
      <div style={{ marginTop: 14, display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
        <Star size={10}/><span style={{ fontSize: 10, color: '#525252' }}>4.9 Trustpilot</span>
      </div>
    </div>
    <div style={{ padding: '0 20px 20px', fontSize: 10, color: '#a8a8a8', letterSpacing: '0.06em', lineHeight: 1.8, textAlign: 'center' }}>© 2026 · Cumini srl · P.IVA 02441190307</div>
  </>
);

// =====================================================================
// ─── OPZIONE A · CONSERVATIVE ────────────────────────────────────────
// =====================================================================
const PDP_A = () => (
  <PhoneShell height={3450}>
    <TopBar/>
    <Header/>
    <Breadcrumb items={['Donna', 'Borse', 'Mini Faye']}/>

    {/* IMAGE */}
    <div style={{ position: 'relative', width: 390, aspectRatio: '3/4', background: '#ece6dd' }}>
      <img src={PRODUCT.hero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
      <div style={{ position: 'absolute', top: 14, left: 0, height: 20, padding: '0 12px', background: 'linear-gradient(90deg, #000 0%, #e9ae88 100%)', color: '#fff', fontSize: 8, letterSpacing: '0.26em', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>Nuovi Arrivi</div>
      <button style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, background: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="heart" size={16}/>
      </button>
      <div style={{ position: 'absolute', bottom: 12, right: 12, padding: '4px 9px', background: 'rgba(255,255,255,0.95)', fontSize: 9, letterSpacing: '0.18em', color: '#525252' }}>1 / 5</div>
    </div>
    {/* dots */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: 6, padding: '14px 0 6px' }}>
      {[0,1,2,3,4].map(i => <div key={i} style={{ width: 5, height: 5, borderRadius: 999, background: i === 0 ? '#1a1a1a' : '#d4d4d4' }}/>)}
    </div>

    {/* PRODUCT INFO BLOCK */}
    <div style={{ padding: '18px 20px 8px' }}>
      {/* Brand + reviews on same row — recensioni vicino a brand per scansione veloce (information scent) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.26em' }}>{PRODUCT.brand}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Stars size={10}/>
          <span style={{ fontSize: 10, color: '#525252', letterSpacing: '0.02em' }}>4.9 · 122</span>
        </div>
      </div>
      <h1 style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.005em', lineHeight: 1.3, margin: 0 }}>{PRODUCT.name}</h1>
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <span style={{ fontSize: 20, letterSpacing: '0.01em' }}>{PRODUCT.price}</span>
        <span style={{ fontSize: 11, color: '#a8a8a8', letterSpacing: '0.02em' }}>IVA inclusa</span>
      </div>
      <div style={{ fontSize: 11, color: '#525252', marginTop: 6, letterSpacing: '0.02em' }}>o 3 rate da 583,33 € con <span style={{ borderBottom: '1px solid #525252' }}>Klarna</span> · 0 interessi</div>
    </div>

    {/* STOCK / SCARCITY */}
    <div style={{ padding: '14px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ width: 7, height: 7, borderRadius: 999, background: '#b5651d', display: 'inline-block' }}/>
      <span style={{ fontSize: 11, color: '#1a1a1a', letterSpacing: '0.02em' }}>Disponibilità limitata · ultimi <strong style={{ fontWeight: 400, borderBottom: '1px solid #1a1a1a' }}>2 pezzi</strong></span>
    </div>

    {/* CTA */}
    <div style={{ padding: '22px 20px 0' }}>
      <button style={{ width: '100%', height: 54, background: '#1a1a1a', color: '#fff', border: 'none', fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <span>Aggiungi al carrello</span>
        <span style={{ width: 1, height: 18, background: '#525252' }}/>
        <span>1.750 €</span>
      </button>
      <button style={{ width: '100%', height: 44, marginTop: 10, background: '#fff', color: '#525252', border: '1px solid #d4d4d4', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <Icon name="heart" size={13} stroke="#525252"/>
        Salva nella wishlist
      </button>
    </div>

    {/* TRUST 3-COL (Rule of 3) */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid #ececec', borderBottom: '1px solid #ececec', margin: '24px 0 0' }}>
      {[
        ['shield', 'Autenticità', 'verificata'],
        ['return', 'Reso 30 gg', 'gratuito'],
        ['truck', 'Spedizione', 'in 24/48h'],
      ].map(([ic, t, s]) => (
        <div key={t} style={{ padding: '16px 8px', textAlign: 'center', borderLeft: t !== 'Autenticità' ? '1px solid #ececec' : 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}><Icon name={ic} size={18}/></div>
          <div style={{ fontSize: 10, letterSpacing: '0.02em' }}>{t}</div>
          <div style={{ fontSize: 9, color: '#a8a8a8', marginTop: 2, letterSpacing: '0.04em' }}>{s}</div>
        </div>
      ))}
    </div>

    {/* DELIVERY PROMISE */}
    <div style={{ padding: '18px 20px', background: '#fafafa', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <Icon name="truck" size={18} stroke="#1a1a1a"/>
      <div>
        <div style={{ fontSize: 12, letterSpacing: '0.02em' }}>Consegna prevista <strong style={{ fontWeight: 400, borderBottom: '1px solid #1a1a1a' }}>giovedì 22 maggio</strong></div>
        <div style={{ fontSize: 10, color: '#767676', marginTop: 4, letterSpacing: '0.04em' }}>Ordina entro le 14:00 di oggi per spedizione express.</div>
      </div>
    </div>

    {/* ACCORDIONS */}
    <AccordionRow title="Dettagli prodotto" sub="Materiali · misure · origine" open>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          ['Materiale', 'Pelle nappa 100% · fodera in tela di cotone'],
          ['Misure', 'H 22 × L 19 × P 9 cm'],
          ['Made in', 'Italy · Firenze'],
          ['Codice', PRODUCT.sku],
        ].map(([k, v]) => (
          <li key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, gap: 18, letterSpacing: '0.01em' }}>
            <span style={{ color: '#a8a8a8' }}>{k}</span>
            <span style={{ color: '#1a1a1a', textAlign: 'right' }}>{v}</span>
          </li>
        ))}
      </ul>
    </AccordionRow>
    <AccordionRow title="Spedizione & resi" sub="Express 24/48h · reso esteso 30 gg"/>
    <AccordionRow title="Concierge & autenticità" sub="Assistenza 1 a 1 · pezzo certificato"/>

    {/* RELATED */}
    <div style={{ padding: '36px 0 0' }}>
      <div style={{ padding: '0 20px 18px' }}>
        <Eyebrow mb={6}>Selezione editoriale</Eyebrow>
        <div style={{ fontSize: 16, letterSpacing: '-0.005em' }}>Pensiamo possa interessarti</div>
      </div>
      <div style={{ display: 'flex', gap: 14, padding: '0 20px 4px', overflowX: 'auto' }}>
        <MiniCard img="assets/products/related-1.jpg" brand="FENDI" name="Peekaboo small, blu mediterraneo" price="2.490 €"/>
        <MiniCard img="assets/products/related-2.jpg" brand="POLO RALPH LAUREN" name="RL50 mini in pelle, multicolor" price="990 €"/>
        <MiniCard img="assets/products/related-3.jpg" brand="MIU MIU" name="Pochette serata in raso" price="780 €" badge="Nuovi Arrivi"/>
      </div>
    </div>

    {/* REVIEWS */}
    <div style={{ padding: '36px 20px 24px', borderTop: '1px solid #ececec', marginTop: 36 }}>
      <Eyebrow mb={6}>Le opinioni dei clienti</Eyebrow>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
        <span style={{ fontSize: 28, letterSpacing: '-0.005em' }}>4.9</span>
        <Stars size={13}/>
        <span style={{ fontSize: 11, color: '#767676' }}>122 verificate</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 14 }}>
        <ReviewBar stars="5" pct={92}/>
        <ReviewBar stars="4" pct={6}/>
        <ReviewBar stars="3" pct={2}/>
      </div>
    </div>

    <FooterCommon/>
  </PhoneShell>
);


// =====================================================================
// ─── OPZIONE B · INTERMEDIATE CRO ────────────────────────────────────
// =====================================================================
const PDP_B = () => (
  <PhoneShell height={3850}>
    <TopBar label="ORDINA ENTRO 14h 32m · CONSEGNA GIOVEDÌ 22 MAGGIO"/>
    <Header/>
    <Breadcrumb items={['Donna', 'Borse', 'Mini Faye']}/>

    {/* IMAGE — full bleed con badge multipli */}
    <div style={{ position: 'relative', width: 390, aspectRatio: '4/5', background: '#ece6dd', overflow: 'hidden' }}>
      <img src={PRODUCT.hero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
      <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ height: 20, padding: '0 10px', background: 'linear-gradient(90deg, #000 0%, #e9ae88 100%)', color: '#fff', fontSize: 8, letterSpacing: '0.26em', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>Nuovi Arrivi</div>
        <div style={{ height: 20, padding: '0 10px', background: '#fff', color: '#1a1a1a', fontSize: 8, letterSpacing: '0.26em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}>
          <Star size={8}/> Cumini Choice
        </div>
      </div>
      <button style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, background: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="heart" size={16}/>
      </button>
      <button style={{ position: 'absolute', bottom: 14, right: 14, width: 36, height: 36, background: 'rgba(255,255,255,0.95)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="zoom" size={14}/>
      </button>
      <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', gap: 5 }}>
        {[0,1,2,3,4].map(i => <div key={i} style={{ width: i===0?16:5, height: 3, background: i===0?'#1a1a1a':'rgba(0,0,0,0.25)' }}/>)}
      </div>
    </div>

    {/* THUMBNAIL STRIP */}
    <div style={{ display: 'flex', gap: 6, padding: '10px 20px 4px', overflowX: 'auto' }}>
      {PRODUCT.alts.map((src, i) => (
        <div key={i} style={{ width: 50, height: 64, flex: '0 0 auto', border: i === 0 ? '1px solid #1a1a1a' : '1px solid #ececec', overflow: 'hidden' }}>
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
        </div>
      ))}
    </div>

    {/* SOCIAL PROOF live */}
    <div style={{ padding: '14px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10, color: '#525252', letterSpacing: '0.02em' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <Icon name="eye" size={12} stroke="#525252"/>
        12 persone lo stanno guardando ora
      </span>
      <span style={{ color: '#7e1e1e' }}>● 4 venduti oggi</span>
    </div>

    {/* PRODUCT INFO */}
    <div style={{ padding: '14px 20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, letterSpacing: '0.26em' }}>
        <span>{PRODUCT.brand}</span>
        <span style={{ color: '#a8a8a8', letterSpacing: '0.06em', textTransform: 'none' }}>· {PRODUCT.brandHouse}</span>
      </div>
      <h1 style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.005em', lineHeight: 1.3, margin: '8px 0 0' }}>{PRODUCT.name}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
        <Stars size={11}/>
        <span style={{ fontSize: 10, color: '#1a1a1a', letterSpacing: '0.02em' }}>4.9</span>
        <span style={{ fontSize: 10, color: '#767676', borderBottom: '1px solid #a8a8a8', cursor: 'pointer' }}>122 recensioni verificate</span>
      </div>

      {/* PRICE w/ ANCHOR */}
      <div style={{ marginTop: 18, display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 22, color: '#1a1a1a', letterSpacing: '0.01em' }}>{PRODUCT.price}</span>
        <span style={{ fontSize: 12, color: '#a8a8a8', textDecoration: 'line-through' }}>Retail {PRODUCT.retail}</span>
        <span style={{ fontSize: 10, padding: '3px 8px', background: '#1a1a1a', color: '#fff', letterSpacing: '0.18em' }}>−140 €</span>
      </div>
      <div style={{ fontSize: 11, color: '#525252', marginTop: 6 }}>3 rate da 583,33 € con <span style={{ borderBottom: '1px solid #525252' }}>Klarna</span> · 0 interessi</div>
    </div>

    {/* COLOR VARIANTS */}
    <div style={{ padding: '22px 20px 0' }}>
      <div style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#a8a8a8', marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
        <span>Colore · Rosa antico</span>
        <span style={{ color: '#525252', letterSpacing: '0.06em', textTransform: 'none', fontSize: 10 }}>4 colori</span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {[['#c9a59a', 'Rosa antico', true], ['#1a1a1a', 'Nero', false], ['#3a5d7a', 'Blu mediterraneo', false], ['#7a6e62', 'Cuoio', false]].map(([c, n, sel]) => (
          <button key={n} style={{ width: 36, height: 36, padding: 3, border: sel ? '1px solid #1a1a1a' : '1px solid #ececec', background: 'transparent' }}>
            <div style={{ width: '100%', height: '100%', background: c }}/>
          </button>
        ))}
      </div>
    </div>

    {/* SIZE / DIMENSION CHOICE */}
    <div style={{ padding: '22px 20px 0' }}>
      <div style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#a8a8a8', marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
        <span>Formato</span>
        <span style={{ color: '#525252', letterSpacing: '0.06em', textTransform: 'none', fontSize: 10, borderBottom: '1px solid #a8a8a8' }}>Guida alle misure</span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {[
          ['Mini', '22 cm', true, 2],
          ['Small', '26 cm', false, 5],
          ['Medium', '30 cm', false, 0],
        ].map(([n, dim, sel, stock]) => (
          <button key={n} style={{ flex: 1, height: 56, border: sel ? '1px solid #1a1a1a' : '1px solid #d4d4d4', background: sel ? '#fafafa' : '#fff', fontFamily: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3, opacity: stock === 0 ? 0.45 : 1, position: 'relative' }}>
            <span style={{ fontSize: 12, letterSpacing: '0.02em' }}>{n}</span>
            <span style={{ fontSize: 9, color: '#a8a8a8', letterSpacing: '0.04em' }}>{stock === 0 ? 'Esaurito' : dim}</span>
            {stock === 0 && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, transparent 48%, #d4d4d4 49%, #d4d4d4 51%, transparent 52%)' }}/>}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 10, fontSize: 10, color: '#7e1e1e', letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: '#7e1e1e' }}/>
        Ne restano solo <strong style={{ fontWeight: 400, borderBottom: '1px solid #7e1e1e' }}>2</strong> nel formato Mini
      </div>
    </div>

    {/* DELIVERY (urgenza + countdown) */}
    <div style={{ margin: '22px 20px 0', border: '1px solid #ececec', padding: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="truck" size={16}/>
          <div>
            <div style={{ fontSize: 11 }}>Consegna <strong style={{ fontWeight: 400, borderBottom: '1px solid #1a1a1a' }}>giovedì 22 maggio</strong></div>
            <div style={{ fontSize: 10, color: '#a8a8a8', marginTop: 3 }}>Ordina entro 14h 32m con spedizione express.</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {[['14', 'h'], ['32', 'm']].map(([n, l]) => (
            <div key={l} style={{ minWidth: 30, padding: '6px 6px', textAlign: 'center', background: '#1a1a1a', color: '#fff' }}>
              <div style={{ fontSize: 13, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 7, letterSpacing: '0.18em', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA */}
    <div style={{ padding: '20px 20px 0' }}>
      <button style={{ width: '100%', height: 54, background: '#1a1a1a', color: '#fff', border: 'none', fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <Icon name="bag" size={15} stroke="#fff"/> Aggiungi · 1.750 €
      </button>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
        <button style={{ height: 42, background: '#fff', border: '1px solid #d4d4d4', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, color: '#525252' }}>
          <Icon name="pin" size={13} stroke="#525252"/> Prova in boutique
        </button>
        <button style={{ height: 42, background: '#fff', border: '1px solid #d4d4d4', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, color: '#525252' }}>
          <Icon name="heart" size={13} stroke="#525252"/> Wishlist
        </button>
      </div>
    </div>

    {/* HIGHLIGHTS — 3 punti chiave estratti dalla descrizione */}
    <div style={{ padding: '28px 20px 0' }}>
      <Eyebrow mb={14}>3 motivi per sceglierlo</Eyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          ['shield', 'Pelle nappa Made in Firenze', 'Lavorazione 100% italiana, tracciabile dal pellame al cucito.'],
          ['spark', 'Pezzo della capsule SS26', 'Tiratura limitata · solo 8 unità per boutique Cumini.'],
          ['return', 'Reso esteso 30 giorni', 'Cambio in boutique o reso gratuito a domicilio.'],
        ].map(([ic, t, s]) => (
          <div key={t} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 14 }}>
            <Icon name={ic} size={16}/>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '0.01em' }}>{t}</div>
              <div style={{ fontSize: 11, color: '#767676', marginTop: 4, lineHeight: 1.5 }}>{s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* SHIPPING / RETURN tabella migliorata */}
    <div style={{ margin: '28px 0 0', padding: '24px 0 0', borderTop: '1px solid #ececec' }}>
      <div style={{ padding: '0 20px 14px' }}>
        <Eyebrow mb={6}>Spedizione e resi</Eyebrow>
      </div>
      {[
        ['truck', 'Spedizione express', 'Gratuita sopra 200€', '24/48h'],
        ['return', 'Reso esteso', '30 giorni · gratuito', 'in boutique o a casa'],
        ['pin', 'Ritiro in boutique', 'Milano · Verona · Trieste', 'Pronto in 24h'],
        ['shield', 'Pagamento sicuro', 'SSL · Klarna · Amex', 'In 3 rate'],
      ].map(([ic, t, s, r]) => (
        <div key={t} style={{ padding: '12px 20px', display: 'grid', gridTemplateColumns: '20px 1fr auto', gap: 12, alignItems: 'center', borderTop: '1px solid #f4f4f4' }}>
          <Icon name={ic} size={14} stroke="#525252"/>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.01em' }}>{t}</div>
            <div style={{ fontSize: 10, color: '#a8a8a8', marginTop: 3 }}>{s}</div>
          </div>
          <span style={{ fontSize: 10, color: '#525252', letterSpacing: '0.02em', textAlign: 'right' }}>{r}</span>
        </div>
      ))}
    </div>

    {/* ACCORDION DESCRIZIONE */}
    <div style={{ marginTop: 18 }}>
      <AccordionRow title="Materiali & origine" sub="Pelle nappa · fodera in cotone · Firenze"/>
      <AccordionRow title="Dimensioni & vestibilità" sub="H 22 × L 19 × P 9 cm · capienza piccola"/>
      <AccordionRow title="Cura del prodotto" sub="Conservazione · pulizia"/>
    </div>

    {/* RELATED — Completa il look */}
    <div style={{ padding: '36px 0 0' }}>
      <div style={{ padding: '0 20px 18px' }}>
        <Eyebrow mb={6}>Lo stylist consiglia</Eyebrow>
        <div style={{ fontSize: 16, letterSpacing: '-0.005em' }}>Completa il look</div>
        <div style={{ fontSize: 11, color: '#a8a8a8', marginTop: 6, letterSpacing: '0.02em' }}>3 pezzi selezionati da Marina, personal stylist Cumini</div>
      </div>
      <div style={{ display: 'flex', gap: 14, padding: '0 20px 4px', overflowX: 'auto' }}>
        <MiniCard img="assets/products/related-1.jpg" brand="FENDI" name="Peekaboo small" price="2.490 €"/>
        <MiniCard img="assets/products/related-2.jpg" brand="POLO RL" name="RL50 mini" price="990 €"/>
        <MiniCard img="assets/products/related-3.jpg" brand="MIU MIU" name="Pochette raso" price="780 €"/>
      </div>
    </div>

    {/* REVIEWS w/ photos */}
    <div style={{ padding: '36px 20px 24px', borderTop: '1px solid #ececec', marginTop: 36 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
        <Eyebrow mb={0}>Le opinioni dei clienti</Eyebrow>
        <span style={{ fontSize: 10, color: '#525252', borderBottom: '1px solid #a8a8a8' }}>Tutte</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
        <span style={{ fontSize: 32, letterSpacing: '-0.005em' }}>4.9</span>
        <div>
          <Stars size={12}/>
          <div style={{ fontSize: 10, color: '#767676', marginTop: 4 }}>122 verificate · 98% consiglierebbe</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 14 }}>
        <ReviewBar stars="5" pct={92}/>
        <ReviewBar stars="4" pct={6}/>
        <ReviewBar stars="3" pct={2}/>
      </div>
      <div style={{ marginTop: 22, padding: 16, background: '#fafafa', display: 'flex', gap: 12 }}>
        <div style={{ width: 64, height: 64, flex: '0 0 auto', overflow: 'hidden' }}>
          <img src="assets/products/detail-2.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        </div>
        <div>
          <Stars size={9}/>
          <div style={{ fontSize: 11, marginTop: 6, lineHeight: 1.5, letterSpacing: '0.01em' }}>"Pelle morbidissima, il packaging è da boutique vera. Marina mi ha aiutata a scegliere via WhatsApp."</div>
          <div style={{ fontSize: 9, color: '#a8a8a8', marginTop: 8, letterSpacing: '0.06em' }}>SOFIA M. · VERIFIED · 12 MAG</div>
        </div>
      </div>
    </div>

    {/* STICKY-LOOKING BOTTOM BAR (visual demo only) */}
    <div style={{ borderTop: '1px solid #ececec', background: '#fff', padding: '12px 20px', display: 'grid', gridTemplateColumns: '40px 1fr 140px', gap: 12, alignItems: 'center' }}>
      <div style={{ width: 40, height: 50, overflow: 'hidden' }}>
        <img src={PRODUCT.hero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      </div>
      <div>
        <div style={{ fontSize: 10, color: '#525252' }}>{PRODUCT.brand}</div>
        <div style={{ fontSize: 12, letterSpacing: '0.01em' }}>1.750 €</div>
      </div>
      <button style={{ height: 42, background: '#1a1a1a', color: '#fff', border: 'none', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'inherit' }}>Aggiungi</button>
    </div>
    <div style={{ padding: '6px 20px 18px', textAlign: 'center', fontSize: 9, color: '#a8a8a8', letterSpacing: '0.18em' }}>STICKY · COMPARE QUANDO SCORRI</div>

    <FooterCommon/>
  </PhoneShell>
);


// =====================================================================
// ─── OPZIONE C · AGGRESSIVE CRO  ─────────────────────────────────────
// =====================================================================
const PDP_C = () => (
  <PhoneShell height={4250}>
    {/* Live promise bar */}
    <div style={{ background: '#1a1a1a', color: '#fff', height: 28, fontSize: 9, letterSpacing: '0.22em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
      <span style={{ width: 5, height: 5, borderRadius: 999, background: '#7ec98a' }}/>
      ORDINA IN 14h 32m · CONSEGNA GIO 22 MAG · ROMA
    </div>
    <Header/>
    <Breadcrumb items={['Donna', 'Borse', 'Backpack', 'Mini Faye']}/>

    {/* IMAGE — full bleed */}
    <div style={{ position: 'relative', width: 390, aspectRatio: '4/5', background: '#ece6dd', overflow: 'hidden' }}>
      <img src={PRODUCT.hero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
      <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ height: 20, padding: '0 10px', background: 'linear-gradient(90deg, #000 0%, #e9ae88 100%)', color: '#fff', fontSize: 8, letterSpacing: '0.26em', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>Nuovi Arrivi SS26</div>
        <div style={{ height: 20, padding: '0 10px', background: '#fff', color: '#1a1a1a', fontSize: 8, letterSpacing: '0.26em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}>
          <Star size={8}/> Selezione Marina
        </div>
        <div style={{ height: 20, padding: '0 10px', background: '#7e1e1e', color: '#fff', fontSize: 8, letterSpacing: '0.26em', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>Solo 2 rimasti</div>
      </div>
      <button style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, background: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="heart" size={16}/>
      </button>
      <button style={{ position: 'absolute', top: 56, right: 12, width: 36, height: 36, background: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="rotate" size={14}/>
      </button>
      <button style={{ position: 'absolute', top: 100, right: 12, width: 36, height: 36, background: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="play" size={13} stroke="#1a1a1a" sw={1.2}/>
      </button>
      <div style={{ position: 'absolute', bottom: 14, left: 14, padding: '6px 10px', background: 'rgba(255,255,255,0.95)', fontSize: 9, letterSpacing: '0.18em', color: '#525252', display: 'flex', alignItems: 'center', gap: 6 }}>
        1 / 8 · 360° · VIDEO
      </div>
    </div>

    {/* THUMBNAIL strip */}
    <div style={{ display: 'flex', gap: 6, padding: '10px 20px 4px', overflowX: 'auto' }}>
      {PRODUCT.alts.map((src, i) => (
        <div key={i} style={{ width: 50, height: 64, flex: '0 0 auto', border: i === 0 ? '1px solid #1a1a1a' : '1px solid #ececec', overflow: 'hidden', position: 'relative' }}>
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
          {i === 4 && <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, letterSpacing: '0.18em', color: '#1a1a1a' }}>360°</div>}
        </div>
      ))}
    </div>

    {/* LIVE ACTIVITY ROW */}
    <div style={{ padding: '14px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: '#525252', letterSpacing: '0.02em' }}>
          <Icon name="eye" size={12} stroke="#525252"/>
          <span><strong style={{ fontWeight: 400 }}>12 persone</strong> stanno guardando ora</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: '#525252', letterSpacing: '0.02em' }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#7e1e1e' }}/>
          <span><strong style={{ fontWeight: 400 }}>Marina G.</strong> l'ha appena aggiunto al carrello</span>
        </div>
      </div>
    </div>

    {/* PRODUCT INFO */}
    <div style={{ padding: '14px 20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.26em' }}>{PRODUCT.brand} <span style={{ color: '#a8a8a8', letterSpacing: '0.06em', textTransform: 'none' }}>· {PRODUCT.brandHouse}</span></div>
      </div>
      <h1 style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.005em', lineHeight: 1.3, margin: '8px 0 0' }}>{PRODUCT.name}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
        <Stars size={11}/>
        <span style={{ fontSize: 10, color: '#1a1a1a', letterSpacing: '0.02em' }}>4.9 · 122</span>
        <span style={{ fontSize: 10, color: '#767676', borderBottom: '1px solid #a8a8a8' }}>verificate</span>
        <span style={{ fontSize: 10, padding: '2px 7px', background: '#fafafa', border: '1px solid #ececec', letterSpacing: '0.04em' }}>98% consiglia</span>
      </div>

      {/* PRICE w/ ANCHOR + SAVING */}
      <div style={{ marginTop: 18 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 24, color: '#1a1a1a', letterSpacing: '0.01em' }}>{PRODUCT.price}</span>
          <span style={{ fontSize: 12, color: '#a8a8a8', textDecoration: 'line-through' }}>Retail {PRODUCT.retail}</span>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 6, alignItems: 'center' }}>
          <span style={{ fontSize: 10, padding: '3px 8px', background: '#1a1a1a', color: '#fff', letterSpacing: '0.18em' }}>RISPARMI 140 €</span>
          <span style={{ fontSize: 10, color: '#525252' }}>· 7,4% sotto retail consigliato</span>
        </div>
        <div style={{ fontSize: 11, color: '#525252', marginTop: 10 }}>3 rate da <strong style={{ fontWeight: 400 }}>583,33 €</strong> con <span style={{ borderBottom: '1px solid #525252' }}>Klarna</span> · 0 interessi</div>
      </div>
    </div>

    {/* COSTI TRASPARENTI mini */}
    <div style={{ margin: '18px 20px 0', padding: '14px 16px', background: '#fafafa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: 11 }}>Cosa c'è dentro il prezzo</div>
        <div style={{ fontSize: 10, color: '#767676', marginTop: 4 }}>Pellame · cucito · margine boutique. Vedi breakdown.</div>
      </div>
      <Icon name="chevR" size={14} stroke="#525252"/>
    </div>

    {/* COLOR VARIANTS — mostra anche esauriti (Tian/Chen) */}
    <div style={{ padding: '22px 20px 0' }}>
      <div style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#a8a8a8', marginBottom: 10 }}>
        Colore · Rosa antico
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {[['#c9a59a', 'Rosa antico', true, true], ['#1a1a1a', 'Nero', false, true], ['#3a5d7a', 'Blu med.', false, true], ['#7a6e62', 'Cuoio', false, true], ['#c5a046', 'Oro', false, false]].map(([c, n, sel, av]) => (
          <button key={n} style={{ width: 36, height: 36, padding: 3, border: sel ? '1px solid #1a1a1a' : '1px solid #ececec', background: 'transparent', position: 'relative', opacity: av ? 1 : 0.6 }}>
            <div style={{ width: '100%', height: '100%', background: c }}/>
            {!av && <div style={{ position: 'absolute', inset: 3, background: 'linear-gradient(45deg, transparent 47%, #fff 48%, #fff 52%, transparent 53%)' }}/>}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 10, fontSize: 10, color: '#a8a8a8', letterSpacing: '0.02em' }}>1 colore esaurito · scopri la nuova capsule</div>
    </div>

    {/* SIZE */}
    <div style={{ padding: '22px 20px 0' }}>
      <div style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#a8a8a8', marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
        <span>Formato</span>
        <span style={{ color: '#525252', letterSpacing: '0.06em', textTransform: 'none', fontSize: 10, borderBottom: '1px solid #a8a8a8' }}>Guida misure</span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {[
          ['Mini', '22 cm', true, '2 rimasti'],
          ['Small', '26 cm', false, 'Pronto 24h'],
          ['Medium', '30 cm', false, 'Esaurito'],
        ].map(([n, dim, sel, info]) => (
          <button key={n} style={{ flex: 1, padding: '12px 0', border: sel ? '1px solid #1a1a1a' : '1px solid #d4d4d4', background: sel ? '#fafafa' : '#fff', fontFamily: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3, position: 'relative', opacity: info === 'Esaurito' ? 0.5 : 1 }}>
            <span style={{ fontSize: 12, letterSpacing: '0.02em' }}>{n}</span>
            <span style={{ fontSize: 9, color: '#a8a8a8' }}>{dim}</span>
            <span style={{ fontSize: 9, color: info.includes('rimasti') ? '#7e1e1e' : info === 'Esaurito' ? '#a8a8a8' : '#1e6b3a', marginTop: 2, letterSpacing: '0.04em' }}>{info}</span>
            {info === 'Esaurito' && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, transparent 48%, #d4d4d4 49%, #d4d4d4 51%, transparent 52%)' }}/>}
          </button>
        ))}
      </div>
    </div>

    {/* CTA STACK */}
    <div style={{ padding: '22px 20px 0' }}>
      <button style={{ width: '100%', height: 56, background: '#1a1a1a', color: '#fff', border: 'none', fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
        <Icon name="bag" size={16} stroke="#fff"/> Aggiungi al carrello · 1.750 €
      </button>
      <button style={{ width: '100%', height: 44, marginTop: 8, background: '#fff', border: '1px solid #1a1a1a', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, color: '#1a1a1a' }}>
        <Icon name="pin" size={13} stroke="#1a1a1a"/> Prova in boutique · Milano
      </button>
      <button style={{ width: '100%', height: 40, marginTop: 8, background: 'transparent', border: 'none', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#525252', fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        <Icon name="user" size={13} stroke="#525252"/> Parla con Marina · personal stylist
        <Icon name="chevR" size={11} stroke="#525252"/>
      </button>
    </div>

    {/* DELIVERY w/ countdown — Amazon-style */}
    <div style={{ margin: '22px 20px 0', border: '1px solid #1a1a1a' }}>
      <div style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ececec' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Icon name="truck" size={16}/>
          <div>
            <div style={{ fontSize: 12 }}>Consegna <strong style={{ fontWeight: 400, borderBottom: '1px solid #1a1a1a' }}>giovedì 22 mag</strong></div>
            <div style={{ fontSize: 10, color: '#a8a8a8', marginTop: 3 }}>Spedizione express gratuita</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[['14', 'h'], ['32', 'm'], ['08', 's']].map(([n, l]) => (
            <div key={l} style={{ minWidth: 26, padding: 5, textAlign: 'center', background: '#1a1a1a', color: '#fff' }}>
              <div style={{ fontSize: 12, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 7, letterSpacing: '0.18em', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '12px 16px', fontSize: 10, color: '#525252', letterSpacing: '0.02em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Spedisci a <strong style={{ fontWeight: 400 }}>Roma</strong>, IT</span>
        <span style={{ borderBottom: '1px solid #a8a8a8' }}>Cambia</span>
      </div>
    </div>

    {/* 3 MOTIVI / GARANZIA CUMINI */}
    <div style={{ padding: '28px 20px 28px', borderTop: '1px solid #ececec', marginTop: 28 }}>
      <Eyebrow mb={14}>La promessa Cumini</Eyebrow>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {[
          ['shield', '100%\nautentico', 'Verifica boutique'],
          ['return', '30 giorni\ndi reso', 'Gratuito'],
          ['user', 'Stylist\ndedicato', 'Marina · WhatsApp'],
        ].map(([ic, t, s]) => (
          <div key={t} style={{ padding: '14px 8px', border: '1px solid #ececec', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}><Icon name={ic} size={18}/></div>
            <div style={{ fontSize: 11, letterSpacing: '0.01em', whiteSpace: 'pre-line', lineHeight: 1.3 }}>{t}</div>
            <div style={{ fontSize: 9, color: '#a8a8a8', marginTop: 6, letterSpacing: '0.04em' }}>{s}</div>
          </div>
        ))}
      </div>
    </div>

    {/* SMALL BUSINESS PROUD - story panel */}
    <div style={{ padding: '0 20px 28px', display: 'grid', gridTemplateColumns: '88px 1fr', gap: 14, alignItems: 'center' }}>
      <div style={{ width: 88, height: 88, overflow: 'hidden' }}>
        <img src="assets/products/detail-1.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      </div>
      <div>
        <Eyebrow mb={6}>Boutique a conduzione familiare</Eyebrow>
        <div style={{ fontSize: 12, lineHeight: 1.5, color: '#1a1a1a', letterSpacing: '0.01em' }}>Da 28 anni i Cumini scelgono i brand uno per uno. Ogni borsa che spediamo è stata maneggiata da un esperto in boutique.</div>
        <div style={{ marginTop: 8, fontSize: 10, color: '#525252', letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1px solid #525252', display: 'inline-block', paddingBottom: 2 }}>La storia →</div>
      </div>
    </div>

    {/* HIGHLIGHTS */}
    <div style={{ padding: '24px 20px 0', borderTop: '1px solid #ececec' }}>
      <Eyebrow mb={14}>Tre motivi per sceglierlo</Eyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          ['Pelle nappa Made in Firenze', 'Lavorazione 100% italiana, tracciabile pellame → cucito.'],
          ['Capsule SS26 · 8 unità', 'Tiratura limitata per boutique Cumini.'],
          ['Concierge inclusa', 'Marina ti aiuta via WhatsApp prima e dopo l\'acquisto.'],
        ].map(([t, s], i) => (
          <div key={t} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 14 }}>
            <div style={{ width: 24, height: 24, border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, letterSpacing: '0.02em' }}>0{i+1}</div>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '0.01em' }}>{t}</div>
              <div style={{ fontSize: 11, color: '#767676', marginTop: 4, lineHeight: 1.5 }}>{s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* DESCRIPTION accordions */}
    <div style={{ marginTop: 28 }}>
      <AccordionRow title="Materiali & origine" sub="Pelle nappa · Firenze"/>
      <AccordionRow title="Dimensioni & vestibilità" sub="H 22 × L 19 × P 9 cm"/>
      <AccordionRow title="Spedizione & resi" sub="24/48h · reso 30 gg"/>
      <AccordionRow title="Cura del prodotto" sub="Conservazione · pulizia"/>
    </div>

    {/* SPESSO ACQUISTATO INSIEME */}
    <div style={{ padding: '36px 0 0' }}>
      <div style={{ padding: '0 20px 18px' }}>
        <Eyebrow mb={6}>Lo stylist consiglia</Eyebrow>
        <div style={{ fontSize: 16, letterSpacing: '-0.005em' }}>Spesso acquistato insieme</div>
      </div>
      <div style={{ display: 'flex', gap: 14, padding: '0 20px 4px', overflowX: 'auto' }}>
        <MiniCard img="assets/products/related-1.jpg" brand="FENDI" name="Peekaboo small" price="2.490 €"/>
        <MiniCard img="assets/products/related-2.jpg" brand="POLO RL" name="RL50 mini" price="990 €"/>
        <MiniCard img="assets/products/related-3.jpg" brand="MIU MIU" name="Pochette raso" price="780 €"/>
        <MiniCard img="assets/products/detail-2.jpg" brand="LORO PIANA" name="Foulard seta" price="320 €"/>
      </div>
      <div style={{ padding: '18px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 11 }}>Aggiungi tutti i 3 · <strong style={{ fontWeight: 400 }}>3.860 €</strong></div>
        <button style={{ height: 36, padding: '0 16px', background: '#1a1a1a', color: '#fff', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', border: 'none', fontFamily: 'inherit' }}>Aggiungi look</button>
      </div>
    </div>

    {/* REVIEWS w/ photos */}
    <div style={{ padding: '36px 20px 24px', borderTop: '1px solid #ececec', marginTop: 36 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
        <Eyebrow mb={0}>Recensioni verificate</Eyebrow>
        <span style={{ fontSize: 10, color: '#525252', borderBottom: '1px solid #a8a8a8' }}>Tutte 122</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
        <span style={{ fontSize: 36, letterSpacing: '-0.005em' }}>4.9</span>
        <div>
          <Stars size={13}/>
          <div style={{ fontSize: 10, color: '#767676', marginTop: 4 }}>98% consiglia · pelle 4.9 · cucito 4.8</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <ReviewBar stars="5" pct={92}/>
        <ReviewBar stars="4" pct={6}/>
        <ReviewBar stars="3" pct={2}/>
      </div>
      <div style={{ display: 'flex', gap: 6, marginTop: 18, overflowX: 'auto' }}>
        {['detail-1.jpg', 'detail-2.jpg', 'related-2.jpg', 'related-3.jpg'].map((s) => (
          <div key={s} style={{ width: 72, height: 72, flex: '0 0 auto', overflow: 'hidden' }}>
            <img src={'assets/products/' + s} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 18, padding: 16, background: '#fafafa' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <Stars size={9}/>
          <span style={{ fontSize: 9, color: '#a8a8a8', letterSpacing: '0.06em' }}>VERIFIED · 12 MAG</span>
        </div>
        <div style={{ fontSize: 11, lineHeight: 1.5, letterSpacing: '0.01em' }}>"Marina mi ha mandato il video del pellame via WhatsApp prima dell'ordine. Decisione facile. Pelle bellissima."</div>
        <div style={{ fontSize: 9, color: '#525252', marginTop: 8, letterSpacing: '0.06em' }}>— SOFIA M. · ROMA</div>
      </div>
    </div>

    {/* STICKY BAR (visual) */}
    <div style={{ borderTop: '1px solid #ececec', background: '#fff', padding: '12px 16px', display: 'grid', gridTemplateColumns: '40px 1fr 130px', gap: 12, alignItems: 'center' }}>
      <div style={{ width: 40, height: 50, overflow: 'hidden' }}>
        <img src={PRODUCT.hero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      </div>
      <div>
        <div style={{ fontSize: 10, color: '#525252', display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ width: 5, height: 5, borderRadius: 999, background: '#7e1e1e' }}/> Solo 2 rimasti
        </div>
        <div style={{ fontSize: 13, letterSpacing: '0.01em' }}>1.750 € <span style={{ fontSize: 10, color: '#a8a8a8', textDecoration: 'line-through', marginLeft: 4 }}>1.890</span></div>
      </div>
      <button style={{ height: 44, background: '#1a1a1a', color: '#fff', border: 'none', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'inherit' }}>Aggiungi</button>
    </div>
    <div style={{ padding: '6px 20px 18px', textAlign: 'center', fontSize: 9, color: '#a8a8a8', letterSpacing: '0.18em' }}>STICKY · COMPARE QUANDO SCORRI</div>

    <FooterCommon/>
  </PhoneShell>
);

Object.assign(window, { PDP_A, PDP_B, PDP_C, PhoneShell });
