import type { Principle } from "@/lib/principles";
import type { Lang } from "@/lib/dictionaries";

const categoryTone: Record<Principle["category"], string> = {
  setup: "text-stamp-amber",
  habit: "text-kraft-bright",
  advanced: "text-stamp-green-bright",
};

export function ChecklistItem({
  principle,
  lang,
  categoryLabel,
  checked,
  onToggle,
}: {
  principle: Principle;
  lang: Lang;
  categoryLabel: string;
  checked: boolean;
  onToggle: () => void;
}) {
  const copy = principle[lang];
  return (
    <label className="dossier-card flex cursor-pointer gap-4 p-5">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="mt-1.5 size-4 shrink-0 cursor-pointer accent-current"
        style={{ accentColor: "var(--color-kraft-bright)" }}
      />
      <div>
        <p
          className={`font-mono text-[10px] uppercase tracking-widest ${categoryTone[principle.category]}`}
        >
          {categoryLabel}
        </p>
        <h4 className="mt-1 font-mono text-sm text-foreground">{copy.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted">{copy.body}</p>
      </div>
    </label>
  );
}
