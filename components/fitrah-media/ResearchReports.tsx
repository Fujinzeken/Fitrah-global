import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { Icon } from "../common/Icon";

// PRD §9 Page 6 §3 — Research Reports. PRD supplies no reports. Built as a
// research-library row list shown as intentional empty states. Report content
// is flagged pending; logged in placeholders.md.

function Bar({ w }: { w: string }) {
  return <span className="block h-2.5 rounded-full bg-rule" style={{ width: w }} />;
}

export function ResearchReports() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <Eyebrow>Research Reports</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(28px,3.4vw,44px)]">
                Intelligence on the{" "}
                <em className="italic font-light text-green-500">
                  Muslim digital economy.
                </em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <span className="inline-flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Reports pending
              </span>
            </span>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-rule max-md:mt-10">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={240 + i * 80} className="contents">
              <div className="grid grid-cols-[44px_1fr_auto] items-center gap-8 border-b border-rule py-8 max-md:gap-5 max-md:py-7">
                <span className="text-green-700 opacity-70">
                  <Icon name="docs" size={26} />
                </span>
                <div className="space-y-2.5">
                  <Bar w="44%" />
                  <Bar w="28%" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Coming soon
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={520}>
          <p className="mt-8 max-w-[56ch] text-[14px] italic leading-[1.65] text-muted">
            Research reports will be published here &mdash; titles, abstracts,
            and downloads supplied by the client.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
