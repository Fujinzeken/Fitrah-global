"use client";

import { Eyebrow } from "../common/Eyebrow";
import { LogoMark } from "../common/Logo";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";
import { useInView } from "../common/useInView";

// PRD §9 Page 4 — Companies hero. Page headline verbatim. Structure mirrors
// the Ecosystem hero for cross-page consistency. The strip beneath lists the
// portfolio names as a quiet preview of what's below — all names verbatim
// from PRD §9 Page 4 portfolio items.

const PORTFOLIO = [
  "Safa",
  "Salam",
  "Tayyib",
  "Basirah",
  "Fitrah AI",
  "Fitrah Media",
  "Fitrah Labs",
  "Fitrah Ventures",
];

export function CompaniesHero() {
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
            <Eyebrow>Companies</Eyebrow>
          </div>
        </Reveal>

        {/* Headline — PRD verbatim */}
        <Reveal delay={120}>
          <h1 className="mt-14 max-w-[16ch] font-serif font-normal text-green-700 leading-[1.02] tracking-[-0.026em] text-[clamp(38px,5.6vw,88px)] max-md:mt-10">
            Companies building the future of{" "}
            <em className="italic font-light text-green-500">
              Muslim digital life.
            </em>
          </h1>
        </Reveal>

        {/* Intro line — grounded in PRD objective + meta description */}
        <Reveal delay={260}>
          <p className="mt-12 max-w-[58ch] text-[18px] leading-[1.6] text-ink tracking-[-0.005em] max-md:mt-9">
            The products and companies under Fitrah Global &mdash; built for
            communication, commerce, knowledge, media, AI, and trust, and
            bound by one shared philosophy.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2.5 rounded-full bg-green-700 px-5 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-green-800"
            >
              Explore the portfolio
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
              href="/ecosystem"
              className="group inline-flex items-center gap-2.5 rounded-full border border-rule-2 px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-sand"
            >
              See how they connect
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </a>
          </div>
        </Reveal>

        {/* Portfolio name strip — a quiet preview of the page, beneath a
            single hairline. Desktop: dot-separated row. */}
        <div ref={ref} className="mt-28 max-md:hidden">
          <span
            className={`block h-px origin-left bg-rule transition-transform duration-700 ease-out motion-reduce:transition-none ${scaleX}`}
          />
          <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            {PORTFOLIO.map((name, i) => (
              <li
                key={name}
                className={`flex items-center gap-5 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/70 transition-all duration-500 ease-out motion-reduce:transition-none ${blockFade}`}
                style={{ transitionDelay: `${400 + i * 50}ms` }}
              >
                {i > 0 && (
                  <span aria-hidden="true" className="text-rule-2">
                    &middot;
                  </span>
                )}
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile fallback — two-column ticked list */}
        <div className="mt-14 hidden max-md:block">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-rule pt-5">
            {PORTFOLIO.map((name, i) => (
              <li
                key={name}
                className={`flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/75 transition-all duration-500 ease-out motion-reduce:transition-none ${blockFade}`}
                style={{ transitionDelay: `${400 + i * 50}ms` }}
              >
                <span className="block h-[6px] w-[6px] rounded-full bg-green-700" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
