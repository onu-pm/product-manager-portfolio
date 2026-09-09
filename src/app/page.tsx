import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TestimonialBreak from "@/components/TestimonialBreak";
import LogoStrip from "@/components/LogoStrip";
import Highlights from "@/components/Highlights";
import Capabilities from "@/components/Capabilities";
import CaseStudies from "@/components/CaseStudies";
import Projects from "@/components/Projects";
import Craft from "@/components/Craft";
import Approach from "@/components/Approach";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <TestimonialBreak index={0} />
        </Reveal>
        <LogoStrip />
        <Reveal>
          <Highlights />
        </Reveal>
        <Reveal>
          <Capabilities />
        </Reveal>
        <Reveal>
          <CaseStudies />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <TestimonialBreak index={1} />
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
      </main>
      <Footer />
    </div>
  );
}
