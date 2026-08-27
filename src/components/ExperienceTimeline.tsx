import { Reveal } from "@/components/bits";
import { experience } from "@/data/content";
import { useLang } from "@/lib/lang";

export function ExperienceTimeline() {
  const { t } = useLang();

  return (
    <ol className="relative ml-3 space-y-6 border-l border-blue/25 pl-6 sm:ml-4 sm:pl-10">
      {experience.map((e, i) => (
        <li key={e.company} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-3 size-3 rounded-full bg-yellow ring-4 ring-soft sm:-left-[47px]"
          />
          <Reveal delay={i * 90}>
            <article className="glass-light rounded-xl p-5 sm:p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <h3 className="display-md text-xl text-navy sm:text-2xl">{e.company}</h3>
                  <p className="mt-1 text-sm text-ink/70 sm:text-base">{t(e.role)}</p>
                </div>
                <span className="shrink-0 font-mono text-[0.62rem] tracking-[0.16em] text-blue uppercase sm:text-[0.7rem]">
                  {e.period}
                </span>
              </div>
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
