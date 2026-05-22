import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// Closing CTA for Philosophy. Not a PRD-listed section, but added per the
// site-wide "path forward" convention (PRD §5). Connects the philosophy to
// where it's put into practice — the ecosystem and a partnership path.

export function PhilosophyCTA() {
  return (
    <section className="bg-cta-glow text-ivory">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[140px] text-center max-md:py-[90px]">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] font-serif font-normal leading-[1.05] tracking-[-0.022em] text-[clamp(36px,5.2vw,72px)]">
            A philosophy,{" "}
            <em className="italic font-light text-gold-soft">put to work.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-[52ch] text-[16px] leading-[1.65] text-ivory/75">
            See how these principles shape the products we build across the
            Fitrah Global ecosystem.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 max-sm:flex-col">
            <a
              href="/ecosystem"
              className="inline-flex items-center gap-2.5 rounded-full bg-ivory px-5 py-3 text-[14px] font-medium text-green-900 transition-colors hover:bg-sand"
            >
              Explore the ecosystem
              <ArrowRight />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-5 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-ivory/10"
            >
              Partner with us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
