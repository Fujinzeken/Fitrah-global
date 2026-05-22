import type { Metadata } from "next";
import { TechnologiesHero } from "@/components/fitrah-technologies/TechnologiesHero";
import { TechnologiesOverview } from "@/components/fitrah-technologies/TechnologiesOverview";
import { CapabilitySections } from "@/components/fitrah-technologies/CapabilitySections";
import { TechnologiesRoadmap } from "@/components/fitrah-technologies/TechnologiesRoadmap";
import { TechnologiesCTA } from "@/components/fitrah-technologies/TechnologiesCTA";

// PRD §14 lists no dedicated meta for Fitrah Technologies; title and
// description are composed from the PRD §9 Page 5 headline + subheadline
// (both verbatim).
const TITLE =
  "Fitrah Technologies — Building the Technology Layer of the Fitrah Ecosystem";
const DESCRIPTION =
  "Fitrah Technologies designs and builds the platforms, applications, AI systems, and trust infrastructure powering Fitrah Global.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/fitrah-technologies",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function FitrahTechnologiesPage() {
  return (
    <>
      <TechnologiesHero />
      <TechnologiesOverview />
      <CapabilitySections />
      <TechnologiesRoadmap />
      <TechnologiesCTA />
    </>
  );
}
