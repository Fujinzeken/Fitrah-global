import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 6 §4 — Market Intelligence. PRD supplies no data. Built as a
// dashboard-style tile grid shown as intentional empty states. No figures are
// invented and the home page's cited stats are not reused here. Data is
// flagged pending; logged in placeholders.md.

export function MarketIntelligence() {
  return (
    <section className="bg-sand border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <Eyebrow tone="on-sand">Market Intelligence</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 max-w-[20ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
                The numbers behind{" "}
                <em className="italic font-light text-green-500">the market.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <span className="inline-flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/60">
                Live data pending
              </span>
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:mt-10 max-md:grid-cols-1">
          {[0, 1, 2, 3].map((i) => (
            <Reveal key={i} delay={240 + i * 70} className="contents">
              <div className="rounded-xl border border-rule-2 bg-ivory p-7">
                {/* Placeholder figure */}
                <span className="block h-9 w-3/5 rounded-md bg-rule" />
                {/* Placeholder label */}
                <span className="mt-4 block h-2.5 w-4/5 rounded-full bg-rule" />
                <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Metric pending
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={560}>
          <p className="mt-8 max-w-[58ch] text-[14px] italic leading-[1.65] text-ink/70">
            Market metrics &mdash; figures, sources, and timeframes &mdash; to
            be supplied by the client. All published numbers must be cited.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
