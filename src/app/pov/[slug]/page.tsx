import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PovDetail from "@/components/PovDetail";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/pov/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  // See src/app/work/[slug]/page.tsx for why "POV" is baked in here.
  return { title: `POV | ${c.subject}`, description: c.title };
}

export default async function PovCaseStudyPage({ params }: PageProps<"/pov/[slug]">) {
  const { slug } = await params;
  if (!caseStudies.some((c) => c.slug === slug)) notFound();

  return (
    <Reveal>
      <PovDetail slug={slug} />
    </Reveal>
  );
}
