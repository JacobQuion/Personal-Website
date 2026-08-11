import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-4 py-24">
      <p className="text-xs uppercase tracking-[0.18em] text-faint">404</p>
      <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
        page not found
      </h1>
      <p className="text-sm text-muted">
        That page doesn&apos;t exist — or it moved.
      </p>
      <Link
        href="/"
        className="mt-2 rounded border border-accent/40 px-4 py-2 text-sm text-accent transition-colors hover:border-accent hover:bg-accent/10"
      >
        back home
      </Link>
    </Container>
  );
}
