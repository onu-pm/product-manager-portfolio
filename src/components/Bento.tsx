import Link from "next/link";
import { profile, projects, caseStudies, labProjects, alterEgo } from "@/lib/content";
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
              <h1 className="card-name card-name-hero">
                {profile.heroLead}{" "}
                <span className="marker-highlight">{profile.heroAccent}</span>{" "}
                {profile.heroTrail}
              </h1>
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
          description="Explore my work, process and more."
          ctaText="View Work"
          slides={projects.map((p, i) => {
            // The bento slot is a short banner — far shorter than the
            // carousel card — so a rich slide shows the title plus one
            // stat (whichever cover stat matches the headline figure),
            // not the full three-stat/tag spread that fits on the carousel.
            const primaryStat = p.coverStats?.find((s) => s.value === p.stat?.value) ?? p.stat;
            return {
              number: `0${i + 1}`,
              label: tagLabel(p.tag),
              image: p.coverImage,
              title: p.coverImage ? p.bentoLabel ?? p.title : undefined,
              stats: p.coverImage && primaryStat ? [primaryStat] : undefined,
            };
          })}
        />

        <PreviewCard
          href="/pov"
          areaClass="card-pov"
          name="Point-of-View"
          description="Side explorations across SaaS, HRIS and Platforms."
          ctaText="Explore POVs"
          slides={caseStudies.map((c, i) => {
            // Same decoupling as the detail page — rich content ships as
            // soon as a case study has real deck content, independent of
            // whether its cover photo has been supplied yet. Title only,
            // same as Work's bento slide: this banner is far shorter than
            // the carousel card, and description + tags together measured
            // taller than the slot, overflowing into the dots below it.
            const rich = !!(c.coverDescription || c.sections);
            return {
              number: `0${i + 1}`,
              label: tagLabel(c.tag),
              image: c.coverImage,
              title: rich ? c.bentoLabel ?? c.title : undefined,
            };
          })}
        />

        <PreviewCard
          href="/lab"
          areaClass="card-lab"
          name="Laboratory"
          description="Rapid AI experiments built at the speed of thought."
          ctaText="Enter Lab"
          slides={labProjects.map((p, i) => ({
            number: `0${i + 1}`,
            label: p.category,
            image: p.coverImage,
            title: p.bentoLabel,
          }))}
        />

        <PreviewCard
          href="/alter-ego"
          areaClass="card-alter"
          name={alterEgo.headline}
          description="A package.json of me when not at work"
          ctaText="Enter Closet"
          slides={alterEgo.strands.map((s, i) => ({ number: `0${i + 1}`, label: s }))}
        />

        <PreviewCard
          href="/brewery"
          areaClass="card-brewery"
          name="Brewery"
          description="Building something in Stealth"
          ctaText="Let's Brew"
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
