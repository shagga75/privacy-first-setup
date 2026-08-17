import { PRINCIPLES, type Principle } from "./principles";

export type Answer = "yes" | "no" | "unsure";
export type Answers = Partial<Record<string, Answer>>;

export function computeScore(answers: Answers) {
  let earned = 0;
  let total = 0;
  let answered = 0;

  for (const p of PRINCIPLES) {
    const a = answers[p.id];
    if (!a) continue;
    answered += 1;
    total += p.weight;
    if (a === "yes") earned += p.weight;
    else if (a === "unsure") earned += p.weight * 0.5;
  }

  const score = total > 0 ? Math.round((earned / total) * 100) : null;
  return { score, answered, totalQuestions: PRINCIPLES.length };
}

export type Verdict = "approved" | "review" | "critical";

export function verdictFor(score: number): Verdict {
  if (score >= 80) return "approved";
  if (score >= 50) return "review";
  return "critical";
}

export function weakestPrinciples(answers: Answers, limit = 5): Principle[] {
  return PRINCIPLES.filter((p) => {
    const a = answers[p.id];
    return a === "no" || a === "unsure";
  })
    .sort((a, b) => b.weight - a.weight)
    .slice(0, limit);
}

export function findReusedAddresses(raw: string): {
  duplicates: string[];
  totalParsed: number;
} {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const counts = new Map<string, number>();
  for (const line of lines) {
    counts.set(line, (counts.get(line) ?? 0) + 1);
  }

  const duplicates = [...counts.entries()]
    .filter(([, count]) => count > 1)
    .map(([addr]) => addr);

  return { duplicates, totalParsed: lines.length };
}
