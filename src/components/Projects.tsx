"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
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
  const railRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);

  const step = useCallback(() => {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>(".work-card");
    if (!rail || !card) return 0;
    const gap = parseFloat(getComputedStyle(rail).columnGap || "0") || 0;
    return card.offsetWidth + gap;
  }, []);

  const scrollToIndex = useCallback(
    (i: number, behavior: ScrollBehavior = "smooth") => {
      const rail = railRef.current;
      if (!rail) return;
      const clamped = Math.max(0, Math.min(projects.length - 1, i));
      rail.scrollTo({ left: clamped * step(), behavior });
    },
    [step],
  );

  // The rail's own scroll position drives the counter and progress bar — the
  // page itself never moves, so this only ever reflects horizontal motion.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let frame = 0;
    function apply() {
      frame = 0;
      const max = rail!.scrollWidth - rail!.clientWidth;
      const p = max > 0 ? rail!.scrollLeft / max : 0;
      if (barRef.current) barRef.current.style.width = `${p * 100}%`;
      const s = step();
      if (s > 0) setIndex(Math.round(rail!.scrollLeft / s));
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(apply);
    }
    apply();
    rail.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", apply);
    return () => {
      rail.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", apply);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [step]);

  // Any wheel/trackpad input over the rail moves it, and only it — the page
  // never scrolls while the pointer is over the carousel. Earlier this only
  // captured vertical-dominant deltas and let horizontal-dominant ones fall
  // through natively; trackpads report noisy, mixed deltas even during a
  // gesture the user experiences as purely vertical, so that let plenty of
  // events leak through as real page scroll. Whichever axis carries more
  // signal on a given tick now drives the rail, full stop. Only right at
  // either end, continuing further in that same direction, is the event
  // released so normal page scroll can resume past the carousel.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    function onWheel(e: WheelEvent) {
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (delta === 0) return;
      const max = rail!.scrollWidth - rail!.clientWidth;
      const atStart = rail!.scrollLeft <= 0;
      const atEnd = rail!.scrollLeft >= max - 1;
      if ((delta < 0 && atStart) || (delta > 0 && atEnd)) return;
      e.preventDefault();
      rail!.scrollLeft += delta;
    }
    rail.addEventListener("wheel", onWheel, { passive: false });
    return () => rail.removeEventListener("wheel", onWheel);
  }, []);

  // Pointer drag for mouse users (touch already scrolls natively).
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: 0 });
  function onPointerDown(e: React.PointerEvent) {
    if (e.pointerType === "touch") return;
    const rail = railRef.current;
    if (!rail) return;
    drag.current = { active: true, startX: e.clientX, startLeft: rail.scrollLeft, moved: 0 };
    rail.classList.add("is-dragging");
  }
  function onPointerMove(e: React.PointerEvent) {
    const rail = railRef.current;
    if (!rail || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    rail.scrollLeft = drag.current.startLeft - dx;
  }
  function endDrag() {
    const rail = railRef.current;
    if (!rail || !drag.current.active) return;
    drag.current.active = false;
    rail.classList.remove("is-dragging");
  }
  function onCardClick(e: React.MouseEvent) {
    if (drag.current.moved > 6) e.preventDefault(); // that was a drag, not a click
  }

  return (
    <section id="projects" className="page-shell py-14">
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Work" }]} />
      <div className="flex flex-wrap items-end justify-between gap-6 pb-8 pt-5">
        <div className="flex flex-col items-start gap-3">
          <span className="chapter-tab">Work</span>
          <h2 className="work-title">
            <span>Work I&apos;ve actually</span> <span className="marker-highlight">shipped.</span>
          </h2>
          <p className="prose-measure text-ink-secondary">
            Real, shipped product work. Drag, scroll or use the arrows, then open a card for the
            full story.
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

      <div
        ref={railRef}
        className="work-rail"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {projects.map((p, i) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="work-card" onClick={onCardClick}>
            <span className={`work-card-art work-art--${i}`} />
            <span className="work-card-scrim" />
            <span className="work-card-content">
              <span className="work-card-feature">{p.feature}</span>
              {p.stat && (
                <span className="work-card-stat">
                  <span className="work-card-stat-value">{p.stat.value}</span>
                  <span className="work-card-stat-label">{p.stat.label}</span>
                </span>
              )}
              <span className="work-card-company">{p.company.split(" (")[0]}</span>
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
