export type Project = {
  slug: string;
  title: string;
  /** Short bold line above the description. */
  tagline: string;
  description: string;
  source: "open" | "closed";
  tags: string[];
  /** Tags pinned to the left of the buttons, on the link row rather than
   * the tag row above it. */
  inlineTags?: string[];
  /** Buttons under the tags, laid out in a row. `tone` picks the color. */
  links?: { label: string; href: string; tone?: "accent" | "red" }[];
  /** Small muted line at the bottom of the card. */
  note?: string;
  /** Drop an image in /public and point here to replace the placeholder. */
  image?: string;
  /**
   * Optional looping clip for the thumbnail. Plays muted with no controls, so
   * it reads as an animated still; `image` becomes its poster frame.
   */
  video?: string;
};

export const projects: Project[] = [
  // ── Placeholders (Contour, Station) ──────────────────────────────────
  // Swap the copy for the real project, drop a thumbnail in /public and add
  // `image` (plus `video` for a clip), then delete the `note`.
  {
    slug: "contour",
    title: "Contour",
    tagline: "One-line hook goes here.",
    description:
      "TODO — what the project is, what you built, and the one detail worth bragging about. Three or four sentences matches the cards above and keeps the grid rows even.",
    source: "closed",
    tags: ["TODO"],
    note: "Placeholder — replace with a real project.",
  },
  {
    slug: "sentinel",
    title: "SENTINEL",
    tagline: "Diagnosing Encoded LLM Prompts.",
    description:
      "SENTINEL asks whether a prompt injection detector’s in-distribution accuracy predicts anything about attacks it has never seen. I generated 4,160 documents across 8 attack mechanisms, each with a benign twin of the same surface form, then trained with one mechanism held out and tested on exactly that one. In distribution it scores 1.000 on all eight, but the two families that attack the encoding rather than the language collapse to 0.788 and 0.561.",
    source: "closed",
    tags: ["LLMs", "AI Security", "Prompt Injections"],
    image: "/sentinel-demo.jpg",
    video: "/sentinel-demo.mp4",
    note: "Closed-source project. Details available upon request.",
  },
  {
    slug: "station",
    title: "Station",
    tagline: "Personal AI Study Partner.",
    description:
      "TODO — what the project is, what you built, and the one detail worth bragging about. Three or four sentences matches the cards above and keeps the grid rows even.",
    source: "closed",
    tags: ["TODO"],
    links: [
      {
        label: "Web",
        href: "https://station-smoky.vercel.app/",
        tone: "red",
      },
    ],
    note: "Placeholder — replace with a real project.",
  },
  {
    slug: "beartracks",
    title: "BearTracks",
    tagline: "Campus In Your Pocket.",
    description:
      "BearTracks is an all-in-one navigation app for UC Berkeley. You can view the best dining halls, study spots, how crowded the community gym is, and what events are happening on campus. The app is iOS-native and collects 0 user data, keeping the app onboarding clean and straightforward. Future improvements will focus on local caching so the app can be used in areas with poor internet coverage (e.g. Main Stacks Basement, Dwinelle Hall).",
    source: "open",
    tags: ["iOS", "Figma", "Swift", "Xcode", "UI/UX"],
    links: [
      {
        label: "View Source on GitHub",
        href: "https://github.com/JacobQuion/BearTracks_iOS_App",
      },
      {
        label: "Web",
        href: "https://beartracks-official.vercel.app/#",
        tone: "red",
      },
    ],
    image: "/beartracks-demo.jpg",
    video: "/beartracks-demo.mp4",
  },
  {
    slug: "ghidorah",
    title: "Ghidorah",
    tagline: "FRC 7157’s 2025 Robot.",
    description:
      "Ghidorah was designed for the 2025 FIRST Robotics Competition: REEFSCAPE. The goal was to place PVC pipes and large yoga balls onto tall poles and nets. The subsystems on the robot were tuned using PID control so the driver could score game pieces with ease. When the driver wasn’t controlling the robot, Ghidorah was able to “auto-align” to scoring positions with the help of computer vision, which allowed the robot to localize itself on the field.",
    source: "open",
    tags: ["Robotics", "Computer Vision", "Java"],
    inlineTags: ["PID"],
    links: [
      {
        label: "View Source on GitHub",
        href: "https://github.com/Mubotics7157/2025-Onseason",
      },
    ],
    image: "/robot-demo.jpg",
    video: "/robot-demo.mp4",
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    tagline: "This Very Website!!!",
    description:
      "A single-page site built with the App Router and statically prerendered. No CMS, no database, no UI library. The waveform and the typing headline are both hand-rolled: the waveform is summed sine curves in inline SVG that loop seamlessly on pure CSS, and the headline is a small piece of JavaScript that types and deletes each phrase. My résumé is embedded as a PDF you can read without leaving the page, and the sticky header jumps straight to any section.",
    source: "open",
    tags: ["TypeScript", "JavaScript", "CSS"],
    links: [
      {
        label: "View Source on GitHub",
        href: "https://github.com/JacobQuion/Personal-Website",
      },
    ],
    image: "/personal-website-demo.jpg",
    video: "/personal-website-demo.mp4",
  },
];
