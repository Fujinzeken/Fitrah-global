import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

// Message verbatim from client-supplied content (new-info.md, "Founder Message
// (Recommended Final Version)"). Portrait still not supplied — placeholder.
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
                The next generation of transformative companies will not be
                built solely around technology. They will be built around{" "}
                <em className="italic text-green-500">purpose.</em>
              </p>
              <p>
                For too long, Muslims have participated in the digital economy
                primarily as users rather than builders. Yet across the world,
                we possess extraordinary talent, creativity, capital, and
                ambition.
              </p>
              <p className="text-green-500 italic">
                Fitrah Global was created to help unlock that potential.
              </p>
              <p>
                Our goal is not simply to launch products. Our goal is to
                build enduring institutions that empower people to learn,
                connect, build families, create businesses, and contribute
                positively to society.
              </p>
              <p>
                We believe technology should strengthen human flourishing, not
                replace it. We believe innovation and values can coexist. And
                we believe the Muslim world has an important role to play in
                shaping the future.
              </p>
              <p className="text-green-500 italic">
                This is only the beginning.
              </p>
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-10 bg-rule-2" />
              <div>
                <div className="font-serif text-[18px] text-green-700">
                  Muhammad Khalil
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
