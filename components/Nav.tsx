import Container from "@/components/Container";

/** Same-page jumps. Targets carry scroll-mt to clear this sticky header. */
const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-bg/85 backdrop-blur-md">
      <Container size="wide">
        <nav className="flex h-14 items-center justify-end">
          <ul className="flex items-center gap-1 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded px-3 py-1.5 text-muted transition-colors hover:bg-surface hover:text-accent"
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
