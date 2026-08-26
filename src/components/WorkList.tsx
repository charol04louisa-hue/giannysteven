import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/bits";
import { projects } from "@/data/content";
import { img } from "@/lib/img";
import { useLang } from "@/lib/lang";

export function WorkList({ limit }: { limit?: number }) {
  const { t } = useLang();
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <ul className="space-y-12 sm:space-y-16">
      {list.map((p, i) => {
        const m = img(p.cover);
        const flip = i % 2 === 1;
        return (
          <li key={p.slug}>
            <Reveal>
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group grid items-center gap-5 lg:grid-cols-12 lg:gap-8"
              >
                <figure
                  className={`relative overflow-hidden rounded-xl lg:col-span-7 ${
                    flip ? "lg:order-2 lg:col-start-6" : ""
                  }`}
                >
                  <img
                    src={m.url}
                    alt={`${p.title} — ${t(p.category)}`}
                    width={m.w}
                    height={m.h}
                    loading={i > 1 ? "lazy" : undefined}
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1100ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] sm:aspect-[16/9]"
                  />
                  <span className="absolute inset-0 bg-navy-deep/10 transition-colors duration-500 group-hover:bg-navy-deep/35" />
                  <span className="glass absolute top-4 left-4 rounded-full px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.22em] text-white">
                    {p.number}
                  </span>
                  <span className="glass absolute right-4 bottom-4 grid size-12 place-items-center rounded-full text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </figure>

                <div className={`min-w-0 lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : ""}`}>
                  <p className="eyebrow text-blue">{t(p.category)}</p>
                  <h3 className="display-md mt-3 text-navy transition-colors duration-300 group-hover:text-blue-bright">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <p className="script mt-1 text-xl text-blue">{t(p.subtitle)}</p>
                  )}
                  <p className="mt-3 line-clamp-3 text-sm text-ink/70 sm:text-base">
                    {t(p.intro)}
                  </p>
                  <p className="mt-4 flex flex-wrap items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] text-ink/45 uppercase">
                    {p.year && <span>{p.year}</span>}
                    {p.year && <span aria-hidden="true" className="h-px w-6 bg-yellow" />}
                    <span>{t(p.role)}</span>
                  </p>
                </div>
              </Link>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
