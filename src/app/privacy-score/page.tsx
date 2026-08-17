"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { QuestionRow } from "@/components/score/QuestionRow";
import { StampBadge } from "@/components/StampBadge";
import { useLang } from "@/lib/i18n";
import { PRINCIPLES } from "@/lib/principles";
import {
  computeScore,
  findReusedAddresses,
  verdictFor,
  weakestPrinciples,
  type Answer,
  type Answers,
} from "@/lib/privacy-score";
import { useLocalStorageJSON } from "@/lib/use-local-storage";

const STORAGE_KEY = "pfs-score-answers";

export default function PrivacyScorePage() {
  const { t, lang, dict } = useLang();
  const [answers, setAnswers] = useLocalStorageJSON<Answers>(STORAGE_KEY, {});
  const [addressInput, setAddressInput] = useState("");
  const [addressResult, setAddressResult] = useState<
    { duplicates: string[]; totalParsed: number } | null
  >(null);

  const persist = (next: Answers) => {
    setAnswers(next);
  };

  const setAnswer = (id: string, value: Answer) => {
    persist({ ...answers, [id]: value });
  };

  const runAddressCheck = () => {
    const result = findReusedAddresses(addressInput);
    setAddressResult(result);
    if (result.duplicates.length > 0) {
      persist({ ...answers, "no-reuse": "no" });
    }
  };

  const { score, answered, totalQuestions } = useMemo(
    () => computeScore(answers),
    [answers],
  );
  const verdict = score !== null ? verdictFor(score) : null;
  const weakest = useMemo(() => weakestPrinciples(answers), [answers]);

  const answerLabels: Record<Answer, string> = {
    yes: dict.score.yes,
    no: dict.score.no,
    unsure: dict.score.unsure,
  };

  const stampTone =
    verdict === "approved" ? "green" : verdict === "review" ? "amber" : "red";
  const verdictLabel =
    verdict === "approved"
      ? dict.score.verdictApproved
      : verdict === "review"
        ? dict.score.verdictReview
        : dict.score.verdictCritical;

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-kraft-bright">
            {t("score.kicker")}
          </p>
          <h1 className="mt-3 font-display text-3xl text-foreground">
            {t("score.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {t("score.subtitle")}
          </p>

          <div className="dossier-card mt-10 flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {t("score.scoreLabel")} — {answered}/{totalQuestions}
              </p>
              <p className="mt-2 font-display text-5xl text-foreground">
                {score ?? "—"}
              </p>
            </div>
            {verdict && <StampBadge tone={stampTone} size="lg">{verdictLabel}</StampBadge>}
          </div>

          {weakest.length > 0 && (
            <div className="mt-8">
              <h2 className="font-mono text-sm uppercase tracking-wide text-foreground">
                {t("score.breakdownHeading")}
              </h2>
              <ul className="mt-4 flex flex-col gap-2">
                {weakest.map((p) => (
                  <li
                    key={p.id}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--color-stamp-red-bright)" }}
                    />
                    <span>
                      <span className="text-foreground">{p[lang].title}</span>
                      {" — "}
                      {p[lang].body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <section className="mt-12">
            <h2
              id="address-tool-heading"
              className="font-mono text-sm uppercase tracking-wide text-foreground"
            >
              {t("score.addressToolHeading")}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {t("score.addressToolBody")}
            </p>
            <textarea
              value={addressInput}
              onChange={(e) => setAddressInput(e.target.value)}
              placeholder={dict.score.addressPlaceholder}
              rows={6}
              aria-labelledby="address-tool-heading"
              className="mt-4 w-full resize-y rounded-sm border border-surface-line bg-surface p-4 font-mono text-sm text-foreground placeholder:text-muted/60 focus:border-kraft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kraft-bright"
            />
            <button
              type="button"
              onClick={runAddressCheck}
              disabled={!addressInput.trim()}
              className="mt-4 cursor-pointer rounded-sm bg-kraft px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-charcoal transition-colors duration-150 hover:bg-kraft-bright disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t("score.checkAddresses")}
            </button>

            {addressResult && (
              <p
                className={`mt-4 font-mono text-sm ${
                  addressResult.duplicates.length > 0
                    ? "text-stamp-red-bright"
                    : "text-stamp-green-bright"
                }`}
              >
                {addressResult.duplicates.length > 0
                  ? dict.score.reusedFound(addressResult.duplicates.length)
                  : dict.score.noReuseFound}
              </p>
            )}

            <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted">
              {t("score.privacyNote")}
            </p>
          </section>

          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-wide text-foreground">
              {t("score.questionnaireHeading")}
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {PRINCIPLES.map((p) => (
                <QuestionRow
                  key={p.id}
                  question={p[lang].question}
                  value={answers[p.id]}
                  onChange={(v) => setAnswer(p.id, v)}
                  labels={answerLabels}
                  locked={
                    p.id === "no-reuse" && (addressResult?.duplicates.length ?? 0) > 0
                  }
                  lockedNote={dict.score.reusedFound(
                    addressResult?.duplicates.length ?? 0,
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                persist({});
                setAddressResult(null);
                setAddressInput("");
              }}
              className="mt-6 cursor-pointer font-mono text-xs uppercase tracking-wide text-muted hover:text-foreground"
            >
              {t("score.resetButton")}
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
