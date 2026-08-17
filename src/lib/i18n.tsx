"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { dictionaries, type Lang } from "./dictionaries";
import { useLocalStorageRaw } from "./use-local-storage";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string) => string;
  dict: (typeof dictionaries)["es"];
};

const LangContext = createContext<LangContextValue | null>(null);

function lookup(path: string, lang: Lang): string {
  const parts = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = dictionaries[lang];
  for (const part of parts) {
    node = node?.[part];
    if (node === undefined) break;
  }
  if (typeof node === "string") return node;
  // Fallback a español si falta la traducción.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let fallback: any = dictionaries.es;
  for (const part of parts) {
    fallback = fallback?.[part];
  }
  return typeof fallback === "string" ? fallback : path;
}

const STORAGE_KEY = "pfs-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useLocalStorageRaw(STORAGE_KEY);

  const lang: Lang = useMemo(() => {
    if (stored === "es" || stored === "en") return stored;
    if (typeof navigator !== "undefined" && navigator.language.slice(0, 2) !== "es") {
      return "en";
    }
    return "es";
  }, [stored]);

  const setLang = useCallback((next: Lang) => setStored(next), [setStored]);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      t: (path: string) => lookup(path, lang),
      dict: dictionaries[lang],
    }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de LangProvider");
  return ctx;
}
