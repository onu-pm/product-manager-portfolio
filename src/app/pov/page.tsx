import type { Metadata } from "next";
import CaseStudies from "@/components/CaseStudies";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "POV",
  description: "Products I picked myself and wrote my own thesis on.",
};

export default function PovPage() {
  return (
    <Reveal>
      <CaseStudies />
    </Reveal>
  );
}
