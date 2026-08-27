import { createFileRoute } from "@tanstack/react-router";

import { AboutBlock } from "@/components/AboutBlock";
import { GLink } from "@/components/bits";
import { ContactCTA } from "@/components/ContactCTA";
import { BlueprintGrid } from "@/components/Decor";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ReelRail } from "@/components/ReelRail";
import { Section } from "@/components/Section";
import { WorkList } from "@/components/WorkList";
import { fnbReels, ui } from "@/data/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gianny Steven Aipassa — Creative Portfolio" },
      {
        name: "description",
        content:
          "Videographer, video editor and photographer Gianny Steven Aipassa. Films, documentaries, commercials, social media activation and editorial photography.",
      },
      { property: "og:title", content: "Gianny Steven Aipassa — Creative Portfolio" },
      {
        property: "og:description",
        content: "I create visual stories, not just videos. Films, commercials and photography.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();

  return (
    <>
      <Hero />

      <Section
        id="work"
        tone="light"
        eyebrow={t(ui.tagline)}
        title={t(ui.sections.selectedWork)}
        note={t(ui.sections.selectedWorkNote)}
        ghost="SELECTED WORK"
      >
        <WorkList limit={3} />
        <div className="mt-12">
          <GLink to="/work" tone="light">
            {t(ui.btn.viewAll)}
          </GLink>
        </div>
      </Section>

      <Section tone="soft" className="halftone">
        <AboutBlock />
      </Section>

      <Section
        tone="light"
        eyebrow={t(ui.sections.photography)}
        title={t(ui.sections.photography)}
        note={t(ui.sections.photographyNote)}
        ghost="PHOTOGRAPHY"
      >
        <PhotoGallery limit={12} />
        <div className="mt-10">
          <GLink to="/photography" tone="light">
            {t(ui.btn.viewAll)}
          </GLink>
        </div>
      </Section>

      <Section id="showreel" tone="dark" eyebrow={t(ui.sections.workExperience)} title={t(ui.sections.fnbReels)}>
        <ReelRail items={fnbReels.slice(0, 8)} />
        <div className="mt-10">
          <GLink to="/experience">{t(ui.btn.viewAll)}</GLink>
        </div>
      </Section>

      <Section tone="soft" eyebrow={t(ui.sections.experience)} title={t(ui.sections.experience)} ghost="EXPERIENCE">
        <BlueprintGrid />
        <ExperienceTimeline />
      </Section>

      <ContactCTA />
    </>
  );
}
