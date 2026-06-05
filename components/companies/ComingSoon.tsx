import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 4 §4 — Coming Soon. Category / Status / Description for each
// item verbatim from client-supplied content (new-info.md, "Priority 3
// (Companies Page)"). Three new platforms being researched and built inside
// Fitrah Labs.

type Upcoming = {
  name: string;
  category: string;
  status: string;
  description: string;
};

const UPCOMING: Upcoming[] = [
  {
    name: "Maryam",
    category: "Women's Education",
    status: "Active Development",
    description:
      "Maryam is a women-first Arabic learning platform combining AI-guided learning, structured curriculum, and dedicated female instructors. The platform helps Muslim women learn Arabic in a safe, supportive, and personalized environment.",
  },
  {
    name: "Sokin",
    category: "Community & Wellbeing",
    status: "Research & Validation",
    description:
      "Sokin is exploring how technology can help address loneliness, belonging, and meaningful human connection through local communities, learning circles, family gatherings, and faith-centered experiences.",
  },
  {
    name: "Nikoh",
    category: "Family & Marriage",
    status: "Active Research",
    description:
      "Nikoh is a trust-based marriage platform designed to help Muslims find compatible spouses through values-first matching, family involvement, personality assessment, and ethical technology.",
  },
];

export function ComingSoon() {
  return (
    <section className="bg-sand border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow tone="on-sand">Coming Soon</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[20ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            More{" "}
            <em className="italic font-light text-green-500">in the making.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.65] text-ink/75">
            Three new platforms in active development inside Fitrah Labs,
            spanning education, community, and family.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-3 gap-6 max-md:mt-12 max-md:grid-cols-1 max-md:gap-5">
          {UPCOMING.map((p, i) => (
            <Reveal key={p.name} delay={260 + i * 80} className="contents">
              <article className="flex h-full flex-col rounded-xl border border-rule-2 bg-ivory p-8 max-md:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {p.category}
                  </span>
                  <span className="rounded-full border border-gold/35 bg-gold/[0.04] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-gold">
                    {p.status}
                  </span>
                </div>

                <h3 className="mt-8 font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.018em] text-[clamp(28px,2.6vw,40px)] max-md:mt-7">
                  {p.name}
                </h3>

                <p className="mt-5 text-[14.5px] leading-[1.6] text-ink/80">
                  {p.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={520}>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55">
            Researched, prototyped, and validated inside Fitrah Labs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
