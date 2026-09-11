"use client";

import { useRef, useState } from "react";
import { caseStudies } from "@/lib/content";

// Span pattern for the bento grid, one entry per case study, cycling if there
// are more than four. Keeps the grid from feeling like a uniform card wall.
const spans = ["md:col-span-2 md:row-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-4"];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function open(index: number) {
    setActive(index);
    dialogRef.current?.showModal();
  }

  const cs = caseStudies[active];

  return (
    <section id="case-studies" className="tint-surface px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col items-start gap-3">
          <span className="chapter-tab">POV</span>
          <h2>
            <span>How I think,</span>{" "}
            <span className="font-display italic text-plum-500">unprompted.</span>
          </h2>
          <p className="max-w-xl text-ink/70">
            Four products I picked myself, not work I was paid to do, and wrote my own thesis on.
            Each one is an outside read, not internal data, and says so. Tap a card for the full
            reasoning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {caseStudies.map((c, i) => (
            <button
              key={c.title}
              onClick={() => open(i)}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-plum-100 bg-paper-raised p-6 text-left transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(28,14,38,0.28)] ${spans[i % spans.length]}`}
            >
              <div>
                <span className="mb-3 inline-block text-xs font-bold uppercase tracking-wider text-plum-600">
                  {c.tag}
                </span>
                <h3 className="text-xl md:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-ink/55">{c.subject}</p>
              </div>

              <div className="mt-6 flex items-end justify-between gap-4">
                <p className="line-clamp-2 text-base text-ink/70">
                  {c.hook}
                </p>
                <span className="accordion-icon shrink-0 transition-transform duration-300 group-hover:rotate-45">
                  +
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="m-auto max-h-[85vh] w-[min(640px,90vw)] rounded-3xl border border-plum-100 bg-paper-raised p-0 backdrop:bg-plum-950/40 backdrop:backdrop-blur-sm"
      >
        <div className="max-h-[85vh] overflow-y-auto p-7 md:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-plum-600">
                {cs.tag}
              </span>
              <h3 className="text-2xl">{cs.title}</h3>
              <p className="mt-1 text-sm text-ink/55">{cs.subject} · Self-directed case study</p>
            </div>
            <button
              onClick={() => dialogRef.current?.close()}
              aria-label="Close"
              className="accordion-icon shrink-0 rotate-45"
            >
              +
            </button>
          </div>

          <div className="mt-6 grid gap-6 border-t border-plum-100 pt-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-ink/45">
                The problem
              </h4>
              <p className="text-[15px] leading-relaxed text-ink/70">{cs.problem}</p>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-ink/45">
                How I reasoned through it
              </h4>
              <ul className="list-disc space-y-1.5 pl-4 text-[15px] leading-relaxed text-ink/70">
                {cs.approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="tint-card mt-6 rounded-xl p-5">
            <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-plum-700">
              The idea
            </h4>
            <p className="text-[15px] leading-relaxed text-ink/80">{cs.outcome}</p>
            <p className="mt-2 text-base font-semibold text-plum-800">{cs.watch}</p>
          </div>

          <a
            href="/about#contact"
            onClick={() => dialogRef.current?.close()}
            className="mt-5 inline-block text-sm font-semibold text-plum-700 underline decoration-plum-300 underline-offset-4 hover:text-plum-900"
          >
            Talk about how I&apos;d apply this →
          </a>
        </div>
      </dialog>
    </section>
  );
}
