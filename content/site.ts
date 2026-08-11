import type { IconName } from "@/components/Icons";

export type Social = {
  label: string;
  /** null hides the icon everywhere — fill it in to switch the link on. */
  href: string | null;
  icon: IconName;
};

// Rendered left to right in the contact section. X sits before the last two so
// enabling it later doesn't displace them from the right end.
const socials: Social[] = [
  { label: "Email", href: "mailto:jacobquion@berkeley.edu", icon: "mail" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jacobquion",
    icon: "linkedin",
  },
  // Set href to your profile URL once you have one and the icon appears.
  { label: "X", href: null, icon: "x" },
  { label: "GitHub", href: "https://github.com/JacobQuion", icon: "github" },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@jacobquion.mp4",
    icon: "youtube",
  },
];

export const site = {
  name: "Jacob Quion",
  /** The hero headline cycles through these, one at a time. */
  headlines: ["Jacob Quion", "UC Berkeley ’30", "Social Good"],
  role: "Software Engineer",
  // Update this once you know your production domain — it powers OG tags.
  url: "https://example.com",
  description:
    "Personal site of Jacob Quion — engineer, builder, and occasional writer.",
  /**
   * Two markers are supported: `*` renders a superscript mark, and text in
   * [square brackets] becomes a link to `introLink`.
   */
  intro:
    "I’m technical by nature, but I’m most interested in [philanthropy]*. I only work on problems that have a genuine, real-world impact.",
  introLink: "https://www.youtube.com/@jacobquion.mp4",
  /** Body copy for the contact section at the bottom of the home page. */
  contactBlurb:
    "Have a question, request, or just want to chat? Leave a message and I'll respond in <24 hours.",
  /** Lives in /public — replace that file to update the embedded résumé. */
  resume: "/jacob-quion-resume.pdf",
  email: "jacobquion@berkeley.edu",
  socials,
};

/** Only the links that actually go somewhere. */
export const activeSocials = site.socials.filter(
  (social): social is Social & { href: string } => Boolean(social.href)
);
