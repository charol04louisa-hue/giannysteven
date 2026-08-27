import { Instagram, Mail } from "lucide-react";

import { GAnchor, Reveal } from "@/components/bits";
import { BrushStroke, CameraSilhouette, CitySilhouette, GrainOverlay } from "@/components/Decor";
import { site, ui } from "@/data/content";
import { useLang } from "@/lib/lang";

export function ContactCTA() {
  const { t } = useLang();

  return (
    <section className="navy-cinema relative isolate overflow-hidden py-20 sm:py-28">
      <GrainOverlay />
      <CitySilhouette className="pointer-events-none absolute bottom-0 left-0 w-full opacity-25" />
      <CameraSilhouette className="pointer-events-none absolute -right-16 top-6 w-[420px] opacity-[0.07]" />
      <BrushStroke className="pointer-events-none absolute left-1/2 top-10 w-64 -translate-x-1/2 rotate-[-6deg] opacity-60" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-yellow">{t(ui.nav.contact)}</p>
          <h2 className="display-xl mt-4 max-w-4xl text-white">{t(ui.sections.contact)}</h2>
        </Reveal>

        <Reveal delay={120} className="mt-10 max-w-2xl">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="text-base text-white/70">{t(ui.heroLine)}</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="eyebrow text-white/45">Email</dt>
                <dd className="mt-1 text-sm text-white">{site.email}</dd>
              </div>
              <div>
                <dt className="eyebrow text-white/45">Instagram</dt>
                <dd className="mt-1 text-sm text-white">{site.instagram}</dd>
              </div>
              {site.phones.map((p, i) => (
                <div key={p}>
                  <dt className="eyebrow text-white/45">Phone {i + 1}</dt>
                  <dd className="mt-1 font-mono text-sm text-white">{p}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <GAnchor
                href={`mailto:${site.email}`}
                tone="yellow"
                icon={<Mail className="size-4 shrink-0" aria-hidden="true" />}
              >
                {t(ui.btn.emailMe)}
              </GAnchor>
              <GAnchor
                href={site.instagramUrl}
                icon={<Instagram className="size-4 shrink-0" aria-hidden="true" />}
              >
                Instagram
              </GAnchor>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
