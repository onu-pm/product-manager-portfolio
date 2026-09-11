import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { caseStudies } from "@/lib/content";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path
        d={dir === "left" ? "M19 12H5M11 18l-6-6 6-6" : "M5 12h14M13 6l6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PovDetail({ slug }: { slug: string }) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const c = caseStudies[i];
  const prev = i > 0 ? caseStudies[i - 1] : null;
  const next = i < caseStudies.length - 1 ? caseStudies[i + 1] : null;

  return (
    <article className="page-shell py-14">
      <Breadcrumbs
        trail={[{ label: "Home", href: "/" }, { label: "POV", href: "/pov" }, { label: c.subject }]}
      />

      <header className="work-hero mt-6">
        <span className={`work-card-art work-art--${i}`} />
        <span className="work-card-scrim" />
        <div className="work-hero-content">
          <h1 className="work-hero-feature">{c.subject}</h1>
          <p className="work-hero-meta">Self-directed case study · an outside read, not internal data</p>
        </div>
      </header>

      <h2 className="prose-measure mt-10 text-2xl md:text-3xl">{c.title}</h2>
      <p className="prose-measure work-body-text">{c.hook}</p>

      <div className="prose-measure mt-10">
        <span className="work-section-label">The problem</span>
        <p className="work-body-text">{c.problem}</p>
      </div>

      <div className="prose-measure mt-10">
        <span className="work-section-label">How I reasoned through it</span>
        <ul className="work-body-text list-disc space-y-2.5 pl-5">
          {c.approach.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>

      <div className="prose-measure mt-10">
        <span className="work-section-label">The idea</span>
        <p className="work-body-text">{c.outcome}</p>
      </div>

      <div className="prose-measure mt-10">
        <span className="work-section-label">What I&apos;d watch</span>
        <p className="work-body-text font-semibold text-ink">{c.watch}</p>
      </div>

      <nav className="mt-14 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
        {prev ? (
          <Link href={`/pov/${prev.slug}`} className="flex items-center gap-3">
            <span className="work-nav-btn">
              <Arrow dir="left" />
            </span>
            <span className="text-left">
              <span className="work-section-label">Previous</span>
              <span className="block text-sm font-semibold text-ink">{prev.subject}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/pov/${next.slug}`} className="flex items-center gap-3 text-right">
            <span>
              <span className="work-section-label">Next</span>
              <span className="block text-sm font-semibold text-ink">{next.subject}</span>
            </span>
            <span className="work-nav-btn">
              <Arrow dir="right" />
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
