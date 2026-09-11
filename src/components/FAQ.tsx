import { faqs } from "@/lib/content";

export default function FAQ() {
  return (
    <section id="faq" className="page-shell py-20">
      <div className="mb-10 flex flex-col items-start gap-3">
        <span className="chapter-tab">FAQ</span>
        <h2>
          <span>Common</span>{" "}
          <span className="marker-highlight">questions.</span>
        </h2>
      </div>
      <div className="flex flex-col divide-y divide-plum-100 rounded-2xl border border-plum-100 bg-paper-raised">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5 md:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
              {f.q}
              <span className="shrink-0 text-xl leading-none text-plum-600 group-open:hidden">
                +
              </span>
              <span className="hidden shrink-0 text-xl leading-none text-plum-600 group-open:inline">
                −
              </span>
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
