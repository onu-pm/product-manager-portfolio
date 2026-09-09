import { capabilities } from "@/lib/content";

export default function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-10 flex flex-col items-start gap-3">
        <span className="chapter-tab">Capabilities</span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          <span className="text-plum-800">Where I&apos;m</span>{" "}
          <span className="text-ink/55">most useful.</span>
        </h2>
        <p className="max-w-xl text-ink/70">
          Most of my work falls into a few patterns. If you see yourself in one of these, we
          should talk.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-plum-100">
        {capabilities.map((c) => (
          <div key={c.title} className="py-6 first:pt-0">
            <h3 className="font-display mb-2 text-lg font-bold text-ink">{c.title}</h3>
            <p className="text-[15px] leading-relaxed text-ink/70">{c.body}</p>
          </div>
        ))}
      </div>

      <a href="#contact" className="btn-primary mt-10 inline-flex px-7 py-3 text-sm">
        Ways to connect
      </a>
    </section>
  );
}
