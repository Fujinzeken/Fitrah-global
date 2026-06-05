import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 6 §4 — Market Intelligence. The four weekly coverage areas are
// verbatim from client-supplied content (new-info.md, "Fitrah Media Content
// Strategy → Pillar 3 Intelligence"). Specific figures are still pending —
// each tile shows its topic and a "weekly coverage" label, no invented
// numbers and home page's cited stats not reused.

const TOPICS = [
  "Startup funding",
  "Acquisitions",
  "AI developments",
  "Islamic economy",
];

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
          {TOPICS.map((topic, i) => (
            <Reveal key={topic} delay={240 + i * 70} className="contents">
              <div className="rounded-xl border border-rule-2 bg-ivory p-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Weekly coverage
                </span>
                <h3 className="mt-4 font-serif font-normal text-green-700 leading-[1.15] tracking-[-0.014em] text-[clamp(20px,1.9vw,24px)]">
                  {topic}
                </h3>
                <span className="mt-6 block h-2.5 w-3/5 rounded-full bg-rule" />
                <div className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted">
                  Figures coming soon
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={560}>
          <p className="mt-8 max-w-[58ch] text-[14px] italic leading-[1.65] text-ink/70">
            Live figures and sources will be published as each weekly tracker
            comes online. All published numbers will be cited.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
