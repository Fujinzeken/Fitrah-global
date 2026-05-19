import { Eyebrow } from "../common/Eyebrow";
import { LogoMark } from "../common/Logo";

// Page headline verbatim from PRD §9 Page 2 (About).
//
// Wordmark faithful to brand-app.jsx §02.A Primary Lockup —
// `F<i>i</i>trah` + small uppercase tracked `Global`. The italic 'i' in
// green is brand-app.jsx §02 stated as "the point of origin within the
// word, a quiet typographic echo of the symbol."
//
// The Aperture mark sits top-left as a publisher's mark / colophon,
// pairing with the page label per the brand book's editorial framing.
export function AboutHeader() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-16 max-md:pt-22 max-md:pb-10">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px]">
        {/* Top row: small publisher's mark + eyebrow */}
        <div className="flex items-center gap-3">
          <LogoMark size={26} className="shrink-0 text-green-700" />
          <Eyebrow>About</Eyebrow>
        </div>

        {/* Brand §02.A wordmark — monogram with trailing GLOBAL label */}
        <div className="mt-14 flex flex-wrap items-end gap-x-5 gap-y-2 max-md:mt-10">
          <div
            aria-hidden="true"
            className="select-none font-serif font-light leading-[0.86] tracking-[-0.06em] text-green-700 text-[clamp(108px,20vw,300px)]"
          >
            F<span className="italic text-green-500">i</span>trah
          </div>
          <span
            aria-hidden="true"
            className="mb-[0.5em] font-sans font-medium uppercase text-muted tracking-[0.34em] text-[clamp(11px,1.15vw,18px)]"
          >
            Global
          </span>
        </div>

        {/* Accessible full name (visual lockup is aria-hidden so AT doesn't
            stutter "F i trah Global"). */}
        <h1 className="sr-only">Fitrah Global — Technology rooted in human nature.</h1>

        {/* Page headline — PRD verbatim */}
        <p
          aria-hidden="true"
          className="mt-14 max-w-[22ch] font-serif font-normal text-green-700 leading-[1.04] tracking-[-0.022em] text-[clamp(28px,3.4vw,46px)] max-md:mt-10"
        >
          Technology rooted in{" "}
          <em className="italic font-light text-green-500">human nature.</em>
        </p>
      </div>
    </section>
  );
}
