import Link from "next/link";
import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="page-shell py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="chapter-tab">Let&apos;s connect 👋</span>
        <h2 className="mt-4 text-4xl md:text-5xl">
          <span>If this sounds right,</span>{" "}
          <span className="marker-highlight">let&apos;s talk.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ink/70">
          A short conversation is usually enough to see if there&apos;s a fit.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-primary w-full px-7 py-3 text-sm sm:w-auto">
          Connect
        </a>
        <a href={`mailto:${profile.email}`} className="btn-secondary w-full px-7 py-3 text-sm sm:w-auto">
          Email
        </a>
        <Link href="/work" className="btn-secondary w-full px-7 py-3 text-sm sm:w-auto">
          Portfolio
        </Link>
      </div>
    </section>
  );
}
