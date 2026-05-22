import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 4 §4 — Coming soon. Names verbatim from PRD §2 Strategic Goals
// ("future companies such as Sokin, Basirah, Nikoh, Maryam, Fitrah AI, Fitrah
// Media, Fitrah Labs, and Fitrah Ventures"). Only the three not detailed
// elsewhere are surfaced here: Sokin, Nikoh, Maryam. The PRD gives them no
// category, description, or status, so this section shows names only — no
// fabricated detail. Tied to Fitrah Labs, the PRD's incubation studio.

const UPCOMING = ["Sokin", "Nikoh", "Maryam"];

export function ComingSoon() {
  return (
    <section className="bg-sand border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow tone="on-sand">Coming Soon</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[20ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            More{" "}
            <em className="italic font-light text-green-500">in the making.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[56ch] text-[16px] leading-[1.65] text-ink/70">
            New platforms in early exploration inside Fitrah Labs. Names
            first &mdash; details as they take shape.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-3 gap-6 max-md:mt-12 max-md:grid-cols-1 max-md:gap-5">
          {UPCOMING.map((name, i) => (
            <Reveal key={name} delay={260 + i * 80} className="contents">
              <article className="flex h-full flex-col rounded-xl border border-rule-2 bg-ivory p-8 max-md:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    Coming soon
                  </span>
                </div>

                <h3 className="mt-10 font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.018em] text-[clamp(28px,2.6vw,40px)] max-md:mt-8">
                  {name}
                </h3>

                <div className="mt-auto pt-10 max-md:pt-8">
                  <div className="border-t border-rule pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Details to follow
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55">
            Researched, prototyped, and validated inside Fitrah Labs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
