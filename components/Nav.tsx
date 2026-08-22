import Container from "@/components/Container";
import { site } from "@/content/site";

/** Same-page jumps. Targets carry scroll-mt to clear this sticky header. */
const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-bg/85 backdrop-blur-md">
      <Container size="wide">
        <nav className="flex h-14 items-center justify-between gap-2 sm:gap-4">
          {/* `#top` is a spec-defined fragment: with no element of that id, the
              browser scrolls to the top of the document. */}
          <a
            href="#top"
            className="shrink-0 whitespace-nowrap rounded px-1 text-[13px] font-medium text-fg transition-colors hover:text-accent sm:text-sm"
          >
            {site.name}
          </a>

          <ul className="flex items-center gap-1 text-[13px] sm:text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded px-1.5 py-1.5 text-muted transition-colors hover:bg-surface hover:text-accent sm:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
