"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { LANG_NAMES, type Lang } from "@/lib/dictionaries";

function NavLink({
  href,
  onNavigate,
  children,
}: {
  href: string;
  onNavigate?: () => void;
  children: string;
}) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`font-mono text-sm uppercase tracking-wide transition-colors duration-150 ${
        active ? "text-kraft-bright" : "text-muted hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );
}

function LangSelect({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
      className={`cursor-pointer rounded border border-surface-line bg-surface px-2 py-1 font-mono text-xs uppercase tracking-wider text-muted transition-colors duration-150 hover:border-kraft hover:text-kraft-bright focus-visible:border-kraft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kraft-bright ${className ?? ""}`}
      aria-label={t("common.language")}
    >
      {(Object.keys(LANG_NAMES) as Lang[]).map((l) => (
        <option key={l} value={l}>
          {LANG_NAMES[l]}
        </option>
      ))}
    </select>
  );
}

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-kraft focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-charcoal"
      >
        {t("common.skipToContent")}
      </a>
      <header className="border-b border-surface-line">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5">
          <Link
            href="/"
            className="flex items-center gap-2 whitespace-nowrap font-display text-base tracking-tight text-foreground sm:text-lg"
          >
            <span
              aria-hidden
              className="inline-block h-3 w-6 shrink-0 bg-redact"
              style={{ boxShadow: "0 0 0 1px var(--color-surface-line)" }}
            />
            {t("nav.brand")}
          </Link>

          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/wizard">{t("nav.guide")}</NavLink>
            <NavLink href="/privacy-score">{t("nav.score")}</NavLink>
            <NavLink href="/glossary">{t("nav.glossary")}</NavLink>
            <LangSelect />
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={t("common.menu")}
            className="flex shrink-0 cursor-pointer flex-col justify-center gap-1.5 p-1 sm:hidden"
          >
            <span
              className="h-0.5 w-6 bg-foreground transition-transform duration-150"
              style={
                open
                  ? { transform: "translateY(6px) rotate(45deg)" }
                  : undefined
              }
            />
            <span
              className="h-0.5 bg-kraft transition-opacity duration-150"
              style={{ width: open ? "24px" : "16px", opacity: open ? 0 : 1 }}
            />
            <span
              className="h-0.5 w-6 bg-foreground transition-transform duration-150"
              style={
                open
                  ? { transform: "translateY(-6px) rotate(-45deg)" }
                  : undefined
              }
            />
          </button>
        </div>

        {open && (
          <nav className="flex flex-col items-start gap-4 border-t border-surface-line px-6 py-5 sm:hidden">
            <NavLink href="/wizard" onNavigate={() => setOpen(false)}>
              {t("nav.guide")}
            </NavLink>
            <NavLink href="/privacy-score" onNavigate={() => setOpen(false)}>
              {t("nav.score")}
            </NavLink>
            <NavLink href="/glossary" onNavigate={() => setOpen(false)}>
              {t("nav.glossary")}
            </NavLink>
            <LangSelect className="w-full" />
          </nav>
        )}
      </header>
    </>
  );
}
