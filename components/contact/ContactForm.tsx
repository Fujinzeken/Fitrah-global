"use client";

import { useState } from "react";

// PRD §9 Page 12 — Contact form. Fields exactly as PRD specifies: required
// (Full name, Email, Organization, Contact reason, Message) and optional
// (Website, Phone number, Country, Attachment / deck upload). The "Contact
// reason" options are the six PRD Contact Categories.
//
// No backend is connected: submission is validated client-side, shows an
// honest acknowledgment, and stores/sends nothing. Wire to a form handler /
// email service before launch. Flagged in placeholders.md.

const REASONS = [
  "Partnerships",
  "Media",
  "Careers",
  "Ventures",
  "Product Inquiries",
  "General Contact",
];

const fieldBase =
  "mt-2 w-full rounded-xl border border-rule-2 bg-ivory px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 focus:border-green-700 focus:outline-none focus-visible:outline-none";
const labelBase =
  "font-mono text-[11px] uppercase tracking-[0.14em] text-ink/70";

function Required() {
  return <span className="text-gold"> *</span>;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-green-700/20 bg-ivory p-10 max-md:p-7"
      >
        <p className="font-serif text-[26px] text-green-700 tracking-[-0.014em]">
          Thank you for reaching out.
        </p>
        <p className="mt-3 max-w-[46ch] text-[16px] leading-[1.6] text-ink/80">
          We&rsquo;ve received your details and the right team will be in touch.
          We aim to respond to every genuine inquiry.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-rule bg-ivory p-10 max-md:p-7"
    >
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <div>
          <label htmlFor="c-name" className={labelBase}>
            Full name<Required />
          </label>
          <input id="c-name" name="name" type="text" required className={fieldBase} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="c-email" className={labelBase}>
            Email<Required />
          </label>
          <input id="c-email" name="email" type="email" required className={fieldBase} placeholder="you@example.com" />
        </div>

        <div>
          <label htmlFor="c-org" className={labelBase}>
            Organization<Required />
          </label>
          <input id="c-org" name="organization" type="text" required className={fieldBase} placeholder="Company or organization" />
        </div>
        <div>
          <label htmlFor="c-reason" className={labelBase}>
            Contact reason<Required />
          </label>
          <select id="c-reason" name="reason" required defaultValue="" className={fieldBase}>
            <option value="" disabled>
              Select a reason
            </option>
            {REASONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="c-message" className={labelBase}>
          Message<Required />
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={5}
          className={`${fieldBase} resize-y`}
          placeholder="How can we help?"
        />
      </div>

      {/* Optional fields */}
      <div className="mt-8 border-t border-rule pt-7">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          Optional
        </span>
        <div className="mt-4 grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div>
            <label htmlFor="c-website" className={labelBase}>
              Website
            </label>
            <input id="c-website" name="website" type="url" className={fieldBase} placeholder="https://" />
          </div>
          <div>
            <label htmlFor="c-phone" className={labelBase}>
              Phone number
            </label>
            <input id="c-phone" name="phone" type="tel" className={fieldBase} placeholder="+1 …" />
          </div>
          <div>
            <label htmlFor="c-country" className={labelBase}>
              Country
            </label>
            <input id="c-country" name="country" type="text" className={fieldBase} placeholder="Country" />
          </div>
          <div>
            <label htmlFor="c-file" className={labelBase}>
              Attachment / deck
            </label>
            <input
              id="c-file"
              name="attachment"
              type="file"
              className={`${fieldBase} file:mr-3 file:rounded-full file:border-0 file:bg-sand file:px-3 file:py-1 file:font-mono file:text-[10px] file:uppercase file:tracking-[0.12em] file:text-green-700`}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-green-700 px-6 py-3.5 text-[15px] font-medium text-ivory transition-colors hover:bg-green-800 max-md:w-full"
      >
        Send message
      </button>
      <p className="mt-4 text-center text-[12px] leading-[1.5] text-muted">
        Fields marked <span className="text-gold">*</span> are required.
      </p>
    </form>
  );
}
