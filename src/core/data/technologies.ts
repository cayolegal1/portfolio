import { TECH } from "./tech-name";
import type { Technology, TechnologyHelper } from "../types/technology";

const logo_path = "/tech_logos";

export const technologies: TechnologyHelper = Object.freeze({
  [TECH.HTML]: {
    name: "HTML",
    logo_path: `${logo_path}/html.svg`,
  },
  [TECH.CSS]: {
    name: "CSS",
    logo_path: `${logo_path}/css.svg`,
  },
  [TECH.JS]: {
    name: "JavaScript",
    logo_path: `${logo_path}/js.svg`,
  },
  [TECH.TS]: {
    name: "TypeScript",
    logo_path: `${logo_path}/ts.svg`,
  },
  [TECH.REACT]: {
    name: "React",
    logo_path: `${logo_path}/react.svg`,
  },
  [TECH.NEXT]: {
    name: "NextJS",
    logo_path: `${logo_path}/next.svg`,
  },
  [TECH.REACT_NATIVE]: {
    name: "React Native",
    logo_path: `${logo_path}/rn.svg`,
  },
  [TECH.NODE]: {
    name: "NodeJS",
    logo_path: `${logo_path}/node.svg`,
  },
  [TECH.EXPRESS]: {
    name: "Express",
    logo_path: `${logo_path}/express.svg`,
  },
  [TECH.ZUSTAND]: {
    name: "Zustand",
    logo_path: `${logo_path}/zustand.webp`,
  },
  [TECH.REACT_QUERY]: {
    name: "React Query",
    logo_path: `${logo_path}/react_query.svg`,
  },
  [TECH.TAILWIND]: {
    name: "Tailwind CSS",
    logo_path: `${logo_path}/tailwind.svg`,
  },
  [TECH.MATERIAL_UI]: {
    name: "Material UI",
    logo_path: `${logo_path}/material_ui.svg`,
  },
  [TECH.SOCKET_IO]: {
    name: "Socket.IO",
    logo_path: `${logo_path}/socket_io.svg`,
  },
  [TECH.JEST]: {
    name: "Jest",
    logo_path: `${logo_path}/jest.svg`,
  },
  [TECH.TESTING_LIBRARY]: {
    name: "Testing Library",
    logo_path: `${logo_path}/testing_library.svg`,
  },
  [TECH.VITE]: {
    name: "Vite",
    logo_path: `${logo_path}/vite.svg`,
  },
  [TECH.VITEST]: {
    name: "Vitest",
    logo_path: `${logo_path}/vitest.svg`,
  },
  [TECH.GIT]: {
    name: "Git",
    logo_path: `${logo_path}/git.svg`,
  },
});

export const unspecializedTech: TechnologyHelper = Object.freeze({
  [TECH.NET]: {
    name: ".NET",
    logo_path: `${logo_path}/net.svg`,
  },
  [TECH.SQL]: {
    name: "SQL",
    logo_path: `${logo_path}/sql.svg`,
  },
  [TECH.DOCKER]: {
    name: "Docker",
    logo_path: `${logo_path}/docker.svg`,
  },
  [TECH.FIGMA]: {
    name: "Figma",
    logo_path: `${logo_path}/figma.svg`,
  },
});

export const technologiesList: Technology[] = Object.values(technologies);
