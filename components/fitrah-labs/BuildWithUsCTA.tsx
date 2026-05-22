import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 7 §8 — Build With Us CTA. Closing conversion path for Fitrah
// Labs. Mirrors the site-wide closing-CTA composition. Labs-specific paths:
// pitch a concept / partner, and join the team that builds.

export function BuildWithUsCTA() {
  return (
    <section className="bg-cta-glow text-ivory">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] text-center max-md:py-[90px]">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] font-serif font-normal leading-[1.05] tracking-[-0.022em] text-[clamp(36px,5.2vw,72px)]">
            Build the next product{" "}
            <em className="italic font-light text-gold-soft">with us.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-[52ch] text-[16px] leading-[1.65] text-ivory/75">
            Founders with an idea, builders who ship fast, and partners backing
            new platforms &mdash; the lab is open.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 max-sm:flex-col">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-ivory px-5 py-3 text-[14px] font-medium text-green-900 transition-colors hover:bg-sand"
            >
              Pitch a concept
              <ArrowRight />
            </a>
            <a
              href="/careers"
              className="inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-5 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-ivory/10"
            >
              Join the team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
