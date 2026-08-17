"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { dictionaries, type Lang } from "./dictionaries";
import { useLocalStorageRaw } from "./use-local-storage";

const SUPPORTED_LANGS: Lang[] = ["es", "en", "pt", "fr"];

function isSupportedLang(value: string | null): value is Lang {
  return SUPPORTED_LANGS.includes(value as Lang);
}

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
    if (isSupportedLang(stored)) return stored;
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language.slice(0, 2);
      if (isSupportedLang(browserLang)) return browserLang;
    }
    return "es";
  }, [stored]);

  // Mantiene <html lang> sincronizado para lectores de pantalla; el atributo
  // se renderiza en es en el layout raíz y no puede saber la preferencia del
  // cliente de antemano.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
