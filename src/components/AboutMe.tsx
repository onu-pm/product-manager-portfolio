import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { aboutMe } from "@/lib/content";

export default function AboutMe() {
  return (
    <section className="page-shell py-20">
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <div className="about-hero mt-6">
        <div className="about-photo-wrap">
          {aboutMe.photo ? (
            <Image src={aboutMe.photo} alt="Anupam Kalita" fill sizes="(max-width: 767px) 60vw, 20rem" priority />
          ) : (
            <span className="about-photo-fallback" aria-hidden="true">
              AK
            </span>
          )}
        </div>
        <div className="flex flex-col items-start gap-3">
          <span className="chapter-tab">About</span>
          <h1 className="text-3xl md:text-4xl">
            {aboutMe.greetingLead} <span className="marker-highlight">{aboutMe.greetingAccent}</span>.
          </h1>
          <p className="text-lg font-semibold text-ink">{aboutMe.tagline}</p>
          <p className="max-w-xl text-[15px] leading-relaxed text-ink/70">{aboutMe.intro}</p>
        </div>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg">{aboutMe.builtLabel}</h3>
          <ul className="list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-ink/70">
            {aboutMe.built.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <Link href="/work" className="mt-5 inline-block text-sm font-semibold text-plum-700">
            See more of my work →
          </Link>
        </div>

        <div>
          <h3 className="mb-4 text-lg">{aboutMe.lessonsLabel}</h3>
          <ul className="list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-ink/70">
            {aboutMe.lessons.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="about-personal mt-14 max-w-2xl text-[15px] italic leading-relaxed text-ink/70">
        {aboutMe.personal}
      </p>
    </section>
  );
}
