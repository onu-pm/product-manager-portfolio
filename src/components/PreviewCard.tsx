"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type Slide = {
  number: string;
  label: string;
  image?: string;
  /** A "rich" slide — same title/stats/tags as the Work carousel card and
   *  cover, for a project that has real content behind it. Slides without
   *  a title fall back to the plain numeral + label. */
  title?: string;
  stats?: { value: string; label: string }[];
  tags?: string[];
};

// Dark fields only. These previously pulled from the plum ramp, which in
// dark mode resolves to citron — so a white-on-yellow slide had almost no
// contrast. Citron is a highlight colour, never a text-bearing surface.
const SLIDE_COLORS = [
  "#0f3d2a",
  "#0a0a08",
  "#06251a",
  "#23302a",
  "#15503a",
];

export default function PreviewCard({
  href,
  areaClass,
  name,
  description,
  ctaText,
  slides,
}: {
  href: string;
  areaClass: string;
  name: string;
  description: string;
  ctaText: string;
  slides: Slide[];
}) {
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!hovered || slides.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 1300);
    return () => clearInterval(id);
  }, [hovered, slides.length]);

  return (
    <Link
      href={href}
      className={`bento-card link-card ${areaClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setIndex(0);
      }}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="card-face">
        <div>
          <h2 className="card-name">{name}</h2>
          <p className="card-desc">{description}</p>
        </div>
        <span className="card-cta">
          {ctaText}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {/* Cover-flow style slide reveal on hover, like flipping through a
          photo album: one "cover" per item, auto-advancing while hovered. */}
      {slides.length > 0 && (
        <div className="card-cover">
          <div className="card-cover-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((s, i) => (
              <div
                className={s.title ? "card-cover-slide card-cover-slide--rich" : "card-cover-slide"}
                key={s.label}
                style={s.image ? undefined : { background: SLIDE_COLORS[i % SLIDE_COLORS.length] }}
              >
                {s.image && (
                  <>
                    <Image src={s.image} alt="" fill sizes="50vw" className="card-cover-image" style={{ objectFit: "cover" }} />
                    <span className="card-cover-scrim" />
                  </>
                )}
                {s.title ? (
                  <>
                    {/* The number still anchors the top corner, same as the
                        plain slides — without it, a short bottom-anchored
                        block in a banner this tall read as floating in the
                        middle rather than deliberately bottom-set. */}
                    <span className="card-cover-number">{s.number}</span>
                    <span className="card-cover-title">{s.title}</span>
                    {s.stats && s.stats.length > 0 && (
                      <span className="work-card-stats">
                        {s.stats.map((stat) => (
                          <span key={stat.label} className="work-card-stat-chip">
                            <span className="work-card-stat-chip-value">{stat.value}</span>
                            <span className="work-card-stat-chip-label">{stat.label}</span>
                          </span>
                        ))}
                      </span>
                    )}
                    {s.tags && s.tags.length > 0 && (
                      <span className="work-tag-row work-tag-row--sm">
                        {s.tags.map((t) => (
                          <span key={t} className="work-tag-pill work-tag-pill--sm">
                            {t}
                          </span>
                        ))}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <span className="card-cover-number">{s.number}</span>
                    <span className="card-cover-label">{s.label}</span>
                  </>
                )}
              </div>
            ))}
          </div>
          {slides.length > 1 && (
            <div className="card-cover-dots">
              {slides.map((s, i) => (
                <span key={s.label} className={i === index ? "active" : ""} />
              ))}
            </div>
          )}
        </div>
      )}
    </Link>
  );
}
