import { Instagram } from "lucide-react";

import { GAnchor, Reveal } from "@/components/bits";
import { BrushStroke, CameraSilhouette, CitySilhouette, GrainOverlay } from "@/components/Decor";
import { site, ui } from "@/data/content";
import { useLang } from "@/lib/lang";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 9.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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
              <div>
                <dt className="eyebrow text-white/45">Phone</dt>
                <dd className="mt-1 font-mono text-sm text-white">{site.phones[0]}</dd>
              </div>
              <div>
                <dt className="eyebrow text-white/45">WhatsApp</dt>
                <dd className="mt-1 text-sm text-white">
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow">
                    +62 856 4375 2684
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <GAnchor
                href={site.whatsappUrl}
                tone="yellow"
                icon={<WhatsAppIcon className="size-4 shrink-0" />}
              >
                {t(ui.btn.letsWorkTogether)}
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
