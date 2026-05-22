import type { Metadata } from "next";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { FeaturedInsight } from "@/components/insights/FeaturedInsight";
import { TopicFilters } from "@/components/insights/TopicFilters";
import { InsightsFeeds } from "@/components/insights/InsightsFeeds";
import { NewsletterForm } from "@/components/common/NewsletterForm";

// PRD §14 lists no dedicated meta for Insights; title is the PRD §9 Page 10
// headline (verbatim) and description is the Page 10 objective.
const TITLE = "Insights — On the Future of Muslim Digital Life";
const DESCRIPTION =
  "A thought-leadership hub for essays, reports, company updates, research, and announcements on the future of Muslim digital life.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/insights",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <FeaturedInsight />
      <TopicFilters />
      <InsightsFeeds />
      <NewsletterForm
        eyebrow="Newsletter"
        headingLead="Insights on Muslim digital life,"
        headingEm="in your inbox."
        note="Essays, reports, and announcements. No spam."
      />
    </>
  );
}
