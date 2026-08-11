import { icons } from "@/components/Icons";
import { activeSocials, site } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-14 border-t border-line">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        {/* Matches the hero headline: same size, weight, and tracking. */}
        <h2 className="text-2xl font-medium tracking-tight sm:text-4xl">
          Contact
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
          {site.contactBlurb}
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {activeSocials.map((social) => {
            const Icon = icons[social.icon];
            const isMail = social.href.startsWith("mailto:");
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  {...(isMail ? {} : { target: "_blank", rel: "noreferrer" })}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-transparent text-muted transition-colors hover:border-line hover:bg-surface hover:text-accent"
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
