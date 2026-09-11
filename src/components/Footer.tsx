"use client";

import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-plum-100 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-ink/45 md:flex-row">
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
    </footer>
  );
}
