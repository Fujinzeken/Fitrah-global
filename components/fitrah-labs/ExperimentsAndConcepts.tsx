import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 7 §7 — Experiments and Concepts. PRD supplies no content for
// this section. Grounded by connecting Labs (the incubation studio) to its
// actual early-stage concepts — Sokin, Nikoh, Maryam (PRD §2, names only,
// the same concepts flagged on the Companies "Coming Soon" section). Detailed
// experiment write-ups are flagged pending. Logged in placeholders.md.

const CONCEPTS = ["Sokin", "Nikoh", "Maryam"];

export function ExperimentsAndConcepts() {
  return (
    <section className="bg-sand border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <Eyebrow tone="on-sand">Experiments and Concepts</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 max-w-[18ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
                What&rsquo;s on the{" "}
                <em className="italic font-light text-green-500">lab bench.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <span className="inline-flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/60">
                Write-ups pending
              </span>
            </span>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <p className="mt-7 max-w-[58ch] text-[16px] leading-[1.65] text-ink/70">
            Concepts in early exploration inside the lab. Names first &mdash;
            detailed write-ups shared as each takes shape.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-3 gap-6 max-md:mt-10 max-md:grid-cols-1 max-md:gap-5">
          {CONCEPTS.map((name, i) => (
            <Reveal key={name} delay={300 + i * 80} className="contents">
              <article className="flex h-full flex-col rounded-xl border border-rule-2 bg-ivory p-8 max-md:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    In exploration
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

        <Reveal delay={560}>
          <div className="mt-10">
            <a
              href="/companies"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-green-700 transition-colors hover:text-gold"
            >
              See what&rsquo;s coming in the portfolio
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
