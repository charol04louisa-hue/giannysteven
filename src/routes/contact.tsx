import { createFileRoute } from "@tanstack/react-router";

import { ContactCTA } from "@/components/ContactCTA";
import { site, ui } from "@/data/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Gianny Steven Aipassa — Let's Work Together" },
      {
        name: "description",
        content:
          "Get in touch with Gianny Steven Aipassa for videography, video editing and photography projects. Email giany02steven@gmail.com or Instagram @gianyaipassa07.",
      },
      { property: "og:title", content: "Contact Gianny Steven Aipassa" },
      {
        property: "og:description",
        content: "Videography, video editing and photography — let's work together.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <>
      <div className="navy-cinema grain pt-28 pb-6 sm:pt-36">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
          <p className="eyebrow text-yellow">{t(ui.nav.contact)}</p>
          <h1 className="display-lg mt-4 text-white">{t(ui.tagline)}</h1>
          <p className="mt-4 font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
            {site.fullName}
          </p>
        </div>
      </div>
      <ContactCTA />
    </>
  );
}
