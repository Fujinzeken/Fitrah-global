import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 11 §2 — Our Culture. PRD supplies no copy. Grounded by applying
// the Philosophy principles to how the team works (trust, clarity, long-term
// thinking). Authored framing; fuller culture copy flagged client-pending in
// placeholders.md.

export function OurCulture() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="grid grid-cols-[0.4fr_0.6fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <Eyebrow>Our Culture</Eyebrow>
            <h2 className="mt-6 max-w-[14ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
              We build the way we{" "}
              <em className="italic font-light text-green-500">think.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div>
              <div className="space-y-6 text-[17px] leading-[1.65] text-ink/85 max-w-[58ch]">
                <p>
                  The same principles that shape our products shape how we work
                  &mdash; trust over urgency, clarity over noise, and long-term
                  thinking over short-term wins.
                </p>
                <p>
                  We are a small, deliberate team building for a generational
                  horizon, with the focus and patience that calm, trustworthy
                  technology requires.
                </p>
              </div>

              <div className="mt-8 border-t border-dashed border-rule-2 pt-5">
                <span className="inline-flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Fuller culture copy pending &middot; client to supply
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
