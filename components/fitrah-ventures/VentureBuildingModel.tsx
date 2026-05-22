import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 8 §4 — Venture-Building Model. Grounded in the Page 8 objective
// ("the investment, acquisition, and venture-building arm") and the ecosystem
// structure: Fitrah builds ventures internally (via Fitrah Labs) and backs
// external founders. Presented as a two-mode split. Authored framing; logged
// in placeholders.md.

const MODES = [
  {
    label: "Build",
    title: "Build from inside.",
    body: "New ventures are researched, prototyped, and launched inside Fitrah Labs — then spun out as standalone products and companies.",
  },
  {
    label: "Back",
    title: "Back from outside.",
    body: "External founders and companies are backed with capital and the full weight of the Fitrah ecosystem behind them.",
  },
];

export function VentureBuildingModel() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <Reveal>
          <Eyebrow>Venture-Building Model</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            Two ways we{" "}
            <em className="italic font-light text-green-500">create value.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 max-md:mt-10 max-md:grid-cols-1 max-md:gap-5">
          {MODES.map((m, i) => (
            <Reveal key={m.label} delay={200 + i * 100} className="contents">
              <article className="rounded-xl border border-rule bg-ivory p-9 max-md:p-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                  {m.label}
                </span>
                <h3 className="mt-5 font-serif font-normal text-green-700 leading-[1.1] tracking-[-0.014em] text-[clamp(24px,2.4vw,32px)]">
                  {m.title}
                </h3>
                <p className="mt-4 max-w-[44ch] text-[16px] leading-[1.65] text-ink/80">
                  {m.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
