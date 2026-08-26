import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type LightboxItem = { url: string; alt: string; w: number; h: number };

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const [touchX, setTouchX] = useState<number | null>(null);

  const next = useCallback(
    () => onIndexChange((index + 1) % items.length),
    [index, items.length, onIndexChange],
  );
  const prev = useCallback(
    () => onIndexChange((index - 1 + items.length) % items.length),
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, onClose]);

  const current = items[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className="fixed inset-0 z-[100] flex flex-col bg-navy-deep/95 backdrop-blur-xl"
      onTouchStart={(e) => setTouchX(e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? touchX) - touchX;
        if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
        setTouchX(null);
      }}
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-8">
        <span className="font-mono text-[0.7rem] tracking-[0.2em] text-white/60">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="glass grid size-11 place-items-center rounded-full text-white"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 pb-4 sm:px-16">
        <img
          key={current.url}
          src={current.url}
          alt={current.alt}
          width={current.w}
          height={current.h}
          className="max-h-full w-auto max-w-full animate-fade-in rounded-lg object-contain"
        />

        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="glass absolute left-2 grid size-11 place-items-center rounded-full text-white sm:left-5 sm:size-14"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="glass absolute right-2 grid size-11 place-items-center rounded-full text-white sm:right-5 sm:size-14"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <p className="px-5 pb-6 text-center text-xs text-white/60 sm:text-sm">{current.alt}</p>
    </div>
  );
}
