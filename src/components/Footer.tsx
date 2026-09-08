import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-burgundy-100 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-neutral-400 md:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
        <a href="#top" className="font-semibold text-burgundy-700 hover:text-burgundy-900">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
