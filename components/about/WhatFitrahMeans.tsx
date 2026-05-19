import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 2 lists "What Fitrah Means" as required but provides no copy.
// Etymology + reflection drawn from the brand book (brand-sections.jsx
// Section04Typography editorial hierarchy). This section is the page's
// calligraphic anchor — the Arabic word الفطرة rendered in Amiri (brand spec)
// as the centerpiece, with the meaning unrolling beneath it.
export function WhatFitrahMeans() {
  return (
    <section className="bg-sand-ruled border-t border-rule-2">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[160px] max-md:py-[96px]">
        {/* Top meta row */}
        <Reveal>
          <Eyebrow tone="on-sand">What Fitrah Means</Eyebrow>
        </Reveal>

        {/* The Arabic word — page's calligraphic anchor */}
        <Reveal delay={120}>
          <div className="mt-20 flex justify-center max-md:mt-14">
            <div
              dir="rtl"
              lang="ar"
              aria-label="al-fiṭrah"
              className="select-none font-arabic text-green-700 leading-[1] tracking-normal text-[clamp(84px,12vw,160px)]"
              style={{ fontFamily: "var(--font-arabic), serif" }}
            >
              ‎الفِطْرَة‎
            </div>
          </div>
        </Reveal>

        {/* Transliteration row */}
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center text-center gap-2">
            <div className="font-serif font-light italic text-green-500 text-[clamp(28px,3.4vw,44px)] tracking-[-0.015em]">
              al&middot;fiṭrah
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
              n. &nbsp;&middot;&nbsp; Arabic
            </div>
          </div>
        </Reveal>

        {/* Definition + reflection */}
        <Reveal delay={360}>
          <div className="mt-20 mx-auto max-w-[64ch] text-center max-md:mt-14">
            <p className="font-serif font-light text-green-700 leading-[1.35] tracking-[-0.012em] text-[clamp(22px,2.4vw,30px)]">
              The original disposition of the human being &mdash;{" "}
              <em className="italic text-green-500">
                a state of clarity that precedes confusion.
              </em>{" "}
              We build technology that returns people, gently, to that state.
            </p>

            {/* Three short pillars — quiet supporting lines */}
            <div className="mt-14 grid grid-cols-3 gap-px bg-rule-2 border border-rule-2 text-left max-md:grid-cols-1">
              {[
                "Software that respects attention.",
                "Platforms that respect time.",
                "Interfaces that respect intelligence.",
              ].map((line, i) => (
                <div
                  key={i}
                  className="bg-sand px-6 py-7 flex flex-col gap-3"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-[17px] leading-[1.35] text-ink/85">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
