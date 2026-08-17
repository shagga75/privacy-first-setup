"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FolderTabs } from "@/components/wizard/FolderTabs";
import { OptionCard } from "@/components/wizard/OptionCard";
import { ChecklistItem } from "@/components/wizard/ChecklistItem";
import { useLang } from "@/lib/i18n";
import { principlesFor, type Level, type UseCase } from "@/lib/principles";
import { downloadMarkdown, principlesToMarkdown } from "@/lib/checklist-export";
import { useLocalStorageJSON } from "@/lib/use-local-storage";

const CATEGORY_ORDER = { setup: 0, habit: 1, advanced: 2 } as const;
const STORAGE_KEY = "pfs-checklist";

export default function WizardPage() {
  const { t, lang, dict } = useLang();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [level, setLevel] = useState<Level | null>(null);
  const [useCase, setUseCase] = useState<UseCase | null>(null);
  const [checkedList, setCheckedList] = useLocalStorageJSON<string[]>(
    STORAGE_KEY,
    [],
  );
  const checked = useMemo(() => new Set(checkedList), [checkedList]);

  const persistChecked = (next: Set<string>) => {
    setCheckedList([...next]);
  };

  const principles = useMemo(() => {
    if (!level || !useCase) return [];
    return [...principlesFor(level, useCase)].sort((a, b) => {
      const catDiff = CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category];
      if (catDiff !== 0) return catDiff;
      return b.weight - a.weight;
    });
  }, [level, useCase]);

  const maxReached: 1 | 2 | 3 = useCase ? 3 : level ? 2 : 1;

  const categoryLabel = (c: "setup" | "habit" | "advanced") =>
    c === "setup"
      ? dict.wizard.categorySetup
      : c === "habit"
        ? dict.wizard.categoryHabit
        : dict.wizard.categoryAdvanced;

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-kraft-bright">
            {t("wizard.kicker")}
          </p>
          <h1 className="mt-3 font-display text-3xl text-foreground">
            {t("wizard.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {t("wizard.subtitle")}
          </p>

          <div className="mt-10">
            <FolderTabs
              step={step}
              labels={[
                dict.wizard.stepLevel,
                dict.wizard.stepUseCase,
                dict.wizard.stepResult,
              ]}
              maxReached={maxReached}
              onSelect={setStep}
            />
            <div className="border-t border-surface-line bg-surface p-8">
              {step === 1 && (
                <div>
                  <h2 className="font-mono text-sm uppercase tracking-wide text-foreground">
                    {t("wizard.levelHeading")}
                  </h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <OptionCard
                      title={dict.wizard.levelBeginnerTitle}
                      body={dict.wizard.levelBeginnerBody}
                      selected={level === "beginner"}
                      onClick={() => {
                        setLevel("beginner");
                        setStep(2);
                      }}
                    />
                    <OptionCard
                      title={dict.wizard.levelIntermediateTitle}
                      body={dict.wizard.levelIntermediateBody}
                      selected={level === "intermediate"}
                      onClick={() => {
                        setLevel("intermediate");
                        setStep(2);
                      }}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-mono text-sm uppercase tracking-wide text-foreground">
                    {t("wizard.useCaseHeading")}
                  </h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <OptionCard
                      title={dict.wizard.useCaseSavingsTitle}
                      body={dict.wizard.useCaseSavingsBody}
                      selected={useCase === "savings"}
                      onClick={() => {
                        setUseCase("savings");
                        setStep(3);
                      }}
                    />
                    <OptionCard
                      title={dict.wizard.useCaseDailyTitle}
                      body={dict.wizard.useCaseDailyBody}
                      selected={useCase === "daily"}
                      onClick={() => {
                        setUseCase("daily");
                        setStep(3);
                      }}
                    />
                    <OptionCard
                      title={dict.wizard.useCaseDonationsTitle}
                      body={dict.wizard.useCaseDonationsBody}
                      selected={useCase === "donations"}
                      onClick={() => {
                        setUseCase("donations");
                        setStep(3);
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mt-6 cursor-pointer font-mono text-xs uppercase tracking-wide text-muted hover:text-foreground"
                  >
                    ← {t("wizard.back")}
                  </button>
                </div>
              )}

              {step === 3 && level && useCase && (
                <div>
                  <h2 className="font-mono text-sm uppercase tracking-wide text-foreground">
                    {t("wizard.resultHeading")}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{t("wizard.resultIntro")}</p>

                  <div className="mt-6 flex flex-col gap-3">
                    {principles.map((p) => (
                      <ChecklistItem
                        key={p.id}
                        principle={p}
                        lang={lang}
                        categoryLabel={categoryLabel(p.category)}
                        checked={checked.has(p.id)}
                        onToggle={() => {
                          const next = new Set(checked);
                          if (next.has(p.id)) next.delete(p.id);
                          else next.add(p.id);
                          persistChecked(next);
                        }}
                      />
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        downloadMarkdown(
                          "privacy-first-setup-checklist.md",
                          principlesToMarkdown({
                            principles,
                            checked,
                            lang,
                            heading: dict.wizard.title,
                          }),
                        )
                      }
                      className="cursor-pointer rounded-sm bg-kraft px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-charcoal transition-colors duration-150 hover:bg-kraft-bright"
                    >
                      {t("wizard.downloadButton")}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLevel(null);
                        setUseCase(null);
                        setStep(1);
                      }}
                      className="cursor-pointer font-mono text-xs uppercase tracking-wide text-muted hover:text-foreground"
                    >
                      {t("wizard.restartButton")}
                    </button>
                  </div>

                  <Link
                    href="/privacy-score"
                    className="mt-10 inline-block font-mono text-sm text-stamp-green-bright hover:text-foreground"
                  >
                    {t("wizard.scoreCta")}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
