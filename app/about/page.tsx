import type { Metadata } from "next";
import { AboutHeader } from "@/components/about/AboutHeader";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { WhatFitrahMeans } from "@/components/about/WhatFitrahMeans";
import { Mission } from "@/components/about/Mission";
import { Vision } from "@/components/about/Vision";
import { WhyWeExist } from "@/components/about/WhyWeExist";
import { OperatingModel } from "@/components/about/OperatingModel";
import { LongTermAmbition } from "@/components/about/LongTermAmbition";
import { LeadershipMessage } from "@/components/common/LeadershipMessage";
import { AboutCTA } from "@/components/about/AboutCTA";

// Title + description verbatim from PRD §14 Recommended Page Meta → About.
const TITLE = "About Fitrah Global — Technology Rooted in Human Nature";
const DESCRIPTION =
  "Learn about Fitrah Global's mission to build trusted digital products for the Muslim world across technology, AI, media, commerce, and community.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <WhoWeAre />
      <WhatFitrahMeans />
      <Mission />
      <Vision />
      <WhyWeExist />
      <OperatingModel />
      <LongTermAmbition />
      <LeadershipMessage />
      <AboutCTA />
    </>
  );
}
