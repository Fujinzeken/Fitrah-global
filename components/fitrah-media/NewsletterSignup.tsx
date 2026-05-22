import { NewsletterForm } from "../common/NewsletterForm";

// PRD §9 Page 6 §7 — Newsletter Signup. Uses the shared NewsletterForm (UI
// only; no email-service backend connected — see placeholders.md).
export function NewsletterSignup() {
  return (
    <NewsletterForm
      eyebrow="Newsletter"
      headingLead="The Muslim digital economy,"
      headingEm="in your inbox."
      note="Insights, reports, and company news. No spam."
    />
  );
}
