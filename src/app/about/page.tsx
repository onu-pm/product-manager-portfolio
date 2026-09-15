import type { Metadata } from "next";
import AboutMe from "@/components/AboutMe";
import Capabilities from "@/components/Capabilities";
import CalEmbed from "@/components/CalEmbed";
import Craft from "@/components/Craft";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "How I work, what I'm good at, and how to reach me.",
};

export default function AboutPage() {
  return (
    <>
      <CalEmbed />
      <Reveal>
        <AboutMe />
      </Reveal>
      <Reveal>
        <Capabilities />
      </Reveal>
      <Reveal>
        <Craft />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
