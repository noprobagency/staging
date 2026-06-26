// Components.d.ts — the complete catalog of the 2 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Desktop) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Desktop" (node 39:1186)
export interface DesktopProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Mobile" (node 39:2366)
export interface MobileProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const Desktop: React.FC<DesktopProps>;
declare const Mobile: React.FC<MobileProps>;
declare global {
  interface Window {
    Desktop: React.FC<DesktopProps>;
    Mobile: React.FC<MobileProps>;
  }
}
