import { approachSteps } from "@/lib/content";

export default function Approach() {
  return (
    <section id="approach" className="tint-surface px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col items-start gap-3">
          <span className="chapter-tab">Working together</span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            <span className="text-burgundy-800">How I usually</span>{" "}
            <span className="text-neutral-500">plug in.</span>
          </h2>
          <p className="max-w-xl text-neutral-600">
            Every team and product is different, but most engagements follow this shape.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {approachSteps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-burgundy-100 bg-white p-6">
              <span className="font-display text-3xl font-bold text-burgundy-200">{s.step}</span>
              <h3 className="font-display mt-3 mb-2 text-lg font-bold text-neutral-900">
                {s.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-neutral-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
