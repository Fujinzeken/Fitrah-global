import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";

// Mission statement verbatim from PRD §9 Page 2.
// Presented as a solo inscribed statement (no card chrome) — single sentence,
// generous vertical air, centered. Mission and Vision are paired as a
// today→tomorrow diptych: this is the ivory half, Vision is the dark half.
export function Mission() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] max-md:py-[88px]">
        <Reveal>
          <Eyebrow>Mission</Eyebrow>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-16 max-w-[28ch] font-serif font-normal text-green-700 leading-[1.06] tracking-[-0.022em] text-[clamp(36px,5.6vw,76px)] max-md:mt-10">
            To build trusted digital products that help Muslims{" "}
            <em className="italic font-light text-green-500">
              communicate, learn, discover, trade, create, and grow
            </em>{" "}
            in a values-aligned digital environment.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
