import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 6 §2 — Featured Stories. Story titles + categories supplied
// from client content (new-info.md, "Fitrah Media Content Strategy → Pillar
// 2 Essays"). Article bodies and images still pending — cards show the real
// upcoming titles with "Article coming soon" status.

type Story = { title: string; category: string };

const FEATURED: Story = {
  title: "The Next 100 Unicorns of the Muslim World",
  category: "Muslim Digital Economy",
};
const SECONDARY: Story[] = [
  {
    title: "Why the Muslim World Needs Its Own Digital Infrastructure",
    category: "Ethical Technology",
  },
  {
    title: "The Future of Islamic AI",
    category: "AI and Society",
  },
];

function StoryCard({
  story,
  featured = false,
}: {
  story: Story;
  featured?: boolean;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-rule bg-ivory">
      {/* Image area */}
      <div
        className={`relative grid place-items-center bg-ivory-2 ${
          featured ? "aspect-[16/10]" : "aspect-[16/9]"
        }`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-rule) 1px, transparent 1px), linear-gradient(90deg, var(--color-rule) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          }}
        />
        <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Image coming soon
        </span>
      </div>

      {/* Body */}
      <div className={`flex flex-1 flex-col ${featured ? "p-8" : "p-6"}`}>
        <span className="self-start rounded-full border border-rule-2 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink/60">
          {story.category}
        </span>

        <h3
          className={`mt-5 font-serif font-normal text-green-700 leading-[1.15] tracking-[-0.014em] ${
            featured ? "text-[clamp(24px,2.6vw,32px)]" : "text-[clamp(18px,1.6vw,22px)]"
          }`}
        >
          {story.title}
        </h3>

        <div className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          Article coming soon
        </div>
      </div>
    </article>
  );
}

export function FeaturedStories() {
  return (
    <section id="stories" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <Eyebrow>Featured Stories</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 max-w-[20ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
                The newsroom,{" "}
                <em className="italic font-light text-green-500">
                  taking shape.
                </em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <span className="inline-flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Articles in writing
              </span>
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-[1.4fr_1fr] gap-6 max-lg:grid-cols-1 max-md:mt-10">
          <Reveal delay={240}>
            <StoryCard story={FEATURED} featured />
          </Reveal>
          <div className="flex flex-col gap-6">
            {SECONDARY.map((s, i) => (
              <Reveal key={s.title} delay={300 + i * 60}>
                <StoryCard story={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
