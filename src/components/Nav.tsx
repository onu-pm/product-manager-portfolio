"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

// Seven destinations plus the theme toggle is too many for a mobile bottom
// bar — it forced the dock nearly edge-to-edge on a phone, right into the
// chat widget's corner, with almost no breathing room either side.
// `secondary` folds into a "More" panel on narrow screens only; desktop
// still shows every item inline, unchanged.
const primaryLinks = [
  {
    href: "/",
    label: "Home",
    icon: (
      <path d="M4 11.5 12 4l8 7.5M6 9.5V20h12V9.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    href: "/work",
    label: "Work",
    icon: (
      <path
        d="M4 8.5h16v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-9ZM8.5 8.5V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v2.5M4 12.5h16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "/pov",
    label: "POV",
    icon: (
      <path
        d="M6 3.5h9L19 8v12.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1ZM14.5 3.5V8H19M8.5 12.5h7M8.5 15.5h7M8.5 18.5h4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <>
        <circle cx="12" cy="8.2" r="3.2" />
        <path d="M5 20c0.8-4 3.4-6.2 7-6.2s6.2 2.2 7 6.2" strokeLinecap="round" />
      </>
    ),
  },
];

const secondaryLinks = [
  {
    href: "/lab",
    label: "Lab",
    icon: (
      <path
        d="M12 3.5 20.5 8v8L12 20.5 3.5 16V8L12 3.5ZM3.5 8 12 12.5 20.5 8M12 12.5V20.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "/alter-ego",
    label: "Alter Ego",
    icon: (
      <>
        <circle cx="9" cy="9" r="4.2" />
        <path d="M14.5 5.2a4.2 4.2 0 0 1 0 7.6M6 20c0.6-3 2.2-4.8 5-4.8s4.4 1.8 5 4.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    href: "/brewery",
    label: "Brewery",
    icon: (
      <path
        d="M5 20.5V9.5L12 4l7 5.5v11M9.5 20.5v-6h5v6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const allLinks = [...primaryLinks.slice(0, 3), ...secondaryLinks, primaryLinks[3]];

function NavIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      {icon}
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!moreOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setMoreOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMoreOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <div ref={wrapRef} className="dock-wrap">
      {moreOpen && (
        <div className="dock-more-panel" role="menu">
          {secondaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="dock-more-item"
              data-active={isActive(l.href)}
              role="menuitem"
              onClick={() => setMoreOpen(false)}
            >
              <NavIcon icon={l.icon} />
              {l.label}
            </Link>
          ))}
        </div>
      )}
      <nav className="dock" aria-label="Primary">
        {/* Desktop: every destination inline, in its original order. Hidden
            on mobile in favour of the condensed row below. */}
        {allLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-label={l.label}
            className="dock-item dock-item--desktop-only"
            data-active={isActive(l.href)}
          >
            <NavIcon icon={l.icon} />
            <span className="dock-label">{l.label}</span>
          </Link>
        ))}

        {/* Mobile: primary destinations plus a "More" toggle for the rest,
            so the bar never has to stretch edge-to-edge on a phone. */}
        {primaryLinks.slice(0, 3).map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-label={l.label}
            className="dock-item dock-item--mobile-only"
            data-active={isActive(l.href)}
          >
            <NavIcon icon={l.icon} />
            <span className="dock-label">{l.label}</span>
          </Link>
        ))}
        <button
          type="button"
          aria-label="More"
          aria-expanded={moreOpen}
          aria-haspopup="menu"
          onClick={() => setMoreOpen((v) => !v)}
          className="dock-item dock-item--mobile-only"
          data-active={moreOpen || secondaryLinks.some((l) => isActive(l.href))}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none" />
          </svg>
          <span className="dock-label">More</span>
        </button>
        {primaryLinks.slice(3).map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-label={l.label}
            className="dock-item dock-item--mobile-only"
            data-active={isActive(l.href)}
          >
            <NavIcon icon={l.icon} />
            <span className="dock-label">{l.label}</span>
          </Link>
        ))}

        <span className="dock-divider" />
        <ThemeToggle />
      </nav>
    </div>
  );
}
