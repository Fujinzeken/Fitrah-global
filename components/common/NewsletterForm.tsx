"use client";

import { useState } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

// Shared newsletter signup panel, used by Fitrah Media and Insights. No
// email-service backend is connected, so submission shows an honest
// client-side acknowledgment (it does not claim a completed subscription) and
// stores nothing. Backend integration is flagged pending in placeholders.md.

type Props = {
  eyebrow: string;
  headingLead: string;
  headingEm: string;
  note: string;
};

export function NewsletterForm({ eyebrow, headingLead, headingEm, note }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-10 max-md:px-[22px] py-[120px] max-md:py-[80px]">
        <div className="rounded-2xl border border-rule bg-sand-ruled p-12 max-md:p-8">
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-12 items-center max-lg:grid-cols-1 max-lg:gap-8">
            <Reveal>
              <div>
                <Eyebrow tone="on-sand">{eyebrow}</Eyebrow>
                <h2 className="mt-6 max-w-[18ch] font-serif font-normal text-green-700 leading-[1.05] tracking-[-0.022em] text-[clamp(26px,3vw,40px)]">
                  {headingLead}{" "}
                  <em className="italic font-light text-green-500">
                    {headingEm}
                  </em>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div>
                {submitted ? (
                  <div
                    role="status"
                    className="rounded-xl border border-green-700/20 bg-ivory p-7"
                  >
                    <p className="font-serif text-[20px] text-green-700 tracking-[-0.012em]">
                      Thank you.
                    </p>
                    <p className="mt-2 text-[15px] leading-[1.6] text-ink/80">
                      The newsletter is launching soon &mdash; we&rsquo;ll be in
                      touch when the first issue ships.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <label
                      htmlFor={`newsletter-email-${eyebrow}`}
                      className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/60"
                    >
                      Email address
                    </label>
                    <div className="mt-3 flex gap-3 max-sm:flex-col">
                      <input
                        id={`newsletter-email-${eyebrow}`}
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="flex-1 rounded-full border border-rule-2 bg-ivory px-5 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-green-700 focus:outline-none focus-visible:outline-none"
                      />
                      <button
                        type="submit"
                        className="inline-flex shrink-0 items-center justify-center rounded-full bg-green-700 px-6 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-green-800"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.55] text-ink/55">
                      {note}
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
