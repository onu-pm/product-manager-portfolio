import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { aboutMe, profile } from "@/lib/content";

export default function AboutMe() {
  return (
    <section className="page-shell py-20">
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "About me" }]} />

      <div className="mt-6 flex flex-col items-start gap-3">
        <h1 className="text-3xl md:text-4xl">{aboutMe.greeting}</h1>
        <p className="text-lg font-semibold text-ink">{aboutMe.tagline}</p>
        <p className="max-w-xl text-[15px] leading-relaxed text-ink/70">
          {aboutMe.introBefore}
          {aboutMe.reputeUrl ? (
            <a
              href={aboutMe.reputeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-plum-700 underline underline-offset-2"
            >
              Repute
            </a>
          ) : (
            <span className="font-semibold text-ink">Repute</span>
          )}
          {aboutMe.introAfter}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn-primary px-6 py-2.5 text-sm">
            Connect
          </a>
          <a href={`mailto:${profile.email}`} className="btn-secondary px-6 py-2.5 text-sm">
            Email
          </a>
        </div>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="work-section-heading">{aboutMe.builtLabel}</h3>
          <ul className="work-body-text list-disc space-y-3 pl-5">
            {aboutMe.built.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <Link href="/work" className="mt-5 inline-block text-sm font-semibold text-plum-700">
            See more of my work →
          </Link>
        </div>

        <div>
          <h3 className="work-section-heading">{aboutMe.lessonsLabel}</h3>
          <ul className="work-body-text list-disc space-y-3 pl-5">
            {aboutMe.lessons.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="about-personal work-body-text mt-14 max-w-2xl">{aboutMe.personal}</p>
    </section>
  );
}
