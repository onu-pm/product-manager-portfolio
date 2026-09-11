import { building, profile } from "@/lib/content";

export default function Building() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="chapter-tab">Brewery</span>
        <h2 className="mt-3">
          <span>{building.headline.split(",")[0]},</span>{" "}
          <span className="font-display italic text-plum-500">
            {building.headline.split(",")[1]}
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ink-secondary">
          {building.body}
        </p>
        <a href={`mailto:${profile.email}`} className="btn-primary mt-8 px-6 py-3 text-sm">
          Get in touch
        </a>
      </div>
    </section>
  );
}
