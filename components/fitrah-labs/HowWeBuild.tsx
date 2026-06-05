"use client";

import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { useInView } from "../common/useInView";

// PRD §9 Page 7 §2 — How We Build. Real content: the eight Process steps
// verbatim from PRD §9 Page 7, grouped into the four PRD phases (also
// verbatim) for navigability. Each phase header links to its deep-dive
// section below. Step numbering is process numbering (inherent sequence),
// not editorial decoration.

type Phase = {
  name: string;
  href: string;
  range: string;
  steps: { n: number; label: string }[];
};

const PHASES: Phase[] = [
  {
    name: "Research & Discovery",
    href: "#research-and-discovery",
    range: "Steps 01–02",
    steps: [
      { n: 1, label: "Identify opportunity" },
      { n: 2, label: "Research user pain" },
    ],
  },
  {
    name: "Prototyping",
    href: "#prototyping",
    range: "Steps 03–04",
    steps: [
      { n: 3, label: "Build concept" },
      { n: 4, label: "Prototype quickly" },
    ],
  },
  {
    name: "Validation",
    href: "#validation",
    range: "Step 05",
    steps: [{ n: 5, label: "Validate demand" }],
  },
  {
    name: "Product Incubation",
    href: "#product-incubation",
    range: "Steps 06–08",
    steps: [
      { n: 6, label: "Launch MVP" },
      { n: 7, label: "Scale or sunset" },
      { n: 8, label: "Spin into company / product line" },
    ],
  },
];

export function HowWeBuild() {
  const { ref, inView } = useInView({ rootMargin: "0px 0px -10% 0px" });

  // Cumulative delay so each step animates in sequence across the whole flow,
  // not restarted within each phase.
  let stepIndex = 0;

  return (
    <section id="process" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <div className="grid grid-cols-[0.4fr_0.6fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-12">
          {/* Left: sticky heading + small "jump to phase" affordance */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>How We Build</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 max-w-[14ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
                From idea to product,{" "}
                <em className="italic font-light text-green-500">
                  in eight steps.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-[36ch] text-[15px] leading-[1.6] text-muted">
                Eight steps, grouped into four phases. Jump to any phase to
                read it in detail.
              </p>
            </Reveal>
          </div>

          {/* Right: phase-grouped timeline */}
          <div ref={ref} className="flex flex-col gap-10">
            {PHASES.map((phase, pi) => (
              <div key={phase.name}>
                {/* Phase header — anchor link to the deep-dive section below */}
                <Reveal delay={120 + pi * 80}>
                  <a
                    href={phase.href}
                    className="group flex flex-wrap items-baseline justify-between gap-3 border-b border-rule pb-3 transition-colors"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-green-700 transition-colors group-hover:text-gold">
                      {phase.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      {phase.range} &nbsp;→
                    </span>
                  </a>
                </Reveal>

                {/* Phase steps — numbered list with internal spine */}
                <ol className="relative mt-6">
                  <span
                    aria-hidden="true"
                    className={`absolute left-[19px] top-2 bottom-2 w-px origin-top bg-rule transition-transform duration-700 ease-out motion-reduce:transition-none ${
                      inView ? "scale-y-100" : "scale-y-0"
                    }`}
                    style={{ transitionDelay: `${200 + pi * 80}ms` }}
                  />
                  {phase.steps.map((step) => {
                    const i = stepIndex++;
                    return (
                      <li
                        key={step.n}
                        className={`relative flex items-center gap-6 pb-7 last:pb-0 transition-all duration-500 ease-out motion-reduce:transition-none ${
                          inView
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2"
                        }`}
                        style={{ transitionDelay: `${250 + i * 90}ms` }}
                      >
                        <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-rule-2 bg-ivory font-mono text-[12px] text-green-700">
                          {String(step.n).padStart(2, "0")}
                        </span>
                        <h3 className="font-serif font-normal text-green-700 leading-[1.2] tracking-[-0.012em] text-[clamp(20px,2vw,26px)]">
                          {step.label}
                        </h3>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
