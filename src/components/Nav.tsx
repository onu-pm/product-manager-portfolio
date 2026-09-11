"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
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

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="dock" aria-label="Primary">
      {links.map((l) => {
        const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
        return (
          <Link key={l.href} href={l.href} aria-label={l.label} className="dock-item" data-active={active}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {l.icon}
            </svg>
            <span className="dock-label">{l.label}</span>
          </Link>
        );
      })}
      <span className="mx-1 hidden h-8 w-px self-center bg-[var(--border)] sm:block" />
      <ThemeToggle />
    </nav>
  );
}
