import { Eyebrow } from "../common/Eyebrow";
import { LogoMark } from "../common/Logo";
import { Reveal } from "../common/Reveal";

// PRD §9 Page 12 — Contact hero. Headline + subheadline verbatim. Kept compact
// so the form sits high on the page (this is the conversion endpoint for the
// whole site).

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-[56px] max-md:pt-22 max-md:pb-10">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px]">
        <Reveal>
          <div className="flex items-center gap-3">
            <LogoMark size={26} className="shrink-0 text-green-700" />
            <Eyebrow>Contact</Eyebrow>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-14 max-w-[16ch] font-serif font-normal text-green-700 leading-[1.02] tracking-[-0.026em] text-[clamp(38px,5.6vw,84px)] max-md:mt-10">
            Start a conversation with{" "}
            <em className="italic font-light text-green-500">Fitrah Global.</em>
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-10 max-w-[60ch] text-[18px] leading-[1.6] text-ink tracking-[-0.005em] max-md:mt-8">
            Connect with our team for partnerships, media, careers, ventures,
            product inquiries, and institutional collaboration.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
