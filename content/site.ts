import type { IconName } from "@/components/Icons";

export type Social = {
  label: string;
  /** null hides the icon everywhere — fill it in to switch the link on. */
  href: string | null;
  icon: IconName;
};

// Rendered left to right in the contact section. X sits before GitHub so
// enabling it later doesn't displace it from the right end.
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
];

export const site = {
  name: "Jacob Quion",
  /** The hero headline cycles through these, one at a time. */
  headlines: ["Jacob Quion", "UC Berkeley ’30", "Always Learning"],
  role: "Software Engineer",
  // Update this once you know your production domain — it powers OG tags.
  url: "https://example.com",
  description:
    "Personal site of Jacob Quion — engineer, builder, and occasional writer.",
  /** Sits under the hero headline. Plain text — no markup is parsed. */
  intro:
    "I’m a UC Berkeley freshman exploring Agentic AI and LLMs. I’m especially interested in full-stack development and thoughtful UI/UX.",
  /** Currently unused; kept for the next time the intro needs a link. */
  introLink: "https://youtu.be/q1L4atKoWcg",
  /** Body copy for the contact section at the bottom of the home page. */
  contactBlurb:
    "I'm always free to answer questions or lend a helping hand. Email me and I'll respond in <24 hours.",
  /** Currently unused — the résumé section was removed. The file is still
      in /public if you want to link it again. */
  resume: "/jacob-quion-resume.pdf",
  email: "jacobquion@berkeley.edu",
  socials,
};

/** Only the links that actually go somewhere. */
export const activeSocials = site.socials.filter(
  (social): social is Social & { href: string } => Boolean(social.href)
);
