import type { Answer } from "@/lib/privacy-score";

const OPTIONS: Answer[] = ["yes", "no", "unsure"];

export function QuestionRow({
  question,
  value,
  onChange,
  labels,
  locked,
  lockedNote,
}: {
  question: string;
  value: Answer | undefined;
  onChange: (a: Answer) => void;
  labels: Record<Answer, string>;
  locked?: boolean;
  lockedNote?: string;
}) {
  return (
    <div className="dossier-card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm leading-relaxed text-foreground">{question}</p>
        {locked && lockedNote && (
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-stamp-red-bright">
            {lockedNote}
          </p>
        )}
      </div>
      <div className="flex shrink-0 gap-1" role="group" aria-label={question}>
        {OPTIONS.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              disabled={locked}
              aria-pressed={active}
              onClick={() => onChange(opt)}
              style={
                active
                  ? {
                      background:
                        opt === "yes"
                          ? "var(--color-stamp-green-deep)"
                          : opt === "no"
                            ? "var(--color-stamp-red-deep)"
                            : "var(--color-stamp-amber-deep)",
                      color: "var(--color-parchment)",
                      borderColor: "transparent",
                    }
                  : undefined
              }
              className={`rounded-sm border border-surface-line px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors duration-150 ${
                locked
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer text-muted hover:text-foreground"
              }`}
            >
              {labels[opt]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
