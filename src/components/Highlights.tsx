import type { CSSProperties } from "react";
import { highlights, specialties } from "@/lib/content";

const glowColors = ["var(--rose-500)", "var(--solar-500)", "var(--plum-300)", "var(--plum-200)"];

export default function Highlights() {
  const marqueeItems = [...specialties, ...specialties];

  return (
    <section className="glass-section px-6 py-20 md:py-24">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col items-start gap-3">
          <span className="chapter-tab !text-plum-200">Highlights</span>
          <h2 className="text-white">
            <span className="text-white">A career</span>{" "}
            <span className="font-display font-light text-rose-300">measured in outcomes.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className="glass-card"
              style={{ "--glow": glowColors[i % glowColors.length] } as CSSProperties}
            >
              <p className="font-display text-4xl font-semibold text-white md:text-5xl">
                {h.value}
                <span className="text-rose-300">{h.unit}</span>
              </p>
              <p className="mt-3 text-sm font-medium text-white/90">{h.label}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">{h.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track gap-3">
          {marqueeItems.map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="mx-1.5 shrink-0 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
