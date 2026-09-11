"use client";

import { toggleTheme } from "@/lib/theme";

// Decorative + functional: off in light mode, glowing in dark mode (CSS
// keyed off data-theme, same pattern as ThemeToggle so there's no
// server/client mismatch), and clicking it flips the theme like the dock
// toggle does.
//
// Anatomy, top to bottom (this order matters — it was inverted twice
// before): wire -> screw cap (filled rect + thread lines) -> glass envelope
// (a plain circle, deliberately not a hand-drawn bezier bulb shape, so the
// geometry can't quietly break again) hanging below the cap.
export default function LightBulb() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="bulb-button"
    >
      <svg viewBox="0 0 120 200" className="bulb-svg" fill="none">
        <line x1="60" y1="0" x2="60" y2="38" stroke="var(--bulb-wire)" strokeWidth="2" />

        <circle className="bulb-glow-halo" cx="60" cy="114" r="58" fill="var(--bulb-fill)" />
        <circle className="bulb-glow" cx="60" cy="114" r="40" fill="var(--bulb-fill)" />

        <g className="bulb-rays" stroke="var(--bulb-fill)" strokeWidth="3" strokeLinecap="round">
          <line x1="60" y1="66" x2="60" y2="54" />
          <line x1="60" y1="162" x2="60" y2="174" />
          <line x1="12" y1="114" x2="24" y2="114" />
          <line x1="96" y1="114" x2="108" y2="114" />
          <line x1="26" y1="80" x2="35" y2="88" />
          <line x1="85" y1="140" x2="94" y2="148" />
          <line x1="94" y1="80" x2="85" y2="88" />
          <line x1="35" y1="140" x2="26" y2="148" />
        </g>

        {/* Screw cap: directly under the wire, above everything else. */}
        <rect
          x="48"
          y="38"
          width="24"
          height="28"
          rx="3"
          fill="var(--bulb-fill)"
          stroke="var(--bulb-cap-line)"
          strokeWidth="2"
        />
        <line x1="48" y1="46" x2="72" y2="46" stroke="var(--bulb-cap-line)" strokeWidth="1.5" />
        <line x1="48" y1="54" x2="72" y2="54" stroke="var(--bulb-cap-line)" strokeWidth="1.5" />
        <line x1="48" y1="62" x2="72" y2="62" stroke="var(--bulb-cap-line)" strokeWidth="1.5" />

        {/* Glass envelope: hangs below the cap. */}
        <circle cx="60" cy="114" r="40" fill="var(--bulb-fill)" stroke="var(--bulb-glass)" strokeWidth="2.5" />
        <path
          d="M52 106c-6-5-9-11-9-18M68 88c6 5 9 11 9 18"
          stroke="var(--bulb-filament)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
