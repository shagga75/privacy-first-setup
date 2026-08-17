"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { RedactedReveal } from "@/components/RedactedReveal";
import { useLang } from "@/lib/i18n";

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <section className="dossier-grain border-b border-surface-line">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-kraft-bright">
              {t("landing.kicker")}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-foreground sm:text-5xl">
              {t("landing.heroTitle")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {t("landing.heroSubtitle")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/wizard"
                className="cursor-pointer rounded-sm bg-kraft px-6 py-3 font-mono text-sm uppercase tracking-wide text-charcoal transition-colors duration-150 hover:bg-kraft-bright"
              >
                {t("landing.ctaGuide")}
              </Link>
              <Link
                href="/privacy-score"
                className="cursor-pointer rounded-sm border border-surface-line px-6 py-3 font-mono text-sm uppercase tracking-wide text-foreground transition-colors duration-150 hover:border-kraft hover:text-kraft-bright"
              >
                {t("landing.ctaScore")}
              </Link>
            </div>

            <div className="dossier-card mt-16 max-w-md p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                {t("landing.redactedLabel")}
              </p>
              <RedactedReveal className="mt-3 block break-all font-mono text-lg text-stamp-red-bright">
                {t("landing.redactedAddress")}
              </RedactedReveal>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {t("landing.redactedNote")}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-surface-line">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-kraft-bright">
              {t("landing.problemKicker")}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl text-foreground sm:text-3xl">
              {t("landing.problemTitle")}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {t("landing.problemBody")}
            </p>
          </div>
        </section>

        <section className="border-b border-surface-line">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-kraft-bright">
              {t("landing.pillarsKicker")}
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
              {t("landing.pillarsTitle")}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                ["pillar1Title", "pillar1Body"],
                ["pillar2Title", "pillar2Body"],
                ["pillar3Title", "pillar3Body"],
              ].map(([titleKey, bodyKey]) => (
                <div key={titleKey} className="dossier-card p-5">
                  <h3 className="font-mono text-sm uppercase tracking-wide text-kraft-bright">
                    {t(`landing.${titleKey}`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {t(`landing.${bodyKey}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-kraft-bright">
              {t("landing.whoKicker")}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl text-foreground sm:text-3xl">
              {t("landing.whoTitle")}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {t("landing.whoBody")}
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-surface-line">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <p className="font-mono text-xs text-muted">{t("landing.footerNote")}</p>
        </div>
      </footer>
    </>
  );
}
