"use client";

import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { useInView } from "../common/useInView";

// PRD §9 Page 7 §2 — How We Build. Real content: the eight Process steps are
// verbatim from PRD §9 Page 7. Presented as an animated vertical timeline —
// the page's substantive centerpiece. Step numbering is process numbering
// (inherent sequence), not editorial decoration.

const STEPS = [
  "Identify opportunity",
  "Research user pain",
  "Build concept",
  "Prototype quickly",
  "Validate demand",
  "Launch MVP",
  "Scale or sunset",
  "Spin into company / product line",
];

export function HowWeBuild() {
  const { ref, inView } = useInView({ rootMargin: "0px 0px -10% 0px" });
  const scaleY = inView ? "scale-y-100" : "scale-y-0";

  return (
    <section id="process" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <div className="grid grid-cols-[0.4fr_0.6fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-12">
          {/* Left: heading, sticky on desktop so it stays in view as the
              steps scroll past. */}
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
          </div>

          {/* Right: the timeline. */}
          <div ref={ref}>
            <ol className="relative">
            {/* Spine */}
            <span
              aria-hidden="true"
              className={`absolute left-[19px] top-2 bottom-2 w-px origin-top bg-rule transition-transform duration-1000 ease-out motion-reduce:transition-none ${scaleY}`}
            />

            {STEPS.map((step, i) => (
              <li
                key={step}
                className={`relative flex items-center gap-6 pb-9 last:pb-0 transition-all duration-500 ease-out motion-reduce:transition-none ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
                style={{ transitionDelay: `${150 + i * 110}ms` }}
              >
                {/* Numbered node */}
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-rule-2 bg-ivory font-mono text-[12px] text-green-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif font-normal text-green-700 leading-[1.2] tracking-[-0.012em] text-[clamp(20px,2vw,26px)]">
                  {step}
                </h3>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
