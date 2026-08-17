"use client";

import { useEffect } from "react";

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // El modo offline es una mejora progresiva: si falla el registro,
      // la app sigue funcionando normalmente online.
    });
  }, []);

  return null;
}
