import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "id" | "en";
export type Bi = { id: string; en: string };
export type BiList = { id: string[]; en: string[] };

const STORAGE_KEY = "gs-lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (v: Bi) => string;
  tl: (v: BiList) => string[];
};

// Keep a single context instance even if this module is duplicated across
// build chunks (route code-splitting can otherwise create two contexts,
// making useLang throw inside a valid provider tree).
const globalStore = globalThis as typeof globalThis & {
  __gsLangContext?: React.Context<Ctx | null>;
};

const LangContext: React.Context<Ctx | null> =
  globalStore.__gsLangContext ?? createContext<Ctx | null>(null);

globalStore.__gsLangContext = LangContext;

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "id") setLangState(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (v: Bi) => v[lang],
      tl: (v: BiList) => v[lang],
    }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
