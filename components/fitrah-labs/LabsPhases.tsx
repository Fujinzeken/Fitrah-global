import { Reveal } from "../common/Reveal";

// PRD §9 Page 7 §§3–6 — Research and Discovery, Prototyping, Validation,
// Product Incubation. These four PRD-required sections are the named phases
// of the build process. Each groups the real Process steps (PRD §9 Page 7,
// verbatim) that belong to it and frames them in a one-line paraphrase — all
// grounded in PRD step content, no invented specifics (no timeframes, metrics,
// or tooling claims). Step ranges reference the numbered timeline above.

type Phase = {
  id: string;
  name: string;
  stepRange: string;
  steps: string[];
  framing: string;
};

const PHASES: Phase[] = [
  {
    id: "research-and-discovery",
    name: "Research and Discovery",
    stepRange: "Steps 01–02",
    steps: ["Identify opportunity", "Research user pain"],
    framing:
      "Every product begins with a real problem. We identify the opportunity and research the user pain before anything is built.",
  },
  {
    id: "prototyping",
    name: "Prototyping",
    stepRange: "Steps 03–04",
    steps: ["Build concept", "Prototype quickly"],
    framing:
      "We turn the idea into a concept and prototype it quickly — something testable, not just a description.",
  },
  {
    id: "validation",
    name: "Validation",
    stepRange: "Step 05",
    steps: ["Validate demand"],
    framing:
      "Before we scale, we validate real demand — evidence that people want what has been built.",
  },
  {
    id: "product-incubation",
    name: "Product Incubation",
    stepRange: "Steps 06–08",
    steps: ["Launch MVP", "Scale or sunset", "Spin into company / product line"],
    framing:
      "Validated products launch as an MVP, then scale or sunset. The strongest spin out into their own company or product line.",
  },
];

export function LabsPhases() {
  return (
    <>
      {PHASES.map((p) => (
        <section
          key={p.id}
          id={p.id}
          className="border-t border-rule scroll-mt-20"
        >
          <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[96px] max-md:py-[64px]">
            <div className="grid grid-cols-[0.4fr_0.6fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-7">
              {/* Left: phase name + step range */}
              <Reveal>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {p.stepRange}
                  </span>
                  <h2 className="mt-4 font-serif font-normal text-green-700 leading-[1.08] tracking-[-0.016em] text-[clamp(26px,2.8vw,38px)]">
                    {p.name}
                  </h2>
                </div>
              </Reveal>

              {/* Right: framing + step chips */}
              <Reveal delay={140}>
                <div>
                  <p className="max-w-[56ch] text-[17px] leading-[1.65] text-ink/85">
                    {p.framing}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.steps.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-rule-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/70"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
