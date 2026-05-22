import { Eyebrow } from "../common/Eyebrow";
import { Reveal } from "../common/Reveal";
import { ArrowRight } from "../common/ArrowRight";

// PRD §9 Page 11 §6 — Open Roles. PRD lists no specific roles and the PRD Role
// Card Requirements describe the card anatomy (title, department, location,
// type, description, apply CTA). With no roles supplied, this is an honest
// empty state: no current openings, with a route into the talent community.
// The role-card structure is noted for when listings are connected. Flagged
// in placeholders.md.

const CARD_FIELDS = [
  "Job title",
  "Department",
  "Location / Remote",
  "Type",
  "Description",
  "Apply",
];

export function OpenRoles() {
  return (
    <section id="roles" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <Eyebrow>Open Roles</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <span className="inline-flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Listings pending
              </span>
            </span>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-12 rounded-2xl border border-dashed border-rule-2 bg-ivory/50 px-10 py-16 text-center max-md:mt-10 max-md:px-7 max-md:py-12">
            <p className="mx-auto max-w-[40ch] font-serif font-light italic leading-[1.35] text-green-500 text-[clamp(22px,2.6vw,32px)]">
              No open roles at the moment.
            </p>
            <p className="mx-auto mt-5 max-w-[46ch] text-[15px] leading-[1.6] text-muted">
              We&rsquo;re always meeting mission-aligned people. Join the talent
              community and we&rsquo;ll reach out when a role fits.
            </p>
            <a
              href="#talent"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-green-700 px-5 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-green-800"
            >
              Join the talent community
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </a>

            {/* Role-card anatomy — shown so the listing structure is legible
                for when roles are connected. */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2 border-t border-rule pt-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Each listing will include:
              </span>
              {CARD_FIELDS.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-rule-2 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.13em] text-ink/60"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
