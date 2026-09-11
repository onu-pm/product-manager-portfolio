import type { Metadata } from "next";
import Playground from "@/components/Playground";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Lab",
  description: "AI and vibe-coded projects, built for fun outside of any job.",
};

export default function LabPage() {
  return (
    <Reveal>
      <Playground />
    </Reveal>
  );
}
