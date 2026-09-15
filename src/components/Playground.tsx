"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import GithubCalendar from "@/components/GithubCalendar";
import { useCardRail } from "@/hooks/useCardRail";
import { githubUsername, labProjects } from "@/lib/content";

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

export default function Playground() {
  const { railRef, barRef, index, scrollToIndex, railHandlers, onCardClick } = useCardRail(
    labProjects.length,
    ".work-card",
  );

  return (
    <section className="page-shell py-14">
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Lab" }]} />
      <div className="flex flex-wrap items-end justify-between gap-6 pb-8 pt-5">
        <div className="flex flex-col items-start gap-3">
          <span className="chapter-tab">Lab</span>
          <h2 className="work-title">
            <span>Lighter, faster,</span> <span className="marker-highlight">more exploratory.</span>
          </h2>
          <p className="prose-measure text-ink-secondary">
            AI and vibe-coded projects I build for fun, outside of any job. Some ship, some
            don&apos;t, all of it is real.
          </p>
        </div>

        {labProjects.length > 1 && (
          <div className="flex items-center gap-2">
            <span className="work-counter">
              {index + 1} / {labProjects.length}
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
              disabled={index >= labProjects.length - 1}
              aria-label="Next project"
              className="work-nav-btn"
            >
              <Arrow dir="right" />
            </button>
          </div>
        )}
      </div>

      {labProjects.length === 0 ? (
        <div className="tint-card rounded-3xl p-8 text-center">
          <p className="text-[15px] leading-relaxed text-ink-secondary">
            First write-ups are still landing here. Ask me directly if you want a preview.
          </p>
        </div>
      ) : (
        <>
          <div ref={railRef} className="work-rail" {...railHandlers}>
            {labProjects.map((p) => (
              <Link key={p.slug} href={`/lab/${p.slug}`} className="work-card" onClick={onCardClick}>
                <Image
                  src={p.coverImage}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 86vw, 55vw"
                  className="work-card-art"
                  style={{ objectFit: "cover" }}
                />
                <span className="work-card-scrim work-card-scrim--strong" />
                <span className="work-card-content">
                  <span className="work-card-feature work-card-feature--title">{p.title}</span>
                  <span className="work-card-description">{p.hook}</span>
                  <span className="work-tag-row work-tag-row--sm">
                    <span className="work-tag-pill work-tag-pill--sm">{p.category}</span>
                    {p.tags.map((t) => (
                      <span key={t} className="work-tag-pill work-tag-pill--sm">
                        {t}
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="work-progress mt-4">
            <span ref={barRef} style={{ width: "0%" }} />
          </div>
        </>
      )}

      <div className="mt-16">
        <GithubCalendar username={githubUsername} />
      </div>
    </section>
  );
}
