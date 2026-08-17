import { describe, expect, it } from "vitest";
import {
  computeScore,
  findReusedAddresses,
  verdictFor,
  weakestPrinciples,
} from "./privacy-score";
import { PRINCIPLES } from "./principles";

describe("computeScore", () => {
  it("returns a null score when nothing was answered", () => {
    const result = computeScore({});
    expect(result.score).toBeNull();
    expect(result.answered).toBe(0);
    expect(result.totalQuestions).toBe(PRINCIPLES.length);
  });

  it("gives full marks when every principle is answered yes", () => {
    const answers = Object.fromEntries(
      PRINCIPLES.map((p) => [p.id, "yes" as const]),
    );
    const result = computeScore(answers);
    expect(result.score).toBe(100);
    expect(result.answered).toBe(PRINCIPLES.length);
  });

  it("gives zero when every answered principle is no", () => {
    const answers = Object.fromEntries(
      PRINCIPLES.map((p) => [p.id, "no" as const]),
    );
    const result = computeScore(answers);
    expect(result.score).toBe(0);
  });

  it("only counts answered principles toward the denominator", () => {
    const [first, second] = PRINCIPLES;
    const result = computeScore({ [first.id]: "yes" });
    expect(result.answered).toBe(1);
    expect(result.score).toBe(100);
    void second;
  });

  it("weighs 'unsure' as half credit", () => {
    const [first] = PRINCIPLES;
    const result = computeScore({ [first.id]: "unsure" });
    expect(result.score).toBe(50);
  });

  it("weighs heavier principles more than lighter ones", () => {
    const heavy = PRINCIPLES.find((p) => p.weight === 3);
    const light = PRINCIPLES.find((p) => p.weight === 1);
    if (!heavy || !light) throw new Error("fixture assumption broke");

    const answers = { [heavy.id]: "yes" as const, [light.id]: "no" as const };
    const result = computeScore(answers);
    // 3 puntos ganados sobre 4 totales = 75, no un promedio simple del 50%
    expect(result.score).toBe(75);
  });
});

describe("verdictFor", () => {
  it("classifies the documented thresholds", () => {
    expect(verdictFor(100)).toBe("approved");
    expect(verdictFor(80)).toBe("approved");
    expect(verdictFor(79)).toBe("review");
    expect(verdictFor(50)).toBe("review");
    expect(verdictFor(49)).toBe("critical");
    expect(verdictFor(0)).toBe("critical");
  });
});

describe("weakestPrinciples", () => {
  it("only includes principles answered no or unsure", () => {
    const [a, b, c] = PRINCIPLES;
    const result = weakestPrinciples({
      [a.id]: "yes",
      [b.id]: "no",
      [c.id]: "unsure",
    });
    const ids = result.map((p) => p.id);
    expect(ids).not.toContain(a.id);
    expect(ids).toContain(b.id);
    expect(ids).toContain(c.id);
  });

  it("sorts by weight descending and respects the limit", () => {
    const answers = Object.fromEntries(
      PRINCIPLES.map((p) => [p.id, "no" as const]),
    );
    const result = weakestPrinciples(answers, 3);
    expect(result).toHaveLength(3);
    for (let i = 1; i < result.length; i++) {
      expect(result[i - 1].weight).toBeGreaterThanOrEqual(result[i].weight);
    }
  });
});

describe("findReusedAddresses", () => {
  it("finds no duplicates in a unique list", () => {
    const result = findReusedAddresses("bc1qaaa\nbc1qbbb\nbc1qccc");
    expect(result.duplicates).toEqual([]);
    expect(result.totalParsed).toBe(3);
  });

  it("detects a repeated address", () => {
    const result = findReusedAddresses("bc1qaaa\nbc1qbbb\nbc1qaaa");
    expect(result.duplicates).toEqual(["bc1qaaa"]);
    expect(result.totalParsed).toBe(3);
  });

  it("ignores blank lines and surrounding whitespace", () => {
    const result = findReusedAddresses("  bc1qaaa  \n\n\tbc1qaaa\n   \n");
    expect(result.duplicates).toEqual(["bc1qaaa"]);
    expect(result.totalParsed).toBe(2);
  });

  it("returns an empty result for empty input", () => {
    const result = findReusedAddresses("");
    expect(result.duplicates).toEqual([]);
    expect(result.totalParsed).toBe(0);
  });
});
