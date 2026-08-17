import type { Principle } from "./principles";
import type { Lang } from "./dictionaries";

export function principlesToMarkdown({
  principles,
  checked,
  lang,
  heading,
}: {
  principles: Principle[];
  checked: Set<string>;
  lang: Lang;
  heading: string;
}): string {
  const lines = [`# ${heading}`, ""];
  for (const p of principles) {
    const box = checked.has(p.id) ? "[x]" : "[ ]";
    lines.push(`- ${box} **${p[lang].title}** — ${p[lang].body}`);
  }
  lines.push("", "_privacy-first-setup — generado localmente, sin backend._");
  return lines.join("\n");
}

export function downloadMarkdown(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
