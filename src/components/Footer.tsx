"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { NEW_ISSUE_URL } from "@/lib/site";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-surface-line print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">{t("landing.footerNote")}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/grants"
            className="font-mono text-xs uppercase tracking-wide text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            {t("common.grantsLink")}
          </Link>
          <a
            href={NEW_ISSUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wide text-kraft-bright underline-offset-4 hover:underline"
          >
            {t("common.reportIssue")}
          </a>
        </div>
      </div>
    </footer>
  );
}
