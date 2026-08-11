import Typewriter from "@/components/Typewriter";
import Waveform from "@/components/Waveform";
import { site } from "@/content/site";

/** Splits the intro into plain text, `*` marks, and [bracketed] links. */
function renderIntro(text: string, href: string) {
  return text
    .split(/(\[[^\]]+\]|\*)/g)
    .filter(Boolean)
    .map((token, i) => {
      if (token === "*") {
        return (
          <sup key={i} className="text-accent">
            *
          </sup>
        );
      }

      if (token.startsWith("[") && token.endsWith("]")) {
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {token.slice(1, -1)}
          </a>
        );
      }

      return <span key={i}>{token}</span>;
    });
}

export default function Hero() {
  return (
    <section
      id="bio"
      className="relative isolate scroll-mt-14 overflow-hidden border-b border-line"
    >
      <Waveform />

      <div className="rise relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <h1 className="text-2xl font-medium tracking-tight sm:text-4xl">
          <Typewriter phrases={site.headlines} />
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          {renderIntro(site.intro, site.introLink)}
        </p>
      </div>
    </section>
  );
}
