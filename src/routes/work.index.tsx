import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/Section";
import { WorkList } from "@/components/WorkList";
import { ContactCTA } from "@/components/ContactCTA";
import { ui } from "@/data/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Gianny Steven Aipassa" },
      {
        name: "description",
        content:
          "Film, documentary and commercial video projects by Gianny Steven Aipassa: Katarsis, Rahasia Tak Abadi, HIV Tanpa Diskriminasi, Blankenheim and more.",
      },
      { property: "og:title", content: "Selected Work — Gianny Steven Aipassa" },
      {
        property: "og:description",
        content: "Film, documentary and commercial video projects, shot and edited by Gianny Steven.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const { t } = useLang();
  return (
    <>
      <div className="navy-cinema grain pt-28 pb-14 sm:pt-36">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
          <p className="eyebrow text-yellow">{t(ui.tagline)}</p>
          <h1 className="display-xl mt-4 text-white">{t(ui.sections.selectedWork)}</h1>
          <p className="mt-4 max-w-2xl text-base text-white/65">
            {t(ui.sections.selectedWorkNote)}
          </p>
        </div>
      </div>

      <Section tone="light" ghost="WORK">
        <WorkList />
      </Section>

      <ContactCTA />
    </>
  );
}
