import Image from "next/image";
import Link from "next/link";
import ProjectDescription from "@/components/ProjectDescription";
import TagList from "@/components/TagList";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  // min-w-0: a grid item's automatic minimum is its min-content width, which
  // WebKit derives from the video inside — that blows the track out past the
  // viewport and never shrinks back after a rotation.
  return (
    <article className="group flex min-w-0 flex-col rounded-lg border border-outline bg-card transition-colors hover:border-neutral-600">
      {/* Title row */}
      <header className="flex items-center justify-between gap-3 px-3.5 py-3 sm:px-4">
        <h3 className="text-sm font-medium text-fg">{project.title}</h3>
        <SourceBadge source={project.source} />
      </header>

      {/* Thumbnail */}
      {/* Shallower crop on phones, where a 16/10 block is a third of the card. */}
      <div className="relative mx-3.5 aspect-[16/9] overflow-hidden rounded border border-outline bg-[#0f1113] sm:mx-4 sm:aspect-[16/10]">
        {project.video ? (
          // Decorative: muted, controlless, and loops like a GIF, so it carries
          // no information the title and description don't already give.
          // `absolute inset-0` rather than `h-full`: iOS Safari won't resolve a
          // percentage height against an aspect-ratio parent, and the video
          // then lays out at its intrinsic 960x600 and breaks the card.
          <video
            src={project.video}
            poster={project.image}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 340px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <Placeholder />
        )}
      </div>

      {/* Body */}
      <div className="flex min-w-0 flex-1 flex-col p-3.5 sm:p-4">
        <p className="text-sm text-fg">{project.tagline}</p>
        {/* Clamped on phones only, with a toggle: unclamped, a long description
            makes one card taller than the viewport. Full text at sm and up. */}
        <ProjectDescription text={project.description} />

        {/* Tags, links, and note travel to the bottom as one group, so they
            stay together instead of the tags hugging the description. */}
        <div className="mt-auto pt-4 sm:pt-6">
          <TagList tags={project.tags} />

          {project.links && project.links.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <ProjectLink href={link.href} tone={link.tone ?? "accent"}>
                    {link.label}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          )}

          {project.note && (
            <p className="mt-3 text-[13px] leading-6 text-faint">
              {project.note}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

const tones = {
  accent:
    "border-accent/40 text-accent hover:border-accent hover:bg-accent/10",
  red: "border-red/40 text-red hover:border-red hover:bg-red/10",
};

function ProjectLink({
  href,
  tone,
  children,
}: {
  href: string;
  tone: keyof typeof tones;
  children: React.ReactNode;
}) {
  const className = `inline-block rounded border px-3 py-1.5 text-[13px] transition-colors ${tones[tone]}`;

  // Internal routes get client-side navigation; external ones open in a tab.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function SourceBadge({ source }: { source: Project["source"] }) {
  const open = source === "open";
  return (
    <span
      className={`shrink-0 rounded border px-2 py-0.5 text-[11px] ${
        open
          ? "border-accent/30 bg-accent/10 text-accent"
          : "border-outline text-faint"
      }`}
    >
      {open ? "open source" : "closed source"}
    </span>
  );
}

/** Empty-state thumbnail: a faint grid with a diagonal wash. */
function Placeholder() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
      style={{
        backgroundImage:
          "linear-gradient(to right, #23262a 1px, transparent 1px), linear-gradient(to bottom, #23262a 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent" />
    </div>
  );
}
