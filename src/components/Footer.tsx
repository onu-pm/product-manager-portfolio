"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { socials } from "@/components/socials";

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
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 text-sm text-ink/45">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
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
