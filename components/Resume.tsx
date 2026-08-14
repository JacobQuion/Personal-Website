import Container from "@/components/Container";
import { site } from "@/content/site";

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-14 border-t border-line">
      <Container size="wide" className="py-16 sm:py-20">
        <h2 className="mb-6 border-b border-line pb-4 text-xs uppercase tracking-[0.18em] text-faint">
          Resume
        </h2>

        {/* No `toolbar=0`: the browser's own PDF chrome (page count, zoom,
            download, print) is the point of the embed. The frame is a tall
            reading window rather than one letter-sized page, so the viewer
            scrolls through all pages in place. */}
        <div className="overflow-hidden rounded-lg border border-outline bg-card">
          <object
            data={`${site.resume}#view=FitH`}
            type="application/pdf"
            aria-label="Jacob Quion’s résumé"
            className="h-[85vh] min-h-[520px] w-full"
          >
            {/* Shown when the browser can't render a PDF inline (most mobile). */}
            <div className="flex h-[85vh] min-h-[520px] w-full flex-col items-center justify-center gap-4 bg-bg px-6 text-center">
              <p className="text-sm text-muted">
                Your browser can’t display PDFs inline.
              </p>
              <a
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-accent/40 px-4 py-2 text-sm text-accent transition-colors hover:border-accent hover:bg-accent/10"
              >
                Open the résumé
              </a>
            </div>
          </object>
        </div>
      </Container>
    </section>
  );
}
