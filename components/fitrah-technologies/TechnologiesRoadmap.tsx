import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 5 §9 — Product Roadmap. PRD supplies no roadmap content for
// Fitrah Technologies. The platforms it builds are the portfolio shown on the
// Companies and Ecosystem pages, so this section is flagged client-pending and
// points readers to the portfolio roadmap rather than inventing milestones.

export function TechnologiesRoadmap() {
  return (
    <section id="roadmap" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="grid grid-cols-[0.4fr_0.6fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <Eyebrow>Product Roadmap</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
              What&rsquo;s being{" "}
              <em className="italic font-light text-green-500">built.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div>
              <p className="max-w-[58ch] text-[17px] leading-[1.65] text-ink/85">
                The platforms Fitrah Technologies builds are the products
                across the Fitrah Global portfolio. A technology-specific
                roadmap &mdash; engineering milestones and release stages
                &mdash; will be supplied by the client.
              </p>

              <div className="mt-7 border-t border-dashed border-rule-2 pt-6">
                <span className="inline-flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Copy pending
                  </span>
                </span>
                <div className="mt-5">
                  <a
                    href="/companies"
                    className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-green-700 transition-colors hover:text-gold"
                  >
                    See the portfolio roadmap
                    <span className="transition-transform group-hover:translate-x-0.5">
                      <ArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
