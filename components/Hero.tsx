import PixelField from "@/components/PixelField";
import Typewriter from "@/components/Typewriter";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="bio"
      className="relative isolate scroll-mt-14 overflow-hidden border-b border-line"
    >
      <PixelField />

      <div className="rise relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <h1 className="text-2xl font-medium tracking-tight sm:text-4xl">
          <Typewriter phrases={site.headlines} />
        </h1>
      </div>
    </section>
  );
}
