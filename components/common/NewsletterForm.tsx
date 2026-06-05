"use client";

import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

// Shared newsletter signup, used by Fitrah Media and Insights. Posts to
// /api/newsletter which proxies to a Google Apps Script web app that appends
// the row to a Google Sheet. Server-side validation + honeypot guard the
// endpoint; client-side validation gives quick feedback.

type Props = {
  eyebrow: string;
  headingLead: string;
  headingEm: string;
  note: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm({ eyebrow, headingLead, headingEm, note }: Props) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // The label/input id needs to be DOM-safe (Eyebrow text can contain spaces).
  const fieldId = `newsletter-email-${eyebrow.replace(/\s+/g, "-").toLowerCase()}`;

  useEffect(() => {
    // Close modal on Escape — <dialog> handles this natively, but guard for
    // browsers that don't honor it.
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      dlg.close();
    };
    dlg.addEventListener("cancel", onCancel);
    return () => dlg.removeEventListener("cancel", onCancel);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const fd = new FormData(e.currentTarget);
    const submittedEmail = String(fd.get("email") ?? "").trim();
    const hp = String(fd.get("_hp") ?? "");

    if (!submittedEmail || !EMAIL_REGEX.test(submittedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: submittedEmail,
          _hp: hp,
        }),
      });
      const data: { ok?: boolean; error?: string } = await res
        .json()
        .catch(() => ({ ok: false }));

      if (res.ok && data.ok) {
        setEmail("");
        dialogRef.current?.showModal();
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
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
                <form onSubmit={handleSubmit} noValidate className="relative">
                  {/* Honeypot — visually hidden but reachable from DOM by bots. */}
                  <input
                    type="text"
                    name="_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute left-[-9999px] top-0 h-0 w-0 opacity-0"
                  />

                  <label
                    htmlFor={fieldId}
                    className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/60"
                  >
                    Email address
                  </label>
                  <div className="mt-3 flex gap-3 max-sm:flex-col">
                    <input
                      id={fieldId}
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="you@example.com"
                      disabled={submitting}
                      aria-invalid={error ? true : undefined}
                      aria-describedby={error ? `${fieldId}-error` : undefined}
                      className="flex-1 rounded-full border border-rule-2 bg-ivory px-5 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-green-700 focus:outline-none focus-visible:outline-none disabled:opacity-60"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex shrink-0 items-center justify-center rounded-full bg-green-700 px-6 py-3 text-[14px] font-medium text-ivory transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "Subscribing…" : "Subscribe"}
                    </button>
                  </div>

                  {error && (
                    <p
                      id={`${fieldId}-error`}
                      role="alert"
                      className="mt-3 text-[13px] leading-[1.5] text-red-700"
                    >
                      {error}
                    </p>
                  )}

                  <p className="mt-3 text-[13px] leading-[1.55] text-ink/55">
                    {note}
                  </p>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Success modal — native <dialog>; backdrop styled via Tailwind's
          backdrop: variant. */}
      <dialog
        ref={dialogRef}
        aria-labelledby={`${fieldId}-success-title`}
        className="m-auto w-[calc(100%-32px)] max-w-[460px] rounded-2xl border border-rule bg-ivory p-0 shadow-[0_30px_80px_-30px_rgba(15,42,32,0.45)] backdrop:bg-ink/40 backdrop:backdrop-blur-sm"
      >
        <div className="p-10 text-center max-md:p-7">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-green-700/30 bg-green-700/[0.06] text-green-700">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12l4 4 10-11" />
            </svg>
          </span>
          <h3
            id={`${fieldId}-success-title`}
            className="mt-5 font-serif text-[clamp(22px,2.4vw,28px)] text-green-700 tracking-[-0.014em]"
          >
            You&rsquo;re on the list.
          </h3>
          <p className="mx-auto mt-3 max-w-[36ch] text-[15px] leading-[1.6] text-ink/80">
            Thanks for subscribing. We&rsquo;ll be in touch when the next
            issue ships.
          </p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="mt-7 inline-flex items-center justify-center rounded-full bg-green-700 px-5 py-2.5 text-[13px] font-medium text-ivory transition-colors hover:bg-green-800"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}
