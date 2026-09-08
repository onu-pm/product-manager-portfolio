import { testimonials } from "@/lib/content";

export default function TestimonialBreak({ index = 0 }: { index?: number }) {
  const t = testimonials[index % testimonials.length];

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center">
      <blockquote>
        <p className="font-accent text-xl italic leading-snug text-neutral-800 md:text-2xl">
          <span className="marker-highlight">&ldquo;{t.quote}&rdquo;</span>
        </p>
        <footer className="mt-5 text-sm text-neutral-500">
          <span className="font-display font-bold text-neutral-900">{t.name}</span>, {t.title}
        </footer>
      </blockquote>
    </section>
  );
}
