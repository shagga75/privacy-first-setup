import { describe, expect, it } from "vitest";
import { PRINCIPLES, principlesFor, type Level, type UseCase } from "./principles";

const LANGS = ["es", "en", "pt", "fr"] as const;
const LEVELS: Level[] = ["beginner", "intermediate"];
const USE_CASES: UseCase[] = ["savings", "daily", "donations"];

describe("PRINCIPLES data integrity", () => {
  it("has no duplicate ids", () => {
    const ids = PRINCIPLES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("only uses documented levels and use cases", () => {
    for (const p of PRINCIPLES) {
      expect(p.levels.length).toBeGreaterThan(0);
      expect(p.useCases.length).toBeGreaterThan(0);
      for (const level of p.levels) expect(LEVELS).toContain(level);
      for (const uc of p.useCases) expect(USE_CASES).toContain(uc);
    }
  });

  it("every language has non-empty title, body and question", () => {
    for (const p of PRINCIPLES) {
      for (const lang of LANGS) {
        const copy = p[lang];
        expect(copy.title.trim().length, `${p.id}.${lang}.title`).toBeGreaterThan(0);
        expect(copy.body.trim().length, `${p.id}.${lang}.body`).toBeGreaterThan(0);
        expect(copy.question.trim().length, `${p.id}.${lang}.question`).toBeGreaterThan(0);
      }
    }
  });
});

describe("principlesFor", () => {
  it("only returns principles matching both the level and the use case", () => {
    const result = principlesFor("beginner", "savings");
    for (const p of result) {
      expect(p.levels).toContain("beginner");
      expect(p.useCases).toContain("savings");
    }
  });

  it("excludes principles restricted to a different level", () => {
    const intermediateOnly = PRINCIPLES.find(
      (p) => p.levels.length === 1 && p.levels[0] === "intermediate",
    );
    if (!intermediateOnly) throw new Error("fixture assumption broke");

    const result = principlesFor("beginner", "savings");
    expect(result.map((p) => p.id)).not.toContain(intermediateOnly.id);
  });
});
