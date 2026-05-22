import type { Metadata } from "next";
import { CompaniesHero } from "@/components/companies/CompaniesHero";
import { PortfolioIntro } from "@/components/companies/PortfolioIntro";
import { ProductGrid } from "@/components/companies/ProductGrid";
import { CompanyCards } from "@/components/companies/CompanyCards";
import { ComingSoon } from "@/components/companies/ComingSoon";
import { BuildOrPartnerCTA } from "@/components/companies/BuildOrPartnerCTA";

// Title + description verbatim from PRD §14 Recommended Page Meta → Companies.
const TITLE =
  "Fitrah Global Companies — Building the Future of Muslim Digital Life";
const DESCRIPTION =
  "Discover the companies and platforms under Fitrah Global, including Fitrah Technologies, Fitrah Media, Fitrah Labs, Fitrah Ventures, and future products.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/companies",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CompaniesPage() {
  return (
    <>
      <CompaniesHero />
      <PortfolioIntro />
      <ProductGrid />
      <CompanyCards />
      <ComingSoon />
      <BuildOrPartnerCTA />
    </>
  );
}
