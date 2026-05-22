import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 5 §1 — Overview. Grounded in PRD facts: the Page 5 objective
// ("the product, engineering, AI, and infrastructure arm") and subheadline
// (verbatim), plus the Ecosystem page's established "shared primitives" idea.
// Connective prose is authored framing (logged in placeholders.md); every
// claim traces to PRD content.

export function TechnologiesOverview() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="grid grid-cols-[0.36fr_0.64fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-6 max-w-[14ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
              The engine of the{" "}
              <em className="italic font-light text-green-500">ecosystem.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="space-y-6 text-[17px] leading-[1.65] text-ink/85 max-w-[60ch]">
              <p>
                Fitrah Technologies is the product, engineering, AI, and
                infrastructure arm of Fitrah Global &mdash; the team that turns
                the ecosystem&rsquo;s shared philosophy into working software.
              </p>
              <p>
                Rather than every product rebuilding the same foundations,
                Fitrah Technologies builds them once: the platforms, the AI
                systems, the trust and safety infrastructure, and the identity
                layer that every product inherits.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
