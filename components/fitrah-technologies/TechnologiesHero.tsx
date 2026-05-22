"use client";

import { Eyebrow } from "../common/Eyebrow";
import { LogoMark } from "../common/Logo";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";
import { useInView } from "../common/useInView";

// PRD §9 Page 5 — Fitrah Technologies hero. Headline and subheadline verbatim.
// Structure mirrors the Ecosystem / Companies heroes for cross-page
// consistency. The lower strip lists the nine Key Capabilities (PRD §9 Page 5
// verbatim) as a preview of the page's capability sections.

const CAPABILITIES = [
  "Web & mobile platforms",
  "AI-native product systems",
  "Trust & safety infrastructure",
  "Moderation systems",
  "Identity & verification",
  "Recommendation engines",
  "Secure data architecture",
  "Product design systems",
  "Community infrastructure",
];

export function TechnologiesHero() {
  const { ref, inView } = useInView({ rootMargin: "0px 0px -10% 0px" });
  const scaleX = inView ? "scale-x-100" : "scale-x-0";
  const blockFade = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-3";

  return (
    <section className="relative overflow-hidden pt-[120px] pb-[80px] max-md:pt-22 max-md:pb-12">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px]">
        {/* Publisher's mark + page label */}
        <Reveal>
          <div className="flex items-center gap-3">
            <LogoMark size={26} className="shrink-0 text-green-700" />
            <Eyebrow>Fitrah Technologies</Eyebrow>
          </div>
        </Reveal>

        {/* Headline — PRD verbatim */}
        <Reveal delay={120}>
          <h1 className="mt-14 max-w-[15ch] font-serif font-normal text-green-700 leading-[1.02] tracking-[-0.026em] text-[clamp(38px,5.8vw,92px)] max-md:mt-10">
            Building the technology layer of the{" "}
            <em className="italic font-light text-green-500">
              Fitrah ecosystem.
            </em>
          </h1>
        </Reveal>

        {/* Subheadline — PRD verbatim */}
        <Reveal delay={260}>
          <p className="mt-12 max-w-[60ch] text-[18px] leading-[1.6] text-ink tracking-[-0.005em] max-md:mt-9">
            Fitrah Technologies designs and builds the platforms, applications,
            AI systems, and trust infrastructure powering Fitrah Global.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-2.5 rounded-full bg-green-700 px-5 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-green-800"
            >
              Explore capabilities
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 2v10M3 8l4 4 4-4" />
                </svg>
              </span>
            </a>
            <a
              href="/companies"
              className="group inline-flex items-center gap-2.5 rounded-full border border-rule-2 px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-sand"
            >
              All companies
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </a>
          </div>
        </Reveal>

        {/* Capabilities strip — nine PRD Key Capabilities as a chip cloud,
            beneath a single hairline. Previews the capability sections. */}
        <div ref={ref} className="mt-28 max-md:mt-16">
          <span
            className={`block h-px origin-left bg-rule transition-transform duration-700 ease-out motion-reduce:transition-none ${scaleX}`}
          />
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {CAPABILITIES.map((cap, i) => (
              <li
                key={cap}
                className={`rounded-full border border-rule-2 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.13em] text-ink/70 transition-all duration-500 ease-out motion-reduce:transition-none ${blockFade}`}
                style={{ transitionDelay: `${300 + i * 45}ms` }}
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
