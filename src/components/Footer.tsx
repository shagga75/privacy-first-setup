"use client";

import { useLang } from "@/lib/i18n";
import { NEW_ISSUE_URL } from "@/lib/site";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-surface-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">{t("landing.footerNote")}</p>
        <a
          href={NEW_ISSUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-wide text-kraft-bright underline-offset-4 hover:underline"
        >
          {t("common.reportIssue")}
        </a>
      </div>
    </footer>
  );
}
