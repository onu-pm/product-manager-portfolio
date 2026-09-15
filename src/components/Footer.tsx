"use client";

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
    label: "GitHub",
    href: profile.github,
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    ),
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: (
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13zm2.2.5 7.8 6.1L19.8 6H4.2zM20 8.1l-7.4 5.8a1 1 0 0 1-1.2 0L4 8.1V18h16V8.1z" />
    ),
  },
];

export default function Footer() {
  return (
    // The fixed bottom dock has no awareness of page length, so on a short
    // page (like this one) it sits directly over the footer unless the
    // footer reserves its own clearance — pb-28 matches the space <main>
    // already reserves above it.
    <footer className="border-t border-plum-100 px-6 pt-8 pb-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                {s.icon}
              </svg>
            </a>
          ))}
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-3 text-sm text-ink/45 md:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.location}</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-semibold text-plum-700 hover:text-plum-900"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
