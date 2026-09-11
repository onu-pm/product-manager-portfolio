import type { Metadata } from "next";
import Capabilities from "@/components/Capabilities";
import Craft from "@/components/Craft";
import Approach from "@/components/Approach";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About, Anupam Kalita",
  description: "How I work, what I'm good at, and how to reach me.",
};

export default function AboutPage() {
  return (
    <>
      <Reveal>
        <Capabilities />
      </Reveal>
      <Reveal>
        <Craft />
      </Reveal>
      <Reveal>
        <Approach />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
