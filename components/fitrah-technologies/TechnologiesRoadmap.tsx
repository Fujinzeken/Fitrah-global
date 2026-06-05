import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 5 §9 — Product Roadmap. Body copy verbatim from client-supplied
// content (new-info.md, "Product Roadmap" under Fitrah Technologies). Points
// to the portfolio on /companies for the product-by-product view.

export function TechnologiesRoadmap() {
  return (
    <section id="roadmap" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="grid grid-cols-[0.4fr_0.6fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <Eyebrow>Product Roadmap</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
              Toward a{" "}
              <em className="italic font-light text-green-500">
                unified ecosystem.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div>
              <p className="max-w-[58ch] text-[17px] leading-[1.65] text-ink/85">
                Fitrah Technologies is building toward a unified ecosystem
                where learning, family, community, commerce, finance, and
                personal growth products can operate seamlessly together
                through shared infrastructure and intelligence.
              </p>

              <div className="mt-8">
                <a
                  href="/companies"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-green-700 transition-colors hover:text-gold"
                >
                  See the portfolio
                  <span className="transition-transform group-hover:translate-x-0.5">
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
