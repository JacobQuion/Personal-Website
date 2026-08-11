/**
 * Tag colors. Known technologies get a hand-picked hue; anything else falls
 * back to a hash of the label, so a new tag always gets the same color
 * without needing an entry here.
 *
 * All values sit around 65-75% lightness to stay legible on the dark bg.
 */

const palette = [
  "#e0975a", // amber
  "#5fbf8e", // green
  "#6ba6e0", // blue
  "#c98ae0", // violet
  "#e07a7a", // red
  "#5fc4c4", // teal
  "#d9b45f", // gold
  "#8f9ae8", // indigo
  "#e089b4", // pink
  "#7fc45f", // lime
];

const overrides: Record<string, string> = {
  rust: "#e0975a",
  go: "#5fc4c4",
  python: "#d9b45f",
  typescript: "#6ba6e0",
  javascript: "#d9b45f",
  react: "#5fc4c4",
  "next.js": "#c9d1cd",
  tailwind: "#5cbfe8",
  svelte: "#e07a5a",
  flutter: "#6bc0e0",
  lean: "#7fc45f",
  prolog: "#e0975a",
  postgres: "#6ba6e0",
  postgresql: "#6ba6e0",
  kafka: "#d98a4a",
  kurrentdb: "#e089b4",
  redis: "#e07a7a",
  k8s: "#8f9ae8",
  kubernetes: "#8f9ae8",
  docker: "#6ba6e0",
  "nats jetstream": "#5fbf8e",
  nats: "#5fbf8e",
  api: "#5fc4c4",
  design: "#c98ae0",
  tooling: "#92a49d",
};

export function tagColor(tag: string): string {
  const key = tag.toLowerCase().trim();
  if (overrides[key]) return overrides[key];

  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return palette[hash % palette.length];
}
