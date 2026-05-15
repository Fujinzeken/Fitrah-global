import type { IconName } from "../common/Icon";

export type DropdownItem = {
  label: string;
  href: string;
  desc: string;
  icon?: IconName;
};

export type NavItem = {
  label: string;
  href: string;
  dropdown?: { cols: 1 | 2; items: DropdownItem[] };
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Ecosystem",
    href: "/ecosystem",
    dropdown: {
      cols: 2,
      items: [
        {
          label: "Communication",
          href: "/ecosystem#communication",
          desc: "Messaging, communities, family-safe interaction.",
          icon: "comms",
        },
        {
          label: "Commerce",
          href: "/ecosystem#commerce",
          desc: "Halal social commerce and trusted discovery.",
          icon: "commerce",
        },
        {
          label: "Knowledge",
          href: "/ecosystem#knowledge",
          desc: "Learning, Islamic resources, AI education.",
          icon: "education",
        },
        {
          label: "Media",
          href: "/ecosystem#media",
          desc: "Muslim digital economy insights and storytelling.",
          icon: "media",
        },
        {
          label: "AI",
          href: "/ecosystem#ai",
          desc: "Assistants, personalization, guidance, moderation.",
          icon: "ai",
        },
        {
          label: "Trust Infrastructure",
          href: "/ecosystem#trust-infrastructure",
          desc: "Identity, safety, verification, payments.",
          icon: "shield",
        },
      ],
    },
  },
  {
    label: "Companies",
    href: "/companies",
    dropdown: {
      cols: 1,
      items: [
        {
          label: "Fitrah Technologies",
          href: "/fitrah-technologies",
          desc: "Product, engineering, AI, and infrastructure.",
          icon: "globe",
        },
        {
          label: "Fitrah Labs",
          href: "/fitrah-labs",
          desc: "Venture studio and innovation lab.",
          icon: "compass",
        },
        {
          label: "Fitrah Ventures",
          href: "/fitrah-ventures",
          desc: "Investment and venture-building arm.",
          icon: "ventures",
        },
      ],
    },
  },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];
