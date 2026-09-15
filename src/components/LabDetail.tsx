import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import InlineClip from "@/components/InlineClip";
import { labProjects } from "@/lib/content";

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

export default function LabDetail({ slug }: { slug: string }) {
  const i = labProjects.findIndex((p) => p.slug === slug);
  const p = labProjects[i];
  const prev = i > 0 ? labProjects[i - 1] : null;
  const next = i < labProjects.length - 1 ? labProjects[i + 1] : null;

  return (
    <article className="page-shell py-14">
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Lab", href: "/lab" }, { label: p.title }]} />

      <header className="work-hero-split mt-6">
        <div className="work-hero-info">
          <h1 className="work-hero-title">{p.title}</h1>
          <p className="work-hero-description">{p.hook}</p>
          <div className="work-tag-row">
            <span className="work-tag-pill">{p.category}</span>
            {p.tags.map((t) => (
              <span key={t} className="work-tag-pill">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="work-hero-image-wrap">
          <Image
            src={p.coverImage}
            alt={p.title}
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className="work-hero-image"
            priority
          />
        </div>
      </header>

      {/* Blog-style body: continuous prose under plain headings, not the
          boxed section cards a Work/POV case study uses — this reads like
          a write-up of a build, not a structured case-study breakdown. */}
      <div className="lab-article prose-measure mt-10">
        {p.sections.map((s) => (
          <div key={s.heading} className="lab-article-section">
            <h3 className="work-section-heading">{s.heading}</h3>
            {Array.isArray(s.body) ? (
              s.body.map((para) => (
                <p key={para} className="work-body-text">
                  {para}
                </p>
              ))
            ) : (
              <p className="work-body-text">{s.body}</p>
            )}
            <InlineClip src={s.clip} />
          </div>
        ))}

        <p className="lab-article-cta work-body-text">
          Built solo with Claude Code.{" "}
          <a href={p.liveUrl} target="_blank" rel="noreferrer" className="font-semibold text-plum-700">
            View the live prototype →
          </a>
        </p>
      </div>

      <nav className="mt-14 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
        {prev ? (
          <Link href={`/lab/${prev.slug}`} className="group flex items-center gap-3">
            <span className="work-nav-btn">
              <Arrow dir="left" />
            </span>
            <span className="text-left">
              <span className="work-section-label">Previous</span>
              <span className="block text-sm font-semibold text-ink">{prev.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/lab/${next.slug}`} className="group flex items-center gap-3 text-right">
            <span>
              <span className="work-section-label">Next</span>
              <span className="block text-sm font-semibold text-ink">{next.title}</span>
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
