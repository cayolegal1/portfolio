import type { Technology, TechnologyHelper } from "../types/technology";

const path = "/tech_logos";

export const technologies: TechnologyHelper = {
  html: {
    name: "HTML",
    logo_path: `${path}/html.svg`,
  },
  css: {
    name: "CSS",
    logo_path: `${path}/css.svg`,
  },
  js: {
    name: "JavaScript",
    logo_path: `${path}/js.svg`,
  },
  ts: {
    name: "TypeScript",
    logo_path: `${path}/ts.svg`,
  },
  react: {
    name: "React",
    logo_path: `${path}/react.svg`,
  },
  nextjs: {
    name: "NextJS",
    logo_path: `${path}/next.svg`,
  },
  react_native: {
    name: "React Native",
    logo_path: `${path}/rn.svg`,
  },
  zustand: {
    name: "Zustand",
    logo_path: `${path}/zustand.png`,
  },
  nodejs: {
    name: "NodeJS",
    logo_path: `${path}/node.svg`,
  },
  express: {
    name: "ExpressJS",
    logo_path: `${path}/express.svg`,
  },
  vite: {
    name: "vite",
    logo_path: `${path}/vite.svg`,
  },
  react_query: {
    name: "React Query",
    logo_path: `${path}/react_query.svg`,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    logo_path: `${path}/tailwind.svg`,
  },
  materialui: {
    name: "Material UI",
    logo_path: `${path}/material_ui.svg`,
  },
  jest: {
    name: "Jest",
    logo_path: `${path}/jest.svg`,
  },
  testing_library: {
    name: "React Testing Library",
    logo_path: `${path}/testing_library.svg`,
  },
  vitest: {
    name: "Vitest",
    logo_path: `${path}/vitest.svg`,
  },
  git: {
    name: "Git",
    logo_path: `${path}/git.svg`,
  },
};

export const technologiesList: Technology[] = Object.values(technologies);
