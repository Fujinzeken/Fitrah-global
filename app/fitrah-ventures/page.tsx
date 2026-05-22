import type { Metadata } from "next";
import { VenturesHero } from "@/components/fitrah-ventures/VenturesHero";
import { InvestmentThesis } from "@/components/fitrah-ventures/InvestmentThesis";
import { WhatWeBack } from "@/components/fitrah-ventures/WhatWeBack";
import { StrategicFocusAreas } from "@/components/fitrah-ventures/StrategicFocusAreas";
import { VentureBuildingModel } from "@/components/fitrah-ventures/VentureBuildingModel";
import { FounderPartnerships } from "@/components/fitrah-ventures/FounderPartnerships";
import { AcquisitionsInvestments } from "@/components/fitrah-ventures/AcquisitionsInvestments";
import { VenturesPortfolio } from "@/components/fitrah-ventures/VenturesPortfolio";
import { VenturesPartnerCTA } from "@/components/fitrah-ventures/VenturesPartnerCTA";

// PRD §14 lists no dedicated meta for Fitrah Ventures; title and description
// are composed from the PRD §9 Page 8 headline + subheadline (both verbatim).
const TITLE = "Fitrah Ventures — Backing the Builders of the Muslim Digital Future";
const DESCRIPTION =
  "Fitrah Ventures partners with founders, operators, and companies building trusted platforms for the global Muslim economy.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/fitrah-ventures",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function FitrahVenturesPage() {
  return (
    <>
      <VenturesHero />
      <InvestmentThesis />
      <WhatWeBack />
      <StrategicFocusAreas />
      <VentureBuildingModel />
      <FounderPartnerships />
      <AcquisitionsInvestments />
      <VenturesPortfolio />
      <VenturesPartnerCTA />
    </>
  );
}
