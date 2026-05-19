import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// Vision statement verbatim from PRD §9 Page 2.
// Inverted on deep green — the Mission→Vision pivot is the page's
// "today → tomorrow" beat; inversion gives Vision the leap.
export function Vision() {
  return (
    <section className="relative bg-green-900 text-ivory overflow-hidden">
      <div className="relative mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow tone="on-dark">Vision</Eyebrow>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-16 ml-auto max-w-[26ch] text-right font-serif font-light leading-[1.06] tracking-[-0.022em] text-[clamp(36px,5.6vw,76px)] max-md:mt-10 max-md:text-left">
            To become the{" "}
            <em className="italic text-gold-soft">leading global technology group</em>{" "}
            for the Muslim digital economy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
