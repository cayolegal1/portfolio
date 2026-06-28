import { technologies, unspecializedTech } from "./technologies";
import { TECH } from "./tech-name";
import type { Technology } from "../types/technology";

export type TechCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "database"
  | "testing"
  | "tooling";

export type CategorizedTech = Technology & { category: TechCategory };

const resolve = (key: string): Technology =>
  technologies[key] ?? unspecializedTech[key];

// Categoría principal de cada tecnología mostrada en la sección.
const ENTRIES: Array<[string, TechCategory]> = [
  [TECH.HTML, "frontend"],
  [TECH.CSS, "frontend"],
  [TECH.JS, "frontend"],
  [TECH.TS, "frontend"],
  [TECH.REACT, "frontend"],
  [TECH.NEXT, "frontend"],
  [TECH.ZUSTAND, "frontend"],
  [TECH.REACT_QUERY, "frontend"],
  [TECH.TAILWIND, "frontend"],
  [TECH.MATERIAL_UI, "frontend"],
  [TECH.NODE, "backend"],
  [TECH.EXPRESS, "backend"],
  [TECH.REACT_NATIVE, "mobile"],
  [TECH.SQL, "database"],
  [TECH.JEST, "testing"],
  [TECH.TESTING_LIBRARY, "testing"],
  [TECH.VITEST, "testing"],
  [TECH.VITE, "tooling"],
  [TECH.GIT, "tooling"],
];

export const techCategories: TechCategory[] = [
  "frontend",
  "backend",
  "mobile",
  "database",
  "testing",
  "tooling",
];

export const categorizedTech: CategorizedTech[] = ENTRIES.map(
  ([key, category]) => ({ ...resolve(key), category }),
);
