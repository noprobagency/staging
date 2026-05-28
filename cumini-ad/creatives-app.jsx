// CUMINI — Creative Batch composition
// 50+ creative proposals across the brief

function App() {
  // Photo pools — re-usable handles by mood
  const editorial = {
    suedeBrown:    { src: 'Cumini_SS26-040.jpg', position: 'center 18%' },
    suedeBrown2:   { src: 'Cumini_SS26-064.jpg', position: 'center 22%' },
    suedeBrown3:   { src: 'Cumini_SS26-066.jpg', position: 'center 22%' },
    leatherJacket: { src: 'Cumini_SS26-090.jpg', position: 'center 30%' },
    leatherJacket2:{ src: 'Cumini_SS26-076.jpg', position: 'center 22%' },
    parka:         { src: 'Cumini_SS26-147.jpg', position: 'center 25%' },
    suit:          { src: 'Cumini_SS26-200.jpg', position: 'center 25%' },
    suitWalk:      { src: 'Cumini_SS26-204.jpg', position: 'center 35%' },
    legs:          { src: 'Cumini_SS26-207.jpg', position: 'center 30%' },
    stripeShirt:   { src: 'Cumini_SS26-167.jpg', position: 'center 25%' },
    stripeShirt2:  { src: 'Cumini_SS26-176.jpg', position: 'center 25%' },
    polo:          { src: 'Cumini_SS26-181.jpg', position: 'center 25%' },
    sweat:         { src: 'Cumini_SS26-186.jpg', position: 'center 22%' },
    sweat2:        { src: 'Cumini_SS26-187.jpg', position: 'center 25%' },
    fringe:        { src: 'Cumini_SS26-102.jpg', position: 'center 22%' },
    fringe2:       { src: 'Cumini_SS26-106.jpg', position: 'center 22%' },
    fringe3:       { src: 'Cumini_SS26-111.jpg', position: 'center 22%' },
    leatherJump:   { src: 'Cumini_SS26-086.jpg', position: 'center 22%' },
    look1:         { src: 'Cumini_SS26-125.jpg', position: 'center 25%' },
    look2:         { src: 'Cumini_SS26-140.jpg', position: 'center 22%' },
    look3:         { src: 'Cumini_SS26-154.jpg', position: 'center 22%' },
    look4:         { src: 'Cumini_SS26-156.jpg', position: 'center 22%' },
    look5:         { src: 'Cumini_SS26-164.jpg', position: 'center 25%' },
    look6:         { src: 'Cumini_SS26-169.jpg', position: 'center 22%' },
    look7:         { src: 'Cumini_SS26-178.jpg', position: 'center 22%' },
    look8:         { src: 'Cumini_SS26-191.jpg', position: 'center 22%' },
    look9:         { src: 'Cumini_SS26-193.jpg', position: 'center 22%' },
    look10:        { src: 'Cumini_SS26-194.jpg', position: 'center 22%' },
    look11:        { src: 'Cumini_SS26-202.jpg', position: 'center 22%' },
    look12:        { src: 'Cumini_SS26-208.jpg', position: 'center 22%' },
    look13:        { src: 'Cumini_SS26-210.jpg', position: 'center 22%' },
    look14:        { src: 'Cumini_SS26-213.jpg', position: 'center 22%' },
    look15:        { src: 'Cumini_SS26-215.jpg', position: 'center 22%' },
  };

  const stills = {
    blueBag:       { src: 'Cumini_still_life_SS26-024.jpg', position: 'center' },
    suedeBag:      { src: 'Cumini_still_life_SS26-040.jpg', position: 'center' },
    pinkBackpack:  { src: 'Cumini_still_life_SS26-077.jpg', position: 'center' },
    pradaBP:       { src: 'Cumini_still_life_SS26-117.jpg', position: 'center' },
    sandalsBrown:  { src: 'Cumini_still_life_SS26-149.jpg', position: 'center' },
    blackBag:      { src: 'Cumini_still_life_SS26-088.jpg', position: 'center' },
    fendiBP:       { src: 'Cumini_still_life_SS26-130.jpg', position: 'center' },
    chloeBP:       { src: 'Cumini_still_life_SS26-160.jpg', position: 'center' },
    valBag:        { src: 'Cumini_still_life_SS26-183.jpg', position: 'center' },
    ysl:           { src: 'Cumini_still_life_SS26-180.jpg', position: 'center' },
    blueChloe:     { src: 'Cumini_still_life_SS26-182.jpg', position: 'center' },
    bag1:          { src: 'Cumini_still_life_SS26-020.jpg', position: 'center' },
    bag2:          { src: 'Cumini_still_life_SS26-030.jpg', position: 'center' },
    bag3:          { src: 'Cumini_still_life_SS26-032.jpg', position: 'center' },
    bag4:          { src: 'Cumini_still_life_SS26-033.jpg', position: 'center' },
    bag5:          { src: 'Cumini_still_life_SS26-044.jpg', position: 'center' },
    bag6:          { src: 'Cumini_still_life_SS26-047.jpg', position: 'center' },
    bag7:          { src: 'Cumini_still_life_SS26-051.jpg', position: 'center' },
    bag8:          { src: 'Cumini_still_life_SS26-054.jpg', position: 'center' },
    bag9:          { src: 'Cumini_still_life_SS26-057.jpg', position: 'center' },
    bag10:         { src: 'Cumini_still_life_SS26-061.jpg', position: 'center' },
    bag11:         { src: 'Cumini_still_life_SS26-068.jpg', position: 'center' },
    bag12:         { src: 'Cumini_still_life_SS26-071.jpg', position: 'center' },
    bag13:         { src: 'Cumini_still_life_SS26-092.jpg', position: 'center' },
    bag14:         { src: 'Cumini_still_life_SS26-099.jpg', position: 'center' },
    bag15:         { src: 'Cumini_still_life_SS26-118.jpg', position: 'center' },
    bag16:         { src: 'Cumini_still_life_SS26-121.jpg', position: 'center' },
    bag17:         { src: 'Cumini_still_life_SS26-124.jpg', position: 'center' },
    bag18:         { src: 'Cumini_still_life_SS26-137.jpg', position: 'center' },
    bag19:         { src: 'Cumini_still_life_SS26-139.jpg', position: 'center' },
    bag20:         { src: 'Cumini_still_life_SS26-140.jpg', position: 'center' },
    bag21:         { src: 'Cumini_still_life_SS26-142.jpg', position: 'center' },
    bag22:         { src: 'Cumini_still_life_SS26-145.jpg', position: 'center' },
    bag23:         { src: 'Cumini_still_life_SS26-147.jpg', position: 'center' },
    bag24:         { src: 'Cumini_still_life_SS26-151.jpg', position: 'center' },
    bag25:         { src: 'Cumini_still_life_SS26-154.jpg', position: 'center' },
    bag26:         { src: 'Cumini_still_life_SS26-164.jpg', position: 'center' },
    bag27:         { src: 'Cumini_still_life_SS26-172.jpg', position: 'center' },
    bag28:         { src: 'Cumini_still_life_SS26-174.jpg', position: 'center' },
    bag29:         { src: 'Cumini_still_life_SS26-176.jpg', position: 'center' },
  };

  // Sizes (raw px, the canvas will scale uniformly)
  const SQ = 540;     // 1:1 artboard
  const W16 = 720;    // 16:9 artboard
  const H16 = 405;
  // Story (vertical 9:16)
  const SW = 360, SH = 640;

  return (
    <DesignCanvas>
      {/* ─── 0 · Intro ─────────────────────────────────────── */}
      <DCSection id="intro" title="CUMINI · Creative Batch · SS26" subtitle="50+ proposte di creative · 1:1, 16:9, story 9:16, ads · sistema editoriale, geometria svizzera, logo piccolo">
        <DCArtboard id="intro-card" label="Intro" width={760} height={520}>
          <div style={{ padding: 56, height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: CFONT }}>
            <CLogo width={LOGO_LG} />
            <div>
              <div style={{ fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#a8a8a8', marginBottom: 16 }}>Batch · SS 26</div>
              <h1 style={{ fontSize: 40, fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.05, margin: 0, marginBottom: 22, maxWidth: 540 }}>
                Creative batch — primavera estate ventisei.
              </h1>
              <p style={{ fontSize: 13, color: '#525252', lineHeight: 1.65, maxWidth: 520, margin: 0, letterSpacing: '0.01em' }}>
                Sistema soft, editoriale, luxury. Logo CUMINI <em>piccolo e dolce</em>, mai gigante.
                Overlay calibrati — né troppo scuro né troppo chiaro — per dare scena e leggibilità senza sporcare la fotografia.
                Geometria svizzera: rettangoli, hairline, niente raggi. Proxima Nova, regular, tracking aperto.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, fontSize: 10, color: '#767676', borderTop: '1px solid #e8e8e8', paddingTop: 20, letterSpacing: '0.04em' }}>
              <div><div style={{ color: '#1a1a1a', marginBottom: 4 }}>01</div>Branded</div>
              <div><div style={{ color: '#1a1a1a', marginBottom: 4 }}>02</div>Summer Sales</div>
              <div><div style={{ color: '#1a1a1a', marginBottom: 4 }}>03</div>DPA / DABA</div>
              <div><div style={{ color: '#1a1a1a', marginBottom: 4 }}>04</div>Lead gen + raccolta</div>
            </div>
          </div>
        </DCArtboard>
      </DCSection>

      {/* ─── 1 · BRANDED · 16:9 stories (9:16 portrait actually) ─ */}
      <DCSection id="story-branded" title="01 · Stories branded · 9:16" subtitle="Solo logo + overlay. Branded posts in stile Zimmermann reference">
        <DCArtboard id="st-br-1" label="Story · suede / wordmark center" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-040.jpg" position="center 18%" overlay="center" logoPos="cc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-2" label="Story · leather / logo bottom" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-076.jpg" position="center 28%" overlay="soft" logoPos="bc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-3" label="Story · fringe / wordmark bl" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-102.jpg" position="center 18%" overlay="soft" logoPos="bl" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-4" label="Story · stripe shirt" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-167.jpg" position="center 18%" overlay="even" logoPos="tc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-5" label="Story · denim · logo top center" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-064.jpg" position="center 22%" overlay="top" logoPos="tc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-6" label="Story · 086 / wordmark bottom" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-086.jpg" position="center 20%" overlay="soft" logoPos="bc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-7" label="Story · 111 · wordmark cc" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-111.jpg" position="center 20%" overlay="center" logoPos="cc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-8" label="Story · 125 · logo bl" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-125.jpg" position="center 22%" overlay="even" logoPos="bl" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-9" label="Story · 140 · wordmark tr" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-140.jpg" position="center 18%" overlay="soft" logoPos="tr" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-10" label="Story · 154 · logo cc" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-154.jpg" position="center 18%" overlay="center" logoPos="cc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-11" label="Story · 156 · wordmark bottom" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-156.jpg" position="center 22%" overlay="soft" logoPos="bc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-12" label="Story · 178 · logo tl" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-178.jpg" position="center 22%" overlay="top" logoPos="tl" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-13" label="Story · 187 · wordmark br" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-187.jpg" position="center 22%" overlay="even" logoPos="br" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-14" label="Story · 195 · wordmark cc" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-195.jpg" position="center 18%" overlay="center" logoPos="cc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-15" label="Story · 207 · logo bottom" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-207.jpg" position="center 22%" overlay="soft" logoPos="bc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="st-br-16" label="Story · 213 · wordmark tc" width={SW} height={SH}>
          <TplBrandedLogo safe="story" photo="Cumini_SS26-213.jpg" position="center 22%" overlay="even" logoPos="tc" logoColor="white" />
        </DCArtboard>
      </DCSection>

      {/* ─── 2 · BRANDED · 1:1 — solo lifestyle, niente still life ─ */}
      <DCSection id="sq-branded" title="02 · Branded · 1:1" subtitle="Solo lifestyle / model. Logo + overlay calibrati. Niente still-life qui — tutti scatti modella">
        <DCArtboard id="sq-br-1" label="1:1 · 090 · wordmark bottom" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-090.jpg" position="center 35%" overlay="soft" logoPos="bc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-2" label="1:1 · 200 · logo bottom" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-200.jpg" position="center 22%" overlay="soft" logoPos="bc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-3" label="1:1 · 066 · wordmark cc" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-066.jpg" position="center 25%" overlay="center" logoPos="cc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-4" label="1:1 · 092 · logo tl" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-092.jpg" position="center 25%" overlay="even" logoPos="tl" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-5" label="1:1 · 106 · wordmark tc" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-106.jpg" position="center 22%" overlay="top" logoPos="tc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-6" label="1:1 · 147 · wordmark bl" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-147.jpg" position="center 22%" overlay="even" logoPos="bl" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-7" label="1:1 · 164 · logo cc" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-164.jpg" position="center 22%" overlay="center" logoPos="cc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-8" label="1:1 · 169 · wordmark bc" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-169.jpg" position="center 25%" overlay="soft" logoPos="bc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-9" label="1:1 · 181 · wordmark tr" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-181.jpg" position="center 22%" overlay="soft" logoPos="tr" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-10" label="1:1 · 191 · logo bc" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-191.jpg" position="center 22%" overlay="soft" logoPos="bc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-11" label="1:1 · 193 · wordmark cc" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-193.jpg" position="center 22%" overlay="center" logoPos="cc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-12" label="1:1 · 201 · wordmark br" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-201.jpg" position="center 22%" overlay="even" logoPos="br" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-13" label="1:1 · 203 · logo tc" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-203.jpg" position="center 22%" overlay="top" logoPos="tc" logoColor="white" />
        </DCArtboard>
        <DCArtboard id="sq-br-14" label="1:1 · 210 · wordmark bc" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-210.jpg" position="center 25%" overlay="soft" logoPos="bc" logoColor="white" />
        </DCArtboard>
      </DCSection>

      {/* ─── 3 · SUMMER SALES 26 · 16:9 ─────────────────────── */}
      <DCSection id="ss26-wide" title="03 · Summer Sales 26 · 16:9" subtitle="Tipografia editoriale, logo discreto, overlay calibrato">
        <DCArtboard id="ss26-w-1" label="Summer Sales · top-aligned" width={W16} height={H16}>
          <TplEditorial photo="Cumini_SS26-200.jpg" position="center 22%" eyebrow="Saldi estivi · primavera estate 26" title="Summer Sales 26" sub="UP TO 50%  ·  Selezione SS26  ·  Spedizione gratuita 200€" logoPos="bl" textColor="white" overlay="even" size="md" />
        </DCArtboard>
        <DCArtboard id="ss26-w-2" label="Summer Sales · bottom typo" width={W16} height={H16}>
          <TplBottomTitle photo="Cumini_SS26-064.jpg" position="center 18%" eyebrow="SS 26 · sale" title="Summer Sales 26" sub="Selezione editoriale dei capi della stagione" logoPos="tl" textColor="white" overlay="soft" />
        </DCArtboard>
        <DCArtboard id="ss26-w-3" label="Summer Sales · split panel" width={W16} height={H16}>
          <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1.2fr 1fr', overflow: 'hidden', background: '#f0e8dc' }}>
            <div style={{ position: 'relative' }}>
              <PhotoCover src="Cumini_SS26-040.jpg" position="center 18%" />
            </div>
            <div style={{ padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#1a1a1a' }}>
              <CLogo size="sm" color="#1a1a1a" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Eyebrow color="#1a1a1a" size={10} track="0.42em">Saldi estivi</Eyebrow>
                <div style={{ fontFamily: CFONT, fontSize: 42, letterSpacing: '-0.02em', lineHeight: 1, fontWeight: 400 }}>Summer<br/>Sales 26.</div>
                <div style={{ width: 28, height: 1, background: '#1a1a1a', opacity: 0.4 }}/>
                <div style={{ fontFamily: CFONT, fontSize: 11, opacity: 0.6, letterSpacing: '0.32em', textTransform: 'uppercase' }}>fino al 50%</div>
              </div>
              <div style={{ fontFamily: CFONT, fontSize: 9, opacity: 0.5, letterSpacing: '0.32em', textTransform: 'uppercase' }}>cumini.com</div>
            </div>
          </div>
        </DCArtboard>
        <DCArtboard id="ss26-w-4" label="Summer Sales · gradient strip" width={W16} height={H16}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <PhotoCover src="Cumini_SS26-204.jpg" position="center 35%" />
            <div style={{ position: 'absolute', inset: 0, background: overlayDarkSoft }}/>
            <CuminiTextLogo pos="tl" color="#fff" size="sm" padding={28} />
            <Eyebrow color="#fff" size={10} track="0.42em"><div style={{ position: 'absolute', top: 28, right: 28 }}>SS 26</div></Eyebrow>
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
              <div style={{ background: 'linear-gradient(90deg, #e25c29 0%, #7e1e1e 100%)', height: 38, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px' }}>
                <span style={{ fontFamily: CFONT, fontSize: 13, color: '#fff', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Summer Sales 26</span>
                <span style={{ fontFamily: CFONT, fontSize: 11, color: '#fff', opacity: 0.85, letterSpacing: '0.36em', textTransform: 'uppercase' }}>fino al 50%</span>
              </div>
            </div>
          </div>
        </DCArtboard>
      </DCSection>

      {/* ─── 4 · SUMMER SALES 26 · 1:1 ──────────────────────── */}
      <DCSection id="ss26-sq" title="04 · Summer Sales 26 · 1:1" subtitle="Stesso messaggio, formato feed">
        <DCArtboard id="ss26-s-1" label="SS26 1:1 · centered display" width={SQ} height={SQ}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <PhotoCover src="Cumini_SS26-076.jpg" position="center 25%" />
            <div style={{ position: 'absolute', inset: 0, background: overlayCenterDark }}/>
            <CuminiTextLogo pos="tc" color="#fff" size="sm" padding={32} />
            <div style={{ position: 'absolute', top: '50%', left: 36, right: 36, transform: 'translateY(-50%)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
              <Eyebrow color="#fff" size={10} track="0.42em">Saldi estivi</Eyebrow>
              <div style={{ fontFamily: CFONT, fontSize: 56, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1, fontWeight: 400 }}>Summer<br/>Sales 26.</div>
              <div style={{ width: 32, height: 1, background: '#fff', opacity: 0.6, marginTop: 6 }}/>
              <Eyebrow color="#fff" size={10} track="0.42em">UP TO 50%</Eyebrow>
            </div>
          </div>
        </DCArtboard>
        <DCArtboard id="ss26-s-2" label="SS26 1:1 · bottom typo" width={SQ} height={SQ}>
          <TplBottomTitle photo="Cumini_SS26-090.jpg" position="center 35%" eyebrow="SS 26" title="Summer Sales 26" sub="Selezione luxury · fino al 50%" logoPos="tl" textColor="white" overlay="soft" />
        </DCArtboard>
        <DCArtboard id="ss26-s-3" label="SS26 1:1 · split horizontal" width={SQ} height={SQ}>
          <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateRows: '1.4fr 1fr', overflow: 'hidden', background: '#1a1a1a' }}>
            <div style={{ position: 'relative' }}>
              <PhotoCover src="Cumini_SS26-167.jpg" position="center 18%" />
            </div>
            <div style={{ padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Wordmark color="#fff" size="sm" />
                <Eyebrow color="#fff" size={9} track="0.36em">SS · 26</Eyebrow>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ fontFamily: CFONT, fontSize: 38, letterSpacing: '-0.02em', lineHeight: 1, fontWeight: 400 }}>Summer Sales 26</div>
                <div style={{ width: 24, height: 1, background: '#fff', opacity: 0.5, marginTop: 4 }}/>
              </div>
              <div style={{ fontFamily: CFONT, fontSize: 10, color: '#fff', opacity: 0.65, letterSpacing: '0.32em', textTransform: 'uppercase' }}>fino al 50% · ss26 · cumini.com</div>
            </div>
          </div>
        </DCArtboard>
        <DCArtboard id="ss26-s-4" label="SS26 1:1 · cream panel" width={SQ} height={SQ}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#f0e8dc' }}>
            <div style={{ position: 'absolute', inset: 24, display: 'grid', gridTemplateRows: '1fr auto', gap: 24 }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <PhotoCover src="Cumini_SS26-064.jpg" position="center 18%" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <CLogo size="sm" color="#1a1a1a" />
                  <Eyebrow color="#1a1a1a" size={9} track="0.42em">Saldi · SS26</Eyebrow>
                </div>
                <div style={{ fontFamily: CFONT, fontSize: 32, color: '#1a1a1a', letterSpacing: '-0.02em', lineHeight: 1, fontWeight: 400 }}>Summer Sales 26.</div>
              </div>
            </div>
          </div>
        </DCArtboard>
      </DCSection>

      {/* ─── 5 · DPA / DABA Facebook ads ────────────────────── */}
      <DCSection id="dpa" title="05 · DPA · Facebook ads" subtitle="Solo 1:1. Striscia sotto + logo · 4 motivi (Black, Summer, Winter, Archive) + 4 cutout prodotto">
        <DCArtboard id="dpa-blk-sq" label="DPA · Full Black · 1:1" width={SQ} height={SQ}>
          <TplDPA photo="Cumini_still_life_SS26-088.jpg" position="center 60%" variant="black" label="ss26 · cumini.com" />
        </DCArtboard>
        <DCArtboard id="dpa-sum-sq" label="DPA · Summer Sales · 1:1" width={SQ} height={SQ}>
          <TplDPA photo="Cumini_still_life_SS26-040.jpg" position="center 60%" variant="summer" label="summer sales · fino al 50%" />
        </DCArtboard>
        <DCArtboard id="dpa-win-sq" label="DPA · Winter Sales · 1:1" width={SQ} height={SQ}>
          <TplDPA photo="Cumini_still_life_SS26-024.jpg" position="center 55%" variant="winter" label="winter sales · -40%" />
        </DCArtboard>
        <DCArtboard id="dpa-arc-sq" label="DPA · Cumini Archive · 1:1" width={SQ} height={SQ}>
          <TplDPA photo="Cumini_still_life_SS26-180.jpg" position="center 65%" variant="archive" label="cumini archive · permanent sale" />
        </DCArtboard>

        {/* ─ Cutout product DPA ─ stesso motivo, prodotto scontornato su cream ─ */}
        <DCArtboard id="dpa-cut-blouse-blk" label="DPA cutout · blouse · Black" width={SQ} height={SQ}>
          <TplDPACutout photo="cutout_blouse.webp" variant="black" label="ss26 · new in" bg="#f0e8dc" pad={48} />
        </DCArtboard>
        <DCArtboard id="dpa-cut-ysl-sum" label="DPA cutout · YSL bag · Summer" width={SQ} height={SQ}>
          <TplDPACutout photo="cutout_ysl_bag.webp" variant="summer" label="summer sales · fino al 50%" bg="#ece2d2" pad={48} />
        </DCArtboard>
        <DCArtboard id="dpa-cut-flip-arc" label="DPA cutout · flip-flop · Archive" width={SQ} height={SQ}>
          <TplDPACutout photo="cutout_flipflop.webp" variant="archive" label="cumini archive · permanent sale" bg="#e6dcc9" pad={50} />
        </DCArtboard>
        <DCArtboard id="dpa-cut-bal-win" label="DPA cutout · Balenciaga · Winter" width={SQ} height={SQ}>
          <TplDPACutout photo="cutout_balenciaga.webp" variant="winter" label="winter sales · -40%" bg="#eae3d4" pad={52} />
        </DCArtboard>
      </DCSection>

      {/* ─── 6 · LEAD GEN ─────────────────────────────────── */}
      <DCSection id="leadgen" title="06 · Lead Generation" subtitle="Logo + 'Accedi al 10% di sconto' · 16:9 e 1:1, varianti split / overlay">
        <DCArtboard id="lg-w-1" label="LeadGen 16:9 · split cream" width={W16} height={H16}>
          <TplLeadGen photo="Cumini_SS26-200.jpg" position="center 25%" headline="Accedi al 10% di sconto." sub="Iscriviti alla newsletter" layout="split-right" accent="cream" />
        </DCArtboard>
        <DCArtboard id="lg-w-2" label="LeadGen 16:9 · overlay" width={W16} height={H16}>
          <TplLeadGen photo="Cumini_SS26-090.jpg" position="center 30%" headline="Accedi al 10% di sconto." sub="Newsletter · primo ordine" layout="overlay" />
        </DCArtboard>
        <DCArtboard id="lg-s-1" label="LeadGen 1:1 · split cream" width={SQ} height={SQ}>
          <TplLeadGen photo="Cumini_SS26-167.jpg" position="center 22%" headline="Accedi al 10% di sconto." sub="Iscriviti alla newsletter" layout="split-right" accent="cream" />
        </DCArtboard>
        <DCArtboard id="lg-s-2" label="LeadGen 1:1 · overlay" width={SQ} height={SQ}>
          <TplLeadGen photo="Cumini_SS26-064.jpg" position="center 22%" headline="Accedi al 10% di sconto." sub="Newsletter Cumini" layout="overlay" />
        </DCArtboard>
      </DCSection>

      {/* ─── 7 · RACCOLTA / COLLAGE ─────────────────────────── */}
      <DCSection id="raccolta" title="07 · Raccolta · collage" subtitle="Hero + 4 thumbnail · evoluzione delle reference allegate · 1:1 e 16:9">
        <DCArtboard id="rc-s-1" label="Raccolta 1:1 · v1 women" width={SQ} height={SQ}>
          <TplCollage5
            hero="Cumini_SS26-064.jpg"
            position="center 18%"
            thumbs={[
              { src: 'Cumini_still_life_SS26-040.jpg' },
              { src: 'Cumini_still_life_SS26-088.jpg' },
              { src: 'Cumini_still_life_SS26-180.jpg' },
              { src: 'Cumini_still_life_SS26-117.jpg' },
            ]}
          />
        </DCArtboard>
        <DCArtboard id="rc-s-2" label="Raccolta 1:1 · v2 mixed" width={SQ} height={SQ}>
          <TplCollage5
            hero="Cumini_SS26-200.jpg"
            position="center 22%"
            thumbs={[
              { src: 'Cumini_still_life_SS26-024.jpg' },
              { src: 'Cumini_still_life_SS26-130.jpg' },
              { src: 'Cumini_still_life_SS26-160.jpg' },
              { src: 'Cumini_still_life_SS26-149.jpg' },
            ]}
          />
        </DCArtboard>
        <DCArtboard id="rc-w-1" label="Raccolta 16:9 · hero left" width={W16} height={H16}>
          <TplCollage5Wide
            hero="Cumini_SS26-167.jpg"
            position="center 18%"
            thumbs={[
              { src: 'Cumini_still_life_SS26-040.jpg' },
              { src: 'Cumini_still_life_SS26-024.jpg' },
              { src: 'Cumini_still_life_SS26-180.jpg' },
              { src: 'Cumini_still_life_SS26-149.jpg' },
            ]}
          />
        </DCArtboard>
        <DCArtboard id="rc-w-2" label="Raccolta 16:9 · v2 men" width={W16} height={H16}>
          <TplCollage5Wide
            hero="Cumini_SS26-076.jpg"
            position="center 22%"
            thumbs={[
              { src: 'Cumini_still_life_SS26-117.jpg' },
              { src: 'Cumini_still_life_SS26-130.jpg' },
              { src: 'Cumini_still_life_SS26-088.jpg' },
              { src: 'Cumini_still_life_SS26-149.jpg' },
            ]}
          />
        </DCArtboard>

        {/* ─ 9:16 stories collage ─ */}
        <DCArtboard id="rc-st-1" label="Raccolta 9:16 · hero + 4 thumb · women" width={SW} height={SH}>
          <TplCollage5Story safe="story"
            hero="Cumini_SS26-064.jpg"
            position="center 18%"
            thumbs={[
              { src: 'Cumini_SS26-090.jpg', position: 'center 25%' },
              { src: 'Cumini_SS26-040.jpg', position: 'center 22%' },
              { src: 'Cumini_SS26-167.jpg', position: 'center 18%' },
              { src: 'Cumini_SS26-102.jpg', position: 'center 18%' },
            ]}
          />
        </DCArtboard>
        <DCArtboard id="rc-st-2" label="Raccolta 9:16 · hero + 4 thumb · mixed" width={SW} height={SH}>
          <TplCollage5Story safe="story"
            hero="Cumini_SS26-200.jpg"
            position="center 22%"
            thumbs={[
              { src: 'Cumini_still_life_SS26-040.jpg' },
              { src: 'Cumini_SS26-076.jpg', position: 'center 22%' },
              { src: 'Cumini_still_life_SS26-149.jpg' },
              { src: 'Cumini_SS26-064.jpg', position: 'center 18%' },
            ]}
          />
        </DCArtboard>
        <DCArtboard id="rc-st-3" label="Raccolta 9:16 · 3 strisce · model" width={SW} height={SH}>
          <TplCollage3Story safe="story"
            photos={[
              { src: 'Cumini_SS26-090.jpg', position: 'center 25%' },
              { src: 'Cumini_SS26-200.jpg', position: 'center 22%' },
              { src: 'Cumini_SS26-040.jpg', position: 'center 22%' },
            ]}
            logoColor="white"
          />
        </DCArtboard>
        <DCArtboard id="rc-st-4" label="Raccolta 9:16 · 3 strisce · still" width={SW} height={SH}>
          <TplCollage3Story safe="story"
            photos={[
              { src: 'Cumini_still_life_SS26-040.jpg', position: 'center 60%' },
              { src: 'Cumini_still_life_SS26-088.jpg', position: 'center 60%' },
              { src: 'Cumini_still_life_SS26-149.jpg', position: 'center 70%' },
            ]}
            logoColor="black"
          />
        </DCArtboard>
      </DCSection>

      {/* ─── 8 · BONUS · Editorial set ───────────────────── */}
      <DCSection id="bonus-edit" title="08 · Bonus · editorial set" subtitle="Variazioni sul tema 'Just in' del reference, applicate al sistema CUMINI">
        <DCArtboard id="bn-1" label="Just in · 9:16 story" width={SW} height={SH}>
          <TplEditorial safe="story" photo="Cumini_SS26-064.jpg" position="center 22%" eyebrow="New · today" title="Just in." logoPos="bc" textColor="white" overlay="soft" size="lg" />
        </DCArtboard>
        <DCArtboard id="bn-2" label="Just in · 1:1" width={SQ} height={SQ}>
          <TplEditorial photo="Cumini_SS26-167.jpg" position="center 18%" eyebrow="New · today" title="Just in." logoPos="bl" textColor="white" overlay="soft" size="md" />
        </DCArtboard>
        <DCArtboard id="bn-3" label="Just in · 16:9" width={W16} height={H16}>
          <TplEditorial photo="Cumini_SS26-040.jpg" position="center 18%" eyebrow="Nuovi arrivi · ss26" title="Just in." logoPos="bl" textColor="white" overlay="soft" size="md" />
        </DCArtboard>
        <DCArtboard id="bn-4" label="Triptych editorial 16:9" width={W16} height={H16}>
          <TplTriptych photos={[
            { src: 'Cumini_SS26-040.jpg', position: 'center 18%' },
            { src: 'Cumini_SS26-090.jpg', position: 'center 25%' },
            { src: 'Cumini_SS26-167.jpg', position: 'center 18%' },
          ]} />
        </DCArtboard>
        <DCArtboard id="bn-5" label="Archive · 9:16 story" width={SW} height={SH}>
          <TplArchive safe="story" photo="Cumini_SS26-076.jpg" position="center 25%" />
        </DCArtboard>
        <DCArtboard id="bn-6" label="Archive · 1:1" width={SQ} height={SQ}>
          <TplArchive photo="Cumini_SS26-200.jpg" position="center 22%" />
        </DCArtboard>
      </DCSection>

      {/* ─── 8.B · BONUS · Editorial — eme-style (code + claim + cats) ─── */}
      <DCSection id="bonus-edit-eme" title="08.B · Bonus · editorial set (eme-style)" subtitle="Variante editoriale ispirata al reference emestudios: codice collezione, claim, lista categorie, logo grande in basso a sinistra. Solo 1:1 e 9:16">
        <DCArtboard id="bne-1" label="Eme · 9:16 · women / suede" width={SW} height={SH}>
          <TplEmeStyle
            photo="Cumini_SS26-040.jpg"
            position="center 22%"
            code="001 — SS26"
            claim={['Eredità di famiglia', 'Collection']}
            cats={['BAGS','SHOES','BELTS','SUNGLASSES','SCARVES','JEWELLERY','OUTERWEAR','READY TO WEAR']}
            overlay="soft"
          />
        </DCArtboard>
        <DCArtboard id="bne-2" label="Eme · 9:16 · stripe shirt" width={SW} height={SH}>
          <TplEmeStyle
            photo="Cumini_SS26-167.jpg"
            position="center 18%"
            code="002 — SS26"
            claim={['Quattro generazioni', 'di stile']}
            cats={['CAMICIE','POLO','MAGLIE','PANTALONI','GIACCHE','SCARPE','BORSE','ACCESSORI']}
            overlay="darker"
          />
        </DCArtboard>
        <DCArtboard id="bne-3" label="Eme · 9:16 · denim / minimal" width={SW} height={SH}>
          <TplEmeStyle
            photo="Cumini_SS26-064.jpg"
            position="center 22%"
            code="003 — SS26"
            claim={['Selezione editoriale', 'della stagione']}
            cats={['DENIM','TEES','OUTERWEAR','SHOES','BAGS','BELTS','HATS','EYEWEAR']}
            overlay="soft"
          />
        </DCArtboard>
        <DCArtboard id="bne-4" label="Eme · 1:1 · women / leather" width={SQ} height={SQ}>
          <TplEmeStyle
            photo="Cumini_SS26-090.jpg"
            position="center 25%"
            code="001 — SS26"
            claim={['Eredità di famiglia', 'Collection']}
            cats={['BAGS','SHOES','BELTS','SUNGLASSES','OUTERWEAR']}
            overlay="soft"
          />
        </DCArtboard>
        <DCArtboard id="bne-5" label="Eme · 1:1 · stripe shirt" width={SQ} height={SQ}>
          <TplEmeStyle
            photo="Cumini_SS26-167.jpg"
            position="center 22%"
            code="002 — SS26"
            claim={['Quattro generazioni', 'di stile']}
            cats={['CAMICIE','POLO','MAGLIE','GIACCHE','SCARPE']}
            overlay="darker"
          />
        </DCArtboard>
        <DCArtboard id="bne-6" label="Eme · 1:1 · suede" width={SQ} height={SQ}>
          <TplEmeStyle
            photo="Cumini_SS26-040.jpg"
            position="center 18%"
            code="003 — SS26"
            claim={['Selezione editoriale', 'della stagione']}
            cats={['DENIM','TEES','OUTERWEAR','SHOES','BAGS']}
            overlay="soft"
          />
        </DCArtboard>
      </DCSection>

      {/* ─── 9 · BONUS · still-life feed posts (no copy, only logo) ── */}
      <DCSection id="bonus-still" title="09 · Bonus · still life branded" subtitle="Borse e dettagli still life con logo discreto. Per feed Instagram a ritmo basso">
        <DCArtboard id="bs-1" label="Still · blue bag" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_still_life_SS26-024.jpg" position="center 60%" overlay="light" logoPos="bc" logoColor="ink" />
        </DCArtboard>
        <DCArtboard id="bs-2" label="Still · pink backpack" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_still_life_SS26-077.jpg" position="center 60%" overlay="light" logoPos="tc" />
        </DCArtboard>
        <DCArtboard id="bs-3" label="Still · prada bp" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_still_life_SS26-117.jpg" position="center 65%" overlay="light" logoPos="tc" logoColor="ink" />
        </DCArtboard>
        <DCArtboard id="bs-4" label="Still · sandals" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_still_life_SS26-149.jpg" position="center 70%" overlay="light" logoPos="bc" logoColor="ink" />
        </DCArtboard>
        <DCArtboard id="bs-5" label="Still · ysl bucket" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_still_life_SS26-180.jpg" position="center 70%" overlay="light" logoPos="tc" logoColor="ink" />
        </DCArtboard>
        <DCArtboard id="bs-6" label="Still · valentino bag" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_still_life_SS26-183.jpg" position="center 75%" overlay="light" logoPos="bc" logoColor="ink" />
        </DCArtboard>
      </DCSection>

      {/* ─── 10 · BONUS · model feed posts 1:1 ─────────────── */}
      <DCSection id="bonus-model" title="10 · Bonus · model branded · 1:1" subtitle="Per feed Instagram, branded posts senza CTA — tutto soft, leggero">
        <DCArtboard id="bm-1" label="Model 1:1 · v1" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-102.jpg" position="center 18%" overlay="even" logoPos="bl" />
        </DCArtboard>
        <DCArtboard id="bm-2" label="Model 1:1 · v2" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-186.jpg" position="center 18%" overlay="even" logoPos="tr" />
        </DCArtboard>
        <DCArtboard id="bm-3" label="Model 1:1 · v3" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-181.jpg" position="center 22%" overlay="even" logoPos="bc" />
        </DCArtboard>
        <DCArtboard id="bm-4" label="Model 1:1 · v4" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-176.jpg" position="center 25%" overlay="even" logoPos="tl" />
        </DCArtboard>
        <DCArtboard id="bm-5" label="Model 1:1 · v5" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-211.jpg" position="center 22%" overlay="even" logoPos="bc" />
        </DCArtboard>
        <DCArtboard id="bm-6" label="Model 1:1 · v6" width={SQ} height={SQ}>
          <TplBrandedLogo photo="Cumini_SS26-147.jpg" position="center 22%" overlay="even" logoPos="br" />
        </DCArtboard>
      </DCSection>

    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
