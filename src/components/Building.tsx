import Breadcrumbs from "@/components/Breadcrumbs";
import { building, profile } from "@/lib/content";

export default function Building() {
  return (
    <section className="py-20">
      <div className="page-shell">
        <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Brewery" }]} />
        <h2 className="mt-6">
          <span>{building.headlineLead}</span>{" "}
          <span className="marker-highlight">{building.headlineAccent}</span>
        </h2>
        <p className="prose-measure mt-5 text-[15px] leading-relaxed text-ink-secondary">
          {building.body}
        </p>
        <a href={`mailto:${profile.email}`} className="btn-primary mt-8 px-6 py-3 text-sm">
          Connect
        </a>
      </div>
    </section>
  );
}
