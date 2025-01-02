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
  javascript: {
    name: "JavaScript",
    logo_path: `${path}/js.svg`,
  },
  typescript: {
    name: "TypeScript",
    logo_path: `${path}/ts.svg`,
  },
  react: {
    name: "React",
    logo_path: `${path}/react.svg`,
  },
  next_js: {
    name: "NextJS",
    logo_path: `${path}/next.svg`,
  },
  react_native: {
    name: "React Native",
    logo_path: `${path}/rn.svg`,
  },
  node_js: {
    name: "NodeJS",
    logo_path: `${path}/node.svg`,
  },
  express: {
    name: "Express",
    logo_path: `${path}/express.svg`,
  },
  zustand: {
    name: "Zustand",
    logo_path: `${path}/zustand.png`,
  },
  react_query: {
    name: "React Query",
    logo_path: `${path}/react_query.svg`,
  },
  tailwind_css: {
    name: "Tailwind CSS",
    logo_path: `${path}/tailwind.svg`,
  },
  material_ui: {
    name: "Material UI",
    logo_path: `${path}/material_ui.svg`,
  },
  socket_io: {
    name: "Socket.IO",
    logo_path: `${path}/socket_io.svg`,
  },
  jest: {
    name: "Jest",
    logo_path: `${path}/jest.svg`,
  },
  testing_library: {
    name: "Testing Library",
    logo_path: `${path}/testing_library.svg`,
  },
  vite: {
    name: "Vite",
    logo_path: `${path}/vite.svg`,
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

export const unspecializedTech: TechnologyHelper = {
  ".net": {
    name: ".NET",
    logo_path: `${path}/net.svg`,
  },
  sql: {
    name: "SQL",
    logo_path: `${path}/sql.svg`,
  },
  docker: {
    name: "Docker",
    logo_path: `${path}/docker.svg`,
  },
};

export const technologiesList: Technology[] = Object.values(technologies);
