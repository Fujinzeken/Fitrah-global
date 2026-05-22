import type { Metadata } from "next";
import { MediaHero } from "@/components/fitrah-media/MediaHero";
import { FeaturedStories } from "@/components/fitrah-media/FeaturedStories";
import { ResearchReports } from "@/components/fitrah-media/ResearchReports";
import { MarketIntelligence } from "@/components/fitrah-media/MarketIntelligence";
import { CreatorEconomy } from "@/components/fitrah-media/CreatorEconomy";
import { EditorialCategories } from "@/components/fitrah-media/EditorialCategories";
import { NewsletterSignup } from "@/components/fitrah-media/NewsletterSignup";
import { MediaPartnershipCTA } from "@/components/fitrah-media/MediaPartnershipCTA";

// PRD §14 lists no dedicated meta for Fitrah Media; title and description are
// composed from the PRD §9 Page 6 headline + subheadline (both verbatim).
const TITLE =
  "Fitrah Media — The Media and Intelligence Layer for the Muslim Digital Economy";
const DESCRIPTION =
  "Fitrah Media tells the stories, tracks the trends, and builds the narratives shaping Muslim technology, commerce, culture, AI, and community.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/fitrah-media",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function FitrahMediaPage() {
  return (
    <>
      <MediaHero />
      <FeaturedStories />
      <ResearchReports />
      <MarketIntelligence />
      <CreatorEconomy />
      <EditorialCategories />
      <NewsletterSignup />
      <MediaPartnershipCTA />
    </>
  );
}
