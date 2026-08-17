"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { GLOSSARY } from "@/lib/glossary";

export default function GlossaryPage() {
  const { t, lang } = useLang();

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-kraft-bright">
            {t("glossary.kicker")}
          </p>
          <h1 className="mt-3 font-display text-3xl text-foreground">
            {t("glossary.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {t("glossary.subtitle")}
          </p>

          <dl className="mt-10 flex flex-col gap-3">
            {GLOSSARY.map((entry) => {
              const copy = entry[lang];
              return (
                <div key={entry.id} className="dossier-card p-5">
                  <dt className="font-mono text-sm uppercase tracking-wide text-kraft-bright">
                    {copy.term}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    {copy.definition}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </main>
      <Footer />
    </>
  );
}
