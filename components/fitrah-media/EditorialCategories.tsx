import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { Icon, type IconName } from "../common/Icon";

// PRD §9 Page 6 §6 — Editorial Categories. Real content: the seven categories
// are verbatim from PRD §9 Page 6. Icons are decorative. This is the page's
// substantive anchor between the content-pending feed sections above and the
// newsletter/CTA below.

const CATEGORIES: { name: string; icon: IconName }[] = [
  { name: "Muslim Digital Economy", icon: "globe" },
  { name: "Ethical Technology", icon: "compass" },
  { name: "AI and Society", icon: "ai" },
  { name: "Commerce and Creators", icon: "commerce" },
  { name: "Culture and Community", icon: "comms" },
  { name: "Company News", icon: "docs" },
  { name: "Research Reports", icon: "education" },
];

export function EditorialCategories() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <Reveal>
          <Eyebrow>Editorial Categories</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            What Fitrah Media{" "}
            <em className="italic font-light text-green-500">covers.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:mt-10 max-md:grid-cols-1">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.name} delay={200 + i * 60} className="contents">
              <div className="group flex items-center gap-4 rounded-xl border border-rule bg-ivory p-7 transition-colors duration-300 hover:border-rule-2 hover:bg-ivory-2">
                <span className="text-green-700 transition-colors duration-300 group-hover:text-gold">
                  <Icon name={c.icon} size={24} />
                </span>
                <h3 className="font-serif text-[20px] text-green-700 tracking-[-0.012em] leading-[1.15]">
                  {c.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
