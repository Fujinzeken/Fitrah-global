import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 6 §2 — Featured Stories. PRD supplies no stories. Built as a
// real editorial feed layout (one featured + two secondary) shown as
// intentional empty states, so the client sees the structure the CMS will
// fill. Category tags are real (PRD §9 Page 6 Categories); story content is
// flagged pending. Logged in placeholders.md.

// Skeleton bar for where copy will sit — static, not a loading animation.
function Bar({ w }: { w: string }) {
  return <span className="block h-2.5 rounded-full bg-rule" style={{ width: w }} />;
}

function StoryCard({
  category,
  featured = false,
}: {
  category: string;
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
          {category}
        </span>

        <div className={`mt-5 space-y-2.5 ${featured ? "" : ""}`}>
          <Bar w="92%" />
          <Bar w="68%" />
        </div>

        <div className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          Coming soon
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
                Editorial content pending
              </span>
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-[1.4fr_1fr] gap-6 max-lg:grid-cols-1 max-md:mt-10">
          <Reveal delay={240}>
            <StoryCard category="Muslim Digital Economy" featured />
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal delay={300}>
              <StoryCard category="Ethical Technology" />
            </Reveal>
            <Reveal delay={360}>
              <StoryCard category="AI and Society" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
