import { craft } from "@/lib/content";

export default function Craft() {
  return (
    <section id="craft" className="tint-surface py-20">
      <div className="page-shell">
        <div className="mb-10 flex flex-col items-start gap-3">
          <h2>
            <span>Making a product</span>{" "}
            <span className="marker-highlight">feel right.</span>
          </h2>
          <p className="max-w-xl text-ink/70">
            It&apos;s the little, subtle details that decide whether people trust and actually use
            what ships.
          </p>
        </div>

        <div className="simple-bento-grid">
          {craft.map((c) => (
            <div key={c.title} className="bento-card">
              <h3 className="text-base">{c.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink/70">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
