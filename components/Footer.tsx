import Container from "@/components/Container";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <Container size="wide">
        {/* Links live in the contact section; keep the footer to one line. */}
        <p className="py-8 text-center text-sm text-faint">
          © {site.name} {new Date().getFullYear()}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
