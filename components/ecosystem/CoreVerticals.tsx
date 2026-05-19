import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { Icon, type IconName } from "../common/Icon";

// PRD §9 Page 3 §3 — Six core verticals. Each vertical's chip list is the
// PRD description split on commas (verbatim items, only first letter
// capitalized). No additions, no inferences. The map section above showed
// connection; this section shows the depth of scope inside each vertical.
//
// IDs are aligned with navItems.ts dropdown anchors (/ecosystem#communication,
// /ecosystem#commerce, etc.) so the nav dropdown links land here.

type Vertical = {
  id: string;
  name: string;
  icon: IconName;
  areas: string[];
};

const VERTICALS: Vertical[] = [
  {
    id: "communication",
    name: "Communication",
    icon: "comms",
    areas: [
      "Messaging",
      "Social connection",
      "Communities",
      "Family-safe interaction",
    ],
  },
  {
    id: "commerce",
    name: "Commerce",
    icon: "commerce",
    areas: [
      "Halal social commerce",
      "Ethical brands",
      "Creator marketplaces",
      "Trusted discovery",
    ],
  },
  {
    id: "knowledge",
    name: "Knowledge",
    icon: "education",
    areas: [
      "Learning",
      "Islamic resources",
      "AI education",
      "Personal development",
      "Upskilling",
    ],
  },
  {
    id: "media",
    name: "Media",
    icon: "media",
    areas: [
      "Muslim digital economy insights",
      "Storytelling",
      "Reports",
      "Creator narratives",
    ],
  },
  {
    id: "ai",
    name: "AI",
    icon: "ai",
    areas: [
      "AI assistants",
      "Personalization",
      "Guidance",
      "Learning",
      "Moderation",
      "Productivity",
    ],
  },
  {
    id: "trust-infrastructure",
    name: "Trust Infrastructure",
    icon: "shield",
    areas: [
      "Identity",
      "Safety",
      "Verification",
      "Moderation",
      "Payments",
      "Compliance",
      "Reputation",
    ],
  },
];

export function CoreVerticals() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow>Core Verticals</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            What each vertical{" "}
            <em className="italic font-light text-green-500">covers.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.65] text-muted">
            The scope inside each domain &mdash; the surfaces, behaviors, and
            primitives that products under Fitrah Global address.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-5">
          {VERTICALS.map((v, i) => (
            <Reveal key={v.id} delay={260 + i * 70} className="contents">
              <article
                id={v.id}
                className="group flex h-full flex-col rounded-xl border border-rule bg-ivory p-8 transition-colors duration-300 hover:border-rule-2 max-md:p-7 scroll-mt-24"
              >
                <span className="text-green-700 transition-colors duration-300 group-hover:text-gold">
                  <Icon name={v.icon} size={30} />
                </span>

                <h3 className="mt-7 font-serif font-normal text-green-700 leading-[1.1] tracking-[-0.014em] text-[clamp(22px,2vw,28px)]">
                  {v.name}
                </h3>

                <div className="mt-5 h-px w-10 bg-rule" />

                <ul className="mt-6 flex flex-wrap gap-2">
                  {v.areas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-rule-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/70"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
