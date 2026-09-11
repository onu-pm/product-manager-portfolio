import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkDetail from "@/components/WorkDetail";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    // Root layout's template only wraps once, so the "Work" segment is
    // baked in here rather than via a nested layout (a layout.tsx living
    // in the same [slug] folder as this page does not template-wrap the
    // page's own title — only genuinely deeper children get that).
    title: `Work | ${p.feature}`,
    description: p.title,
  };
}

export default async function WorkCaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  if (!projects.some((p) => p.slug === slug)) notFound();

  return (
    <Reveal>
      <WorkDetail slug={slug} />
    </Reveal>
  );
}
