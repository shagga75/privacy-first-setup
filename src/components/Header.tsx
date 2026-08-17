"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { LANG_NAMES, type Lang } from "@/lib/dictionaries";

function NavLink({ href, children }: { href: string; children: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`font-mono text-sm uppercase tracking-wide transition-colors duration-150 ${
        active
          ? "text-kraft-bright"
          : "text-muted hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const { t, lang, setLang } = useLang();

  return (
    <header className="border-b border-surface-line">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg tracking-tight text-foreground"
        >
          <span
            aria-hidden
            className="inline-block h-3 w-6 bg-redact"
            style={{ boxShadow: "0 0 0 1px var(--color-surface-line)" }}
          />
          {t("nav.brand")}
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink href="/wizard">{t("nav.guide")}</NavLink>
          <NavLink href="/privacy-score">{t("nav.score")}</NavLink>
          <NavLink href="/glossary">{t("nav.glossary")}</NavLink>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="cursor-pointer rounded border border-surface-line bg-surface px-2 py-1 font-mono text-xs uppercase tracking-wider text-muted transition-colors duration-150 hover:border-kraft hover:text-kraft-bright focus:border-kraft focus:outline-none"
            aria-label="Language"
          >
            {(Object.keys(LANG_NAMES) as Lang[]).map((l) => (
              <option key={l} value={l}>
                {LANG_NAMES[l]}
              </option>
            ))}
          </select>
        </nav>
      </div>
    </header>
  );
}
