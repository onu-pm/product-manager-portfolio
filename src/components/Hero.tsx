import { pillars, profile, specialties } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-16 md:pt-24">
      <div className="hero-glow -top-24 right-0 h-[24rem] w-[24rem] md:h-[30rem] md:w-[30rem]" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-burgundy-700">
            {profile.title}
          </p>
          <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-[-0.02em] md:text-5xl lg:text-[56px]">
            <span className="marker-highlight text-burgundy-900">{profile.headlineEmphasis}</span>{" "}
            <span className="font-accent italic text-burgundy-500">{profile.headlineRest}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-[1.4] text-foreground/75 md:mx-0 md:text-xl">
            {profile.subhead}
          </p>

          <div className="mt-7 flex items-center justify-center gap-3 md:justify-start">
            <a
              href={`mailto:${profile.email}`}
              className="icon-btn"
              aria-label="Email me"
              title="Email me"
            >
              ✉
            </a>
            <a
              href={profile.linkedin}
              className="icon-btn"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
            <a href="#contact" className="btn-primary w-full px-7 py-3 text-sm sm:w-auto">
              Ways to connect
            </a>
            <a href="#capabilities" className="btn-secondary w-full px-7 py-3 text-sm sm:w-auto">
              Go on..
            </a>
          </div>
        </div>

        {/* Placeholder headshot. Swap the initials block below for a real
            photo, e.g. <Image src="/photo.jpg" alt={profile.name} fill className="object-cover rounded-[1.4rem]" /> */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="photo-frame h-56 w-56 md:h-72 md:w-72">
            <div>
              <span className="font-display text-6xl font-bold md:text-7xl">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-2xl text-left text-[15px] leading-relaxed text-neutral-600 md:text-base">
        <p>
          <span className="font-display font-bold text-neutral-900">Hello 👋 I&apos;m {profile.name.split(" ")[0]}</span>,
          a founding product manager with an eye for reusable architecture, consent, and the
          unglamorous work that lets a system scale past its first ten customers.
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {pillars.map((p) => (
            <li key={p.label}>
              <span className="font-display font-bold text-burgundy-800">{p.label}</span>
              {": "}
              {p.body}
            </li>
          ))}
        </ul>
      </div>

      <ul className="relative mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
        {specialties.map((s) => (
          <li
            key={s}
            className="rounded-full border border-burgundy-200 bg-white px-4 py-1.5 text-xs font-semibold text-burgundy-800 md:text-sm"
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
