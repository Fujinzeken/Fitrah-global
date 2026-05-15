import { ArrowRight } from "../common/ArrowRight";

export function Hero() {
  return (
    <section className="relative pt-[120px] overflow-hidden max-md:pt-[88px]">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px]">
        {/* Headline */}
        <h1 className="font-serif font-normal text-green-700 leading-[0.98] tracking-[-0.028em] max-w-[18ch] text-[clamp(44px,7.4vw,108px)]">
          Building <em className="italic font-light text-green-500">trusted</em>
          <br />
          digital infrastructure
          <br />
          for the Muslim world.
        </h1>

        {/* Subheadline + CTAs */}
        <div className="mt-12 pb-14 max-w-[52ch]">
          <p className="text-[18px] leading-[1.55] text-ink tracking-[-0.005em]">
            Fitrah Global creates technology, media, commerce, education, and AI
            platforms rooted in trust, human nature, and long-term value.
          </p>
          <div className="flex gap-3 items-center mt-8 max-md:flex-wrap">
            <a
              href="/ecosystem"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-[13px] font-medium bg-green-700 text-ivory hover:bg-green-800 transition-colors"
            >
              Explore our ecosystem
              <ArrowRight />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-[13px] font-medium border border-rule-2 text-ink hover:bg-sand transition-colors"
            >
              Partner with us
            </a>
          </div>
        </div>

        {/* Hero atmosphere — abstract gradient composition (PLACEHOLDER_HERO_VISUAL).
            Client can swap this <figure>'s background for real photography
            or commissioned artwork later. */}
        <figure
          aria-hidden="true"
          className="bg-hero-atmosphere mt-[40px] h-[480px] border-y border-rule relative overflow-hidden max-md:h-[320px]"
        />

      </div>
    </section>
  );
}
