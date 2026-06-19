// CUMINI — Mobile PDP · Opzione D: "Boutique-led"
// Tre sotto-varianti del modulo Boutique: compact, full, immersive

const FONT_D = '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif';

// ─── BOUTIQUE DATA ──────────────────────────────────────
const BOUTIQUES = [
  { city: 'MILANO',  addr: 'Via della Spiga 12', hours: 'Lun–Sab · 10–19', stock: 'Disponibile' },
  { city: 'VERONA',  addr: 'Corso Porta Borsari 28', hours: 'Mar–Sab · 10–19', stock: 'Disponibile' },
  { city: 'TRIESTE', addr: 'Via San Nicolò 7', hours: 'Mar–Sab · 10–13 · 15:30–19', stock: 'In arrivo · gio 22' },
];

// ─── PLACEHOLDER BOUTIQUE IMAGE ─────────────────────────
const BoutiqueImg = ({ city, h = '100%' }) => (
  <div style={{
    position: 'relative', width: '100%', height: h,
    background: 'linear-gradient(135deg, #ece6dd 0%, #d8cebf 100%)',
    overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    {/* facciata stilizzata */}
    <svg width="80%" height="80%" viewBox="0 0 200 140" fill="none" style={{ opacity: 0.45 }}>
      <rect x="20" y="40" width="160" height="90" stroke="#1a1a1a" strokeWidth="0.8" fill="none"/>
      <rect x="30" y="60" width="50" height="55" stroke="#1a1a1a" strokeWidth="0.6" fill="rgba(26,26,26,0.04)"/>
      <rect x="120" y="60" width="50" height="55" stroke="#1a1a1a" strokeWidth="0.6" fill="rgba(26,26,26,0.04)"/>
      <rect x="92" y="72" width="16" height="58" stroke="#1a1a1a" strokeWidth="0.6" fill="rgba(26,26,26,0.06)"/>
      <line x1="0" y1="130" x2="200" y2="130" stroke="#1a1a1a" strokeWidth="0.4"/>
      <text x="100" y="32" textAnchor="middle" fontSize="9" letterSpacing="3" fill="#1a1a1a" fontFamily={FONT_D}>CUMINI</text>
    </svg>
    <div style={{ position: 'absolute', bottom: 10, left: 12, fontSize: 8, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.22em' }}>
      PLACEHOLDER · {city}
    </div>
  </div>
);

// ─── ATOMI condivisi (riuso da componenti PDP) ──────────
const Icon2 = ({ name, size = 14, stroke = '#1a1a1a', sw = 1.4 }) => {
  const paths = {
    pin: <><path d="M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    chevR: <path d="m9 6 6 6-6 6"/>,
    check: <path d="m4 12 5 5L20 6"/>,
    star: <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>,
    shield: <><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/><path d="m9 12 2 2 4-4"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 5-6 8-6s7 2 8 6"/></>,
    phone: <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z"/>,
    truck: <><rect x="1" y="6" width="13" height="11"/><path d="M14 10h5l3 3v4h-8"/><circle cx="6" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      {paths[name]}
    </svg>
  );
};

// =====================================================================
// VARIANTE D1 — BOUTIQUE STRIP COMPATTO
// Una riga sottile sotto la CTA: «3 boutique fisiche» con città cliccabili.
// =====================================================================
const BoutiqueCompact = () => (
  <div style={{ width: 390, fontFamily: FONT_D, background: '#fff', color: '#1a1a1a', border: '1px solid #e8e8e8' }}>
    <div style={{ padding: '6px 16px', background: '#1a1a1a', color: '#fff', fontSize: 8, letterSpacing: '0.22em', textAlign: 'center' }}>
      MODULO INSERITO SUBITO SOTTO LA CTA
    </div>

    <div style={{ padding: '20px 20px 18px', borderBottom: '1px solid #ececec', display: 'flex', alignItems: 'center', gap: 14 }}>
      <Icon2 name="pin" size={18}/>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, letterSpacing: '0.01em' }}>
          Provalo in una delle <strong style={{ fontWeight: 400, borderBottom: '1px solid #1a1a1a' }}>3 boutique Cumini</strong>
        </div>
        <div style={{ fontSize: 10, color: '#a8a8a8', marginTop: 4, letterSpacing: '0.04em' }}>
          Milano · Verona · Trieste
        </div>
      </div>
      <Icon2 name="chevR" size={14} stroke="#525252"/>
    </div>

    <div style={{ padding: '14px 20px', display: 'flex', gap: 8 }}>
      {BOUTIQUES.map(b => (
        <button key={b.city} style={{
          flex: 1, padding: '10px 0', background: '#fff', border: '1px solid #ececec',
          fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1a1a1a',
          fontFamily: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
        }}>
          <span>{b.city}</span>
          <span style={{ fontSize: 8, color: b.stock.includes('arrivo') ? '#b5651d' : '#1e6b3a', letterSpacing: '0.04em', textTransform: 'none' }}>
            ● {b.stock.includes('arrivo') ? 'gio 22' : 'in store'}
          </span>
        </button>
      ))}
    </div>
  </div>
);

// =====================================================================
// VARIANTE D2 — BOUTIQUE CARD "FULL" CON FOTO
// Modulo più ampio: foto, indirizzi, orari, pulsante "Prenota visita"
// =====================================================================
const BoutiqueFull = () => (
  <div style={{ width: 390, fontFamily: FONT_D, background: '#fff', color: '#1a1a1a', border: '1px solid #e8e8e8' }}>
    <div style={{ padding: '6px 16px', background: '#1a1a1a', color: '#fff', fontSize: 8, letterSpacing: '0.22em', textAlign: 'center' }}>
      MODULO INSERITO DOPO "PROMESSA CUMINI"
    </div>

    {/* Hero foto boutique */}
    <div style={{ width: '100%', height: 220, position: 'relative' }}>
      <BoutiqueImg city="MILANO"/>
      <div style={{ position: 'absolute', bottom: 12, left: 12, background: 'rgba(255,255,255,0.95)', padding: '4px 9px', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
        Boutique Milano · Spiga 12
      </div>
    </div>

    <div style={{ padding: '24px 20px 18px' }}>
      <div style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#a8a8a8' }}>Tre indirizzi · una boutique</div>
      <h3 style={{ fontSize: 20, fontWeight: 400, letterSpacing: '-0.005em', lineHeight: 1.3, margin: '8px 0 10px' }}>
        Dietro questa pagina<br/>ci siamo davvero, di persona.
      </h3>
      <p style={{ fontSize: 12, color: '#525252', lineHeight: 1.65, margin: 0, letterSpacing: '0.005em' }}>
        Cumini è una boutique multibrand con tre punti vendita storici. Ogni pezzo che vedi online passa fisicamente per le nostre mani prima di essere spedito.
      </p>
    </div>

    {/* Lista boutique */}
    <div style={{ borderTop: '1px solid #ececec' }}>
      {BOUTIQUES.map((b, i) => (
        <div key={b.city} style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: '32px 1fr auto', gap: 12, alignItems: 'center', borderBottom: i < BOUTIQUES.length - 1 ? '1px solid #f4f4f4' : 'none' }}>
          <div style={{ width: 32, height: 32, border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, letterSpacing: '0.04em' }}>
            0{i+1}
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase' }}>{b.city}</div>
            <div style={{ fontSize: 10, color: '#525252', marginTop: 4, letterSpacing: '0.02em' }}>{b.addr}</div>
            <div style={{ fontSize: 10, color: '#a8a8a8', marginTop: 3, letterSpacing: '0.02em' }}>{b.hours}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9, color: b.stock.includes('arrivo') ? '#b5651d' : '#1e6b3a', letterSpacing: '0.04em' }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: b.stock.includes('arrivo') ? '#b5651d' : '#1e6b3a' }}/>
            {b.stock}
          </div>
        </div>
      ))}
    </div>

    {/* CTA prenotazione */}
    <div style={{ padding: '20px 20px 24px' }}>
      <button style={{
        width: '100%', height: 48, background: '#fff', border: '1px solid #1a1a1a',
        color: '#1a1a1a', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase',
        fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10,
      }}>
        <Icon2 name="clock" size={14}/> Prenota una visita
      </button>
      <button style={{
        width: '100%', height: 40, marginTop: 8, background: 'transparent', border: 'none',
        color: '#525252', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase',
        fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
      }}>
        <Icon2 name="phone" size={13} stroke="#525252"/> Parla con la boutique <Icon2 name="chevR" size={11} stroke="#525252"/>
      </button>
    </div>
  </div>
);

// =====================================================================
// VARIANTE D3 — BOUTIQUE IMMERSIVE
// Stripe full-bleed con 3 foto + storytelling lungo. Va dopo le recensioni.
// =====================================================================
const BoutiqueImmersive = () => (
  <div style={{ width: 390, fontFamily: FONT_D, background: '#fff', color: '#1a1a1a', border: '1px solid #e8e8e8' }}>
    <div style={{ padding: '6px 16px', background: '#1a1a1a', color: '#fff', fontSize: 8, letterSpacing: '0.22em', textAlign: 'center' }}>
      MODULO INSERITO PRIMA DEL FOOTER · FULL-BLEED
    </div>

    {/* Cover editoriale */}
    <div style={{ width: '100%', height: 240, position: 'relative' }}>
      <BoutiqueImg city="VERONA"/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 100%)' }}/>
      <div style={{ position: 'absolute', bottom: 18, left: 18, right: 18, color: '#fff' }}>
        <div style={{ fontSize: 9, letterSpacing: '0.36em', textTransform: 'uppercase' }}>La boutique · dal 1998</div>
        <div style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.01em', marginTop: 8, lineHeight: 1.2 }}>
          Tre indirizzi.<br/>Una sola scelta.
        </div>
      </div>
    </div>

    {/* Story */}
    <div style={{ padding: '24px 20px 18px' }}>
      <p style={{ fontSize: 13, color: '#1a1a1a', lineHeight: 1.7, margin: 0, letterSpacing: '0.005em' }}>
        Da 28 anni la famiglia Cumini cura tre boutique storiche tra <strong style={{ fontWeight: 400 }}>Milano</strong>, <strong style={{ fontWeight: 400 }}>Verona</strong> e <strong style={{ fontWeight: 400 }}>Trieste</strong>. Ogni capo che spediamo è già passato per le mani di chi lo ha scelto.
      </p>
    </div>

    {/* Stripe 3 foto */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: '#ececec' }}>
      {BOUTIQUES.map(b => (
        <div key={b.city} style={{ position: 'relative', aspectRatio: '3/4', background: '#fff' }}>
          <BoutiqueImg city={b.city}/>
          <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, fontSize: 8, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1a1a1a', background: 'rgba(255,255,255,0.95)', padding: '3px 6px', textAlign: 'center' }}>
            {b.city}
          </div>
        </div>
      ))}
    </div>

    {/* Tag riga */}
    <div style={{ padding: '20px 20px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderBottom: '1px solid #ececec' }}>
      {[
        ['shield', 'Pezzi autenticati', 'in boutique'],
        ['user',   'Stylist dedicato', 'in store · WhatsApp'],
        ['truck',  'Ritiro 24h',       'in qualunque sede'],
      ].map(([ic, t, s], i) => (
        <div key={t} style={{ padding: '0 8px 18px', textAlign: 'center', borderLeft: i > 0 ? '1px solid #ececec' : 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}><Icon2 name={ic} size={16}/></div>
          <div style={{ fontSize: 10, letterSpacing: '0.02em' }}>{t}</div>
          <div style={{ fontSize: 9, color: '#a8a8a8', marginTop: 4, letterSpacing: '0.04em' }}>{s}</div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div style={{ padding: '20px 20px 24px' }}>
      <button style={{
        width: '100%', height: 48, background: '#1a1a1a', color: '#fff', border: 'none',
        fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase',
        fontFamily: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10,
      }}>
        <Icon2 name="pin" size={14} stroke="#fff"/> Trova la boutique più vicina
      </button>
    </div>
  </div>
);

// =====================================================================
// PDP_D — Versione completa con tutti i moduli boutique integrati
// (parte da PDP_B come base, aggiunge il modulo full sopra le review)
// =====================================================================
const PDP_D = () => {
  // riusiamo PDP_B come base e iniettiamo il modulo
  return (
    <div style={{ width: 390, fontFamily: FONT_D, background: '#fff', color: '#1a1a1a', border: '1px solid #e8e8e8' }}>
      <div style={{ padding: '6px 16px', background: '#1a1a1a', color: '#fff', fontSize: 8, letterSpacing: '0.22em', textAlign: 'center' }}>
        ANTEPRIMA · INSERIMENTO MODULO BOUTIQUE NELLA PDP COMPLETA
      </div>

      {/* PHASE 1: STRIP COMPACT — subito dopo la CTA */}
      <div style={{ padding: '14px 14px 0', background: '#fafafa' }}>
        <div style={{ fontSize: 8, letterSpacing: '0.32em', color: '#a8a8a8', marginBottom: 6 }}>↓ POSIZIONE 1 · SUBITO SOTTO LA CTA</div>
      </div>
      <div style={{ padding: '0 14px 16px', background: '#fafafa' }}>
        <BoutiqueCompact/>
      </div>

      {/* PHASE 2: FULL CARD — dopo Promessa Cumini */}
      <div style={{ padding: '14px 14px 0' }}>
        <div style={{ fontSize: 8, letterSpacing: '0.32em', color: '#a8a8a8', marginBottom: 6 }}>↓ POSIZIONE 2 · DOPO "PROMESSA CUMINI"</div>
      </div>
      <div style={{ padding: '0 14px 16px' }}>
        <BoutiqueFull/>
      </div>

      {/* PHASE 3: IMMERSIVE — prima del footer */}
      <div style={{ padding: '14px 14px 0', background: '#fafafa' }}>
        <div style={{ fontSize: 8, letterSpacing: '0.32em', color: '#a8a8a8', marginBottom: 6 }}>↓ POSIZIONE 3 · PRIMA DEL FOOTER · FULL-BLEED</div>
      </div>
      <div style={{ padding: '0 14px 16px', background: '#fafafa' }}>
        <BoutiqueImmersive/>
      </div>
    </div>
  );
};

// ─── NOTE / RAZIONALE OPZIONE D ───────────────────────────
const NotesD = () => (
  <div style={{ width: 560, fontFamily: FONT_D, background: '#fff', color: '#1a1a1a' }}>
    <div style={{ padding: '32px 22px 24px', borderBottom: '1px solid #ececec' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ width: 56, height: 56, border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, letterSpacing: '-0.01em' }}>D</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#a8a8a8' }}>Opzione D</div>
          <div style={{ fontSize: 20, letterSpacing: '-0.005em', marginTop: 6, lineHeight: 1.3 }}>Boutique-led · «non siamo solo un sito»</div>
          <div style={{ fontSize: 11, color: '#767676', marginTop: 6, letterSpacing: '0.02em' }}>Mostra che dietro la PDP ci sono 3 boutique fisiche reali</div>
        </div>
      </div>
      <div style={{ marginTop: 22, fontSize: 12, color: '#525252', lineHeight: 1.65, letterSpacing: '0.01em' }}>
        Le tre boutique sono il differenziale più forte di Cumini contro i grandi marketplace luxury (Net-a-Porter, Mytheresa, Farfetch). L'utente che dubita di un ordine da 1.750 € vuole sapere che «se sbaglio, posso tornare in negozio». Mostrarlo bene cambia la natura del brand: da e-commerce a boutique con sito.
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid #ececec', background: '#fafafa' }}>
      {[
        ['Compact', '~1 giorno'],
        ['Full card', '~3 giorni'],
        ['Immersive', '~5 giorni'],
      ].map(([k, v], i) => (
        <div key={k} style={{ padding: '16px 14px', borderLeft: i > 0 ? '1px solid #ececec' : 'none' }}>
          <div style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a8a8a8' }}>{k}</div>
          <div style={{ fontSize: 13, marginTop: 6, letterSpacing: '0.005em' }}>{v}</div>
        </div>
      ))}
    </div>

    {[
      {
        n: 1, title: 'Compact · strip sotto la CTA',
        why: 'Per chi non scrolla oltre il fold: un\'unica riga, tre città cliccabili, indicatore di stock per boutique. È la versione minima ma psicologicamente importante: comunica subito che esistiamo offline.',
        principle: ['Trust signal', 'Concretezza', 'Omnichannel'],
        impact: '+3–5% finalizzazione · +click "ritira in boutique"', prio: 'alto',
      },
      {
        n: 2, title: 'Full card · foto + indirizzi + orari',
        why: 'Modulo dedicato dopo "Promessa Cumini". Mostra le tre boutique come entità reali: indirizzo, orari, stato stock. CTA "Prenota visita" trasforma il dubbio in appuntamento. È il pattern che Aesop e The Row usano sui propri PDP.',
        principle: ['Social proof fisico', 'Authority', 'Commitment soft'],
        impact: '+lead boutique +qualità lead', prio: 'alto',
      },
      {
        n: 3, title: 'Immersive · stripe editoriale full-bleed',
        why: 'La storia (28 anni, famiglia Cumini) viene narrata visivamente prima del footer. Sfrutta Woolley et al. 2022: per i piccoli brand low-tech, comunicare la dimensione familiare alza la percezione di qualità del prodotto.',
        principle: ['Small-business proud', 'Brand story', 'Heritage'],
        impact: '+6–10% intention-to-buy', prio: 'medio',
      },
      {
        n: 4, title: 'Stock per boutique, in tempo reale',
        why: 'Sapere che «Milano: disponibile · Trieste: arriva giovedì» trasforma una pagina prodotto in una mappa di disponibilità. Per il cliente alto-spendente è informazione concreta, non marketing.',
        principle: ['Information scent', 'Cross-channel inventory'],
        impact: '+ Click & Collect', prio: 'alto',
      },
      {
        n: 5, title: '"Prenota una visita" come CTA secondaria',
        why: 'Non tutti finalizzano online. Convertire l\'utente esitante in un appuntamento fisico vale spesso più di un ATC: in boutique la conversione tipica è 3–5x, e l\'AOV cresce.',
        principle: ['Commitment escalation', 'Omnichannel funnel'],
        impact: '+ qualified leads offline · + AOV medio', prio: 'alto',
      },
      {
        n: 6, title: 'Combinazioni consigliate',
        why: 'Posizione 1 (Compact) è obbligatoria. Posizione 2 (Full) è il «sweet spot» per gran parte degli utenti. Posizione 3 (Immersive) serve solo se la PDP è lunga e va supportata con una pausa narrativa.',
        principle: ['Progressive disclosure'],
        impact: '—', prio: 'medio',
      },
    ].map(c => (
      <div key={c.n} style={{ padding: '18px 22px', borderTop: '1px solid #ececec' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr 84px', gap: 14, alignItems: 'baseline' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.18em', color: '#a8a8a8' }}>{String(c.n).padStart(2, '0')}</div>
          <div style={{ fontSize: 14, letterSpacing: '0.005em', color: '#1a1a1a', lineHeight: 1.4 }}>{c.title}</div>
          <div style={{ fontSize: 10, letterSpacing: '0.06em', textAlign: 'right' }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: c.prio === 'alto' ? '#7e1e1e' : '#b5651d', display: 'inline-block', marginRight: 6, verticalAlign: 'middle' }}/>
            <span style={{ color: '#525252', textTransform: 'uppercase' }}>{c.prio}</span>
          </div>
        </div>
        <div style={{ marginTop: 12, fontSize: 12, color: '#525252', lineHeight: 1.6, letterSpacing: '0.01em' }}>{c.why}</div>
        <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {c.principle.map(p => (
            <span key={p} style={{ fontSize: 9, padding: '4px 9px', background: '#fafafa', border: '1px solid #ececec', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#525252' }}>{p}</span>
          ))}
        </div>
        {c.impact !== '—' && <div style={{ marginTop: 10, fontSize: 10, color: '#7e1e1e', letterSpacing: '0.04em' }}>↑ {c.impact}</div>}
      </div>
    ))}
  </div>
);

Object.assign(window, { BoutiqueCompact, BoutiqueFull, BoutiqueImmersive, PDP_D, NotesD, BoutiqueImg });
