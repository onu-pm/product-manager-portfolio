import { playgroundProjects } from "@/lib/content";

export default function Playground() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col items-start gap-3">
          <span className="chapter-tab">Lab</span>
          <h2>
            <span>Lighter, faster,</span>{" "}
            <span className="font-display italic text-plum-500">more exploratory.</span>
          </h2>
          <p className="max-w-xl text-ink-secondary">
            AI and vibe-coded projects I build for fun, outside of any job. Some ship, some
            don&apos;t, all of it is real.
          </p>
        </div>

        {playgroundProjects.length === 0 ? (
          <div className="tint-card rounded-3xl p-8 text-center">
            <p className="text-[15px] leading-relaxed text-ink-secondary">
              First write-ups are still landing here. Ask me directly if you want a preview.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {playgroundProjects.map((p) => (
              <div key={p.title} className="bento-card">
                <div>
                  <h3 className="text-lg">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">{p.body}</p>
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 text-sm font-semibold text-plum-600"
                  >
                    Take a look →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
