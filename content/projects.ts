export type Project = {
  slug: string;
  title: string;
  /** Short bold line above the description. */
  tagline: string;
  description: string;
  source: "open" | "closed";
  tags: string[];
  /** Buttons under the tags, laid out in a row. `tone` picks the color. */
  links?: { label: string; href: string; tone?: "accent" | "red" }[];
  /** Small muted line at the bottom of the card. */
  note?: string;
  /** Drop an image in /public and point here to replace the placeholder. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "sentinel",
    title: "SENTINEL",
    tagline: "Sandboxing for LLM prompting.",
    description:
      "SENTINEL is a security framework for detecting and containing prompt injections in LLM agents. It combines representation-based detection with least-privilege sandboxing to prevent malicious instructions from triggering unauthorized actions. I’m evaluating its effectiveness across different attack types and agent environments.",
    source: "closed",
    tags: ["LLMs", "AI Security", "Prompt Injections"],
    note: "Closed-source project — details available on request.",
  },
  {
    slug: "beartracks",
    title: "BearTracks",
    tagline: "Campus in your pocket.",
    description:
      "BearTracks is an all-in-one navigation app for UC Berkeley. You can view the best dining halls, study spots, how crowded the community gym is, and what events are happening on campus. The app is iOS-native and collects 0 user data, keeping the app onboarding clean and straightforward. Future improvements will focus on local caching so the app can be used in areas with poor internet coverage (e.g. Main Stacks Basement, Dwinelle Hall).",
    source: "open",
    tags: ["iOS", "Swift", "Xcode", "UI/UX"],
    links: [
      { label: "View Source on GitHub", href: "https://github.com/" },
      {
        label: "Demo",
        href: "https://youtu.be/TQcKeJbCv2A",
        tone: "red",
      },
    ],
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    tagline: "This website!",
    description:
      "A single-page site built with the App Router and statically prerendered. No CMS, no database, no UI library. The waveform and the typing headline are both hand-rolled: the waveform is summed sine curves in inline SVG that loop seamlessly on pure CSS, and the headline is a small piece of JavaScript that types and deletes each phrase.",
    source: "open",
    tags: ["TypeScript", "JavaScript", "CSS"],
    links: [
      {
        label: "View Source on GitHub",
        href: "https://github.com/JacobQuion/Personal-Website",
      },
    ],
  },
];
