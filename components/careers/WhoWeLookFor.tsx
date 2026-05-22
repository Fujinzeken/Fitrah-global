import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 11 §3 — Who We Look For. The role archetypes come from PRD §2
// Strategic Goals ("Make engineers, designers, AI builders, product managers,
// researchers, and media professionals want to join."). Real PRD content;
// framing prose is grounded in the objective ("mission-aligned talent").

const ROLES = [
  "Engineers",
  "Designers",
  "AI builders",
  "Product managers",
  "Researchers",
  "Media professionals",
];

export function WhoWeLookFor() {
  return (
    <section className="bg-sand border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="grid grid-cols-[0.42fr_0.58fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <Eyebrow tone="on-sand">Who We Look For</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] font-serif font-normal text-green-700 leading-[1.04] tracking-[-0.022em] text-[clamp(28px,3.4vw,46px)]">
              Mission-aligned{" "}
              <em className="italic font-light text-green-500">builders.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div>
              <p className="max-w-[54ch] text-[17px] leading-[1.65] text-ink/85">
                We&rsquo;re looking for people who want their work to matter
                &mdash; builders across disciplines who share the conviction
                that technology should serve people.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-rule-2 pt-7 max-md:grid-cols-1">
                {ROLES.map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-3 font-serif text-[20px] text-green-700 tracking-[-0.012em]"
                  >
                    <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
