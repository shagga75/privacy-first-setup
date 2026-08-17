const STEP_ORDER = [1, 2, 3] as const;

export function FolderTabs({
  step,
  labels,
  maxReached,
  onSelect,
}: {
  step: 1 | 2 | 3;
  labels: [string, string, string];
  maxReached: 1 | 2 | 3;
  onSelect: (step: 1 | 2 | 3) => void;
}) {
  return (
    <div className="flex gap-1">
      {STEP_ORDER.map((s, i) => {
        const active = s === step;
        const reachable = s <= maxReached;
        return (
          <button
            key={s}
            type="button"
            disabled={!reachable}
            aria-current={active ? "step" : undefined}
            onClick={() => reachable && onSelect(s)}
            className={`relative -mb-px rounded-t-sm border border-b-0 px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors duration-150 ${
              active
                ? "border-surface-line bg-surface text-kraft-bright"
                : reachable
                  ? "cursor-pointer border-transparent text-muted hover:text-foreground"
                  : "cursor-not-allowed border-transparent text-muted/40"
            }`}
          >
            {String(i + 1).padStart(2, "0")} · {labels[i]}
          </button>
        );
      })}
    </div>
  );
}
