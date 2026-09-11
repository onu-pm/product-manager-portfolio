import type { Metadata } from "next";
import Building from "@/components/Building";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Brewery",
  description: "What I'm building right now, in stealth.",
};

export default function BreweryPage() {
  return (
    <Reveal>
      <Building />
    </Reveal>
  );
}
