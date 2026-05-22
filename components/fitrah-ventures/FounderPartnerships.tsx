import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 8 §5 — Founder Partnerships. Grounded in the Page 8 subheadline
// ("partners with founders") and real ecosystem concepts already on the site:
// the shared trust layer, shared infrastructure, and design systems that every
// Fitrah platform runs on. No invented terms (no specific check sizes, equity,
// or program names). Authored framing; logged in placeholders.md.

const INCLUDES = [
  "Capital",
  "Shared trust layer",
  "Shared infrastructure",
  "Design systems",
  "Ecosystem distribution",
];

export function FounderPartnerships() {
  return (
    <section className="bg-sand border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="grid grid-cols-[0.42fr_0.58fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <Eyebrow tone="on-sand">Founder Partnerships</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] font-serif font-normal text-green-700 leading-[1.04] tracking-[-0.022em] text-[clamp(28px,3.4vw,46px)]">
              Partnership beyond{" "}
              <em className="italic font-light text-green-500">capital.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div>
              <p className="max-w-[58ch] text-[17px] leading-[1.65] text-ink/85">
                Founders who partner with Fitrah Ventures don&rsquo;t just take
                an investment &mdash; they plug into the ecosystem. The same
                trust layer, infrastructure, and design systems that power every
                Fitrah platform are available to the companies we back.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-rule-2 bg-ivory px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
