import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Tone = "glass" | "light" | "yellow";

const toneClass: Record<Tone, string> = {
  glass: "glass text-white hover:bg-white/20",
  light: "glass-light text-navy hover:bg-white/85",
  yellow:
    "bg-yellow text-navy-deep border border-yellow/60 hover:brightness-105 shadow-[0_14px_34px_-16px_var(--color-yellow)]",
};

type BaseProps = {
  children: ReactNode;
  tone?: Tone;
  icon?: ReactNode;
  className?: string;
};

function inner(children: ReactNode, icon?: ReactNode) {
  return (
    <>
      <span>{children}</span>
      {icon ?? <ArrowRight className="size-4 shrink-0" aria-hidden="true" />}
    </>
  );
}

export function GLink({
  to,
  params,
  children,
  tone = "glass",
  icon,
  className = "",
}: BaseProps & {
  to: string;
  params?: Record<string, string>;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      params={params as any}
      className={`gbtn ${toneClass[tone]} ${className}`}

    >
      {inner(children, icon)}
    </Link>
  );
}

export function GAnchor({
  href,
  children,
  tone = "glass",
  icon,
  className = "",
}: BaseProps & { href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`gbtn ${toneClass[tone]} ${className}`}
    >
      {inner(children, icon)}
    </a>
  );
}

export function GButton({
  onClick,
  children,
  tone = "glass",
  icon,
  className = "",
  ariaLabel,
}: BaseProps & { onClick?: () => void; ariaLabel?: string }) {
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={`gbtn ${toneClass[tone]} ${className}`}>
      {inner(children, icon)}
    </button>
  );
}

/** Scroll-triggered reveal wrapper. Honors prefers-reduced-motion via CSS. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    // @ts-expect-error dynamic tag with ref
    <As
      ref={ref}
      className={`transition-[opacity,transform] duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-3 ${
        tone === "light" ? "text-yellow" : "text-blue"
      } ${className}`}
    >
      <span aria-hidden="true" className="h-px w-8 bg-yellow" />
      {children}
    </span>
  );
}
