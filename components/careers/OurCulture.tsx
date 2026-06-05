import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 11 §2 — Our Culture. Tenets verbatim from client-supplied
// content (new-info.md, "Our Culture"). Presented as a manifesto-style list.

const TENETS = [
  "We are builders of institutions.",
  "We think in decades, not quarters.",
  "We favor long-term trust over short-term attention.",
  "We believe excellence and character are equally important.",
  "We value curiosity, ownership, craftsmanship, and service.",
  "We are building products, companies, and ideas that we hope will outlive us.",
];

export function OurCulture() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="grid grid-cols-[0.4fr_0.6fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <Eyebrow>Our Culture</Eyebrow>
            <h2 className="mt-6 max-w-[14ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
              We are builders of{" "}
              <em className="italic font-light text-green-500">institutions.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <ul className="border-t border-rule">
              {TENETS.map((t, i) => (
                <li
                  key={t}
                  className="flex items-baseline gap-5 border-b border-rule py-5 max-md:gap-4 max-md:py-4"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif font-normal text-green-700 leading-[1.35] tracking-[-0.012em] text-[clamp(18px,1.8vw,22px)]">
                    {t}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
