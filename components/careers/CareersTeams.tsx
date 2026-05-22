import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { Icon, type IconName } from "../common/Icon";

// PRD §9 Page 11 §4 — Teams. Real content: the nine teams are verbatim from
// PRD §9 Page 11. Icons are decorative.

const TEAMS: { name: string; icon: IconName }[] = [
  { name: "Product", icon: "compass" },
  { name: "Engineering", icon: "globe" },
  { name: "AI", icon: "ai" },
  { name: "Design", icon: "leaf" },
  { name: "Trust and Safety", icon: "shield" },
  { name: "Media", icon: "media" },
  { name: "Research", icon: "education" },
  { name: "Operations", icon: "docs" },
  { name: "Ventures", icon: "ventures" },
];

export function CareersTeams() {
  return (
    <section id="teams" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow>Teams</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            Where you could{" "}
            <em className="italic font-light text-green-500">work.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:mt-10 max-md:grid-cols-1">
          {TEAMS.map((t, i) => (
            <Reveal key={t.name} delay={180 + i * 55} className="contents">
              <div className="group flex items-center gap-4 rounded-xl border border-rule bg-ivory p-7 transition-colors duration-300 hover:border-rule-2 hover:bg-ivory-2">
                <span className="shrink-0 text-green-700 transition-colors duration-300 group-hover:text-gold">
                  <Icon name={t.icon} size={24} />
                </span>
                <h3 className="font-serif text-[21px] text-green-700 tracking-[-0.012em] leading-[1.15]">
                  {t.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
