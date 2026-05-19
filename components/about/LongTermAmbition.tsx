import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 2 lists "Long-Term Ambition" as required but provides no copy.
// Built as three clean phase blocks — near horizon, mid horizon, generational.
// Each phase shows a placeholder framing the client can replace. Layout
// stays calm and legible; the horizon idea is carried by the language, not
// by an abstract diagram.

const HORIZONS = [
  { label: "Near horizon", suggest: "Build the first platforms" },
  { label: "Mid horizon", suggest: "Connect the ecosystem" },
  { label: "Generational", suggest: "Become the infrastructure layer" },
];

export function LongTermAmbition() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>Long-Term Ambition</Eyebrow>
            <span className="rounded-full border border-gold/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-gold">
              Placeholder copy
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-7 max-w-[58ch] text-[17px] leading-[1.6] text-muted">
            Fitrah Global is built for a generational horizon — the phases
            below are suggested framings; client to confirm and supply the
            final ambition for each.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {HORIZONS.map((h, i) => (
            <Reveal key={h.label} delay={Math.min(i, 2) * 120}>
              <div className="h-full rounded-xl border border-dashed border-rule-2 bg-ivory/50 p-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {h.label}
                </span>
                <p className="mt-5 font-serif font-light italic leading-[1.25] text-green-500 text-[clamp(20px,2.2vw,28px)]">
                  [ {h.suggest} ]
                </p>
                <p className="mt-6 text-[13px] italic leading-[1.65] text-muted/80">
                  Final copy pending — client to confirm.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
