import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-plum-100 bg-paper-raised/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="shrink-0">
          <Image src="/logo.png" alt={profile.name} width={155} height={34} priority className="h-8 w-auto md:h-9" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-plum-700">
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
