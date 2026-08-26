import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

import { LangSwitch } from "@/components/LangSwitch";
import { site, ui } from "@/data/content";
import { useLang } from "@/lib/lang";

const links = [
  { to: "/", key: "home" as const },
  { to: "/work", key: "work" as const },
  { to: "/photography", key: "photography" as const },
  { to: "/experience", key: "experience" as const },
  { to: "/about", key: "about" as const },
  { to: "/contact", key: "contact" as const },
];

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-deep">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="block font-display text-2xl leading-[0.9] uppercase text-white">
            Gianny
            <br />
            <span className="text-yellow">Steven</span>
          </span>
          <p className="mt-3 text-sm text-white/50">{t(ui.tagline)}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="glass grid size-11 place-items-center rounded-full text-white"
            >
              <Mail className="size-4" />
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="glass grid size-11 place-items-center rounded-full text-white"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow text-yellow">{t(ui.labels.quickLinks)}</h2>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/65 transition-colors hover:text-white">
                  {t(ui.nav[l.key])}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-yellow">{t(ui.labels.language)}</h2>
          <div className="mt-4">
            <LangSwitch />
          </div>
          <p className="mt-6 font-mono text-xs text-white/45">{site.email}</p>
          <p className="font-mono text-xs text-white/45">{site.instagram}</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 sm:px-8">
        <p className="text-center font-mono text-[0.65rem] tracking-[0.2em] text-white/35 uppercase">
          © {new Date().getFullYear()} {site.fullName} — {t(ui.tagline)}
        </p>
      </div>
    </footer>
  );
}
