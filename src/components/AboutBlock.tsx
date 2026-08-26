import { Reveal } from "@/components/bits";
import { BrushStroke, CameraSilhouette } from "@/components/Decor";
import { site, ui } from "@/data/content";
import { img } from "@/lib/img";
import { useLang } from "@/lib/lang";

export function AboutBlock() {
  const { t } = useLang();
  const portrait = img("portrait");

  return (
    <div className="relative isolate overflow-hidden">
      <CameraSilhouette className="pointer-events-none absolute -left-20 -bottom-16 w-[420px] opacity-[0.05]" />
      <span
        aria-hidden="true"
        className="ghost-type pointer-events-none absolute -top-8 right-0 hidden text-[12vw] leading-none lg:block"
      >
        ABOUT
      </span>

      <div className="relative grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal className="relative">
          <BrushStroke className="absolute -right-4 -top-5 w-36 rotate-6 opacity-80" />
          <figure className="overflow-hidden rounded-xl border border-navy/10">
            <img
              src={portrait.url}
              alt="Portrait of Gianny Steven Aipassa"
              width={portrait.w}
              height={portrait.h}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <p className="eyebrow text-blue">{t(ui.sections.about)}</p>
          <h2 className="display-lg mt-4 text-navy">
            {t(ui.sections.about)}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">
            {t(ui.about.body)}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="glass-light rounded-xl p-5">
              <p className="eyebrow text-blue">{t(ui.sections.education)}</p>
              <p className="display-md mt-3 text-lg text-navy sm:text-xl">
                {ui.education.school}
              </p>
              <p className="mt-1 font-mono text-[0.68rem] tracking-[0.2em] text-yellow">
                {ui.education.period}
              </p>
              <p className="mt-2 text-sm text-ink/70">{t(ui.education.degree)}</p>
            </div>
            <div className="glass-light rounded-xl p-5">
              <p className="eyebrow text-blue">{t(ui.nav.contact)}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block text-sm text-navy underline decoration-yellow decoration-2 underline-offset-4"
              >
                {site.email}
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-sm text-navy underline decoration-yellow decoration-2 underline-offset-4"
              >
                {site.instagram}
              </a>
              {site.phones.map((p) => (
                <p key={p} className="mt-2 font-mono text-xs text-ink/60">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
