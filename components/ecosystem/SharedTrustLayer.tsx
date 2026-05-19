import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { Icon, type IconName } from "../common/Icon";

// PRD §9 Page 3 §5 — Shared trust layer. PRD provides no copy. The seven
// Trust Infrastructure primitives from PRD §9 Page 3 (Identity, safety,
// verification, moderation, payments, compliance, reputation) are distilled
// into five "what flows beneath every product" guarantees. All names and
// underlying concepts are PRD-sourced; the framing prose is mine.
//
// Conceptually distinct from the Trust Infrastructure vertical above: that
// section is about products specifically focused on trust; this is about
// the trust substrate that flows beneath every product across all six
// verticals.

type Primitive = {
  icon: IconName;
  name: string;
  desc: string;
};

const PRIMITIVES: Primitive[] = [
  {
    icon: "shield",
    name: "Verified identity",
    desc: "You know who you're talking to. Sign in once; identity carries across every product on the network.",
  },
  {
    icon: "leaf",
    name: "Safe defaults",
    desc: "Family-safe interaction, content moderation, and safety controls aren’t opt-in — they’re how every Fitrah product ships.",
  },
  {
    icon: "compass",
    name: "Trusted discovery",
    desc: "What you encounter — creators, brands, communities, learning — has been vetted at the network layer, not just the app.",
  },
  {
    icon: "docs",
    name: "Payments & compliance",
    desc: "Halal commerce, honest transactions, and regulatory compliance are guaranteed by the layer beneath, not rebuilt in each app.",
  },
  {
    icon: "sun",
    name: "Reputation that travels",
    desc: "Your good standing crosses products. Bad actors find that abuse on one platform is visible to the network.",
  },
];

export function SharedTrustLayer() {
  return (
    <section className="bg-sand-ruled border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <div className="grid grid-cols-[0.42fr_0.58fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-10">
          <Reveal>
            <Eyebrow tone="on-sand">Shared Trust Layer</Eyebrow>
            <h2 className="mt-6 max-w-[18ch] font-serif font-normal text-green-700 leading-[1.04] tracking-[-0.022em] text-[clamp(30px,3.8vw,52px)]">
              The same trust,{" "}
              <em className="italic font-light text-green-500">every product.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="space-y-6 text-[17px] leading-[1.65] text-ink/85 max-w-[58ch]">
              <p>
                Every product under Fitrah Global rests on the same trust
                primitives. Identity, safety, and compliance aren’t rebuilt
                inside each app — they’re guaranteed at the layer beneath.
              </p>
              <p>
                Trust travels with the user, not the product.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Manifest list — five primitives as hairline-divided rows. Ports
            the brand HTML .pf-list pattern: ordinal · name · description on
            a generous editorial row. */}
        <div className="mt-20 border-t border-rule-2 max-md:mt-14">
          {PRIMITIVES.map((p, i) => (
            <Reveal key={p.name} delay={220 + i * 80} className="contents">
              <div className="grid grid-cols-[72px_minmax(180px,0.3fr)_1fr] gap-8 border-b border-rule-2 py-8 items-start max-md:grid-cols-[44px_1fr] max-md:gap-5 max-md:py-7">
                <span className="text-green-700">
                  <Icon name={p.icon} size={28} />
                </span>
                <h3 className="font-serif font-normal text-green-700 leading-[1.15] tracking-[-0.012em] text-[clamp(20px,1.8vw,24px)] max-md:col-span-1">
                  {p.name}
                </h3>
                <p className="text-[15.5px] leading-[1.65] text-ink/85 max-w-[54ch] max-md:col-start-2">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
