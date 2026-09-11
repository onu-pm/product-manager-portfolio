import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { caseStudies } from "@/lib/content";

// Span pattern for the bento grid, one entry per case study, cycling if there
// are more than four. Keeps the grid from feeling like a uniform card wall.
const spans = ["md:col-span-2 md:row-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-4"];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="tint-surface py-14">
      <div className="page-shell">
        <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "POV" }]} />

        <div className="mb-10 mt-6 flex flex-col items-start gap-3">
          <span className="chapter-tab">POV</span>
          <h2>
            <span>How I think,</span> <span className="marker-highlight">unprompted.</span>
          </h2>
          <p className="prose-measure text-ink-secondary">
            Four products I picked myself, not work I was paid to do, and wrote my own thesis on.
            Each one is an outside read, not internal data, and says so. Open one for the full
            reasoning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {caseStudies.map((c, i) => (
            <Link
              key={c.slug}
              href={`/pov/${c.slug}`}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-paper-raised p-6 text-left transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(2,32,22,0.22)] ${spans[i % spans.length]}`}
            >
              <div>
                <span className="chapter-tab mb-3 block">{c.tag}</span>
                <h3 className="text-xl md:text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-secondary">{c.subject}</p>
              </div>

              <div className="mt-6 flex items-end justify-between gap-4">
                <p className="line-clamp-2 text-base text-ink-secondary">{c.hook}</p>
                <span className="accordion-icon shrink-0 transition-transform duration-300 group-hover:rotate-45">
                  +
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
