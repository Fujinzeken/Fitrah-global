import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";
import { Icon, type IconName } from "../common/Icon";

// PRD §9 Page 4 §2 — Product grid. The five consumer products, verbatim from
// PRD §9 Page 4 Portfolio Items (name, category, description, status). Per the
// PRD card spec each card carries a CTA; since these products are pre-launch
// (all Concept/Building) and have no dedicated pages, the honest CTA routes
// interest to /contact rather than a 404. Operating companies (Technologies,
// Media, Labs, Ventures) live in the Company cards section, not here.

type Product = {
  name: string;
  category: string;
  description: string;
  status: string;
  icon: IconName;
};

const PRODUCTS: Product[] = [
  {
    name: "Safa by Fitrah",
    category: "Browser / Digital Gateway",
    description:
      "A Muslim-first browser and digital gateway for safer, values-aligned internet discovery.",
    status: "Concept / Building",
    icon: "globe",
  },
  {
    name: "Salam by Fitrah",
    category: "Communication",
    description:
      "A messaging and community platform designed for trusted Muslim digital connection.",
    status: "Concept",
    icon: "comms",
  },
  {
    name: "Tayyib by Fitrah",
    category: "Social Commerce",
    description:
      "A halal social commerce platform connecting trusted creators, ethical brands, and Muslim consumers.",
    status: "Concept",
    icon: "commerce",
  },
  {
    name: "Basirah by Fitrah",
    category: "Spiritual Learning",
    description:
      "An azkar, zikr, and spiritual learning platform designed to support daily remembrance and community accountability.",
    status: "Concept",
    icon: "sun",
  },
  {
    name: "Fitrah AI",
    category: "Artificial Intelligence",
    description:
      "AI-powered tools for learning, discovery, safety, personalization, and guidance.",
    status: "Building",
    icon: "ai",
  },
];

export function ProductGrid() {
  return (
    <section id="portfolio" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow>Products</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
            The platforms{" "}
            <em className="italic font-light text-green-500">people use.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.65] text-muted">
            Consumer products across communication, commerce, learning, AI,
            and safe discovery &mdash; each shipping under the by Fitrah name.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-5">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={260 + i * 70} className="contents">
              <article className="group flex h-full flex-col rounded-xl border border-rule bg-ivory p-8 transition-colors duration-300 hover:border-rule-2 max-md:p-7">
                <div className="flex items-start justify-between">
                  <span className="text-green-700 transition-colors duration-300 group-hover:text-gold">
                    <Icon name={p.icon} size={28} />
                  </span>
                  <span className="rounded-full border border-gold/35 bg-gold/[0.04] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-gold">
                    {p.status}
                  </span>
                </div>

                <h3 className="mt-7 font-serif font-normal text-green-700 leading-[1.12] tracking-[-0.014em] text-[clamp(22px,2vw,28px)]">
                  {p.name}
                </h3>

                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {p.category}
                </div>

                <p className="mt-5 text-[14.5px] leading-[1.6] text-ink/80">
                  {p.description}
                </p>

                <div className="mt-auto pt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-green-700 transition-colors group-hover:text-gold"
                  >
                    Register interest
                    <span className="transition-transform group-hover:translate-x-0.5">
                      <ArrowRight />
                    </span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
