import type { Metadata } from "next";
import { CareersHero } from "@/components/careers/CareersHero";
import { WhyJoin } from "@/components/careers/WhyJoin";
import { OurCulture } from "@/components/careers/OurCulture";
import { WhoWeLookFor } from "@/components/careers/WhoWeLookFor";
import { CareersTeams } from "@/components/careers/CareersTeams";
import { CareersValues } from "@/components/careers/CareersValues";
import { OpenRoles } from "@/components/careers/OpenRoles";
import { TalentCommunityCTA } from "@/components/careers/TalentCommunityCTA";

// PRD §14 lists no dedicated meta for Careers; title is the PRD §9 Page 11
// headline (verbatim) and description is the subheadline (verbatim).
const TITLE = "Careers — Build Technology with Purpose | Fitrah Global";
const DESCRIPTION =
  "Join Fitrah Global to build products that serve people, strengthen communities, and shape the future of the Muslim digital economy.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/careers",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <WhyJoin />
      <OurCulture />
      <WhoWeLookFor />
      <CareersTeams />
      <CareersValues />
      <OpenRoles />
      <TalentCommunityCTA />
    </>
  );
}
