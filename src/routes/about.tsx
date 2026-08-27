import { createFileRoute } from "@tanstack/react-router";

import { AboutBlock } from "@/components/AboutBlock";
import { ContactCTA } from "@/components/ContactCTA";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Section } from "@/components/Section";
import { ui } from "@/data/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Gianny Steven Aipassa — Video Editor & Videographer" },
      {
        name: "description",
        content:
          "Gianny Steven Aipassa is a video editor and videographer with several years of experience in creative campaign concepts, videography, editing and production.",
      },
      { property: "og:title", content: "About Gianny Steven Aipassa" },
      {
        property: "og:description",
        content: "Video editor and videographer building creative campaigns and visual stories.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <div className="navy-cinema grain pt-28 pb-14 sm:pt-36">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
          <p className="eyebrow text-yellow">{t(ui.tagline)}</p>
          <h1 className="display-xl mt-4 text-white">{t(ui.sections.about)}</h1>
          <p className="mt-4 max-w-2xl text-base text-white/65">{t(ui.roles)}</p>
        </div>
      </div>

      <Section tone="light">
        <AboutBlock />
      </Section>

      <Section tone="soft" eyebrow={t(ui.sections.experience)} title={t(ui.sections.experience)} ghost="TIMELINE">
        <ExperienceTimeline />
      </Section>

      <ContactCTA />
    </>
  );
}
