import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

// Message verbatim from client-supplied content (new-info.md, "Homepage
// Leadership Message Copy"). Portrait still not supplied — placeholder.
export function LeadershipMessage() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[72px]">
        <Reveal>
          <Eyebrow>A message from our founder</Eyebrow>
        </Reveal>

        <div className="mt-12 grid grid-cols-[0.78fr_1.22fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <Reveal>
            <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-xl border border-dashed border-rule-2 bg-ivory/50 px-6 text-center max-lg:aspect-[16/9]">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Portrait
              </span>
              <span className="mt-2 max-w-[26ch] text-[13px] italic text-muted/80">
                Founder portrait pending — to be supplied by the client.
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <blockquote className="space-y-5 font-serif font-light text-green-700 leading-[1.4] tracking-[-0.012em] text-[clamp(20px,2.2vw,28px)]">
              <p>
                Fitrah Global was created from a simple belief: the digital
                world should serve people, not pull them away from their
                values, families, communities, and purpose.
              </p>
              <p>
                For too long, the most important digital platforms in our lives
                have been designed around{" "}
                <em className="italic text-green-500">
                  attention, addiction, and consumption.
                </em>{" "}
                We believe the next generation of technology must be different.
                It must be built around trust, clarity, responsibility, and
                human nature.
              </p>
              <p>
                Our ambition is to build a family of platforms that help
                Muslims communicate, learn, discover, trade, create, and grow
                in a more values-aligned digital environment. This is not only
                about building apps. It is about building digital
                infrastructure for a global community.
              </p>
              <p className="text-green-500 italic">
                Fitrah Global exists to build that future with patience,
                excellence, and long-term responsibility.
              </p>
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-10 bg-rule-2" />
              <div>
                <div className="font-serif text-[18px] text-green-700">
                  Mukhammad Khalil
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Founder, Fitrah Global
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
