import Breadcrumbs from "@/components/Breadcrumbs";
import { alterEgo, profile } from "@/lib/content";

export default function AlterEgo() {
  return (
    <section className="py-20">
      <div className="page-shell">
        <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Alter Ego" }]} />
        <div className="mb-10 mt-6 flex flex-col items-start gap-3">
          <h2>
            <span>The part that isn&apos;t</span>{" "}
            <span className="marker-highlight">a job title.</span>
          </h2>
          <p className="max-w-xl text-ink-secondary">{alterEgo.body}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {alterEgo.strands.map((s) => (
            <div key={s} className="bento-card">
              <h3 className="text-lg">{s}</h3>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[15px] leading-relaxed text-ink-secondary">
          Links to the actual writing and side projects are still being collected here. If you want
          any of it in the meantime,{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-semibold text-plum-600 underline decoration-plum-300 underline-offset-4"
          >
            just ask
          </a>
          .
        </p>
      </div>
    </section>
  );
}
