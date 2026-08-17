import { describe, expect, it } from "vitest";
import { GLOSSARY } from "./glossary";

const LANGS = ["es", "en", "pt", "fr"] as const;

describe("GLOSSARY data integrity", () => {
  it("has no duplicate ids", () => {
    const ids = GLOSSARY.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every language has a non-empty term and definition", () => {
    for (const entry of GLOSSARY) {
      for (const lang of LANGS) {
        const copy = entry[lang];
        expect(copy.term.trim().length, `${entry.id}.${lang}.term`).toBeGreaterThan(0);
        expect(
          copy.definition.trim().length,
          `${entry.id}.${lang}.definition`,
        ).toBeGreaterThan(0);
      }
    }
  });
});
