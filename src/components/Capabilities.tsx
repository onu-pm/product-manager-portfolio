import Breadcrumbs from "@/components/Breadcrumbs";
import { capabilities } from "@/lib/content";

export default function Capabilities() {
  return (
    <section id="capabilities" className="page-shell py-20">
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <div className="mb-10 mt-6 flex flex-col items-start gap-3">
        <span className="chapter-tab">Capabilities</span>
        <h2>
          <span>Where I&apos;m</span>{" "}
          <span className="marker-highlight">most useful.</span>
        </h2>
        <p className="max-w-xl text-ink/70">
          Most of my work falls into a few patterns. If you see yourself in one of these, we
          should talk.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-plum-100">
        {capabilities.map((c) => (
          <div key={c.title} className="py-6 first:pt-0">
            <h3 className="mb-2 text-lg">{c.title}</h3>
            <p className="text-[15px] leading-relaxed text-ink/70">{c.body}</p>
          </div>
        ))}
      </div>

      <a href="#contact" className="btn-primary mt-10 inline-flex px-7 py-3 text-sm">
        Ways to connect
      </a>
    </section>
  );
}
