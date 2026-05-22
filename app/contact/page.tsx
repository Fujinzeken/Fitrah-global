import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactBody } from "@/components/contact/ContactBody";

// PRD §14 lists no dedicated meta for Contact; title is the PRD §9 Page 12
// headline (verbatim) and description is the subheadline (verbatim).
const TITLE = "Contact — Start a Conversation with Fitrah Global";
const DESCRIPTION =
  "Connect with our team for partnerships, media, careers, ventures, product inquiries, and institutional collaboration.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBody />
    </>
  );
}
