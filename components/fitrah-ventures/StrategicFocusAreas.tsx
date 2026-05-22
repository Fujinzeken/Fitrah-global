import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { Icon, type IconName } from "../common/Icon";

// PRD §9 Page 8 §3 — Strategic Focus Areas. Real content: the seven areas are
// verbatim from PRD §9 Page 8. Icons are decorative. The substantive anchor of
// the page (target of the hero's "What we back" CTA → #focus).

const AREAS: { name: string; icon: IconName }[] = [
  { name: "Muslim consumer platforms", icon: "globe" },
  { name: "Ethical AI", icon: "ai" },
  { name: "Halal commerce", icon: "commerce" },
  { name: "Education and knowledge", icon: "education" },
  { name: "Family and community technology", icon: "comms" },
  { name: "Trust and identity infrastructure", icon: "shield" },
  { name: "Media and creator economy", icon: "media" },
];

export function StrategicFocusAreas() {
  return (
    <section id="focus" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow>Strategic Focus Areas</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            Where we{" "}
            <em className="italic font-light text-green-500">invest.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:mt-10 max-md:grid-cols-1">
          {AREAS.map((a, i) => (
            <Reveal key={a.name} delay={200 + i * 60} className="contents">
              <div className="group flex items-center gap-4 rounded-xl border border-rule bg-ivory p-7 transition-colors duration-300 hover:border-rule-2 hover:bg-ivory-2">
                <span className="shrink-0 text-green-700 transition-colors duration-300 group-hover:text-gold">
                  <Icon name={a.icon} size={24} />
                </span>
                <h3 className="font-serif text-[20px] text-green-700 tracking-[-0.012em] leading-[1.18]">
                  {a.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
