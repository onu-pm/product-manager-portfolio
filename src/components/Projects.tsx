"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useCardRail } from "@/hooks/useCardRail";
import { projects } from "@/lib/content";

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

export default function Projects() {
  const { railRef, barRef, index, scrollToIndex, railHandlers, onCardClick } = useCardRail(
    projects.length,
    ".work-card",
  );

  return (
    <section id="projects" className="page-shell py-14">
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Work" }]} />
      <div className="flex flex-wrap items-end justify-between gap-6 pb-8 pt-5">
        <div className="flex flex-col items-start gap-3">
          <h2 className="work-title">
            <span>Selected work - everything,</span>{" "}
            <span className="marker-highlight">up close.</span>
          </h2>
          <p className="prose-measure text-ink-secondary">
            A sample of products and systems I&apos;ve helped shape so you can see where I fit.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="work-counter">
            {index + 1} / {projects.length}
          </span>
          <button
            type="button"
            onClick={() => scrollToIndex(index - 1)}
            disabled={index === 0}
            aria-label="Previous project"
            className="work-nav-btn"
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(index + 1)}
            disabled={index >= projects.length - 1}
            aria-label="Next project"
            className="work-nav-btn"
          >
            <Arrow dir="right" />
          </button>
        </div>
      </div>

      <div ref={railRef} className="work-rail" {...railHandlers}>
        {projects.map((p, i) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="work-card" onClick={onCardClick}>
            {p.coverImage ? (
              <Image
                src={p.coverImage}
                alt=""
                fill
                sizes="(max-width: 767px) 86vw, 55vw"
                className="work-card-art"
                style={{ objectFit: "cover" }}
              />
            ) : (
              <span className={`work-card-art work-art--${i}`} />
            )}
            <span className={p.coverImage ? "work-card-scrim work-card-scrim--strong" : "work-card-scrim"} />
            <span className="work-card-content">
              {p.coverImage ? (
                <>
                  <span className="work-card-feature work-card-feature--title">{p.title}</span>
                  {p.coverStats && p.coverStats.length > 0 && (
                    <span className="work-card-stats">
                      {p.coverStats.map((s) => (
                        <span key={s.label} className="work-card-stat-chip">
                          <span className="work-card-stat-chip-value">{s.value}</span>
                          <span className="work-card-stat-chip-label">{s.label}</span>
                        </span>
                      ))}
                    </span>
                  )}
                  {p.coverTags && p.coverTags.length > 0 && (
                    <span className="work-tag-row work-tag-row--sm">
                      {p.coverTags.map((t) => (
                        <span key={t} className="work-tag-pill work-tag-pill--sm">
                          {t}
                        </span>
                      ))}
                    </span>
                  )}
                </>
              ) : (
                <>
                  <span className="work-card-feature">{p.feature}</span>
                  {p.stat && (
                    <span className="work-card-stat">
                      <span className="work-card-stat-value">{p.stat.value}</span>
                      <span className="work-card-stat-label">{p.stat.label}</span>
                    </span>
                  )}
                  <span className="work-card-company">{p.company.split(" (")[0]}</span>
                </>
              )}
            </span>
          </Link>
        ))}
      </div>

      <div className="work-progress mt-4">
        <span ref={barRef} style={{ width: "0%" }} />
      </div>
    </section>
  );
}
