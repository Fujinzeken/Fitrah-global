import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 9 — the eight Required Principles, verbatim. Real content. No
// authored elaborations: the client owns the values language, and each
// principle is a complete, powerful statement on its own (PRD tone:
// "manifesto: calm, precise, thoughtful, and powerful"). Treatment ports the
// brand HTML's Operating Principles section (sand-ruled surface, italic gold
// numerals, serif statements, hairline-divided cells).

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

export function PhilosophyPrinciples() {
  return (
    <section id="principles" className="bg-sand-ruled border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow tone="on-sand">Our Principles</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[24ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            Eight commitments for{" "}
            <em className="italic font-light text-green-500">
              how technology should be built.
            </em>
          </h2>
        </Reveal>

        {/* Numbered grid — brand .pp-grid: 2 columns, hairline-divided cells,
            italic gold numeral + serif statement. */}
        <div className="mt-16 grid grid-cols-2 border-t border-rule-2 max-md:mt-12 max-md:grid-cols-1">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p} delay={160 + i * 70} className="contents">
              <article className="flex items-start gap-6 border-b border-rule-2 py-12 odd:pr-12 even:pl-12 odd:border-r odd:border-rule-2 max-md:px-0 max-md:py-9 max-md:odd:border-r-0">
                <span className="font-serif font-light italic leading-none text-gold text-[clamp(30px,3vw,40px)] tracking-[-0.02em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-serif font-normal text-green-700 leading-[1.18] tracking-[-0.014em] text-[clamp(21px,2vw,27px)]">
                  {p}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
