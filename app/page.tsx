import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { EcosystemMap } from "@/components/home/EcosystemMap";
import { FeaturedPlatforms } from "@/components/home/FeaturedPlatforms";
import { WhyNow } from "@/components/home/WhyNow";
import { PhilosophyPreview } from "@/components/home/PhilosophyPreview";
import { GlobalOpportunity } from "@/components/home/GlobalOpportunity";
import { LeadershipMessage } from "@/components/common/LeadershipMessage";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhatWeBuild />
      <EcosystemMap />
      <FeaturedPlatforms />
      <WhyNow />
      <PhilosophyPreview />
      <GlobalOpportunity />
      <LeadershipMessage />
      <FinalCTA />
    </>
  );
}
