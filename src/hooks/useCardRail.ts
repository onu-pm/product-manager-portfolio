"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The scroll/drag/wheel mechanics behind a horizontal card carousel —
 * shared by Work and POV so the two can't drift apart the way they would
 * as two independent copies. `cardSelector` finds one card inside the rail
 * to measure step width from; everything else is generic over item count.
 */
export function useCardRail(itemCount: number, cardSelector: string) {
  const railRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);

  const step = useCallback(() => {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>(cardSelector);
    if (!rail || !card) return 0;
    const gap = parseFloat(getComputedStyle(rail).columnGap || "0") || 0;
    return card.offsetWidth + gap;
  }, [cardSelector]);

  const scrollToIndex = useCallback(
    (i: number, behavior: ScrollBehavior = "smooth") => {
      const rail = railRef.current;
      if (!rail) return;
      const clamped = Math.max(0, Math.min(itemCount - 1, i));
      rail.scrollTo({ left: clamped * step(), behavior });
    },
    [step, itemCount],
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
  // never scrolls while the pointer is over the carousel. Whichever axis
  // carries more signal on a given tick drives the rail; only right at
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

  return {
    railRef,
    barRef,
    index,
    scrollToIndex,
    railHandlers: { onPointerDown, onPointerMove, onPointerUp: endDrag, onPointerLeave: endDrag },
    onCardClick,
  };
}
