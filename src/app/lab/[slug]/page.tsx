import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LabDetail from "@/components/LabDetail";
import Reveal from "@/components/Reveal";
import { labProjects } from "@/lib/content";

export function generateStaticParams() {
  return labProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/lab/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = labProjects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `Lab | ${p.title}`,
    description: p.hook,
  };
}

export default async function LabProjectPage({ params }: PageProps<"/lab/[slug]">) {
  const { slug } = await params;
  if (!labProjects.some((p) => p.slug === slug)) notFound();

  return (
    <Reveal>
      <LabDetail slug={slug} />
    </Reveal>
  );
}
