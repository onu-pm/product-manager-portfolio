import type { Metadata } from "next";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work, Anupam Kalita",
  description: "The real systems I've built end to end, as part of the job.",
};

export default function WorkPage() {
  return (
    <Reveal>
      <Projects />
    </Reveal>
  );
}
