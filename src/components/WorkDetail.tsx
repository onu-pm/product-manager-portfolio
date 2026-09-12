import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Linkified from "@/components/Linkified";
import { projects } from "@/lib/content";

function SectionHeading({ wide, children }: { wide: boolean; children: React.ReactNode }) {
  return wide ? (
    <h3 className="work-section-heading">{children}</h3>
  ) : (
    <span className="work-section-label">{children}</span>
  );
}

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
  const wide = !!p.coverImage;

  return (
    <article className="page-shell py-14">
      <Breadcrumbs
        trail={[{ label: "Home", href: "/" }, { label: "Work", href: "/work" }, { label: p.feature }]}
      />

      {p.coverImage ? (
        <header className="work-hero-split mt-6">
          <div className="work-hero-info">
            <h1 className="work-hero-title">{p.title}</h1>
            {p.coverDescription && <p className="work-hero-description">{p.coverDescription}</p>}
            {p.coverStats && p.coverStats.length > 0 && (
              <div className="work-hero-stats">
                {p.coverStats.map((s) => (
                  <div key={s.label} className="work-hero-stat">
                    <span className="work-hero-stat-value">{s.value}</span>
                    <span className="work-hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            )}
            {p.coverTags && p.coverTags.length > 0 && (
              <div className="work-tag-row">
                {p.coverTags.map((t) => (
                  <span key={t} className="work-tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="work-hero-image-wrap">
            <Image
              src={p.coverImage}
              alt={p.feature}
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className="work-hero-image"
              priority
            />
          </div>
        </header>
      ) : (
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
      )}

      {!p.coverImage && <h2 className="prose-measure mt-10 text-2xl md:text-3xl">{p.title}</h2>}

      {/* The payoff lands before the narrative, unless the cover already shows it. */}
      {p.stat && !p.coverStats && (
        <div className="mt-8 border-y border-[var(--border)] py-8">
          <p className="work-stat-value">{p.stat.value}</p>
          <p className="work-stat-label">{p.stat.label}</p>
        </div>
      )}

      {wide ? (
        // Every section is a full-width card, stacked in a single column,
        // in the exact order it should be read — a 2-column pairing looked
        // efficient but broke the natural top-to-bottom scan (which section
        // pairs with which wasn't obvious, and "Work I did" jumping back to
        // full-width mid-grid made it worse). The card boundary still fills
        // the width even though the paragraph itself caps at a comfortable
        // reading measure, so this isn't a return to the earlier "narrow
        // column with dead space on the right" layout.
        <div className="work-body-stack mt-10">
          <div className="work-body-section">
            <SectionHeading wide>Context</SectionHeading>
            <p className="work-body-text">{p.problem}</p>
          </div>

          {p.whatWasNeeded && (
            <div className="work-body-section">
              <SectionHeading wide>What was needed</SectionHeading>
              <p className="work-body-text">{p.whatWasNeeded}</p>
            </div>
          )}

          <div className="work-body-section">
            <SectionHeading wide>Work I did</SectionHeading>
            {p.approach.length === 1 ? (
              <p className="work-body-text">
                <Linkified text={p.approach[0]} links={p.links} />
              </p>
            ) : (
              <ul className="work-body-text list-disc space-y-2.5 pl-5">
                {p.approach.map((a) => (
                  <li key={a}>
                    <Linkified text={a} links={p.links} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {p.whatHelped && (
            <div className="work-body-section">
              <SectionHeading wide>What helped</SectionHeading>
              <p className="work-body-text">{p.whatHelped}</p>
            </div>
          )}

          <div className="work-body-section work-body-section--result">
            <SectionHeading wide>Results</SectionHeading>
            <p className="work-body-text">{p.outcome}</p>
          </div>

          {p.metric && (
            <div className="work-body-section">
              <SectionHeading wide>Numbers</SectionHeading>
              <p className="work-body-text font-semibold text-plum-700">{p.metric}</p>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="prose-measure mt-10">
            <SectionHeading wide={false}>Context</SectionHeading>
            <p className="work-body-text">{p.problem}</p>
          </div>

          <div className="prose-measure mt-10">
            <SectionHeading wide={false}>Work I did</SectionHeading>
            <ul className="work-body-text list-disc space-y-2.5 pl-5">
              {p.approach.map((a) => (
                <li key={a}>
                  <Linkified text={a} links={p.links} />
                </li>
              ))}
            </ul>
          </div>

          <div className="prose-measure mt-10">
            <SectionHeading wide={false}>What changed</SectionHeading>
            <p className="work-body-text">{p.outcome}</p>
          </div>

          {p.metric && (
            <div className="prose-measure mt-10">
              <SectionHeading wide={false}>Results</SectionHeading>
              <p className="work-body-text font-semibold text-plum-700">{p.metric}</p>
            </div>
          )}
        </>
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
