export function OptionCard({
  title,
  body,
  selected,
  onClick,
}: {
  title: string;
  body: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      style={
        selected
          ? {
              borderColor: "var(--color-kraft-bright)",
              boxShadow: "0 0 0 1px var(--color-kraft-bright)",
            }
          : undefined
      }
      className="dossier-card cursor-pointer p-6 text-left transition-colors duration-150 hover:border-kraft"
    >
      <h3 className="font-mono text-sm uppercase tracking-wide text-kraft-bright">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
    </button>
  );
}
