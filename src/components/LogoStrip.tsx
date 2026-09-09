import { logos } from "@/lib/content";

export default function LogoStrip() {
  return (
    <section className="border-y border-plum-100 bg-paper-raised py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-sm font-semibold uppercase tracking-wide text-ink/45">
        {logos.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
    </section>
  );
}
