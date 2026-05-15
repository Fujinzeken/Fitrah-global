import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// All copy verbatim from PRD §9 Page 9 (Philosophy) — headline, subheadline,
// and the eight Required Principles.
const PRINCIPLES = [
  "Technology should serve human nature",
  "Trust over addiction",
  "Clarity over noise",
  "Community over isolation",
  "Wholesome commerce over exploitation",
  "Intelligence with ethics",
  "Safety by design",
  "Long-term value over short-term attention",
];

export function PhilosophyPreview() {
  return (
    <section className="bg-sand-ruled border-t border-rule-2">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <div className="grid grid-cols-[0.92fr_1.08fr] gap-20 max-lg:grid-cols-1 max-lg:gap-14">
          <Reveal>
            <Eyebrow tone="on-sand">Philosophy</Eyebrow>
            <h2 className="mt-6 max-w-[20ch] font-serif font-normal text-green-700 leading-[1.06] tracking-[-0.022em] text-[clamp(30px,3.4vw,48px)]">
              A better digital world begins with a better{" "}
              <em className="italic font-light text-green-500">
                philosophy of technology.
              </em>
            </h2>
            <p className="mt-6 max-w-[44ch] text-[17px] leading-[1.6] text-ink/70">
              We believe technology should serve people, strengthen trust,
              protect values, and support human flourishing.
            </p>
            <a
              href="/philosophy"
              className="group mt-9 inline-flex items-center gap-2.5 text-[14px] font-medium text-green-700"
            >
              Read our philosophy
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </a>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-12 self-start max-sm:grid-cols-1">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p} delay={Math.min(i, 7) * 60}>
                <div className="flex items-baseline gap-4 border-t border-rule-2 py-5">
                  <span className="pt-1 font-mono text-[11px] tracking-[0.12em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[18px] leading-[1.3] tracking-[-0.01em] text-green-700">
                    {p}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
