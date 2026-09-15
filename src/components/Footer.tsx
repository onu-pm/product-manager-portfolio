"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const socials = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z" />
    ),
  },
  {
    label: "Instagram",
    href: profile.instagram,
    icon: (
      <path d="M12 2.2c2.7 0 3 0 4.1.06 1.1.05 1.8.22 2.4.46.65.25 1.2.6 1.7 1.1.5.5.85 1.05 1.1 1.7.24.6.4 1.3.46 2.4.06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1.1-.22 1.8-.46 2.4-.25.65-.6 1.2-1.1 1.7-.5.5-1.05.85-1.7 1.1-.6.24-1.3.4-2.4.46-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1.1-.05-1.8-.22-2.4-.46a4.6 4.6 0 0 1-1.7-1.1 4.6 4.6 0 0 1-1.1-1.7c-.24-.6-.4-1.3-.46-2.4C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.05-1.1.22-1.8.46-2.4.25-.65.6-1.2 1.1-1.7.5-.5 1.05-.85 1.7-1.1.6-.24 1.3-.4 2.4-.46C9 2.2 9.3 2.2 12 2.2zm0 1.8c-2.66 0-2.97 0-4.02.06-.9.04-1.38.19-1.7.31-.43.17-.74.37-1.06.7-.32.31-.52.62-.7 1.05-.12.32-.27.8-.31 1.7C4.15 9.03 4.15 9.34 4.15 12s0 2.97.06 4.02c.04.9.19 1.38.31 1.7.17.43.37.74.7 1.06.31.32.62.52 1.05.7.32.12.8.27 1.7.31 1.05.06 1.36.06 4.02.06s2.97 0 4.02-.06c.9-.04 1.38-.19 1.7-.31.43-.17.74-.37 1.06-.7.32-.31.52-.62.7-1.05.12-.32.27-.8.31-1.7.06-1.05.06-1.36.06-4.02s0-2.97-.06-4.02c-.04-.9-.19-1.38-.31-1.7a2.8 2.8 0 0 0-.7-1.06 2.8 2.8 0 0 0-1.05-.7c-.32-.12-.8-.27-1.7-.31C14.97 4 14.66 4 12 4zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3zm5.15-1.99a1.16 1.16 0 1 1-2.31 0 1.16 1.16 0 0 1 2.31 0z" />
    ),
  },
].filter((s) => s.href);

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* The fixed bottom dock has no awareness of page length, so on a short
          page (like this one) it sits directly over the footer unless the
          footer reserves its own clearance — pb-28 matches the space <main>
          already reserves above it. */}
      <footer className="border-t border-plum-100 px-6 pt-8 pb-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-ink/45 md:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.location}</span>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-ink/45 transition-colors hover:text-plum-700"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="back-to-top"
        data-visible={showTop}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
