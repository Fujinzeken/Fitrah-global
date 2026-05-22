import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 7 §1 — What Fitrah Labs Is. Grounded in PRD facts: the Page 7
// objective ("the venture studio and innovation lab"), the subheadline
// (verbatim), and PRD §9 Page 4's Fitrah Labs description ("the internal
// product lab where new ideas are researched, prototyped, validated, and
// launched"). Connective prose is authored framing; logged in placeholders.md.

export function WhatLabsIs() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="grid grid-cols-[0.36fr_0.64fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <Eyebrow>What Fitrah Labs Is</Eyebrow>
            <h2 className="mt-6 max-w-[14ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
              The studio behind the{" "}
              <em className="italic font-light text-green-500">next product.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="space-y-6 text-[17px] leading-[1.65] text-ink/85 max-w-[60ch]">
              <p>
                Fitrah Labs is the venture studio and innovation lab of Fitrah
                Global &mdash; the internal home where new ideas are researched,
                prototyped, validated, and launched.
              </p>
              <p>
                It is where the ecosystem renews itself: a place to test what
                the Muslim world needs next, build it quickly, and either grow
                it into a product or set it aside and learn.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
