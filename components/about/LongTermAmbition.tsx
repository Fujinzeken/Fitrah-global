import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 2 — Long-Term Ambition. Copy verbatim from client-supplied
// content (new-info.md, "Long-Term Ambition"). Three horizons with explicit
// time ranges.

const HORIZONS = [
  {
    label: "Near horizon",
    range: "0–5 years",
    body: "Build a portfolio of trusted digital products serving Muslims across education, family, community, finance, and everyday life. Establish Fitrah Global as a recognized builder of high-quality Muslim-first technology platforms.",
  },
  {
    label: "Mid horizon",
    range: "5–15 years",
    body: "Create the foundational infrastructure connecting Muslim talent, knowledge, capital, businesses, and communities across borders. Support millions of users and thousands of organizations through a growing ecosystem of interconnected products.",
  },
  {
    label: "Generational",
    range: "15–50 years",
    body: "Help catalyze a new era of Muslim innovation by building institutions that outlast products. Our ambition is to contribute to a future in which the Muslim world becomes a leading source of entrepreneurship, knowledge creation, technological advancement, and positive global impact.",
  },
];

export function LongTermAmbition() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <Reveal>
          <Eyebrow>Long-Term Ambition</Eyebrow>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[20ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            Built for a{" "}
            <em className="italic font-light text-green-500">
              generational horizon.
            </em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:mt-12">
          {HORIZONS.map((h, i) => (
            <Reveal key={h.label} delay={Math.min(i, 2) * 120 + 200}>
              <article className="h-full rounded-xl border border-rule bg-ivory p-8 max-md:p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {h.label}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-gold">
                    {h.range}
                  </span>
                </div>
                <p className="mt-6 text-[15.5px] leading-[1.65] text-ink/85">
                  {h.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
