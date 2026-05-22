import type { Metadata } from "next";
import { LabsHero } from "@/components/fitrah-labs/LabsHero";
import { WhatLabsIs } from "@/components/fitrah-labs/WhatLabsIs";
import { HowWeBuild } from "@/components/fitrah-labs/HowWeBuild";
import { LabsPhases } from "@/components/fitrah-labs/LabsPhases";
import { ExperimentsAndConcepts } from "@/components/fitrah-labs/ExperimentsAndConcepts";
import { BuildWithUsCTA } from "@/components/fitrah-labs/BuildWithUsCTA";

// PRD §14 lists no dedicated meta for Fitrah Labs; title and description are
// composed from the PRD §9 Page 7 headline + subheadline (both verbatim).
const TITLE = "Fitrah Labs — Where New Products Are Imagined, Tested, and Launched";
const DESCRIPTION =
  "Fitrah Labs researches, prototypes, validates, and launches new digital products for the Muslim world.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/fitrah-labs",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function FitrahLabsPage() {
  return (
    <>
      <LabsHero />
      <WhatLabsIs />
      <HowWeBuild />
      <LabsPhases />
      <ExperimentsAndConcepts />
      <BuildWithUsCTA />
    </>
  );
}
