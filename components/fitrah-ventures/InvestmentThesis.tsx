import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 8 §1 — Investment Thesis. Grounded in the Page 8 subheadline
// and the Fitrah Global brand principles (trust, human nature, long-term
// value). Kept qualitative — no invented financials (fund size, stage, check
// size). Authored framing; logged in placeholders.md.

export function InvestmentThesis() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[130px] max-md:py-[84px]">
        <Reveal>
          <Eyebrow>Investment Thesis</Eyebrow>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-10 max-w-[20ch] font-serif font-normal text-green-700 leading-[1.08] tracking-[-0.022em] text-[clamp(30px,4.4vw,60px)] max-md:mt-7">
            We back the people building a{" "}
            <em className="italic font-light text-green-500">
              trusted digital future
            </em>{" "}
            for the Muslim world.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-12 max-w-[60ch] text-[17px] leading-[1.65] text-ink/85 max-md:mt-9">
            Our conviction is simple: the next generation of platforms for the
            global Muslim economy should be built on trust, serve human nature,
            and create long-term value &mdash; not extract attention. We
            partner with the founders and companies building exactly that.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
