import type { Metadata } from "next";
import { EcosystemHero } from "@/components/ecosystem/EcosystemHero";

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
    </>
  );
}
