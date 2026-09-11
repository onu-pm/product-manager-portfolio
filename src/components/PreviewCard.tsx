"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export type Slide = { number: string; label: string };

const SLIDE_COLORS = [
  "var(--plum-500)",
  "var(--rose-500)",
  "var(--plum-700)",
  "var(--plum-300)",
  "var(--plum-600)",
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
                className="card-cover-slide"
                key={s.label}
                style={{ background: SLIDE_COLORS[i % SLIDE_COLORS.length] }}
              >
                <span className="card-cover-number">{s.number}</span>
                <span className="card-cover-label">{s.label}</span>
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
