import { craft } from "@/lib/content";

export default function Craft() {
  return (
    <section id="craft" className="tint-surface px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col items-start gap-3">
          <span className="chapter-tab">Craft</span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            <span className="text-burgundy-800">Making a product</span>{" "}
            <span className="text-neutral-500">feel right.</span>
          </h2>
          <p className="max-w-xl text-neutral-600">
            It&apos;s the little, subtle details that decide whether people trust and actually use
            what ships.
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {craft.map((c) => (
            <div key={c.title}>
              <h3 className="font-display mb-1.5 text-base font-bold text-neutral-900">
                {c.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-neutral-600">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
