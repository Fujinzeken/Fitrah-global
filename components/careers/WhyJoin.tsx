import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { Icon, type IconName } from "../common/Icon";

// PRD §9 Page 11 §1 — Why Join Fitrah Global. PRD supplies no copy. Three
// reasons grounded in PRD-established facts: the mission (objective +
// subheadline), the ecosystem scale (the portfolio of platforms), and the
// values (the Philosophy principles). Authored framing; logged in placeholders.md.

const REASONS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "sun",
    title: "Work with purpose",
    body: "Build products that serve people, strengthen communities, and shape the future of the Muslim digital economy.",
  },
  {
    icon: "globe",
    title: "Build at ecosystem scale",
    body: "Ship across a connected family of platforms — communication, commerce, knowledge, media, AI, and trust.",
  },
  {
    icon: "shield",
    title: "Build on values",
    body: "Every product is held to the same philosophy: trust, clarity, human wellbeing, and long-term value.",
  },
];

export function WhyJoin() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <Reveal>
          <Eyebrow>Why Join Fitrah Global</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            A rare place to do{" "}
            <em className="italic font-light text-green-500">
              meaningful work.
            </em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-3 gap-6 max-md:mt-10 max-md:grid-cols-1 max-md:gap-5">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={200 + i * 80} className="contents">
              <article className="flex h-full flex-col rounded-xl border border-rule bg-ivory p-8 max-md:p-7">
                <span className="text-green-700">
                  <Icon name={r.icon} size={28} />
                </span>
                <h3 className="mt-7 font-serif font-normal text-green-700 leading-[1.15] tracking-[-0.014em] text-[clamp(20px,1.9vw,25px)]">
                  {r.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink/80">
                  {r.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
