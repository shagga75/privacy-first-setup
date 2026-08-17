"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const listeners = new Map<string, Set<() => void>>();

function emit(key: string) {
  listeners.get(key)?.forEach((l) => l());
}

function subscribe(key: string, callback: () => void) {
  if (!listeners.has(key)) listeners.set(key, new Set());
  listeners.get(key)!.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === key) callback();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.get(key)?.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

/** Lee/escribe una clave de localStorage sin causar setState-en-efecto ni desajustes de hidratación. */
export function useLocalStorageRaw(
  key: string,
): [string | null, (value: string) => void] {
  const raw = useSyncExternalStore(
    useCallback((cb) => subscribe(key, cb), [key]),
    () => window.localStorage.getItem(key),
    () => null,
  );

  const setRaw = useCallback(
    (value: string) => {
      window.localStorage.setItem(key, value);
      emit(key);
    },
    [key],
  );

  return [raw, setRaw];
}

/** Variante JSON de useLocalStorageRaw con un valor por defecto tipado. */
export function useLocalStorageJSON<T>(
  key: string,
  defaultValue: T,
): [T, (value: T) => void] {
  const [raw, setRaw] = useLocalStorageRaw(key);

  const value = useMemo(() => {
    if (raw === null) return defaultValue;
    try {
      return JSON.parse(raw) as T;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
      return defaultValue;
    }
    // defaultValue intencionalmente fuera de deps: es un literal estable por caller
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [raw]);

  const setValue = useCallback(
    (next: T) => setRaw(JSON.stringify(next)),
    [setRaw],
  );

  return [value, setValue];
}
