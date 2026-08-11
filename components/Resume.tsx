import Container from "@/components/Container";
import { site } from "@/content/site";

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-14 border-t border-line">
      <Container size="wide" className="py-16 sm:py-20">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-xs uppercase tracking-[0.18em] text-faint">
            Resume
          </h2>

          <div className="flex items-center gap-4 text-sm">
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              open in new tab →
            </a>
            <a
              href={site.resume}
              download
              className="rounded border border-accent/40 px-3 py-1.5 text-accent transition-colors hover:border-accent hover:bg-accent/10"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* aspect-[8.5/11] keeps the frame at US Letter proportions so the page
            is never letterboxed or cut off as the column width changes. */}
        <div className="overflow-hidden rounded-lg border border-outline bg-card p-2">
          <object
            data={`${site.resume}#view=FitH&toolbar=0`}
            type="application/pdf"
            aria-label="Jacob Quion’s résumé"
            className="aspect-[8.5/11] w-full rounded"
          >
            {/* Shown when the browser can't render a PDF inline (most mobile). */}
            <div className="flex aspect-[8.5/11] w-full flex-col items-center justify-center gap-4 rounded bg-bg px-6 text-center">
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
