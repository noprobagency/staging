/* ============================================================
   MING STREET — Paid Social Creatives (28 ads)
   Series A · NEW IN (14) — Series B · BESTSELLERS (14)
   Real product photography from Ming Street brands.
   Each piece is mapped to its strongest format (1:1 or 9:16).
   ============================================================ */

// ---------- Image map: key → relative path ----------
const IMG = {
  // Lifestyle / studio editorial — strongest as 9:16 stories
  "lostctrl-jersey":            "assets/ads/lostctrl-jersey.jpg",
  "lostctrl-zip-pants":         "assets/ads/lostctrl-zip-pants.jpg",
  "unknownworld-plaid-shorts":  "assets/ads/unknownworld-plaid-shorts.webp",
  "masonprince-pink-hoodie":    "assets/ads/masonprince-pink-hoodie.webp",
  "yofficial-dark-cargo":       "assets/ads/yofficial-dark-cargo.jpg",
  "yofficial-squat-backpack":   "assets/ads/yofficial-squat-backpack.jpg",
  "oldorder-olive-stripe-pants":"assets/ads/oldorder-olive-stripe-pants.jpg",
  "beerbro-spirit-mohair":      "assets/ads/beerbro-spirit-mohair.jpg",
  "beerbro-almost-camo":        "assets/ads/beerbro-almost-camo.jpg",

  // Portraits (square-friendly)
  "medm-mermaid-tee":           "assets/ads/medm-mermaid-tee.jpg",
  "medm-m-patch-tee":           "assets/ads/medm-m-patch-tee.jpg",
  "lostctrl-monogram-jacket":   "assets/ads/lostctrl-monogram-jacket.jpg",

  // Flatlay / studio product (1:1)
  "d5ove-baggy-denim":          "assets/ads/d5ove-baggy-denim.jpg",
  "masonprince-spokesman-back": "assets/ads/masonprince-spokesman-back.webp",
  "masonprince-unisex-distressed":"assets/ads/masonprince-unisex-distressed.webp",
  "personsoul-gray-8-pants":    "assets/ads/personsoul-gray-8-pants.jpg",
  "fpa-jacket-range":           "assets/ads/fpa-jacket-range.jpg",
  "oldorder-shoes":             "assets/ads/oldorder-shoes.jpg",
};

const imgPath = (key) => {
  // Allow bundler override if window.__resources["img_<key>"] exists; otherwise use the local path.
  if (window.__resources && window.__resources["img_" + key]) return window.__resources["img_" + key];
  return IMG[key] || key;
};

// ---------- Overlay components ----------
// theme === "light" → ink type, soft white scrim. Default "dark" → white type, black scrim.

function MSOverlayVertical({ title, subtitle, brand, line2, theme = "dark" }) {
  const ink = theme === "light";
  const fg = ink ? "#121212" : "#fff";
  const text = (op) => ({
    color: fg,
    opacity: op,
    textShadow: ink ? "none" : "0 1px 12px rgba(0,0,0,0.18)",
  });
  return (
    <div style={{
      position: "absolute",
      bottom: 18, left: 18,
      maxWidth: "78%",
      lineHeight: 1.15,
      fontFamily: "'Plus Jakarta Sans','Helvetica Neue',Arial,sans-serif",
      pointerEvents: "none",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, ...text(0.85) }}>
        <span style={{ fontFamily: "'Noto Sans SC',sans-serif", fontWeight: 700, fontSize: 14, lineHeight: 1 }}>明</span>
        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}>MING STREET</span>
      </div>
      <div style={{ width: 96, height: 0.5, background: fg, opacity: 0.45, margin: "8px 0 10px" }} />
      <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: "-0.005em", ...text(0.95) }}>{title}</div>
      {brand ? (
        <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 6, ...text(0.6) }}>{brand}</div>
      ) : null}
      {subtitle ? (
        <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: brand ? 2 : 6, ...text(0.55) }}>{subtitle}</div>
      ) : null}
      {line2 ? (
        <div style={{ fontFamily: "'Noto Sans SC',sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: "0.06em", marginTop: 4, ...text(0.55) }}>{line2}</div>
      ) : null}
      <div style={{ fontSize: 8.5, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 10, ...text(0.45) }}>MINGSTREET.COM</div>
    </div>
  );
}

function MSOverlaySplit({ title, subtitle, brand, line2, theme = "dark" }) {
  const ink = theme === "light";
  const fg = ink ? "#121212" : "#fff";
  const text = (op) => ({
    color: fg,
    opacity: op,
    textShadow: ink ? "none" : "0 1px 12px rgba(0,0,0,0.18)",
  });
  return (
    <div style={{
      position: "absolute",
      left: 18, right: 18, bottom: 18,
      display: "flex", justifyContent: "space-between", alignItems: "flex-end",
      fontFamily: "'Plus Jakarta Sans','Helvetica Neue',Arial,sans-serif",
      pointerEvents: "none",
    }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 7, ...text(0.85) }}>
          <span style={{ fontFamily: "'Noto Sans SC',sans-serif", fontWeight: 700, fontSize: 14, lineHeight: 1 }}>明</span>
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}>MING STREET</span>
        </div>
        <div style={{ fontSize: 8.5, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 8, ...text(0.45) }}>MINGSTREET.COM</div>
      </div>
      <div style={{ textAlign: "right", maxWidth: "60%" }}>
        <div style={{ fontSize: 13, fontWeight: 500, ...text(0.95) }}>{title}</div>
        {brand ? (
          <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 4, ...text(0.6) }}>{brand}</div>
        ) : null}
        {subtitle ? (
          <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 2, ...text(0.55) }}>{subtitle}</div>
        ) : null}
        {line2 ? (
          <div style={{ fontFamily: "'Noto Sans SC',sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: "0.06em", marginTop: 2, ...text(0.55) }}>{line2}</div>
        ) : null}
      </div>
    </div>
  );
}

/* ---------- AdCreative wrapper ---------- */
function AdCreative({
  format = "square",
  image,                // key into IMG map
  imagePos = "center",
  imageScale = 1,
  variant = "vertical",
  theme = "dark",       // "dark" (white text) or "light" (ink text)
  fit = "cover",        // cover | contain
  bgFill = "#0a0908",   // ground when fit=contain
  ...overlay
}) {
  const Overlay = variant === "split" ? MSOverlaySplit : MSOverlayVertical;
  const isStory = format === "story";
  const ink = theme === "light";
  const groundColor = ink ? "#FFFFFF" : bgFill;

  return (
    <div style={{
      width: "100%", height: "100%",
      position: "relative",
      overflow: "hidden",
      background: groundColor,
      fontFamily: "'Plus Jakarta Sans','Helvetica Neue',Arial,sans-serif",
    }}>
      {/* 明 placeholder behind for fallback */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Noto Sans SC',sans-serif", fontWeight: 700,
        fontSize: isStory ? 240 : 180,
        color: ink ? "rgba(18,18,18,0.04)" : "rgba(255,255,255,0.04)",
        zIndex: 0,
      }}>明</div>

      <img
        src={imgPath(image)}
        alt=""
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: fit, objectPosition: imagePos,
          transform: imageScale !== 1 ? `scale(${imageScale})` : undefined,
          transformOrigin: imagePos,
          filter: "saturate(0.94) contrast(1.02)",
        }}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />

      {/* Scrim — direction & color depend on theme */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        height: isStory ? "44%" : "40%",
        background: ink
          ? "linear-gradient(0deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.55) 35%, rgba(255,255,255,0) 100%)"
          : "linear-gradient(0deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0) 100%)",
        pointerEvents: "none", zIndex: 1,
      }} />

      <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        <Overlay theme={theme} {...overlay} />
      </div>
    </div>
  );
}

/* ---------- AD DATA ---------- */

const SQ = { format: "square", width: 540, height: 540 };
const ST = { format: "story",  width: 540, height: 960 };

/* ============================================================
   SERIES A — NEW IN (14)
   ============================================================ */
const NEW_IN = [
  // A1 — Square — Lost Control jersey hero (studio smoke)
  { id: "A1", label: "A1 · Lost Control jersey · 1:1", ...SQ,
    image: "lostctrl-jersey", imagePos: "center 18%", imageScale: 1.35,
    variant: "vertical", theme: "dark",
    title: "New In · 新品",
    brand: "Lost Control",
    subtitle: "SS26 · Spring Summer",
  },
  // A2 — Story — Lost Control jersey full body
  { id: "A2", label: "A2 · Lost Control jersey · 9:16", ...ST,
    image: "lostctrl-jersey", imagePos: "center 22%",
    variant: "vertical", theme: "dark",
    title: "Just Landed",
    brand: "Lost Control",
    subtitle: "Independent Chinese Labels · SS26",
  },
  // A3 — Square — Lost Control zipper pants detail
  { id: "A3", label: "A3 · Lost Control zip pants · 1:1", ...SQ,
    image: "lostctrl-zip-pants", imagePos: "center 35%", imageScale: 1.15,
    variant: "vertical", theme: "dark",
    title: "New In",
    brand: "Lost Control",
    subtitle: "Zipped Wide Pants",
  },
  // A4 — Story — Unknownworld plaid + boots
  { id: "A4", label: "A4 · Unknownworld plaid · 9:16", ...ST,
    image: "unknownworld-plaid-shorts", imagePos: "center 35%",
    variant: "vertical", theme: "light",
    title: "New In · 新品",
    brand: "Unknownworld",
    subtitle: "Plaid Shirt · SS26",
  },
  // A5 — Square — D5OVE baggy denim flatlay
  { id: "A5", label: "A5 · D5OVE baggy denim · 1:1", ...SQ,
    image: "d5ove-baggy-denim", imagePos: "center 55%", imageScale: 1.1,
    variant: "vertical", theme: "light",
    title: "Just Landed",
    brand: "D5OVE",
    subtitle: "Washed Baggy Denim",
  },
  // A6 — Story — Masonprince pink hoodie woman
  { id: "A6", label: "A6 · Masonprince pink hoodie · 9:16", ...ST,
    image: "masonprince-pink-hoodie", imagePos: "center 35%",
    variant: "vertical", theme: "light",
    title: "New In",
    brand: "Masonprince",
    subtitle: "Unisex Zip Hoodie · SS26",
  },
  // A7 — Square — Masonprince Spokesman tee back (light bg)
  { id: "A7", label: "A7 · Masonprince Spokesman tee · 1:1", ...SQ,
    image: "masonprince-spokesman-back", imagePos: "center 45%", imageScale: 1.1,
    variant: "vertical", theme: "light",
    title: "New In · 新品",
    brand: "Masonprince",
    subtitle: "Spokesman Tee",
  },
  // A8 — Story — Y Official dark tee + cargo
  { id: "A8", label: "A8 · Y Official cargo · 9:16", ...ST,
    image: "yofficial-dark-cargo", imagePos: "center 30%",
    variant: "split", theme: "dark",
    title: "New In",
    brand: "Y Official",
    subtitle: "SS26 · Spring Summer",
  },
  // A9 — Square — Masonprince Unisex distressed tee (light)
  { id: "A9", label: "A9 · Masonprince distressed · 1:1", ...SQ,
    image: "masonprince-unisex-distressed", imagePos: "center 45%", imageScale: 1.1,
    variant: "vertical", theme: "light",
    title: "New In",
    brand: "Masonprince",
    subtitle: "Unisex Distressed Tee",
  },
  // A10 — Story — Old Order olive stripe pants worn
  { id: "A10", label: "A10 · Old Order stripe pants · 9:16", ...ST,
    image: "oldorder-olive-stripe-pants", imagePos: "center 50%",
    variant: "vertical", theme: "dark",
    title: "Just Landed",
    brand: "Old Order",
    subtitle: "Tear-Away Track Pants",
  },
  // A11 — Square — Personsoul gray #8 pants flatlay
  { id: "A11", label: "A11 · Personsoul #8 pants · 1:1", ...SQ,
    image: "personsoul-gray-8-pants", imagePos: "center 50%", imageScale: 1.05,
    variant: "vertical", theme: "light",
    title: "New In · 新品",
    brand: "Personsoul",
    subtitle: "Drawstring Cocoon Pant",
  },
  // A12 — Story — Beerbro Spirit mohair sweater
  { id: "A12", label: "A12 · Beerbro Spirit mohair · 9:16", ...ST,
    image: "beerbro-spirit-mohair", imagePos: "center 28%",
    variant: "vertical", theme: "dark",
    title: "New In",
    brand: "Beerbro",
    subtitle: "Spirit Mohair Knit · SS26",
  },
  // A13 — Square — MEDM M-patch tee woman (studio blue)
  { id: "A13", label: "A13 · MEDM M-patch · 1:1", ...SQ,
    image: "medm-m-patch-tee", imagePos: "center 18%", imageScale: 1.3,
    variant: "vertical", theme: "dark",
    title: "New In · 新品",
    brand: "MEDM",
    subtitle: "Mr. Enjoy Patch Tee",
  },
  // A14 — Story — Y Official squat with backpack
  { id: "A14", label: "A14 · Y Official backpack · 9:16", ...ST,
    image: "yofficial-squat-backpack", imagePos: "center 40%",
    variant: "vertical", theme: "dark",
    title: "This Week's Picks",
    brand: "Y Official",
    line2: "新品 · 本周精选",
  },
];

/* ============================================================
   SERIES B — BESTSELLERS (14)
   ============================================================ */
const BESTSELLERS = [
  // B1 — Square — MEDM mermaid graphic tee (studio blue)
  { id: "B1", label: "B1 · MEDM mermaid tee · 1:1", ...SQ,
    image: "medm-mermaid-tee", imagePos: "center 22%", imageScale: 1.3,
    variant: "vertical", theme: "dark",
    title: "Best Sellers · 热销",
    brand: "MEDM",
    subtitle: "Graphic Back Tee",
  },
  // B2 — Story — Lost Control jersey (hero icon)
  { id: "B2", label: "B2 · Lost Control jersey · 9:16", ...ST,
    image: "lostctrl-jersey", imagePos: "center 22%",
    variant: "split", theme: "dark",
    title: "Best Sellers",
    brand: "Lost Control",
    subtitle: "SS26 · Spring Summer",
  },
  // B3 — Square — FPA jacket range grid (multi-product)
  { id: "B3", label: "B3 · FPA jacket range · 1:1", ...SQ,
    image: "fpa-jacket-range", imagePos: "center", imageScale: 1.1,
    variant: "vertical", theme: "light",
    title: "Best Sellers · 热销",
    brand: "FPA",
    subtitle: "Tech Jacket · Six Colors",
  },
  // B4 — Story — Beerbro Almost sweater + camo, sitting
  { id: "B4", label: "B4 · Beerbro Almost camo · 9:16", ...ST,
    image: "beerbro-almost-camo", imagePos: "center 50%",
    variant: "vertical", theme: "dark",
    title: "Best Sellers",
    brand: "Beerbro",
    subtitle: "Almost Crewneck",
  },
  // B5 — Square — Old Order shoes flatlay
  { id: "B5", label: "B5 · Old Order shoes · 1:1 · $148", ...SQ,
    image: "oldorder-shoes", imagePos: "center 60%", imageScale: 1.05,
    variant: "vertical", theme: "light",
    title: "Bestseller",
    brand: "Old Order",
    subtitle: "$148 · Baseball Trainer",
  },
  // B6 — Story — Lost Control zip pants close (worn vertical)
  { id: "B6", label: "B6 · Lost Control zip pants · 9:16", ...ST,
    image: "lostctrl-zip-pants", imagePos: "center 50%",
    variant: "vertical", theme: "dark",
    title: "Best Sellers · 热销",
    brand: "Lost Control",
    subtitle: "Zipped Wide Pants",
  },
  // B7 — Square — Masonprince Spokesman tee (back flatlay)
  { id: "B7", label: "B7 · Masonprince Spokesman · 1:1", ...SQ,
    image: "masonprince-spokesman-back", imagePos: "center 45%", imageScale: 1.1,
    variant: "vertical", theme: "light",
    title: "Best Sellers",
    brand: "Masonprince",
    subtitle: "Spokesman Tee · Bestseller",
  },
  // B8 — Story — Pink hoodie woman (worn vertical)
  { id: "B8", label: "B8 · Masonprince pink hoodie · 9:16", ...ST,
    image: "masonprince-pink-hoodie", imagePos: "center 35%",
    variant: "vertical", theme: "light",
    title: "Best Sellers",
    brand: "Masonprince",
    subtitle: "Zip Hoodie · SS26",
  },
  // B9 — Square — Lost Control monogram jacket portrait
  { id: "B9", label: "B9 · Lost Control monogram · 1:1", ...SQ,
    image: "lostctrl-monogram-jacket", imagePos: "center 25%", imageScale: 1.15,
    variant: "vertical", theme: "light",
    title: "Best Sellers · 热销",
    brand: "Lost Control",
    subtitle: "Monogram Track Jacket",
  },
  // B10 — Story — Unknownworld plaid full body
  { id: "B10", label: "B10 · Unknownworld plaid · 9:16", ...ST,
    image: "unknownworld-plaid-shorts", imagePos: "center 40%",
    variant: "split", theme: "light",
    title: "Best Sellers",
    brand: "Unknownworld",
    subtitle: "The labels people keep coming back for",
  },
  // B11 — Square — Masonprince distressed tee (light)
  { id: "B11", label: "B11 · Masonprince distressed · 1:1", ...SQ,
    image: "masonprince-unisex-distressed", imagePos: "center 45%", imageScale: 1.1,
    variant: "vertical", theme: "light",
    title: "Best Sellers",
    brand: "Masonprince",
    subtitle: "Unisex Distressed · $78",
  },
  // B12 — Story — Y Official squat with backpack
  { id: "B12", label: "B12 · Y Official backpack · 9:16", ...ST,
    image: "yofficial-squat-backpack", imagePos: "center 40%",
    variant: "vertical", theme: "dark",
    title: "Best Sellers · 热销",
    brand: "Y Official",
    subtitle: "Tech Backpack · SS26",
  },
  // B13 — Square — Personsoul #8 pants flatlay
  { id: "B13", label: "B13 · Personsoul #8 pants · 1:1", ...SQ,
    image: "personsoul-gray-8-pants", imagePos: "center 50%", imageScale: 1.05,
    variant: "vertical", theme: "light",
    title: "Best Sellers",
    brand: "Personsoul",
    subtitle: "Drawstring Cocoon Pant",
  },
  // B14 — Story — Beerbro Spirit mohair (close shot)
  { id: "B14", label: "B14 · Beerbro Spirit close · 9:16", ...ST,
    image: "beerbro-spirit-mohair", imagePos: "center 35%",
    variant: "vertical", theme: "dark",
    title: "The labels people keep coming back for.",
    brand: "Beerbro",
    line2: "明 · MING STREET",
  },
];

/* ---------- App ---------- */
function App() {
  return (
    <window.DesignCanvas>
      <window.DCSection
        id="seriesA"
        title="Series A · New In"
        subtitle="14 creative · square + story · 新品 · SS26"
      >
        {NEW_IN.map((a) => (
          <window.DCArtboard
            key={a.id}
            id={a.id}
            label={a.label}
            width={a.width}
            height={a.height}
            style={{ background: "#0a0908" }}
          >
            <AdCreative {...a} />
          </window.DCArtboard>
        ))}
      </window.DCSection>

      <window.DCSection
        id="seriesB"
        title="Series B · Bestsellers"
        subtitle="14 creative · square + story · 热销 · SS26"
      >
        {BESTSELLERS.map((a) => (
          <window.DCArtboard
            key={a.id}
            id={a.id}
            label={a.label}
            width={a.width}
            height={a.height}
            style={{ background: "#0a0908" }}
          >
            <AdCreative {...a} />
          </window.DCArtboard>
        ))}
      </window.DCSection>
    </window.DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
