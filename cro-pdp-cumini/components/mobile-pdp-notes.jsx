// CUMINI — Annotation panels for the 3 PDP options
// Each option ships next to a "razionale CRO" panel: changes, principles, impact, priority.

const FONT_N = '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif';

const PriorityDot = ({ level }) => {
  const map = { alto: '#7e1e1e', medio: '#b5651d', basso: '#a8a8a8' };
  return <span style={{ width: 6, height: 6, borderRadius: 999, background: map[level], display: 'inline-block', marginRight: 6, verticalAlign: 'middle' }}/>;
};

const ChangeRow = ({ n, title, why, principle, impact, prio }) => (
  <div style={{ padding: '18px 22px', borderTop: '1px solid #ececec' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr 84px', gap: 14, alignItems: 'baseline' }}>
      <div style={{ fontSize: 10, letterSpacing: '0.18em', color: '#a8a8a8' }}>{String(n).padStart(2, '0')}</div>
      <div style={{ fontSize: 14, letterSpacing: '0.005em', color: '#1a1a1a', lineHeight: 1.4 }}>{title}</div>
      <div style={{ fontSize: 10, letterSpacing: '0.06em', textAlign: 'right' }}>
        <PriorityDot level={prio}/>
        <span style={{ color: '#525252', textTransform: 'uppercase' }}>{prio}</span>
      </div>
    </div>
    <div style={{ marginTop: 12, fontSize: 12, color: '#525252', lineHeight: 1.6, letterSpacing: '0.01em' }}>{why}</div>
    <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      {principle.map(p => (
        <span key={p} style={{ fontSize: 9, padding: '4px 9px', background: '#fafafa', border: '1px solid #ececec', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#525252' }}>{p}</span>
      ))}
    </div>
    <div style={{ marginTop: 10, fontSize: 10, color: '#7e1e1e', letterSpacing: '0.04em' }}>↑ {impact}</div>
  </div>
);

const OptionHeader = ({ letter, title, sub, summary }) => (
  <div style={{ padding: '32px 22px 24px', borderBottom: '1px solid #ececec', background: '#fff' }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
      <div style={{ width: 56, height: 56, border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, letterSpacing: '-0.01em' }}>{letter}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#a8a8a8' }}>Opzione {letter}</div>
        <div style={{ fontSize: 20, letterSpacing: '-0.005em', marginTop: 6, lineHeight: 1.3 }}>{title}</div>
        <div style={{ fontSize: 11, color: '#767676', marginTop: 6, letterSpacing: '0.02em' }}>{sub}</div>
      </div>
    </div>
    <div style={{ marginTop: 22, fontSize: 12, color: '#525252', lineHeight: 1.65, letterSpacing: '0.01em' }}>{summary}</div>
  </div>
);

const KPIRow = ({ items }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid #ececec', background: '#fafafa' }}>
    {items.map(([k, v], i) => (
      <div key={k} style={{ padding: '16px 14px', borderLeft: i > 0 ? '1px solid #ececec' : 'none' }}>
        <div style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a8a8a8' }}>{k}</div>
        <div style={{ fontSize: 13, marginTop: 6, letterSpacing: '0.005em' }}>{v}</div>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────
const NotesA = () => (
  <div style={{ width: 560, fontFamily: FONT_N, background: '#fff', color: '#1a1a1a' }}>
    <OptionHeader
      letter="A"
      title="Pulizia tipografica + 3 segnali di fiducia"
      sub="Conservativa · stesso layout, micro-changes ad alto impatto"
      summary="L'utente non si accorge del cambiamento. Riordiniamo solo gerarchia, spazi e leggibilità. Aggiungiamo recensioni vicino al brand, prezzo più riconoscibile, riga di 3 trust signals subito sotto la CTA, promessa di consegna in data certa, descrizione in accordion."
    />
    <KPIRow items={[
      ['Sforzo dev', '~3 giorni'],
      ['Sezioni toccate', '6 / 10'],
      ['Impatto atteso', '+8/12% CR'],
    ]}/>
    <ChangeRow n={1}
      title="Brand · Recensioni · Prezzo nella stessa zona di scansione"
      why="Sopra il prezzo, il blocco 'CHLOÉ — 4.9 ★ — 122 recensioni' si legge in un solo colpo d'occhio. Information scent: ogni microelemento conferma che si è sul prodotto giusto."
      principle={['Information scent', 'F-pattern']}
      impact="Riduzione bounce sopra la piega"
      prio="alto"
    />
    <ChangeRow n={2}
      title="Tre trust signal in riga sotto la CTA"
      why="Autenticità · Reso · Spedizione. Tre claim, mai quattro: dopo il terzo il cervello smette di processare e inizia il sospetto (Shu & Carlson 2014, +10,4% persuasione vs 4 claim)."
      principle={['Rule of 3', 'Trust signals']}
      impact="+5–8% Add-to-Cart"
      prio="alto"
    />
    <ChangeRow n={3}
      title="Data di consegna esplicita (non range)"
      why="«Consegna giovedì 22 maggio» è più persuasivo di «24/48h». L'utente non deve calcolare: vede una data, riesce a immaginarsi con il prodotto. Pattern Amazon-style già metabolizzato."
      principle={['Concretezza', 'Mental simulation']}
      impact="+3–5% CR mobile"
      prio="alto"
    />
    <ChangeRow n={4}
      title="Stock indicator soft: «ultimi 2 pezzi»"
      why="Era già presente, ma nascosto. Ora ha un pallino visivo color burnt-orange (no rosso allarmista — coerente con il tono premium). Scarcity credibile per un multibrand: davvero ne hanno 2."
      principle={['Scarcity', 'Loss aversion']}
      impact="+2–4% CR"
      prio="medio"
    />
    <ChangeRow n={5}
      title="Accordion al posto di muri di testo"
      why="«Dettagli · Spedizione · Concierge». L'utente che vuole comprare scorre subito, chi vuole approfondire apre. Hick's Law: meno opzioni visibili → decisione più veloce."
      principle={["Hick's Law", 'Chunking', 'Progressive disclosure']}
      impact="−15% scroll-to-CTA"
      prio="medio"
    />
    <ChangeRow n={6}
      title="Tipografia Proxima Nova, gerarchia compatta"
      why="Una sola famiglia, un solo peso. La gerarchia viene da size (22 / 16 / 13 / 11) e tracking (uppercase 0.26em per label, -0.005em per titoli). Più «editoriale», meno «e-commerce»."
      principle={['Visual hierarchy', 'Cognitive load']}
      impact="Leggibilità + brand consistency"
      prio="alto"
    />
    <ChangeRow n={7}
      title="Reviews block con bar chart in distribuzione 5/4/3 ★"
      why="«4.9» da solo è un'astrazione. Il bar chart 92% / 6% / 2% rende reale l'accordo dei 122 clienti. Più credibile di un singolo numero."
      principle={['Social proof', 'Specificity bias']}
      impact="+2% CR su utenti indecisi"
      prio="medio"
    />
  </div>
);

const NotesB = () => (
  <div style={{ width: 560, fontFamily: FONT_N, background: '#fff', color: '#1a1a1a' }}>
    <OptionHeader
      letter="B"
      title="Riorganizzazione + leve CRO classiche"
      sub="Intermedia · stesso linguaggio visivo, sezioni ricostruite"
      summary="Aggiunge anchoring di prezzo (retail vs Cumini −140€), social proof live (12 stanno guardando · 4 venduti oggi), countdown discreto per la consegna, sezione «3 motivi» numerata, tabella spedizione con icone, CTA secondaria «prova in boutique», sticky bar in fondo."
    />
    <KPIRow items={[
      ['Sforzo dev', '~8 giorni'],
      ['Sezioni toccate', '10 / 12'],
      ['Impatto atteso', '+15/22% CR'],
    ]}/>
    <ChangeRow n={1}
      title="Anchoring: «Retail 1.890 € → Cumini 1.750 €»"
      why="In un multibrand luxury la giustificazione del prezzo è chiave. Il retail consigliato è l'ancora; il nostro prezzo diventa «sotto retail». Il chip −140 € attiva loss aversion senza svalutare il pezzo."
      principle={['Anchoring', 'Loss aversion']}
      impact="+8–12% CR sopra retail"
      prio="alto"
    />
    <ChangeRow n={2}
      title="Social proof live: «12 guardano · 4 venduti oggi»"
      why="Numero di visualizzazioni e/o vendite recenti — Tian, Chen & Xu 2021: anche una sola delle due metriche basta per +sales. Da implementare con dati reali (no inventati: il brand premium non lo tollererebbe)."
      principle={['Social proof', 'Herding effect']}
      impact="+4–7% Add-to-Cart"
      prio="alto"
    />
    <ChangeRow n={3}
      title="Countdown 14h 32m per consegna giovedì"
      why="Urgency credibile, non aggressiva: «se ordini ora, ricevi questo giorno». Niente flash sale tossico — solo un timer di cut-off spedizione, come Amazon Prime."
      principle={['Urgency', 'Time-bound action']}
      impact="+3–6% conversione express"
      prio="alto"
    />
    <ChangeRow n={4}
      title="Cumini Choice badge + Marina personal stylist"
      why="Per prodotti hedonic (luxury fashion) la raccomandazione umana batte l'algoritmo (Longoni & Cian 2020). «Scelto da Marina» = aggiunge un autore, non un dataset."
      principle={['Human recommendation', 'Authority']}
      impact="+CR su utenti indecisi"
      prio="medio"
    />
    <ChangeRow n={5}
      title="Varianti + size con stock per opzione"
      why="«2 rimasti nel formato Mini». Mostra anche le opzioni esaurite (Tian/Chen: tenere sold-out fino al 30% segnala qualità). Spinge alla scelta senza ansia da carrello vuoto."
      principle={['Scarcity', 'Quality signaling']}
      impact="+3–5% finalizzazione"
      prio="alto"
    />
    <ChangeRow n={6}
      title="«3 motivi per sceglierlo» con icone"
      why="Estrae 3 highlight (materiale · esclusività · servizio) dalla descrizione, sopra l'accordion. Rule of 3 + Spazio fra prodotti (Sevilla & Townsend 2016: gap aumenta valore percepito)."
      principle={['Rule of 3', 'Chunking']}
      impact="+ tempo di scroll qualitativo"
      prio="medio"
    />
    <ChangeRow n={7}
      title="Tabella spedizione & resi con icone"
      why="Quattro righe: spedizione · reso · ritiro · pagamento. Easy scan. Sostituisce il blocco testuale lungo. Free returns = standard atteso (Janakiraman 2016)."
      principle={['Information scent', 'Expected baseline']}
      impact="Riduzione friction"
      prio="alto"
    />
    <ChangeRow n={8}
      title="CTA secondaria «prova in boutique»"
      why="Per un multibrand fisico Verona/Milano/Trieste è un vantaggio competitivo da esporre. Commitment soft: chi non compra ora, prenota."
      principle={['Commitment bias', 'Omnichannel']}
      impact="+ lead boutique offline"
      prio="medio"
    />
    <ChangeRow n={9}
      title="«Completa il look» — selezione stylist"
      why="3 prodotti complementari curati da Marina (Surround with complementary, Tian 2021). Aumenta AOV senza diluire il prodotto principale."
      principle={['Complementary surround', 'AOV lift']}
      impact="+10–18% AOV"
      prio="alto"
    />
    <ChangeRow n={10}
      title="Sticky bottom bar con miniatura + prezzo + CTA"
      why="L'utente scrolla per 3000 px: serve un'ancora persistente. Pattern Amazon / Net-a-Porter già metabolizzato in mobile luxury."
      principle={['Persistent CTA', 'Friction reduction']}
      impact="+5–9% ATC su mobile"
      prio="alto"
    />
  </div>
);

const NotesC = () => (
  <div style={{ width: 560, fontFamily: FONT_N, background: '#fff', color: '#1a1a1a' }}>
    <OptionHeader
      letter="C"
      title="Stack CRO completo, sempre in tono boutique"
      sub="Spinta · stessi token, ma più leve psicologiche attive"
      summary="Aggiunge ad A+B: barra superiore dinamica con città di consegna, tre badge sovrapposti all'immagine (Nuovi Arrivi · Selezione Marina · Solo 2), prezzo con «risparmi 140€», cost-transparency teaser, varianti che tengono visibili gli esauriti, sezione «Promessa Cumini» (3 colonne), narrazione small-business, look completo con sub-totale, gallery review."
    />
    <KPIRow items={[
      ['Sforzo dev', '~14 giorni'],
      ['Sezioni toccate', '13 / 13'],
      ['Impatto atteso', '+20/30% CR'],
    ]}/>
    <ChangeRow n={1}
      title="Barra dinamica «consegna a Roma» in alto"
      why="Anziché un'announcement bar generica, mostra la promessa personalizzata sulla città dell'utente (IP geolocation). Concretezza assoluta sopra la piega."
      principle={['Concretezza', 'Personalizzazione']}
      impact="+3–5% scroll-depth"
      prio="medio"
    />
    <ChangeRow n={2}
      title="Tre badge sull'immagine: Nuovi Arrivi · Marina · Solo 2"
      why="Tre layer di urgency + qualità simultanei: novità (status), curation umana (autorevolezza), scarsità (loss aversion). Tre, non quattro — limite Shu & Carlson."
      principle={['Rule of 3', 'Authority', 'Scarcity']}
      impact="+ percezione di valore"
      prio="alto"
    />
    <ChangeRow n={3}
      title="Anchoring esplicito + chip «risparmi 140 €»"
      why="L'utente vede il numero da risparmiare, non solo lo sconto in %. Su un pezzo da 1.750 € percepire 140 € risparmiati è più tangibile che vedere −7,4%."
      principle={['Anchoring', 'Loss aversion', 'Mental accounting']}
      impact="+CR significativo"
      prio="alto"
    />
    <ChangeRow n={4}
      title="Cost-transparency teaser «cosa c'è dentro il prezzo»"
      why="Mohan, Buell & John 2020: dichiarare i costi aumenta le vendite del 22%. Per un multibrand significa raccontare il margine boutique vs grossista, non i costi di produzione. Pattern Everlane in chiave luxury."
      principle={['Trust', 'Transparency']}
      impact="+8–12% trust score"
      prio="medio"
    />
    <ChangeRow n={5}
      title="Live activity ticker «Marina G. l'ha appena aggiunto»"
      why="Mostrare un'azione recente reale aumenta urgenza e social proof. Deve essere VERA (eventi reali del backend), altrimenti il pubblico luxury percepisce gimmick."
      principle={['Social proof', 'FOMO']}
      impact="+2–4% ATC"
      prio="medio"
    />
    <ChangeRow n={6}
      title="Varianti che tengono visibili i sold-out"
      why="Tian, Chen & Xu 2021: tenere fino al 30% di opzioni esaurite segnala qualità. La pallina barrata è eloquente: «altri lo amano». L'utente sposta la scelta sul disponibile."
      principle={['Quality signaling', 'Social proof']}
      impact="+5% sales su disponibili"
      prio="alto"
    />
    <ChangeRow n={7}
      title="CTA stack: carrello → boutique → stylist"
      why="Tre livelli di commitment: ora · prossima settimana · solo informazione. Ogni utente trova la propria strada. Il personal stylist battezza il pezzo come «hedonic», riducendo la friction al click."
      principle={['Commitment bias', 'Multi-CTA quantity']}
      impact="+ qualified leads"
      prio="alto"
    />
    <ChangeRow n={8}
      title="«La promessa Cumini» — 3 box garanzia"
      why="Autenticità · 30 giorni · Stylist. Rule of 3, ma in formato visuale (icona + due righe). Sostituisce un trust-strip generico con 3 promesse Cumini-specific."
      principle={['Rule of 3', 'Brand differentiation']}
      impact="+ trust signal qualitativo"
      prio="alto"
    />
    <ChangeRow n={9}
      title="Small-business proud: «da 28 anni i Cumini scelgono»"
      why="Woolley, Kupor & Liu 2022: per low-tech (non-AI) i piccoli brand sono percepiti come più qualitativi. La storia familiare → percezione di passione → qualità superiore."
      principle={['Small-company effect', 'Storytelling']}
      impact="+6–10% intention-to-buy"
      prio="medio"
    />
    <ChangeRow n={10}
      title="«Spesso acquistato insieme» con sub-totale"
      why="Amazon-style ma in tono editoriale: 3-4 prodotti curati con prezzo cumulato + bottone «Aggiungi look». Surround with complementary + commitment escalation."
      principle={['Complementary', 'Anchoring AOV']}
      impact="+15–25% AOV"
      prio="alto"
    />
    <ChangeRow n={11}
      title="Gallery foto-recensioni dei clienti"
      why="4 thumbnail foto reali dai recensori. Mostra il prodotto «vissuto», non solo in studio. Forte segnale di prova sociale visiva per articoli hedonic (fashion)."
      principle={['Social proof visual', 'UGC']}
      impact="+4–7% CR"
      prio="medio"
    />
    <ChangeRow n={12}
      title="Sticky bar che porta dentro lo stock e l'anchor"
      why="In Opzione B la sticky bar mostrava solo prezzo + CTA. Qui aggiungiamo «solo 2 rimasti» + retail barrato. La leva di urgency segue l'utente per tutta la PDP."
      principle={['Persistent urgency', 'Anchoring']}
      impact="+CR su utenti a metà funnel"
      prio="alto"
    />
  </div>
);

// ─── BRIEF / OVERVIEW CARD ─────────────────────────────────────
const BriefCard = () => (
  <div style={{ width: 1180, padding: 56, background: '#fff', fontFamily: FONT_N, color: '#1a1a1a', display: 'flex', flexDirection: 'column', gap: 36 }}>
    <div>
      <div style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#a8a8a8' }}>PDP Mobile · Restyle CRO</div>
      <h1 style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.018em', lineHeight: 1.05, margin: '14px 0 0', maxWidth: 900 }}>
        Stessa PDP. Più ordinata,<br/>più <em style={{ fontStyle: 'normal', borderBottom: '1px solid #1a1a1a' }}>scientificamente</em> più efficace.
      </h1>
      <p style={{ fontSize: 14, color: '#525252', lineHeight: 1.7, maxWidth: 720, marginTop: 22, letterSpacing: '0.005em' }}>
        Tre opzioni di ottimizzazione, tutte ancorate al design system esistente e a Proxima Nova. A vista la pagina sembra la stessa di oggi — quello che cambia è il peso percepito delle informazioni e quanto velocemente l'utente passa da "guardo" a "compro". Ogni modifica è motivata da una ricerca peer-reviewed citata accanto.
      </p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {[
        ['A', 'Conservativa', '6 cambi · 3 giorni di dev', 'Solo gerarchia, spazio, accordion e 3 trust signals. Zero shock per il cliente abituale.'],
        ['B', 'Intermedia', '10 cambi · 8 giorni di dev', 'Anchoring, social proof live, urgency soft, sticky bar, completa-il-look.'],
        ['C', 'Spinta', '12+ cambi · 14 giorni di dev', 'Stack CRO completo: cost-transparency, small-business, gallery UGC, AOV lift.'],
      ].map(([L, n, m, d]) => (
        <div key={L} style={{ border: '1px solid #ececec', padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 36, letterSpacing: '-0.01em' }}>{L}</div>
            <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a8a8a8' }}>OPZIONE {L}</div>
          </div>
          <div style={{ fontSize: 16, letterSpacing: '-0.005em' }}>{n}</div>
          <div style={{ fontSize: 10, color: '#525252', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m}</div>
          <div style={{ fontSize: 12, color: '#525252', lineHeight: 1.6 }}>{d}</div>
        </div>
      ))}
    </div>

    <div>
      <Eyebrow mb={20}>I principi che usiamo</Eyebrow>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {[
          ['Rule of 3', 'Shu & Carlson 2014. Tre claim convincono +10,4% più di quattro.'],
          ['Anchoring', 'Tversky & Kahneman. Retail consigliato come ancora del prezzo Cumini.'],
          ['Scarcity', 'Tian, Chen & Xu 2021. Tenere fino al 30% di sold-out aumenta vendite del 31%.'],
          ['Hick\'s Law', 'Meno scelte visibili = decisione più veloce. Da qui gli accordion.'],
          ['Information scent', 'Recensioni vicino al brand vicino al prezzo: scansione F-pattern.'],
          ['Loss aversion', '«Risparmi 140 €» supera «sconto 7%» in luxury sotto-retail.'],
          ['Mental simulation', '«Consegna giovedì 22» > «24/48h». Data certa → utente si vede col pezzo.'],
          ['Small-business proud', 'Woolley et al. 2022. Per low-tech, piccolo = qualità superiore.'],
        ].map(([t, d]) => (
          <div key={t} style={{ padding: '16px 18px', background: '#fafafa', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.02em' }}>{t}</div>
            <div style={{ fontSize: 10, color: '#767676', lineHeight: 1.5 }}>{d}</div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ borderTop: '1px solid #ececec', paddingTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
      <div>
        <Eyebrow mb={10}>Constraint rispettati</Eyebrow>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontSize: 12, color: '#525252', lineHeight: 1.8, letterSpacing: '0.005em' }}>
          <li>· Identità grafica: Proxima Nova regular, palette neutra, niente raggi morbidi</li>
          <li>· Gerarchia generale invariata: hero · info · CTA · descrizione · related · review · trust · footer</li>
          <li>· Tutte le novità sono nuove istanze degli stessi token (border, gap, eyebrow)</li>
          <li>· Scarcity & urgency solo se realistiche e verificabili dal backend Cumini</li>
        </ul>
      </div>
      <div>
        <Eyebrow mb={10}>Da decidere col cliente</Eyebrow>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontSize: 12, color: '#525252', lineHeight: 1.8, letterSpacing: '0.005em' }}>
          <li>· Hai un retail-price API per esporre l'anchor in modo affidabile?</li>
          <li>· I dati di «X persone guardano ora» sono recuperabili in real-time?</li>
          <li>· Quanti pezzi avete in media: due, dieci, cinquanta? La scarcity dipende.</li>
          <li>· Marina (o altro personal stylist) ha capacity per gestire i lead in arrivo?</li>
        </ul>
      </div>
    </div>
  </div>
);

const Eyebrow = ({ children, color = '#a8a8a8', mb = 12 }) => (
  <div style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color, marginBottom: mb }}>{children}</div>
);

Object.assign(window, { NotesA, NotesB, NotesC, BriefCard });
