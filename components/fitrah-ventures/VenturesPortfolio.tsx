import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 8 §7 — Portfolio. PRD names no portfolio companies for Fitrah
// Ventures, so this is an honest empty state ("portfolio in formation"). No
// companies or logos are invented. Content flagged pending; logged in
// placeholders.md.

export function VenturesPortfolio() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <Eyebrow>Portfolio</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 max-w-[18ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
                A portfolio in{" "}
                <em className="italic font-light text-green-500">formation.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <span className="inline-flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Portfolio pending
              </span>
            </span>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <div className="mt-12 rounded-2xl border border-dashed border-rule-2 bg-ivory/50 px-10 py-16 text-center max-md:mt-10 max-md:px-7 max-md:py-12">
            <p className="mx-auto max-w-[46ch] font-serif font-light italic leading-[1.4] text-green-500 text-[clamp(20px,2.4vw,30px)]">
              The first portfolio companies will be announced here.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Companies &middot; logos &middot; outcomes to be supplied by the client
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
