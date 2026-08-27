import type { ReactNode } from "react";

import { Reveal } from "@/components/bits";

export function Section({
  id,
  eyebrow,
  title,
  note,
  ghost,
  tone = "light",
  className = "",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  note?: string;
  ghost?: string;
  tone?: "light" | "dark" | "soft";
  className?: string;
  children: ReactNode;
}) {
  const bg =
    tone === "dark" ? "navy-cinema text-white" : tone === "soft" ? "bg-soft" : "bg-background";
  const dark = tone === "dark";

  return (
    <section id={id} className={`relative isolate overflow-hidden py-16 sm:py-24 ${bg} ${className}`}>
      {ghost && (
        <span
          aria-hidden="true"
          className={`${dark ? "ghost-type-light" : "ghost-type"} pointer-events-none absolute -top-6 left-0 hidden text-[13vw] leading-none whitespace-nowrap lg:block`}
        >
          {ghost}
        </span>
      )}

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8">
        {(eyebrow || title) && (
          <Reveal className="mb-10 sm:mb-14">
            {eyebrow && (
              <p className={`eyebrow ${dark ? "text-yellow" : "text-blue"}`}>{eyebrow}</p>
            )}
            {title && (
              <h2 className={`display-lg mt-4 ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
            )}
            {note && (
              <p className={`mt-4 max-w-2xl text-base ${dark ? "text-white/65" : "text-ink/70"}`}>
                {note}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
