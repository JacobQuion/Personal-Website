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
            download, print) is the point of the embed. On phones the frame
            takes US Letter proportions so a one-page résumé fills it exactly
            instead of floating in a tall box; from sm up it's a tall reading
            window that scrolls if the document ever grows past one page. */}
        <div className="overflow-hidden rounded-lg border border-outline bg-card">
          <object
            data={`${site.resume}#view=FitH`}
            type="application/pdf"
            aria-label="Jacob Quion’s résumé"
            className="aspect-[8.5/11] w-full sm:aspect-auto sm:h-[85vh] sm:min-h-[520px]"
          >
            {/* Shown when the browser can't render a PDF inline (most mobile). */}
            <div className="flex aspect-[8.5/11] w-full flex-col items-center justify-center gap-4 bg-bg px-6 text-center sm:aspect-auto sm:h-[85vh] sm:min-h-[520px]">
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
