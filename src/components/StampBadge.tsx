type Tone = "green" | "red" | "amber";

const toneClasses: Record<Tone, string> = {
  green: "text-stamp-green-bright",
  red: "text-stamp-red-bright",
  amber: "text-stamp-amber",
};

export function StampBadge({
  tone,
  children,
  size = "md",
}: {
  tone: Tone;
  children: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses =
    size === "lg" ? "text-2xl px-6 py-2" : size === "sm" ? "text-xs" : "text-base";
  return (
    <span className={`stamp ${toneClasses[tone]} ${sizeClasses}`}>
      {children}
    </span>
  );
}
