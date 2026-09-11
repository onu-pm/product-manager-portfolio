import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { projects } from "@/lib/content";

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

export default function WorkDetail({ slug }: { slug: string }) {
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];
  const prev = i > 0 ? projects[i - 1] : null;
  const next = i < projects.length - 1 ? projects[i + 1] : null;

  return (
    <article className="page-shell py-14">
      <Breadcrumbs
        trail={[{ label: "Home", href: "/" }, { label: "Work", href: "/work" }, { label: p.feature }]}
      />

      <header className="work-hero mt-6">
        <span className={`work-card-art work-art--${i}`} />
        <span className="work-card-scrim" />
        <div className="work-hero-content">
          <h1 className="work-hero-feature">{p.feature}</h1>
          <p className="work-hero-meta">
            {p.company} · {p.role} · {p.timeframe}
          </p>
        </div>
      </header>

      <h2 className="prose-measure mt-10 text-2xl md:text-3xl">{p.title}</h2>

      {/* The payoff lands before the narrative. */}
      {p.stat && (
        <div className="mt-8 border-y border-[var(--border)] py-8">
          <p className="work-stat-value">{p.stat.value}</p>
          <p className="work-stat-label">{p.stat.label}</p>
        </div>
      )}

      <div className="prose-measure mt-10">
        <span className="work-section-label">Context</span>
        <p className="work-body-text">{p.problem}</p>
      </div>

      <div className="prose-measure mt-10">
        <span className="work-section-label">Work I did</span>
        <ul className="work-body-text list-disc space-y-2.5 pl-5">
          {p.approach.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>

      <div className="prose-measure mt-10">
        <span className="work-section-label">What changed</span>
        <p className="work-body-text">{p.outcome}</p>
      </div>

      {p.metric && (
        <div className="prose-measure mt-10">
          <span className="work-section-label">Results</span>
          <p className="work-body-text font-semibold text-plum-700">{p.metric}</p>
        </div>
      )}

      <nav className="mt-14 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="group flex items-center gap-3">
            <span className="work-nav-btn">
              <Arrow dir="left" />
            </span>
            <span className="text-left">
              <span className="work-section-label">Previous</span>
              <span className="block text-sm font-semibold text-ink">{prev.feature}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/work/${next.slug}`} className="group flex items-center gap-3 text-right">
            <span>
              <span className="work-section-label">Next</span>
              <span className="block text-sm font-semibold text-ink">{next.feature}</span>
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
