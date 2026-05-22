import type { Metadata } from "next";
import { PhilosophyHero } from "@/components/philosophy/PhilosophyHero";
import { PhilosophyPrinciples } from "@/components/philosophy/PhilosophyPrinciples";
import { PhilosophyCTA } from "@/components/philosophy/PhilosophyCTA";

// PRD §14 lists no dedicated meta for Philosophy; title and description are
// composed from the PRD §9 Page 9 headline + subheadline (both verbatim).
const TITLE =
  "Philosophy — A Better Digital World Begins with a Better Philosophy of Technology";
const DESCRIPTION =
  "We believe technology should serve people, strengthen trust, protect values, and support human flourishing.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/philosophy",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function PhilosophyPage() {
  return (
    <>
      <PhilosophyHero />
      <PhilosophyPrinciples />
      <PhilosophyCTA />
    </>
  );
}
