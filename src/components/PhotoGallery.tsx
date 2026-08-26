import { useMemo, useState } from "react";

import { Lightbox } from "@/components/Lightbox";
import { photos, ui, type PhotoCat } from "@/data/content";
import { img } from "@/lib/img";
import { useLang } from "@/lib/lang";

type Filter = "all" | PhotoCat;

const filters: { key: Filter; label: keyof typeof ui.labels }[] = [
  { key: "all", label: "all" },
  { key: "street", label: "street" },
  { key: "fnb", label: "fnb" },
  { key: "arch", label: "arch" },
];

export function PhotoGallery({ limit }: { limit?: number }) {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<number | null>(null);

  const visible = useMemo(() => {
    const list = photos.filter((p) => filter === "all" || p.cat === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  const items = visible.map((p) => {
    const m = img(p.key);
    return { url: m.url, w: m.w, h: m.h, alt: t(p.alt) };
  });

  return (
    <div>
      <div className="hide-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => {
                setFilter(f.key);
                setOpen(null);
              }}
              aria-pressed={active}
              className={`gbtn shrink-0 ${
                active
                  ? "bg-navy text-white border border-navy"
                  : "glass-light text-navy hover:bg-white/85"
              }`}
            >
              <span>{t(ui.labels[f.label])}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 columns-2 gap-3 sm:gap-4 md:columns-3 xl:columns-4">
        {visible.map((p, i) => {
          const m = img(p.key);
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => setOpen(i)}
              className="group mb-3 block w-full overflow-hidden rounded-md sm:mb-4"
              aria-label={`${t(ui.btn.viewProject)}: ${t(p.alt)}`}
            >
              <span className="relative block overflow-hidden">
                <img
                  src={m.url}
                  alt={t(p.alt)}
                  width={m.w}
                  height={m.h}
                  loading="lazy"
                  decoding="async"
                  className="w-full transition-transform duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-navy-deep/0 transition-colors duration-500 group-hover:bg-navy-deep/25" />
                <span className="glass absolute bottom-2 left-2 rounded-full px-3 py-1 font-mono text-[0.6rem] tracking-[0.18em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {open !== null && (
        <Lightbox
          items={items}
          index={open}
          onIndexChange={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </div>
  );
}
