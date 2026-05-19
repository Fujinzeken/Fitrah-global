import type { Metadata } from "next";
import { EcosystemHero } from "@/components/ecosystem/EcosystemHero";
import { EcosystemOverview } from "@/components/ecosystem/EcosystemOverview";
import { EcosystemMap } from "@/components/ecosystem/EcosystemMap";
import { CoreVerticals } from "@/components/ecosystem/CoreVerticals";
import { HowPlatformsConnect } from "@/components/ecosystem/HowPlatformsConnect";
import { SharedTrustLayer } from "@/components/ecosystem/SharedTrustLayer";
import { ProductRoadmap } from "@/components/ecosystem/ProductRoadmap";
import { PartnershipCTA } from "@/components/ecosystem/PartnershipCTA";

// Title + description verbatim from PRD §14 Recommended Page Meta → Ecosystem.
const TITLE = "Fitrah Global Ecosystem — Platforms for Muslim Digital Life";
const DESCRIPTION =
  "Explore the Fitrah Global ecosystem across communication, commerce, knowledge, media, AI, and trust infrastructure.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/ecosystem",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function EcosystemPage() {
  return (
    <>
      <EcosystemHero />
      <EcosystemOverview />
      <EcosystemMap />
      <CoreVerticals />
      <HowPlatformsConnect />
      <SharedTrustLayer />
      <ProductRoadmap />
      <PartnershipCTA />
    </>
  );
}
