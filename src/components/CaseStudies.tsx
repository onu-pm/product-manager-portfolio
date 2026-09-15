"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useCardRail } from "@/hooks/useCardRail";
import { caseStudies } from "@/lib/content";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path
        d={dir === "left" ? "M19 12H5M11 18l-6-6 6-6" : "M5 12h14M13 6l6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CaseStudies() {
  const { railRef, barRef, index, scrollToIndex, railHandlers, onCardClick } = useCardRail(
    caseStudies.length,
    ".work-card",
  );

  return (
    <section id="case-studies" className="page-shell py-14">
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "POV" }]} />
      <div className="flex flex-wrap items-end justify-between gap-6 pb-8 pt-5">
        <div className="flex flex-col items-start gap-3">
          <h2 className="work-title">
            <span>POV on brands I</span>{" "}
            <span className="marker-highlight">would love to work for.</span>
          </h2>
          <p className="prose-measure text-ink-secondary">
            Case studies on how complexity unfolds, how the system is named, what happens when
            things go wrong, and whether people trust what they see.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="work-counter">
            {index + 1} / {caseStudies.length}
          </span>
          <button
            type="button"
            onClick={() => scrollToIndex(index - 1)}
            disabled={index === 0}
            aria-label="Previous case study"
            className="work-nav-btn"
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(index + 1)}
            disabled={index >= caseStudies.length - 1}
            aria-label="Next case study"
            className="work-nav-btn"
          >
            <Arrow dir="right" />
          </button>
        </div>
      </div>

      <div ref={railRef} className="work-rail" {...railHandlers}>
        {caseStudies.map((c, i) => {
          // A case study with its own deck content carries coverDescription
          // and coverTags; the three that haven't been migrated yet fall
          // back to their existing hook/subject fields, so every card shows
          // title + description + tags — never a numbered eyebrow — using
          // real data either way, not a placeholder.
          const description = c.coverDescription ?? c.hook;
          const tags = c.coverTags && c.coverTags.length > 0 ? c.coverTags : [c.subject];
          return (
            <Link key={c.slug} href={`/pov/${c.slug}`} className="work-card" onClick={onCardClick}>
              {c.coverImage ? (
                <Image
                  src={c.coverImage}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 86vw, 55vw"
                  className="work-card-art"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <span className={`work-card-art work-art--${i}`} />
              )}
              <span className={c.coverImage ? "work-card-scrim work-card-scrim--strong" : "work-card-scrim"} />
              <span className="work-card-content">
                <span className="work-card-feature work-card-feature--title">{c.title}</span>
                {description && <span className="work-card-description">{description}</span>}
                <span className="work-tag-row work-tag-row--sm">
                  {tags.map((t) => (
                    <span key={t} className="work-tag-pill work-tag-pill--sm">
                      {t}
                    </span>
                  ))}
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      <div className="work-progress mt-4">
        <span ref={barRef} style={{ width: "0%" }} />
      </div>
    </section>
  );
}
