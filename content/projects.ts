export type Project = {
  slug: string;
  title: string;
  /** Short bold line above the description. */
  tagline: string;
  description: string;
  source: "open" | "closed";
  tags: string[];
  /** Buttons/links under the tags. The first renders as the primary button. */
  links?: { label: string; href: string }[];
  /** Small muted line at the bottom of the card. */
  note?: string;
  /** Drop an image in /public and point here to replace the placeholder. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "chamber",
    title: "Chamber",
    tagline: "Sandboxing for LLM prompting.",
    description:
      "A short paragraph on what this is, who it's for, and the interesting part of how it works. Two or three sentences is plenty — enough that someone skimming knows whether to ask you about it.",
    source: "closed",
    tags: ["rust", "postgres", "k8s"],
    note: "Closed-source project — details available on request.",
  },
  {
    slug: "frameo",
    title: "Frameo",
    tagline: "LLM -> Video Generation.",
    description:
      "A short paragraph on what this is, who it's for, and the interesting part of how it works. Mention the constraint that made it hard, not just the stack.",
    source: "open",
    tags: ["typescript", "next.js", "design"],
    links: [{ label: "View Source on GitHub", href: "https://github.com/" }],
  },
  {
    slug: "beartracks",
    title: "BearTracks",
    tagline: "Campus in your pocket.",
    description:
      "A short paragraph on what this is, who it's for, and the interesting part of how it works. Link out to a demo if there is one.",
    source: "open",
    tags: ["python", "tooling", "api"],
    links: [{ label: "View Source on GitHub", href: "https://github.com/" }],
  },
  {
    slug: "haven",
    title: "Haven",
    tagline: "Offline medical assistance.",
    description:
      "A short paragraph on what this is, who it's for, and the interesting part of how it works. Say what you'd do differently if you started over.",
    source: "open",
    tags: ["go", "docker", "redis"],
    links: [{ label: "View Source on GitHub", href: "https://github.com/" }],
  },
  {
    slug: "tapestry",
    title: "Tapestry",
    tagline: "Personalized mental math lessons.",
    description:
      "I took Calc BC in 11th grade and AP Stats in 12th. Since Stats was so heavy on the calculator side, my mental math skills got a bit rusty. I made Tapestry to help complete beginners (and 2nd-timers) learn Abacus, a mental math framework for performing basic operations quickly.",
    source: "open",
    tags: ["react", "flutter", "api"],
    links: [{ label: "View Source on GitHub", href: "https://github.com/" }],
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    tagline: "This website!",
    description:
      "A single-page personal site built with the App Router and statically prerendered. No CMS, no database, no UI library. The animated waveform behind the header and the typing headline are hand-rolled: the waveform is summed sine curves in inline SVG, so its tile loops seamlessly with no JavaScript at all.",
    source: "open",
    tags: ["next.js", "typescript", "tailwind"],
    links: [{ label: "View Source on GitHub", href: "https://github.com/" }],
  },
];
