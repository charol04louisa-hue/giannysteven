import { Play } from "lucide-react";

import { GLink, GButton } from "@/components/bits";
import { BrushStroke, CameraSilhouette, FilmMarks, GrainOverlay } from "@/components/Decor";
import { site, ui } from "@/data/content";
import { img } from "@/lib/img";
import { useLang } from "@/lib/lang";

export function Hero() {
  const { t } = useLang();
  const m = img("hero-filming");

  return (
    <section className="navy-cinema relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <GrainOverlay />
      <CameraSilhouette className="pointer-events-none absolute -right-10 bottom-0 w-[520px] opacity-[0.07] lg:w-[720px]" />
      <FilmMarks className="pointer-events-none absolute inset-6 hidden lg:block" />
      <span
        aria-hidden="true"
        className="ghost-type-light pointer-events-none absolute -top-4 left-0 hidden text-[16vw] leading-none whitespace-nowrap lg:block"
      >
        VISUAL STORYTELLER
      </span>

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="min-w-0">
          <p className="eyebrow flex items-center gap-3 text-yellow">
            <span aria-hidden="true" className="h-px w-10 bg-yellow" />
            {t(ui.tagline)}
          </p>

          <h1 className="mt-5">
            <span className="display-xl block text-white">Gianny</span>
            <span className="display-xl block text-yellow">Steven</span>
          </h1>

          <p className="script mt-4 text-2xl text-white/80 sm:text-3xl">{t(ui.heroScript)}</p>

          <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
            {t(ui.heroLine)}
          </p>
          <p className="mt-2 font-mono text-[0.7rem] tracking-[0.22em] text-white/45 uppercase">
            {t(ui.roles)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <GLink to="/work" tone="yellow">
              {t(ui.btn.viewWork)}
            </GLink>
            <GButton
              onClick={() => {
                const el = document.getElementById("showreel");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              icon={<Play className="size-4 shrink-0" aria-hidden="true" />}
            >
              {t(ui.btn.playShowreel)}
            </GButton>
          </div>

          <p className="mt-8 font-mono text-[0.65rem] tracking-[0.2em] text-white/35">
            {site.email}
          </p>
        </div>

        <div className="relative min-w-0">
          <BrushStroke className="absolute -top-6 -left-6 w-40 rotate-[-8deg] opacity-70 sm:w-52" />
          <figure className="relative overflow-hidden rounded-xl border border-white/12 shadow-[0_50px_90px_-40px_oklch(0.1_0.05_255)]">
            <img
              src={m.url}
              alt="Gianny Steven filming with a cinema camera on location"
              width={m.w}
              height={m.h}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
            <figcaption className="glass absolute bottom-4 left-4 rounded-full px-4 py-2 font-mono text-[0.6rem] tracking-[0.22em] text-white uppercase">
              REC ● 24 FPS
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-[1600px] items-center gap-4 px-5 sm:px-8">
        <span aria-hidden="true" className="scroll-dot" />
        <span className="font-mono text-[0.62rem] tracking-[0.3em] text-white/40 uppercase">
          Scroll
        </span>
        <span aria-hidden="true" className="yellow-rule h-px flex-1" />
      </div>
    </section>
  );
}
