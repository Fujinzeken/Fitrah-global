import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 11 §5 — Values. The company's values are the Philosophy
// principles (PRD §9 Page 9), shown here verbatim in a compact list with a
// link to the full Philosophy page — real content, no duplication of the
// manifesto treatment.

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

export function CareersValues() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="grid grid-cols-[0.4fr_0.6fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <Eyebrow>Values</Eyebrow>
            <h2 className="mt-6 max-w-[14ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
              Our values are our{" "}
              <em className="italic font-light text-green-500">philosophy.</em>
            </h2>
            <a
              href="/philosophy"
              className="group mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-green-700 transition-colors hover:text-gold"
            >
              Read the full philosophy
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </a>
          </Reveal>

          <Reveal delay={140}>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-rule pt-7 max-md:grid-cols-1">
              {PRINCIPLES.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-[16px] leading-[1.45] text-ink/85"
                >
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
