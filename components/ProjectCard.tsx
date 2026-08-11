import Image from "next/image";
import Link from "next/link";
import TagList from "@/components/TagList";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-lg border border-outline bg-card transition-colors hover:border-neutral-600">
      {/* Title row */}
      <header className="flex items-center justify-between gap-3 px-4 py-3">
        <h3 className="text-sm font-medium text-fg">{project.title}</h3>
        <SourceBadge source={project.source} />
      </header>

      {/* Thumbnail */}
      <div className="relative mx-4 aspect-[16/10] overflow-hidden rounded border border-outline bg-[#0f1113]">
        {project.image ? (
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
      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm text-fg">{project.tagline}</p>
        <p className="mt-3 text-[13px] leading-6 text-muted">
          {project.description}
        </p>

        <div className="mt-5">
          <TagList tags={project.tags} />
        </div>

        {/* Push links and note to the bottom so cards line up in the grid. */}
        <div className="mt-auto">
          {project.links && project.links.length > 0 && (
            <ul className="mt-5 space-y-2">
              {project.links.map((link, i) => (
                <li key={link.href}>
                  <ProjectLink href={link.href} primary={i === 0}>
                    {link.label}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          )}

          {project.note && (
            <p className="mt-5 text-[13px] leading-6 text-faint">
              {project.note}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectLink({
  href,
  primary,
  children,
}: {
  href: string;
  primary: boolean;
  children: React.ReactNode;
}) {
  const className = primary
    ? "inline-block rounded border border-accent/40 px-3 py-1.5 text-[13px] text-accent transition-colors hover:border-accent hover:bg-accent/10"
    : "text-[13px] text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg";

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
