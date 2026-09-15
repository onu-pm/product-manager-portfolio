import { capabilities } from "@/lib/content";

export default function Capabilities() {
  return (
    <section id="capabilities" className="page-shell py-20">
      <div className="mb-10 flex flex-col items-start gap-3">
        <h2>
          <span>Where I&apos;m</span>{" "}
          <span className="marker-highlight">most useful.</span>
        </h2>
        <p className="max-w-xl text-ink/70">
          Most of my work falls into a few patterns. If you see yourself in one of these, we
          should talk.
        </p>
      </div>

      <div className="simple-bento-grid">
        {capabilities.map((c) => (
          <div key={c.title} className="bento-card">
            <h3 className="text-lg">{c.title}</h3>
            <p className="text-[15px] leading-relaxed text-ink/70">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
