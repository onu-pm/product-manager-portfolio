import { profile } from "@/lib/content";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#projects", label: "Projects" },
  { href: "#craft", label: "Craft" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-burgundy-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-burgundy-900">
          {profile.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-burgundy-700">
              {l.label}
            </a>
          ))}
        </nav>
        <a href={profile.resumeUrl} className="btn-primary px-4 py-2 text-sm">
          Resume
        </a>
      </div>
    </header>
  );
}
