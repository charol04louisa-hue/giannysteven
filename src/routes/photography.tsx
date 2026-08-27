import { createFileRoute } from "@tanstack/react-router";

import { ContactCTA } from "@/components/ContactCTA";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Section } from "@/components/Section";
import { ui } from "@/data/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Photography — Gianny Steven Aipassa" },
      {
        name: "description",
        content:
          "Street, F&B and architectural photography by Gianny Steven Aipassa — an editorial gallery of everyday moments, food styling and interiors.",
      },
      { property: "og:title", content: "Photography — Gianny Steven Aipassa" },
      {
        property: "og:description",
        content: "Street, F&B and architectural photography by Gianny Steven Aipassa.",
      },
    ],
  }),
  component: PhotographyPage,
});

function PhotographyPage() {
  const { t } = useLang();
  return (
    <>
      <div className="navy-cinema grain pt-28 pb-14 sm:pt-36">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
          <p className="eyebrow text-yellow">{t(ui.tagline)}</p>
          <h1 className="display-xl mt-4 text-white">{t(ui.sections.photography)}</h1>
          <p className="mt-4 max-w-2xl text-base text-white/65">
            {t(ui.sections.photographyNote)}
          </p>
        </div>
      </div>

      <Section tone="light" ghost="PHOTOGRAPHY" className="halftone">
        <PhotoGallery />
      </Section>

      <ContactCTA />
    </>
  );
}
