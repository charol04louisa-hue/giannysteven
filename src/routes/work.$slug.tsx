import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useState } from "react";

import { GLink, Reveal } from "@/components/bits";
import { ContactCTA } from "@/components/ContactCTA";
import { FilmMarks, GrainOverlay } from "@/components/Decor";
import { Lightbox } from "@/components/Lightbox";
import { projects, ui } from "@/data/content";
import { img } from "@/lib/img";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const index = projects.findIndex((p) => p.slug === params.slug);
    if (index < 0) throw notFound();
    return { index };
  },
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    const title = p ? `${p.title} — Gianny Steven Aipassa` : "Project — Gianny Steven Aipassa";
    const description = p ? p.intro.en : "Project case study by Gianny Steven Aipassa.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(p ? [{ property: "og:image", content: img(p.hero).url }] : []),
        ...(p ? [{ name: "twitter:image", content: img(p.hero).url }] : []),
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { t } = useLang();
  const { index } = Route.useLoaderData();
  const p = projects[index]!;
  const prev = projects[(index - 1 + projects.length) % projects.length]!;
  const next = projects[(index + 1) % projects.length]!;
  const hero = img(p.hero);
  const [open, setOpen] = useState<number | null>(null);

  const galleryItems = p.gallery.map((k) => {
    const m = img(k);
    return { url: m.url, w: m.w, h: m.h, alt: `${p.title} — still` };
  });

  const meta: { label: string; value: string }[] = [
    ...(p.year ? [{ label: t(ui.labels.year), value: p.year }] : []),
    { label: t(ui.labels.category), value: t(p.category) },
    ...(p.client ? [{ label: t(ui.labels.client), value: p.client }] : []),
    ...(p.production ? [{ label: t(ui.labels.production), value: p.production }] : []),
    { label: t(ui.labels.role), value: t(p.role) },
  ];

  return (
    <>
      <section className="navy-cinema relative isolate overflow-hidden pt-28 pb-14 sm:pt-36">
        <GrainOverlay />
        <FilmMarks className="pointer-events-none absolute inset-6 hidden lg:block" />
        <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8">
          <Link
            to="/work"
            className="eyebrow inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {t(ui.sections.selectedWork)}
          </Link>

          <p className="mt-8 font-mono text-sm tracking-[0.3em] text-yellow">{p.number}</p>
          <h1 className="display-xl mt-3 text-white">{p.title}</h1>
          {p.subtitle && <p className="script mt-2 text-2xl text-white/75">{t(p.subtitle)}</p>}

          <dl className="mt-10 grid gap-6 border-t border-white/12 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="eyebrow text-white/40">{m.label}</dt>
                <dd className="mt-2 text-sm text-white sm:text-base">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <figure className="relative mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="-mt-8 overflow-hidden rounded-xl border border-navy/10 shadow-[0_50px_90px_-50px_oklch(0.2_0.05_255)]">
          <img
            src={hero.url}
            alt={`${p.title} — key visual`}
            width={hero.w}
            height={hero.h}
            className="aspect-[16/10] w-full object-cover sm:aspect-[16/9]"
          />
        </div>
      </figure>

      {/* Showreel placeholder — no video URL exists in the source portfolio */}
      <section id="showreel" className="mx-auto max-w-[1600px] px-5 pt-14 sm:px-8">
        <div className="glass-blue relative flex flex-col items-center justify-center gap-4 rounded-2xl px-6 py-14 text-center">
          <span className="glass grid size-16 place-items-center rounded-full text-white">
            <Play className="size-6" aria-hidden="true" />
          </span>
          <p className="display-md text-white">{t(ui.btn.playVideo)}</p>
          <p className="max-w-md text-sm text-white/60">{t(ui.labels.noVideoLink)}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-blue">{t(ui.labels.project)}</p>
            <p className="display-md mt-4 text-navy">{t(p.intro)}</p>
          </div>
          <div className="space-y-5 lg:col-span-7 lg:col-start-6">
            {t(p.body).map((para) => (
              <p key={para} className="text-base leading-relaxed text-ink/75 sm:text-lg">
                {para}
              </p>
            ))}

            {p.episodes && (
              <div className="mt-8 space-y-4">
                <p className="eyebrow text-blue">{t(ui.labels.episodes)}</p>
                {p.episodes.map((ep) => (
                  <div key={ep.title} className="glass-light rounded-xl p-5">
                    <h3 className="display-md text-lg text-navy">{ep.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{t(ep.text)}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {galleryItems.length > 0 && (
        <section className="bg-soft py-16 sm:py-20">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
            <p className="eyebrow text-blue">{t(ui.labels.gallery)}</p>
            <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {p.gallery.map((k, i) => {
                const m = img(k);
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setOpen(i)}
                    className="group mb-4 block w-full overflow-hidden rounded-lg"
                    aria-label={`${p.title} — open image ${i + 1}`}
                  >
                    <img
                      src={m.url}
                      alt={`${p.title} — still ${i + 1}`}
                      width={m.w}
                      height={m.h}
                      loading="lazy"
                      decoding="async"
                      className="w-full transition-transform duration-[900ms] group-hover:scale-[1.05]"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8">
        <Reveal className="grid gap-4 sm:grid-cols-2">
          <Link
            to="/work/$slug"
            params={{ slug: prev.slug }}
            className="glass-light group rounded-xl p-6"
          >
            <span className="eyebrow flex items-center gap-2 text-blue">
              <ArrowLeft className="size-4" aria-hidden="true" />
              {t(ui.btn.prevProject)}
            </span>
            <span className="display-md mt-3 block text-navy group-hover:text-blue-bright">
              {prev.title}
            </span>
          </Link>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="glass-light group rounded-xl p-6 sm:text-right"
          >
            <span className="eyebrow flex items-center gap-2 text-blue sm:justify-end">
              {t(ui.btn.nextProject)}
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
            <span className="display-md mt-3 block text-navy group-hover:text-blue-bright">
              {next.title}
            </span>
          </Link>
        </Reveal>

        <div className="mt-10">
          <GLink to="/work" tone="light">
            {t(ui.sections.selectedWork)}
          </GLink>
        </div>
      </section>

      <ContactCTA />

      {open !== null && (
        <Lightbox
          items={galleryItems}
          index={open}
          onIndexChange={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
