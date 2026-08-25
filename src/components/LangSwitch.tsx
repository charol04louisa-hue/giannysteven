import { useLang } from "@/lib/lang";

export function LangSwitch({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { lang, setLang } = useLang();
  const base =
    "px-3 py-1.5 text-[0.68rem] font-mono uppercase tracking-[0.2em] rounded-full transition-colors";
  const idle = tone === "light" ? "text-white/60 hover:text-white" : "text-navy/50 hover:text-navy";
  const active = "bg-yellow text-navy-deep";

  return (
    <div
      className={`${tone === "light" ? "glass" : "glass-light"} inline-flex items-center rounded-full p-1`}
      role="group"
      aria-label="Language"
    >
      {(["id", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`${base} ${lang === l ? active : idle}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
