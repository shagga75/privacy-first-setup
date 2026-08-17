import { describe, expect, it } from "vitest";
import { dictionaries, LANG_NAMES, type Lang } from "./dictionaries";

const LANGS: Lang[] = ["es", "en", "pt", "fr"];

function walk(node: unknown, path: string, onLeaf: (path: string, value: unknown) => void) {
  if (typeof node === "function") return; // reusedFound se prueba aparte
  if (node !== null && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      walk(value, path ? `${path}.${key}` : key, onLeaf);
    }
    return;
  }
  onLeaf(path, node);
}

describe("dictionaries data integrity", () => {
  it("has an entry for every supported language", () => {
    for (const lang of LANGS) {
      expect(dictionaries[lang]).toBeDefined();
      expect(LANG_NAMES[lang]).toBeTruthy();
    }
  });

  it("has no empty strings in any language", () => {
    for (const lang of LANGS) {
      walk(dictionaries[lang], "", (path, value) => {
        expect(typeof value, `${lang}.${path}`).toBe("string");
        expect((value as string).trim().length, `${lang}.${path} is empty`).toBeGreaterThan(0);
      });
    }
  });

  it("reusedFound interpolates the count in every language", () => {
    for (const lang of LANGS) {
      const message = dictionaries[lang].score.reusedFound(3);
      expect(message).toContain("3");
      expect(message.length).toBeGreaterThan(0);
    }
  });
});
