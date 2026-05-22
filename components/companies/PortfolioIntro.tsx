import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 4 §1 — Portfolio introduction. PRD provides no copy. Framing
// is grounded only in PRD-established facts: the portfolio holds consumer
// products (Safa, Salam, Tayyib, Basirah, Fitrah AI) and operating companies
// (Fitrah Technologies, Fitrah Media, Fitrah Labs, Fitrah Ventures), and every
// item carries a PRD-stated status. Sets up the Product grid (§2) and Company
// cards (§3) without re-listing names. Counts are exact, not invented.

export function PortfolioIntro() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow>Portfolio</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[20ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            Products, and the companies{" "}
            <em className="italic font-light text-green-500">behind them.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.65] text-ink/85">
            The Fitrah Global portfolio holds two kinds of things: the products
            people use day to day, and the companies that build, fund, and
            research them. Every item carries a status &mdash; concept,
            building, or planned &mdash; so you always know where it stands.
          </p>
        </Reveal>

        {/* Two-category split — products vs companies, divided by a center
            hairline. Counts are exact: 5 products, 4 companies. */}
        <div className="mt-20 grid grid-cols-2 gap-0 border-t border-rule max-md:mt-14 max-md:grid-cols-1">
          <Reveal delay={260} className="contents">
            <div className="border-r border-rule py-12 pr-12 max-md:border-r-0 max-md:border-b max-md:pr-0 max-md:py-10">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Products
                </span>
                <span className="font-mono text-[11px] tracking-[0.08em] text-gold">
                  Five
                </span>
              </div>
              <p className="mt-5 max-w-[42ch] text-[16px] leading-[1.65] text-ink/80">
                The consumer platforms &mdash; what users open, message in,
                learn from, and buy through. Each ships under the{" "}
                <span className="italic text-green-700">by Fitrah</span> name.
              </p>
            </div>
          </Reveal>

          <Reveal delay={320} className="contents">
            <div className="py-12 pl-12 max-md:pl-0 max-md:py-10">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Companies
                </span>
                <span className="font-mono text-[11px] tracking-[0.08em] text-gold">
                  Four
                </span>
              </div>
              <p className="mt-5 max-w-[42ch] text-[16px] leading-[1.65] text-ink/80">
                The operating arms &mdash; product and engineering, media and
                intelligence, research and incubation, and investment &mdash;
                that build and back the platforms.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
