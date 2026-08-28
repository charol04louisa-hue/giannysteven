import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LangSwitch } from "@/components/LangSwitch";
import { ui } from "@/data/content";
import { useLang } from "@/lib/lang";

const links = [
  { to: "/work", key: "work" as const },
  { to: "/photography", key: "photography" as const },
  { to: "/experience", key: "experience" as const },
  { to: "/about", key: "about" as const },
  { to: "/contact", key: "contact" as const },
];

export function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-navy-deep/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto_auto]"
        >
          <Link to="/" className="min-w-0 shrink-0" aria-label="Gianny Steven — home">
            <span className="block font-display text-[0.95rem] leading-[0.9] uppercase text-white sm:text-lg">
              Gianny
              <br />
              <span className="text-yellow">Steven</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="eyebrow relative py-2 text-white/70 transition-colors hover:text-white data-[status=active]:text-white"
                  activeProps={{
                    className:
                      "after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:bg-yellow",
                  }}
                >
                  {t(ui.nav[l.key])}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-3">
            <div className="hidden sm:block">
              <LangSwitch />
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="glass grid size-11 shrink-0 place-items-center rounded-full text-white lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-50 navy-cinema grain lg:hidden"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display text-[0.95rem] leading-[0.9] uppercase text-white">
            Gianny
            <br />
            <span className="text-yellow">Steven</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="glass grid size-11 place-items-center rounded-full text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        <ul className="mt-6 flex flex-col gap-1 px-5">
          {[{ to: "/", key: "home" as const }, ...links].map((l, i) => (
            <li key={l.to} className="border-b border-white/10">
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-4"
              >
                <span className="font-mono text-[0.7rem] text-yellow">
                  0{i + 1}
                </span>
                <span className="display-md text-white">{t(ui.nav[l.key])}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 px-5">
          <LangSwitch />
        </div>
      </div>
    </header>
  );
}
