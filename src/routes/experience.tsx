import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/bits";
import { ContactCTA } from "@/components/ContactCTA";
import { BlueprintGrid } from "@/components/Decor";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ReelRail } from "@/components/ReelRail";
import { Section } from "@/components/Section";
import { fnbReels, kata, msco, mscoGallery, mscoPhones, propertyReels, ui, yummy, yummyGallery } from "@/data/content";
import { img } from "@/lib/img";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Work — Gianny Steven Aipassa" },
      {
        name: "description",
        content:
          "Experience of Gianny Steven Aipassa: Freelance videographer, Bigstone Creative, Yummy IDN Media and Kata Creative — plus F&B and property reels.",
      },
      { property: "og:title", content: "Experience & Work — Gianny Steven Aipassa" },
      {
        property: "og:description",
        content: "Freelance, Bigstone Creative, Yummy IDN Media and Kata Creative.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const { t, tl } = useLang();
  const yummyLogo = img("yummy-logo");
  const yummySet = img("yummy-set");

  return (
    <>
      <div className="navy-cinema grain relative pt-28 pb-14 sm:pt-36">
        <BlueprintGrid dark />
        <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8">
          <p className="eyebrow text-yellow">{t(ui.tagline)}</p>
          <h1 className="display-xl mt-4 text-white">{t(ui.sections.experience)}</h1>
        </div>
      </div>

      <Section tone="soft" ghost="TIMELINE">
        <ExperienceTimeline />
      </Section>

      {/* Yummy IDN Media */}
      <Section
        tone="light"
        eyebrow={t(ui.sections.workExperience)}
        title="Yummy IDN Media"
        note={t(yummy.about)}
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="glass-light rounded-xl p-6">
              <img
                src={yummyLogo.url}
                alt="Yummy IDN Media logo"
                width={yummyLogo.w}
                height={yummyLogo.h}
                loading="lazy"
                className="h-12 w-auto object-contain"
              />
              <p className="eyebrow mt-6 text-blue">Creative Associate</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{t(yummy.role)}</p>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <figure className="overflow-hidden rounded-xl">
              <img
                src={yummySet.url}
                alt="Cooking video production set at Yummy IDN Media"
                width={yummySet.w}
                height={yummySet.h}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>

        <div className="mt-6 columns-2 gap-3 sm:gap-4 md:columns-3 xl:columns-4">
          {yummyGallery.map((k, i) => {
            const m = img(k);
            return (
              <img
                key={k}
                src={m.url}
                alt={`Yummy IDN Media production still ${i + 1}`}
                width={m.w}
                height={m.h}
                loading="lazy"
                decoding="async"
                className="mb-3 w-full rounded-md sm:mb-4"
              />
            );
          })}
        </div>
      </Section>

      {/* Kata Creative + clients */}
      <Section tone="dark" eyebrow="Kata Creative" title={t(ui.sections.clients)} note={t(kata.about)}>
        <Reveal>
          <p className="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
            {t(kata.role)}
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {kata.clients.map((c) => (
            <li key={c} className="glass rounded-xl px-5 py-4 text-sm text-white/85">
              {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* F&B reels */}
      <Section tone="light" eyebrow={t(ui.sections.workExperience)} title={t(ui.sections.fnbReels)}>
        <ReelRail items={fnbReels} tone="light" />
      </Section>

      {/* Property reels */}
      <Section tone="dark" eyebrow={t(ui.sections.workExperience)} title={t(ui.sections.propertyReels)}>
        <ReelRail items={propertyReels} />
      </Section>

      {/* MSCO social media activation */}
      <Section
        tone="soft"
        eyebrow={t(ui.sections.socialMedia)}
        title={msco.title}
        note={t(msco.about)}
        ghost="SOCIAL"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="glass-light rounded-xl p-6">
              <p className="eyebrow text-blue">{t(ui.labels.client)}</p>
              <p className="mt-2 text-sm text-navy">{msco.client}</p>
              <p className="mt-4 font-mono text-xs text-blue">{msco.instagram}</p>
              <p className="eyebrow mt-6 text-blue">{t(ui.labels.scopeOfWork)}</p>
              <ul className="mt-3 space-y-2">
                {tl(msco.scope).map((s: string) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-ink/75">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-yellow" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink/70">{t(msco.subtitle)}</p>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {mscoPhones.map((k, i) => {
                const m = img(k);
                return (
                  <Reveal key={k} delay={i * 80}>
                    <div className="glass-light rounded-[1.6rem] p-1.5">
                      <img
                        src={m.url}
                        alt={`MSCO Deodorant.id Instagram feed ${i + 1}`}
                        width={m.w}
                        height={m.h}
                        loading="lazy"
                        className="w-full rounded-[1.3rem] object-cover"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-4 columns-2 gap-3 sm:columns-3 sm:gap-4">
              {mscoGallery.map((k, i) => {
                const m = img(k);
                return (
                  <img
                    key={k}
                    src={m.url}
                    alt={`MSCO Deodorant.id campaign asset ${i + 1}`}
                    width={m.w}
                    height={m.h}
                    loading="lazy"
                    decoding="async"
                    className="mb-3 w-full rounded-md sm:mb-4"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
