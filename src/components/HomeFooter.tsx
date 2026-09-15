"use client";

import { profile } from "@/lib/content";
import { socials } from "@/components/socials";

// The home dashboard never scrolls, so the normal in-flow Footer (which
// only appears once you scroll past the fold) would never be seen there.
// This is a fixed bar stacked directly above the dock instead — same
// copyright + social content, but always in view without adding any page
// height. No "back to top": there's nothing to scroll back up from here.
export default function HomeFooter() {
  return (
    <div className="home-footer-bar">
      <span className="home-footer-copyright">
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
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {s.icon}
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
