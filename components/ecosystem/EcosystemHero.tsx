"use client";

import { Eyebrow } from "../common/Eyebrow";
import { LogoMark } from "../common/Logo";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";
import { useInView } from "../common/useInView";

// PRD §9 Page 3 — Ecosystem hero. Headline and subheadline verbatim.

const VERTICALS = [
  "Communication",
  "Commerce",
  "Knowledge",
  "Media",
  "AI",
  "Trust",
];

export function EcosystemHero() {
  const { ref, inView } = useInView({ rootMargin: "0px 0px -10% 0px" });
  const scaleX = inView ? "scale-x-100" : "scale-x-0";
  const scaleY = inView ? "scale-y-100" : "scale-y-0";
  const blockFade = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3";

  return (
    <section className="relative overflow-hidden pt-[120px] pb-[80px] max-md:pt-22 max-md:pb-12">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px]">
        {/* Publisher's mark + page label */}
        <Reveal>
          <div className="flex items-center gap-3">
            <LogoMark size={26} className="shrink-0 text-green-700" />
            <Eyebrow>Ecosystem</Eyebrow>
          </div>
        </Reveal>

        {/* Headline — PRD verbatim, three lines, middle line italic gold */}
        <Reveal delay={120}>
          <h1 className="mt-14 max-md:mt-10 font-serif font-normal text-green-700 leading-[1.0] tracking-[-0.028em] text-[clamp(40px,7vw,108px)]">
            One ecosystem.
            <br />
            <em className="italic font-light text-gold">Multiple platforms.</em>
            <br />
            One shared philosophy.
          </h1>
        </Reveal>

        {/* Subheadline + CTAs, left-aligned beneath the headline */}
        <Reveal delay={260}>
          <p className="mt-12 max-w-[58ch] text-[18px] leading-[1.6] text-ink tracking-[-0.005em] max-md:mt-9">
            Fitrah Global connects products around a shared commitment to
            trust, clarity, human wellbeing, and values-aligned digital life.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#map"
              className="group inline-flex items-center gap-2.5 rounded-full bg-green-700 px-5 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-green-800"
            >
              Explore the map
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
              View companies
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </a>
          </div>
        </Reveal>

        {/* Ecosystem rail — a single hairline spanning the page with six
            tick-mark drops, each labeled with a vertical. Schematic preview
            of the page's promise; full diagram lives in the next section. */}
        <div ref={ref} className="mt-28 max-md:hidden">
          <div className="relative h-24">
            {/* The rail */}
            <span
              className={`absolute top-0 left-0 right-0 h-px origin-left bg-rule transition-transform duration-700 ease-out motion-reduce:transition-none ${scaleX}`}
            />

            {/* Drops + labels */}
            <div className="grid h-full grid-cols-6">
              {VERTICALS.map((v, i) => (
                <div key={v} className="relative flex flex-col items-center">
                  <span
                    className={`absolute -top-[3px] block h-[7px] w-[7px] rounded-full bg-green-700 transition-all duration-500 ease-out motion-reduce:transition-none ${
                      inView ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                    style={{ transitionDelay: `${400 + i * 60}ms` }}
                  />
                  <span
                    className={`absolute top-0 h-10 w-px origin-top bg-rule transition-transform duration-500 ease-out motion-reduce:transition-none ${scaleY}`}
                    style={{ transitionDelay: `${500 + i * 60}ms` }}
                  />
                  <span
                    className={`absolute top-12 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70 transition-all duration-500 ease-out motion-reduce:transition-none ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                    }`}
                    style={{ transitionDelay: `${600 + i * 60}ms` }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile fallback — vertical ticked list */}
        <div className="mt-14 hidden max-md:block">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-rule pt-5">
            {VERTICALS.map((v, i) => (
              <li
                key={v}
                className={`flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/75 transition-all duration-500 ease-out motion-reduce:transition-none ${blockFade}`}
                style={{ transitionDelay: `${400 + i * 60}ms` }}
              >
                <span className="block h-[6px] w-[6px] rounded-full bg-green-700" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
