import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 3 §4 — How platforms connect. PRD provides no copy; framing
// is built from PRD-established language only. The connection pattern is
// articulated as three layers, top-down from what users see to what holds
// it together:
//
//   Edges  → distinct products under one brand (PRD §9 Page 4 portfolio)
//   Seams  → shared primitives (mirrors About OperatingModel's "Identity ·
//            Trust · Safety · Design Systems · AI Layer" infrastructure)
//   Center → one philosophy (PRD §9 Page 3 subheadline verbatim)
//
// Visually a layered stack — deliberately different from the map's radial
// composition and the verticals' card grid.

type Layer = {
  position: string;
  title: string;
  italic: string;
  body: string;
  tags?: string[];
};

const LAYERS: Layer[] = [
  {
    position: "Edges",
    title: "Distinct products,",
    italic: "distinct missions.",
    body: "Each platform under Fitrah Global serves its own audience with its own focus. They ship independently, evolve at their own pace, and live by their own product logic — but they all carry the Fitrah name.",
    tags: [
      "Safa",
      "Salam",
      "Tayyib",
      "Basirah",
      "Fitrah AI",
      "Fitrah Media",
    ],
  },
  {
    position: "Seams",
    title: "Shared primitives,",
    italic: "carried across.",
    body: "Platforms share the systems that make trust portable — identity, safety, design language, and AI — so users carry context and confidence across the network rather than rebuilding it inside every app.",
    tags: [
      "Identity",
      "Trust",
      "Safety",
      "Design system",
      "AI layer",
    ],
  },
  {
    position: "Center",
    title: "One philosophy,",
    italic: "one promise.",
    body: "Every product carries the same commitment to trust, clarity, human wellbeing, and values-aligned digital life. The center holds — and what holds at the center is shared by everything that ships at the edges.",
  },
];

export function HowPlatformsConnect() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow>How Platforms Connect</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[24ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            Three layers{" "}
            <em className="italic font-light text-green-500">bind the system.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.65] text-muted">
            Connection runs at three depths &mdash; from the distinct products
            users meet at the edges, through the shared primitives at the
            seams, down to the philosophy that holds at the center.
          </p>
        </Reveal>

        {/* Layered stack — three horizontal panels, hairline-divided */}
        <div className="mt-16 border-y border-rule">
          {LAYERS.map((layer, i) => (
            <Reveal key={layer.position} delay={260 + i * 90} className="contents">
              <article
                className={`grid grid-cols-[0.32fr_0.68fr] gap-12 py-14 max-md:grid-cols-1 max-md:gap-6 max-md:py-11 ${
                  i > 0 ? "border-t border-rule" : ""
                }`}
              >
                {/* Left column: position label + spine accent */}
                <div className="relative flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    At the {layer.position.toLowerCase()}
                  </span>
                  <h3 className="mt-5 font-serif font-normal text-green-700 leading-[1.08] tracking-[-0.014em] text-[clamp(24px,2.6vw,36px)]">
                    {layer.title}
                    <br />
                    <em className="italic font-light text-green-500">
                      {layer.italic}
                    </em>
                  </h3>
                </div>

                {/* Right column: prose + tags */}
                <div>
                  <p className="max-w-[58ch] text-[17px] leading-[1.65] text-ink/85">
                    {layer.body}
                  </p>

                  {layer.tags && (
                    <ul className="mt-7 flex flex-wrap gap-2">
                      {layer.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-rule-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/70"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
