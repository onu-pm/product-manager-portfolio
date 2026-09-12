import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { caseStudies } from "@/lib/content";

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

export default function PovDetail({ slug }: { slug: string }) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const c = caseStudies[i];
  const prev = i > 0 ? caseStudies[i - 1] : null;
  const next = i < caseStudies.length - 1 ? caseStudies[i + 1] : null;
  // Two independent gates, not one: a case study can have its real deck
  // content (sections, description, tags) ready before its cover photo
  // is. Keying everything off coverImage would hold the whole rewrite
  // hostage to a file that hasn't arrived — instead the split-hero layout
  // and body-stack ship as soon as there's real content, and only the
  // image slot itself falls back to the plain motif until a photo exists.
  const rich = !!(c.coverDescription || c.sections);
  const wide = !!c.sections;

  return (
    <article className="page-shell py-14">
      <Breadcrumbs
        trail={[{ label: "Home", href: "/" }, { label: "POV", href: "/pov" }, { label: c.subject }]}
      />

      {rich ? (
        // Same cover treatment as a Work project's photo hero, minus the
        // stats row — a POV thesis is an outside read with no metrics of
        // its own to report, so the tag row (company first) sits directly
        // under the description instead.
        <header className="work-hero-split mt-6">
          <div className="work-hero-info">
            <h1 className="work-hero-title">{c.title}</h1>
            {c.coverDescription && <p className="work-hero-description">{c.coverDescription}</p>}
            {c.coverTags && c.coverTags.length > 0 && (
              <div className="work-tag-row">
                {c.coverTags.map((t) => (
                  <span key={t} className="work-tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="work-hero-image-wrap">
            {c.coverImage ? (
              <Image
                src={c.coverImage}
                alt={c.subject}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className="work-hero-image"
                priority
              />
            ) : (
              <span className={`work-card-art work-art--${i}`} />
            )}
          </div>
        </header>
      ) : (
        <header className="work-hero mt-6">
          <span className={`work-card-art work-art--${i}`} />
          <span className="work-card-scrim" />
          <div className="work-hero-content">
            <h1 className="work-hero-feature">{c.subject}</h1>
            <p className="work-hero-meta">Self-directed case study · an outside read, not internal data</p>
          </div>
        </header>
      )}

      {!rich && (
        <>
          <h2 className="prose-measure mt-10 text-2xl md:text-3xl">{c.title}</h2>
          <p className="prose-measure work-body-text">{c.hook}</p>
        </>
      )}

      {wide && c.sections ? (
        <div className="work-body-stack mt-10">
          {c.sections.map((s) => (
            <div key={s.heading} className="work-body-section">
              <SectionHeading wide>{s.heading}</SectionHeading>
              {Array.isArray(s.body) ? (
                <ul className="work-body-text list-disc space-y-2.5 pl-5">
                  {s.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="work-body-text">{s.body}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="prose-measure mt-10">
            <SectionHeading wide={false}>The problem</SectionHeading>
            <p className="work-body-text">{c.problem}</p>
          </div>

          <div className="prose-measure mt-10">
            <SectionHeading wide={false}>How I reasoned through it</SectionHeading>
            <ul className="work-body-text list-disc space-y-2.5 pl-5">
              {c.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <div className="prose-measure mt-10">
            <SectionHeading wide={false}>The idea</SectionHeading>
            <p className="work-body-text">{c.outcome}</p>
          </div>

          <div className="prose-measure mt-10">
            <SectionHeading wide={false}>What I&apos;d watch</SectionHeading>
            <p className="work-body-text font-semibold text-ink">{c.watch}</p>
          </div>
        </>
      )}

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
