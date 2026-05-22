import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 4 §3 — Company cards. The four operating companies.
//
// Fitrah Media / Labs / Ventures: category, description, and status are
// verbatim from PRD §9 Page 4 Portfolio Items.
//
// Fitrah Technologies is NOT in the Page 4 portfolio list, but the page meta
// (PRD §14) names it as a company on this page. Its description is the Page 5
// subheadline (verbatim); its category is derived from the Page 5 objective
// ("product, engineering, AI, and infrastructure arm"); its status — "Active"
// — is the page's only inferred status, drawn from the present-tense Page 5
// language ("designs and builds … powering Fitrah Global"). Flagged for
// client confirmation.
//
// Each row links to the company's dedicated PRD route (Pages 5/6/7/8).
// Row layout ports the brand HTML's .pf-list "Featured Platforms" treatment.

type Company = {
  name: string;
  category: string;
  description: string;
  status: string;
  href: string;
};

const COMPANIES: Company[] = [
  {
    name: "Fitrah Technologies",
    category: "Product / Engineering / AI",
    description:
      "Designs and builds the platforms, applications, AI systems, and trust infrastructure powering Fitrah Global.",
    status: "Active",
    href: "/fitrah-technologies",
  },
  {
    name: "Fitrah Media",
    category: "Media / Intelligence",
    description:
      "A media and intelligence platform covering the Muslim digital economy, ethical technology, culture, commerce, and community.",
    status: "Planned",
    href: "/fitrah-media",
  },
  {
    name: "Fitrah Labs",
    category: "Venture Studio",
    description:
      "The internal product lab where new ideas are researched, prototyped, validated, and launched.",
    status: "Active / Planned",
    href: "/fitrah-labs",
  },
  {
    name: "Fitrah Ventures",
    category: "Ventures / Investment",
    description:
      "The investment and venture-building arm backing founders and companies building trusted digital platforms.",
    status: "Planned",
    href: "/fitrah-ventures",
  },
];

export function CompanyCards() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow>Companies</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            The arms behind{" "}
            <em className="italic font-light text-green-500">the platforms.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.65] text-muted">
            Product and engineering, media and intelligence, research, and
            investment &mdash; the operating companies that build, power, and
            back everything under Fitrah Global.
          </p>
        </Reveal>

        {/* Row list — ports brand HTML .pf-list. Each company is a full-width
            row: name + category · description · status · arrow. */}
        <div className="mt-14 border-t border-rule max-md:mt-10">
          {COMPANIES.map((c, i) => (
            <Reveal key={c.name} delay={240 + i * 80} className="contents">
              <a
                href={c.href}
                className="group grid grid-cols-[minmax(220px,1.05fr)_1.5fr_auto_56px] items-center gap-8 border-b border-rule py-9 transition-colors duration-300 hover:bg-ivory-2 max-lg:grid-cols-[1fr_auto] max-lg:gap-x-6 max-lg:gap-y-4 max-md:py-7"
              >
                {/* Name + category */}
                <div className="max-lg:col-start-1">
                  <h3 className="font-serif font-normal text-green-700 leading-[1.1] tracking-[-0.016em] text-[clamp(24px,2.4vw,32px)]">
                    {c.name}
                  </h3>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {c.category}
                  </div>
                </div>

                {/* Description */}
                <p className="max-w-[48ch] text-[14.5px] leading-[1.6] text-ink/80 max-lg:col-span-2 max-lg:col-start-1 max-lg:max-w-none">
                  {c.description}
                </p>

                {/* Status */}
                <span className="justify-self-start rounded-full border border-gold/35 bg-gold/[0.04] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-gold max-lg:col-start-1 max-lg:row-start-1 max-lg:justify-self-end">
                  {c.status}
                </span>

                {/* Arrow */}
                <span className="grid h-9 w-9 place-items-center justify-self-end rounded-full border border-rule-2 text-green-700 transition-colors duration-300 group-hover:border-green-700 group-hover:bg-green-700 group-hover:text-ivory max-lg:col-start-2 max-lg:row-start-2">
                  <ArrowRight />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
