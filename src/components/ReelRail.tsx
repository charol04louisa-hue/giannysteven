import { Play } from "lucide-react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { img } from "@/lib/img";

export function ReelRail({
  items,
  tone = "dark",
}: {
  items: { key: string; label: string }[];
  tone?: "dark" | "light";
}) {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 620), behavior: "smooth" });
  };

  const ctrl = tone === "dark" ? "glass text-white" : "glass-light text-navy";

  return (
    <div className="relative">
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Scroll left"
          className={`${ctrl} grid size-11 place-items-center rounded-full`}
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Scroll right"
          className={`${ctrl} grid size-11 place-items-center rounded-full`}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div
        ref={railRef}
        className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:gap-4 sm:px-0"
      >
        {items.map((it) => {
          const m = img(it.key);
          return (
            <figure
              key={it.key}
              className="group relative w-[68vw] shrink-0 snap-start overflow-hidden rounded-lg sm:w-[300px] lg:w-[340px]"
            >
              <img
                src={m.url}
                alt={it.label}
                width={m.w}
                height={m.h}
                loading="lazy"
                decoding="async"
                className="aspect-[9/14] w-full object-cover transition-transform duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
              <span className="glass absolute top-3 right-3 grid size-10 place-items-center rounded-full text-white">
                <Play className="size-4" aria-hidden="true" />
              </span>
              <figcaption className="absolute bottom-0 left-0 w-full p-4">
                <span className="font-display text-sm leading-tight uppercase text-white sm:text-base">
                  {it.label}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
