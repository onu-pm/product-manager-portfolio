import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { aboutMe, profile } from "@/lib/content";

export default function AboutMe() {
  return (
    <section className="page-shell py-14">
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "About me" }]} />

      <div className="mt-6 flex flex-col items-start gap-4">
        <h1>{aboutMe.greeting}</h1>
        <h2>
          {aboutMe.taglineLead} at{" "}
          <a
            href={aboutMe.reputeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-plum-600 underline decoration-plum-300 underline-offset-4 hover:decoration-plum-600"
          >
            Repute
          </a>
          {aboutMe.taglineTrail}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-ink/80">{aboutMe.philosophy}</p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn-primary px-6 py-2.5 text-sm">
            Connect
          </a>
          <a href={`mailto:${profile.email}`} className="btn-secondary px-6 py-2.5 text-sm">
            Email
          </a>
          <Link href="/work" className="btn-secondary px-6 py-2.5 text-sm">
            Portfolio
          </Link>
        </div>
      </div>

      {/* One bounded card for the whole "story" — built, lessons, and the
          personal note — so it reads as a single unit of the About page
          instead of three blocks floating loose in the same whitespace. */}
      <div className="about-story-card mt-16">
        <div className="grid gap-10 md:grid-cols-2 md:divide-x md:divide-[var(--border)]">
          <div className="md:pr-10">
            <h3 className="card-title">{aboutMe.builtLabel}</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-lg leading-relaxed text-ink/70">
              {aboutMe.built.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <Link href="/work" className="mt-5 inline-block text-sm font-semibold text-plum-700">
              See more of my work →
            </Link>
          </div>

          <div className="md:pl-10">
            <h3 className="card-title">{aboutMe.lessonsLabel}</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-lg leading-relaxed text-ink/70">
              {aboutMe.lessons.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <Link href="/alter-ego" className="mt-5 inline-block text-sm font-semibold text-plum-700">
              Explore my alter ego →
            </Link>
          </div>
        </div>

        <p className="mt-10 max-w-2xl border-t border-[var(--border)] pt-10 text-lg leading-relaxed text-ink/70">
          {aboutMe.personal}
        </p>
      </div>
    </section>
  );
}
