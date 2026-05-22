import { Eyebrow } from "../common/Eyebrow";
import { LogoMark } from "../common/Logo";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 9 — Philosophy hero. Headline + subheadline verbatim. PRD tone:
// "manifesto: calm, precise, thoughtful, and powerful." Kept clean and
// spacious — the subheadline (the manifesto thesis) is given room to breathe,
// and a hairline transitions into the eight principles.

export function PhilosophyHero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-[80px] max-md:pt-22 max-md:pb-12">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px]">
        <Reveal>
          <div className="flex items-center gap-3">
            <LogoMark size={26} className="shrink-0 text-green-700" />
            <Eyebrow>Philosophy</Eyebrow>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-14 max-w-[20ch] font-serif font-normal text-green-700 leading-[1.04] tracking-[-0.026em] text-[clamp(36px,5.4vw,84px)] max-md:mt-10">
            A better digital world begins with a better{" "}
            <em className="italic font-light text-green-500">
              philosophy of technology.
            </em>
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-12 max-w-[52ch] font-serif font-light text-ink leading-[1.4] tracking-[-0.012em] text-[clamp(20px,2.4vw,30px)] max-md:mt-9">
            We believe technology should serve people, strengthen trust,
            protect values, and support human flourishing.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-16 flex items-center gap-5 max-md:mt-12">
            <span className="h-px w-16 bg-rule" />
            <a
              href="#principles"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-green-700"
            >
              Eight principles
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
