"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StampBadge } from "@/components/StampBadge";
import { useLang } from "@/lib/i18n";
import { NEW_ISSUE_URL } from "@/lib/site";

export default function GrantsPage() {
  const { t, dict } = useLang();

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-kraft-bright">
            {t("grants.kicker")}
          </p>
          <h1 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
            {t("grants.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {t("grants.subtitle")}
          </p>

          <section className="mt-14">
            <StampBadge tone="green">{dict.grants.phaseALabel}</StampBadge>
            <h2 className="mt-4 font-display text-2xl text-foreground">
              {t("grants.phaseATitle")}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              {t("grants.phaseAIntro")}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {dict.grants.phaseAItems.map((item) => (
                <li key={item} className="dossier-card flex gap-3 p-4">
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--color-stamp-green-bright)" }}
                  />
                  <span className="text-sm leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <StampBadge tone="amber">{dict.grants.phaseBLabel}</StampBadge>
            <h2 className="mt-4 font-display text-2xl text-foreground">
              {t("grants.phaseBTitle")}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              {t("grants.phaseBIntro")}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {dict.grants.phaseBItems.map((item) => (
                <li key={item} className="dossier-card flex gap-3 p-4">
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--color-stamp-amber)" }}
                  />
                  <span className="text-sm leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 border-t border-surface-line pt-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-kraft-bright">
              {t("grants.whyKicker")}
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground">
              {t("grants.whyTitle")}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {t("grants.whyBody")}
            </p>
          </section>

          <section className="dossier-card mt-14 p-8">
            <h2 className="font-display text-xl text-foreground">
              {t("grants.ctaTitle")}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              {t("grants.ctaBody")}
            </p>
            <a
              href={NEW_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block cursor-pointer rounded-sm bg-kraft px-6 py-3 font-mono text-sm uppercase tracking-wide text-charcoal transition-colors duration-150 hover:bg-kraft-bright"
            >
              {t("grants.ctaButton")}
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
