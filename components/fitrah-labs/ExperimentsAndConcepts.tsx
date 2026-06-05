import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 7 §7 — Experiments and Concepts. Concept names + taglines
// verbatim from client-supplied content (new-info.md, "Fitrah Labs — Current
// Concepts" and "Future Concepts"). Statuses on the current concepts mirror
// the Companies page (Active Development / Research & Validation / Active
// Research) for cross-page consistency.
//
// Note: Basirah appears in new-info.md's Future Concepts list, but PRD §9 Page 4
// places it in the portfolio (Spiritual Learning, "Basirah by Fitrah"). PRD
// wins on conflict — Basirah stays in the portfolio and is not duplicated here.

type Concept = { name: string; tagline: string; tag: string };

const CURRENT: Concept[] = [
  {
    name: "Maryam",
    tagline: "Women-first Arabic learning.",
    tag: "Active Development",
  },
  {
    name: "Nikoh",
    tagline: "Marriage infrastructure.",
    tag: "Active Research",
  },
  {
    name: "Sokin",
    tagline: "Belonging infrastructure.",
    tag: "Research & Validation",
  },
];

const FUTURE: Concept[] = [
  {
    name: "Muslim AI OS",
    tagline: "Personal AI assistant for Muslims.",
    tag: "Future Concept",
  },
  {
    name: "Maal",
    tagline: "Islamic finance intelligence.",
    tag: "Future Concept",
  },
  {
    name: "Nomad Ummah",
    tagline: "Global Muslim mobility network.",
    tag: "Future Concept",
  },
];

function ConceptCard({ c, future }: { c: Concept; future?: boolean }) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl border ${
        future ? "border-dashed border-rule-2" : "border-rule-2"
      } bg-ivory p-8 max-md:p-7`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-gold/35 bg-gold/[0.04] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-gold">
          {c.tag}
        </span>
      </div>
      <h3 className="mt-8 font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.018em] text-[clamp(28px,2.6vw,38px)] max-md:mt-6">
        {c.name}
      </h3>
      <p className="mt-4 font-serif italic font-light leading-[1.35] text-green-500 text-[clamp(16px,1.5vw,19px)]">
        {c.tagline}
      </p>
    </article>
  );
}

export function ExperimentsAndConcepts() {
  return (
    <section className="bg-sand border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <Reveal>
          <Eyebrow tone="on-sand">Experiments and Concepts</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[18ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            What&rsquo;s on the{" "}
            <em className="italic font-light text-green-500">lab bench.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.65] text-ink/75">
            Concepts in active development and early exploration inside the
            lab.
          </p>
        </Reveal>

        {/* Current concepts */}
        <div className="mt-14 max-md:mt-10">
          <Reveal delay={240}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Current concepts
            </h3>
          </Reveal>
          <div className="mt-6 grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:gap-5">
            {CURRENT.map((c, i) => (
              <Reveal key={c.name} delay={280 + i * 80} className="contents">
                <ConceptCard c={c} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Future concepts */}
        <div className="mt-14 max-md:mt-10">
          <Reveal delay={460}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Future concepts
            </h3>
          </Reveal>
          <div className="mt-6 grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:gap-5">
            {FUTURE.map((c, i) => (
              <Reveal key={c.name} delay={500 + i * 80} className="contents">
                <ConceptCard c={c} future />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={760}>
          <div className="mt-10">
            <a
              href="/companies"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-green-700 transition-colors hover:text-gold"
            >
              See what&rsquo;s coming in the portfolio
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
