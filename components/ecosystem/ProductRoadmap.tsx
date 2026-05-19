import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 3 §6 — Product Roadmap. All portfolio items, categories,
// descriptions, and statuses are verbatim from PRD §9 Page 4 Portfolio
// Items. Bucketing into Now / Next / Later follows the PRD's stated
// statuses — no dates are invented; no products outside the PRD list
// are added. The CTA on each card routes to /companies (PRD Page 4),
// which is the canonical home for portfolio detail.

type Phase = "now" | "next" | "later";

type Product = {
  name: string;
  category: string;
  description: string;
  status: string;
  phase: Phase;
};

const PRODUCTS: Product[] = [
  {
    name: "Safa by Fitrah",
    category: "Browser / Digital Gateway",
    description:
      "A Muslim-first browser and digital gateway for safer, values-aligned internet discovery.",
    status: "Concept / Building",
    phase: "now",
  },
  {
    name: "Fitrah AI",
    category: "Artificial Intelligence",
    description:
      "AI-powered tools for learning, discovery, safety, personalization, and guidance.",
    status: "Building",
    phase: "now",
  },
  {
    name: "Fitrah Labs",
    category: "Venture Studio",
    description:
      "The internal product lab where new ideas are researched, prototyped, validated, and launched.",
    status: "Active / Planned",
    phase: "now",
  },
  {
    name: "Salam by Fitrah",
    category: "Communication",
    description:
      "A messaging and community platform designed for trusted Muslim digital connection.",
    status: "Concept",
    phase: "next",
  },
  {
    name: "Tayyib by Fitrah",
    category: "Social Commerce",
    description:
      "A halal social commerce platform connecting trusted creators, ethical brands, and Muslim consumers.",
    status: "Concept",
    phase: "next",
  },
  {
    name: "Basirah by Fitrah",
    category: "Spiritual Learning",
    description:
      "An azkar, zikr, and spiritual learning platform designed to support daily remembrance and community accountability.",
    status: "Concept",
    phase: "next",
  },
  {
    name: "Fitrah Media",
    category: "Media / Intelligence",
    description:
      "A media and intelligence platform covering the Muslim digital economy, ethical technology, culture, commerce, and community.",
    status: "Planned",
    phase: "later",
  },
  {
    name: "Fitrah Ventures",
    category: "Ventures / Investment",
    description:
      "The investment and venture-building arm backing founders and companies building trusted digital platforms.",
    status: "Planned",
    phase: "later",
  },
];

const PHASES: { id: Phase; label: string; lede: string }[] = [
  { id: "now", label: "Now", lede: "Building and active." },
  { id: "next", label: "Next", lede: "In concept; coming." },
  { id: "later", label: "Later", lede: "Planned on the horizon." },
];

export function ProductRoadmap() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow>Product Roadmap</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            What&rsquo;s shipping,{" "}
            <em className="italic font-light text-green-500">what&rsquo;s next.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.65] text-muted">
            The portfolio at a glance &mdash; grouped by where each product
            sits today. Status reflects current stage, not a fixed timeline.
          </p>
        </Reveal>

        {/* Horizon rail — Now → Next → Later progression */}
        <div className="mt-16 max-md:mt-12">
          <div className="relative grid grid-cols-3 gap-6 max-md:hidden">
            {PHASES.map((p) => (
              <div key={p.id} className="relative flex items-center gap-3">
                <span className="block h-2 w-2 rounded-full bg-green-700" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-green-700">
                  {p.label}
                </span>
                <span className="font-mono text-[11px] tracking-[0.08em] text-muted">
                  &mdash; {p.lede}
                </span>
              </div>
            ))}
            {/* Hairline beneath the labels */}
            <div className="col-span-3 mt-4 h-px bg-rule" />
          </div>

          {/* 3-column grid of phase columns */}
          <div className="mt-8 grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-lg:gap-10">
            {PHASES.map((phase, phaseIdx) => {
              const items = PRODUCTS.filter((p) => p.phase === phase.id);
              return (
                <div key={phase.id} className="flex flex-col gap-5">
                  {/* Mobile-only phase header (desktop header is in the rail above) */}
                  <div className="hidden max-lg:flex items-center gap-3">
                    <span className="block h-2 w-2 rounded-full bg-green-700" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-green-700">
                      {phase.label}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.08em] text-muted">
                      &mdash; {phase.lede}
                    </span>
                  </div>

                  {items.map((product, i) => (
                    <Reveal
                      key={product.name}
                      delay={260 + phaseIdx * 100 + i * 70}
                    >
                      <article className="group flex h-full flex-col rounded-xl border border-rule bg-ivory p-7 transition-colors duration-300 hover:border-rule-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                            {product.category}
                          </span>
                          <span className="rounded-full border border-gold/35 bg-gold/[0.04] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-gold">
                            {product.status}
                          </span>
                        </div>

                        <h3 className="mt-5 font-serif font-normal text-green-700 leading-[1.15] tracking-[-0.014em] text-[clamp(20px,1.8vw,24px)]">
                          {product.name}
                        </h3>

                        <p className="mt-3 text-[14.5px] leading-[1.6] text-ink/80">
                          {product.description}
                        </p>

                        <div className="mt-auto pt-6">
                          <a
                            href="/companies"
                            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-green-700 transition-colors group-hover:text-gold"
                          >
                            View on Companies
                            <span className="transition-transform group-hover:translate-x-0.5">
                              <ArrowRight />
                            </span>
                          </a>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footnote — no dates, by design */}
        <p className="mt-12 max-w-[58ch] font-mono text-[11px] uppercase tracking-[0.14em] text-muted max-md:mt-8">
          Specific launch dates are intentionally omitted &mdash; ship dates
          are confirmed product by product.
        </p>
      </div>
    </section>
  );
}
