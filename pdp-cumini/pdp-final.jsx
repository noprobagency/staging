// CUMINI — Mobile PDP · versione finale
// Combina i blocchi scelti dalla variante B con i copy raffinati indicati nel PDF.

const FONT_M = '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif';

const PRODUCT = {
  brand: 'CHLOÉ',
  brandHouse: 'Paris · dal 1952',
  name: 'Mini zaino Faye in pelle, rosa antico',
  price: '1.750 €',
  klarna: '583,33 €',
  sku: '24SS-CL-FB-031',
  hero: 'assets/products/hero-1.jpg',
  description: 'Mini zaino Faye dal design strutturato in pelle nappa rosa antico. Chiusura magnetica con anello in metallo dorato firmato Chloé, spallacci regolabili e dettaglio a treccia in pelle. Tasca interna con zip, foderato in tela di cotone. Realizzato a Firenze da artigiani della maison. Made in Italy.',
  alts: [
    'assets/products/hero-1.jpg',
    'assets/products/hero-2.jpg',
    'assets/products/detail-1.jpg',
    'assets/products/detail-2.jpg',
    'assets/products/variants.jpg',
  ],
};

// ─── PHONE SHELL ──────────────────────────────────────────
const PhoneShell = ({ children, height = 5400 }) => (
  <div style={{
    width: 390, height,
    background: '#fff', overflow: 'hidden',
    border: '1px solid #e8e8e8',
    fontFamily: FONT_M, color: '#1a1a1a',
    boxShadow: '0 1px 0 rgba(0,0,0,0.02)',
    position: 'relative',
  }}>
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

// ─── LOGO CUMINI ─────────────────────────────────────────
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

// ─── ATOMI ────────────────────────────────────────────────
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
    truck: <><rect x="1" y="6" width="13" height="11"/><path d="M14 10h5l3 3v4h-8"/><circle cx="6" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></>,
    'return': <><path d="M3 12a9 9 0 1 1 3 6.7"/><path d="M3 18v-6h6"/></>,
    shield: <><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/><path d="m9 12 2 2 4-4"/></>,
    heart: <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z"/>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></>,
    bag: <><path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 5-6 8-6s7 2 8 6"/></>,
    menu: <><path d="M3 7h18M3 12h18M3 17h18"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <><path d="M5 12h14"/></>,
    chev: <><path d="m6 9 6 6 6-6"/></>,
    chevR: <><path d="m9 6 6 6-6 6"/></>,
    pin: <><path d="M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></>,
    box: <><path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/></>,
    gift: <><path d="M3 11h18v9H3z"/><path d="M3 7h18v4H3z"/><path d="M12 7v13"/><path d="M12 7a3 3 0 0 1-3-3 2 2 0 0 1 4 0 2 2 0 0 1 4 0 3 3 0 0 1-3 3"/></>,
    sparkle: <><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></>,
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

// ─── HEADER ───────────────────────────────────────────────
const TopBar = ({ label }) => (
  <div style={{ background: '#1a1a1a', color: '#fff', height: 28, fontSize: 9, letterSpacing: '0.22em', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px' }}>
    {label}
  </div>
);

const Header = () => (
  <div style={{ borderBottom: '1px solid #ececec', padding: '14px 18px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
    <Icon name="menu" size={20}/>
    <LogoMini w={74}/>
    <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Icon name="search" size={17}/>
      <Icon name="user" size={18}/>
      <div style={{ position: 'relative' }}>
        <Icon name="bag" size={18}/>
        <div style={{ position: 'absolute', top: -4, right: -5, width: 13, height: 13, borderRadius: '50%', background: '#1a1a1a', color: '#fff', fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</div>
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
const AccordionRow = ({ title, open, children }) => (
  <div style={{ padding: '18px 20px', borderTop: '1px solid #ececec' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1a1a1a' }}>{title}</div>
      <Icon name={open ? 'minus' : 'plus'} size={14} stroke="#525252"/>
    </div>
    {open && children && <div style={{ marginTop: 16 }}>{children}</div>}
  </div>
);

// ─── SERVICE ROW (icon · label · chev) ───────────────────
const ServiceRow = ({ icon, label, badge, expanded, onArrow = true }) => (
  <div style={{ padding: '16px 20px', borderTop: '1px solid #ececec' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '22px 1fr auto', alignItems: 'center', gap: 14 }}>
      <Icon name={icon} size={16} stroke="#1a1a1a"/>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{label}</div>
        {badge && (
          <div style={{ fontSize: 10, color: '#1a6a3d', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 5, height: 5, borderRadius: 999, background: '#1a6a3d' }}/>
            {badge}
          </div>
        )}
      </div>
      {onArrow && <Icon name="chevR" size={13} stroke="#a8a8a8"/>}
    </div>
    {expanded && (
      <div style={{ marginTop: 12, paddingLeft: 36, fontSize: 11, color: '#525252', lineHeight: 1.6 }}>
        {expanded}
      </div>
    )}
  </div>
);

// ─── MINI PRODUCT CARD ────────────────────────────────────
const MiniCard = ({ img, brand, name, price, badge, w = 132 }) => (
  <div style={{ width: w, flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden', background: '#f4f4f4' }}>
      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
      {badge && <div style={{ position: 'absolute', top: 8, left: 0, height: 16, padding: '0 8px', background: 'linear-gradient(90deg, #000 0%, #e9ae88 100%)', color: '#fff', fontSize: 7, letterSpacing: '0.24em', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>{badge}</div>}
    </div>
    <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>{brand}</div>
    <div style={{ fontSize: 10, color: '#767676', lineHeight: 1.45, marginTop: -3 }}>{name}</div>
    <div style={{ fontSize: 11, color: '#1a1a1a', marginTop: -2 }}>{price}</div>
  </div>
);

// ─── REVIEW BAR ───────────────────────────────────────────
const ReviewBar = ({ stars, pct }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '34px 1fr 30px', alignItems: 'center', gap: 8, fontSize: 9, color: '#767676' }}>
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>{stars}<Star size={9}/></div>
    <div style={{ height: 4, background: '#ececec' }}><div style={{ width: pct + '%', height: '100%', background: '#1a1a1a' }}/></div>
    <div style={{ textAlign: 'right', letterSpacing: '0.04em' }}>{pct}%</div>
  </div>
);

// =====================================================================
// ─── PDP FINALE ─────────────────────────────────────────────────────
// =====================================================================
const PDP_FINAL = () => (
  <PhoneShell height={5400}>
    <TopBar label="ORDINA ENTRO 14h 32m · CONSEGNA GIOVEDÌ 22 MAGGIO"/>
    <Header/>
    <Breadcrumb items={['Home', 'Borse', 'Mini Faye']}/>

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

    {/* BRAND + REVIEWS */}
    <div style={{ padding: '18px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: 10, letterSpacing: '0.26em' }}>{PRODUCT.brand}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <Stars size={10}/>
        <span style={{ fontSize: 10, color: '#525252', letterSpacing: '0.02em' }}>4.9 · 122</span>
      </div>
    </div>

    {/* TITLE */}
    <div style={{ padding: '10px 20px 0' }}>
      <h1 style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.005em', lineHeight: 1.3, margin: 0 }}>{PRODUCT.name}</h1>
    </div>

    {/* PRICE */}
    <div style={{ padding: '16px 20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <span style={{ fontSize: 20, letterSpacing: '0.01em' }}>{PRODUCT.price}</span>
        <span style={{ fontSize: 11, color: '#a8a8a8', letterSpacing: '0.02em' }}>IVA inclusa</span>
      </div>
      <div style={{ fontSize: 11, color: '#525252', marginTop: 6, letterSpacing: '0.02em' }}>o 3 rate da {PRODUCT.klarna} con <span style={{ borderBottom: '1px solid #525252' }}>Klarna</span> · 0 interessi</div>
    </div>

    {/* SCARCITY — copy aggiornato dal PDF */}
    <div style={{ padding: '14px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ width: 7, height: 7, borderRadius: 999, background: '#b5651d', display: 'inline-block' }}/>
      <span style={{ fontSize: 11, color: '#1a1a1a', letterSpacing: '0.02em' }}>Quantità limitata — solo <strong style={{ fontWeight: 400, borderBottom: '1px solid #1a1a1a' }}>2 disponibili</strong></span>
    </div>

    {/* COLOR */}
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

    {/* SIZE SELECT (dropdown style come da PDF) */}
    <div style={{ padding: '22px 20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
        <span style={{ fontSize: 10, color: '#525252', letterSpacing: '0.06em', borderBottom: '1px solid #a8a8a8' }}>Guida alle taglie</span>
      </div>
      <button style={{ width: '100%', height: 46, border: '1px solid #d4d4d4', background: '#fff', fontFamily: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', fontSize: 11, letterSpacing: '0.04em', color: '#525252' }}>
        <span>Scegli la taglia</span>
        <Icon name="chev" size={13} stroke="#525252"/>
      </button>
    </div>

    {/* CTA principale + wishlist (copy aggiornato) */}
    <div style={{ padding: '18px 20px 0' }}>
      <button style={{ width: '100%', height: 54, background: '#1a1a1a', color: '#fff', border: 'none', fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <span>Aggiungi al carrello</span>
        <span style={{ width: 1, height: 18, background: '#525252' }}/>
        <span>1.750 €</span>
      </button>
      <button style={{ width: '100%', height: 44, marginTop: 10, background: '#fff', color: '#525252', border: '1px solid #d4d4d4', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <Icon name="heart" size={13} stroke="#525252"/>
        Aggiungi alla wishlist
      </button>
    </div>

    {/* DELIVERY DATE */}
    <div style={{ padding: '20px 20px 0', fontSize: 11, color: '#525252', letterSpacing: '0.02em' }}>
      Data di consegna stimata: <strong style={{ fontWeight: 400, color: '#1a1a1a' }}>entro 25/05</strong> · <span style={{ borderBottom: '1px solid #525252' }}>Vedi le informazioni di spedizione</span>
    </div>

    {/* SERVICE ROWS */}
    <div style={{ marginTop: 20 }}>
      <ServiceRow icon="pin" label="Trova in boutique"/>
      <ServiceRow icon="user" label="Parla con un personal shopper Cumini"/>
      <ServiceRow icon="truck" label="Spedizione e reso" badge="Resi facili entro 30 giorni"/>
    </div>

    {/* DETTAGLIO PRODOTTO (aperto) */}
    <AccordionRow title="Dettaglio prodotto" open>
      <p style={{ margin: 0, fontSize: 11, color: '#525252', lineHeight: 1.65, letterSpacing: '0.01em' }}>
        {PRODUCT.description}
      </p>
      <ul style={{ margin: '20px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          ['Materiale', 'Pelle nappa 100% · fodera in tela di cotone'],
          ['Misure', 'H 22 × L 19 × P 9 cm'],
          ['Codice', PRODUCT.sku],
        ].map(([k, v]) => (
          <li key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, gap: 18, letterSpacing: '0.01em' }}>
            <span style={{ color: '#a8a8a8' }}>{k}</span>
            <span style={{ color: '#1a1a1a', textAlign: 'right' }}>{v}</span>
          </li>
        ))}
      </ul>
    </AccordionRow>

    {/* SERVIZI CUMINI (aperto) */}
    <AccordionRow title="Servizi Cumini" open>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {[
          ['truck', 'Spedizioni e resi', 'Spedizione gratuita su tutti gli ordini. Reso a costo zero entro 14 giorni, online o in negozio.'],
          ['user', 'Appuntamento in boutique', 'Prenota un appuntamento in boutique: stretti a tua disposizione per consigli e assistenza one-to-one.'],
          ['box', 'Ritiro in boutique', 'Acquista online, riserva dall’eshop online e ritira il tuo ordine quando vuoi nella boutique Cumini più vicina.'],
          ['gift', 'Confezione Cumini', 'Riceverai il tuo ordine nell’elegante confezione Cumini. Aggiungi un biglietto con un messaggio personalizzato per trasformarlo in un regalo esclusivo.'],
        ].map(([ic, t, s]) => (
          <div key={t} style={{ display: 'grid', gridTemplateColumns: '22px 1fr', gap: 14 }}>
            <Icon name={ic} size={15} stroke="#1a1a1a"/>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1a1a' }}>{t}</div>
              <div style={{ fontSize: 10.5, color: '#767676', marginTop: 6, lineHeight: 1.6 }}>{s}</div>
            </div>
          </div>
        ))}
      </div>
    </AccordionRow>

    {/* PAGAMENTI SICURI */}
    <div style={{ padding: '24px 20px 28px', borderTop: '1px solid #ececec' }}>
      <Eyebrow mb={10}>Pagamenti sicuri</Eyebrow>
      <div style={{ fontSize: 11, color: '#525252', lineHeight: 1.6, letterSpacing: '0.01em' }}>
        Carte, PayPal, Klarna · transazioni protette SSL · circuiti Visa, MasterCard, Amex.
      </div>
    </div>

    {/* RECENSIONI CERTIFICATE (su Trustpilot) */}
    <div style={{ padding: '28px 20px 24px', borderTop: '1px solid #ececec' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <Eyebrow mb={0}>Recensioni certificate su Trustpilot</Eyebrow>
        <span style={{ fontSize: 10, color: '#525252', borderBottom: '1px solid #a8a8a8' }}>Tutte (122)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
        <span style={{ fontSize: 30, letterSpacing: '-0.005em' }}>4.9</span>
        <Stars size={13}/>
      </div>
      <div style={{ fontSize: 10, color: '#767676', marginTop: 4 }}>su 122 recensioni verificate</div>
      <div style={{ marginTop: 18, padding: 16, background: '#fafafa', display: 'flex', gap: 12 }}>
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

    {/* RELATED */}
    <div style={{ padding: '32px 0 0', borderTop: '1px solid #ececec' }}>
      <div style={{ padding: '0 20px 18px' }}>
        <Eyebrow mb={6}>Selezione CUMINI PE26</Eyebrow>
        <div style={{ fontSize: 16, letterSpacing: '-0.005em' }}>Potrebbero piacerti anche</div>
      </div>
      <div style={{ display: 'flex', gap: 14, padding: '0 20px 4px', overflowX: 'auto' }}>
        <MiniCard img="assets/products/related-1.jpg" brand="FENDI" name="Peekaboo small, blu mediterraneo" price="2.490 €"/>
        <MiniCard img="assets/products/related-2.jpg" brand="POLO RALPH LAUREN" name="RL50 mini in pelle, multicolor" price="990 €"/>
        <MiniCard img="assets/products/related-3.jpg" brand="MIU MIU" name="Pochette serata in raso" price="780 €" badge="Nuovi Arrivi"/>
      </div>
    </div>

    {/* STICKY BAR (visual demo, sotto al contenuto) */}
    <div style={{ marginTop: 36, borderTop: '1px solid #ececec', background: '#fff', padding: '12px 20px', display: 'grid', gridTemplateColumns: '40px 1fr 140px', gap: 12, alignItems: 'center' }}>
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

    {/* FOOTER MINIMAL */}
    <div style={{ borderTop: '1px solid #ececec', padding: '32px 20px 16px', textAlign: 'center' }}>
      <LogoMini w={92}/>
      <div style={{ marginTop: 14, display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
        <Star size={10}/><span style={{ fontSize: 10, color: '#525252' }}>4.9 Trustpilot</span>
      </div>
    </div>
    <div style={{ padding: '0 20px 20px', fontSize: 10, color: '#a8a8a8', letterSpacing: '0.06em', lineHeight: 1.8, textAlign: 'center' }}>© 2026 · Cumini srl · P.IVA 02441190307</div>
  </PhoneShell>
);

// ─── MOUNT ────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(<PDP_FINAL/>);
