import { craft } from "@/lib/content";

export default function Craft() {
  return (
    <section id="craft" className="tint-surface px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col items-start gap-3">
          <span className="chapter-tab">Craft</span>
          <h2>
            <span>Making a product</span>{" "}
            <span className="font-display italic text-plum-500">feel right.</span>
          </h2>
          <p className="max-w-xl text-ink/70">
            It&apos;s the little, subtle details that decide whether people trust and actually use
            what ships.
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {craft.map((c) => (
            <div key={c.title}>
              <h3 className="mb-1.5 text-base">{c.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink/70">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
