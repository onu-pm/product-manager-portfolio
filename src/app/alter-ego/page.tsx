import type { Metadata } from "next";
import AlterEgo from "@/components/AlterEgo";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Alter Ego, Anupam Kalita",
  description: "Writing, blogs, and side hustles outside the product-manager job title.",
};

export default function AlterEgoPage() {
  return (
    <Reveal>
      <AlterEgo />
    </Reveal>
  );
}
