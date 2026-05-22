import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 6 §5 — Creator Economy. PRD supplies no content. Built as a
// creator-spotlight feature format (distinct from the stories/reports/data
// treatments) shown as an intentional empty state. Flagged pending; logged in
// placeholders.md.

function Bar({ w }: { w: string }) {
  return <span className="block h-2.5 rounded-full bg-rule" style={{ width: w }} />;
}

export function CreatorEconomy() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">
          {/* Left: editorial intro */}
          <div>
            <Reveal>
              <Eyebrow>Creator Economy</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 max-w-[16ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
                The creators shaping{" "}
                <em className="italic font-light text-green-500">
                  Muslim digital culture.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 border-t border-dashed border-rule-2 pt-6">
                <span className="inline-flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Copy pending
                  </span>
                </span>
                <p className="mt-3 max-w-[48ch] text-[15px] italic leading-[1.65] text-muted">
                  Creator spotlights, interviews, and features to be supplied
                  by the client.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: creator-spotlight card empty state */}
          <Reveal delay={260}>
            <article className="overflow-hidden rounded-xl border border-rule bg-ivory">
              <div className="relative grid aspect-[16/10] place-items-center bg-ivory-2">
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
                  Creator spotlight
                </span>
              </div>
              <div className="p-8 max-md:p-7">
                <span className="self-start rounded-full border border-rule-2 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink/60">
                  Commerce and Creators
                </span>
                <div className="mt-5 space-y-2.5">
                  <Bar w="80%" />
                  <Bar w="55%" />
                </div>
                <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Coming soon
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
