"use client";

import { toggleTheme } from "@/lib/theme";

// Both icons always render; CSS (keyed off the data-theme attribute the
// inline script in layout.tsx stamps on <html> before paint) decides which
// one shows. That keeps server and first client render identical — theme
// is a client-only concept, so anything that branches React output on it
// would mismatch on hydration.
export default function ThemeToggle() {
  return (
    <button type="button" onClick={toggleTheme} aria-label="Toggle color theme" className="dock-item">
      <svg
        className="theme-icon-dark"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="4.5" />
        <path
          d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="theme-icon-light"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" strokeLinejoin="round" />
      </svg>
      <span className="dock-label">Theme</span>
    </button>
  );
}
