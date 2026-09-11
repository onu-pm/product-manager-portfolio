import Link from "next/link";
import { profile, projects, caseStudies, playgroundProjects, alterEgo } from "@/lib/content";
import PreviewCard from "@/components/PreviewCard";
import LightBulb from "@/components/LightBulb";

function tagLabel(tag: string) {
  return tag.split("·")[1]?.trim() || tag;
}

export default function Bento() {
  return (
    <section className="home-section relative flex flex-col px-6 pb-28 pt-20">
      {/* Ambient glass backdrop the bento cards float over. */}
      <div className="bento-backdrop">
        <span
          className="left-[-10%] top-[-10%] h-[55vw] w-[55vw]"
          style={{ background: "var(--plum-300)" }}
        />
        <span
          className="bottom-[-15%] right-[-10%] h-[50vw] w-[50vw]"
          style={{ background: "var(--rose-400)" }}
        />
        <span
          className="left-[35%] top-[40%] h-[35vw] w-[35vw]"
          style={{ background: "var(--plum-400)" }}
        />
      </div>

      <LightBulb />

      <div className="bento-grid mx-auto w-full max-w-6xl flex-1">
        {/* Intro */}
        <div className="bento-card card-intro">
          <div className="card-face">
            <div>
              <h2 className="card-name">{profile.greeting}</h2>
              <h1 className="card-name card-name-hero">{profile.heroHeadline}</h1>
              <p className="card-desc">{profile.heroDescription}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/about" className="cta-chip-sm">
                Who am I
              </Link>
              <Link href="/about#contact" className="cta-chip-sm">
                Connect
              </Link>
              <a href={`mailto:${profile.email}`} className="cta-chip-sm">
                Email
              </a>
            </div>
          </div>
        </div>

        <PreviewCard
          href="/work"
          areaClass="card-work"
          name="Work"
          description="Real systems I've shipped end to end, as part of the job."
          ctaText="5 shipped projects"
          slides={projects.map((p, i) => ({ number: `0${i + 1}`, label: tagLabel(p.tag) }))}
        />

        <PreviewCard
          href="/pov"
          areaClass="card-pov"
          name="POV"
          description="Products I picked myself, and wrote my own thesis on."
          ctaText="4 theses"
          slides={caseStudies.map((c, i) => ({ number: `0${i + 1}`, label: tagLabel(c.tag) }))}
        />

        <PreviewCard
          href="/lab"
          areaClass="card-lab"
          name="Lab"
          description="AI and vibe-coded builds, made for fun outside of any job."
          ctaText="Take a look"
          slides={playgroundProjects.map((p, i) => ({ number: `0${i + 1}`, label: p.title }))}
        />

        <PreviewCard
          href="/alter-ego"
          areaClass="card-alter"
          name={alterEgo.headline}
          description={alterEgo.description}
          ctaText="The other side"
          slides={alterEgo.strands.map((s, i) => ({ number: `0${i + 1}`, label: s }))}
        />

        <PreviewCard
          href="/brewery"
          areaClass="card-brewery"
          name="Brewery"
          description="An early-stage venture, still under wraps."
          ctaText="A peek"
          slides={[
            { number: "01", label: "Something new" },
            { number: "02", label: "In stealth" },
            { number: "03", label: "Still early days" },
          ]}
        />
      </div>
    </section>
  );
}
