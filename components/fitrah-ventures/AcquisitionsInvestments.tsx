import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 8 §6 — Acquisitions and Strategic Investments. Grounded in the
// Page 8 objective ("the investment, acquisition, and venture-building arm").
// Kept to a qualitative statement — no invented deal terms, targets, or
// figures. Authored framing; logged in placeholders.md.

export function AcquisitionsInvestments() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="grid grid-cols-[0.42fr_0.58fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <Eyebrow>Acquisitions &amp; Strategic Investments</Eyebrow>
          </Reveal>

          <Reveal delay={140}>
            <div>
              <h2 className="max-w-[20ch] font-serif font-normal text-green-700 leading-[1.06] tracking-[-0.02em] text-[clamp(26px,3vw,42px)]">
                Growing the ecosystem through{" "}
                <em className="italic font-light text-green-500">
                  partnership and ownership.
                </em>
              </h2>
              <p className="mt-7 max-w-[58ch] text-[17px] leading-[1.65] text-ink/85">
                Beyond founding and backing early companies, Fitrah Ventures
                invests in and acquires businesses aligned with the mission
                &mdash; bringing proven teams and platforms into the ecosystem
                where they can reach further, faster.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
