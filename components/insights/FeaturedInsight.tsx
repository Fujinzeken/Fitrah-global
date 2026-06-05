import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 10 §1 — Featured insight. Title verbatim from client-supplied
// content (new-info.md, "Fitrah Media Content Strategy → Pillar 2 Essays").
// Article body and image still pending.

const FEATURED = {
  title: "Building Institutions Instead of Startups",
  category: "Muslim Digital Economy",
  type: "Essay",
};

export function FeaturedInsight() {
  return (
    <section id="featured" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <Eyebrow>Featured Insight</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <span className="inline-flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Article in writing
              </span>
            </span>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <article className="mt-12 grid grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-2xl border border-rule bg-ivory max-lg:grid-cols-1 max-md:mt-10">
            {/* Image area */}
            <div className="relative grid min-h-[340px] place-items-center bg-ivory-2 max-md:min-h-[220px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-rule) 1px, transparent 1px), linear-gradient(90deg, var(--color-rule) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                  maskImage:
                    "radial-gradient(ellipse at center, black 25%, transparent 78%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 25%, transparent 78%)",
                }}
              />
              <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Image coming soon
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-col justify-center p-12 max-md:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-rule-2 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink/60">
                  {FEATURED.category}
                </span>
                <span className="rounded-full border border-gold/35 bg-gold/[0.04] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-gold">
                  {FEATURED.type}
                </span>
              </div>

              <h2 className="mt-7 font-serif font-normal text-green-700 leading-[1.1] tracking-[-0.018em] text-[clamp(28px,3.2vw,42px)]">
                {FEATURED.title}
              </h2>

              <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Featured piece coming soon
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
