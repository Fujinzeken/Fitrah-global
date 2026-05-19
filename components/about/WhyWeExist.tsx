import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 2 lists "Why We Exist" as required but provides no copy.
// Treated with maximum presence — the founding conviction is the emotional
// core of an about page, and even the placeholder should signal that.
// Large centered canvas with bracketed placeholder copy.
export function WhyWeExist() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>Why We Exist</Eyebrow>
            <span className="rounded-full border border-gold/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-gold">
              Placeholder copy
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-20 mx-auto max-w-[42rem] rounded-[2px] border border-dashed border-rule-2 bg-ivory/40 px-10 py-20 text-center max-md:mt-12 max-md:px-7 max-md:py-14">
            {/* Open quote ornament */}
            <div
              aria-hidden="true"
              className="select-none font-serif font-light italic text-green-500/60 leading-none text-[clamp(80px,11vw,140px)]"
            >
              &ldquo;
            </div>

            <p className="mt-2 font-serif font-light italic leading-[1.18] tracking-[-0.018em] text-green-500 text-[clamp(28px,3.6vw,48px)]">
              [ Founding conviction ]
            </p>

            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Copy pending &middot; client to supply
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
