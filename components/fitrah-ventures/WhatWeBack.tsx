import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { Icon, type IconName } from "../common/Icon";

// PRD §9 Page 8 §2 — What We Back. The three partner types come directly from
// the Page 8 subheadline ("founders, operators, and companies"). Descriptors
// are short, grounded characterizations — no invented stages, check sizes, or
// criteria. Authored framing; logged in placeholders.md.

const TYPES: { name: string; icon: IconName; desc: string }[] = [
  {
    name: "Founders",
    icon: "compass",
    desc: "Early builders with conviction and a product for the Muslim world.",
  },
  {
    name: "Operators",
    icon: "ventures",
    desc: "Experienced teams scaling platforms already in motion.",
  },
  {
    name: "Companies",
    icon: "globe",
    desc: "Established businesses aligned with the mission and values.",
  },
];

export function WhatWeBack() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <Reveal>
          <Eyebrow>What We Back</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            Who we{" "}
            <em className="italic font-light text-green-500">partner with.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-3 gap-6 max-md:mt-10 max-md:grid-cols-1 max-md:gap-5">
          {TYPES.map((t, i) => (
            <Reveal key={t.name} delay={200 + i * 80} className="contents">
              <article className="flex h-full flex-col rounded-xl border border-rule bg-ivory p-8 max-md:p-7">
                <span className="text-green-700">
                  <Icon name={t.icon} size={28} />
                </span>
                <h3 className="mt-7 font-serif font-normal text-green-700 leading-[1.12] tracking-[-0.014em] text-[clamp(22px,2vw,28px)]">
                  {t.name}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink/80">
                  {t.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
