import { TECH } from "./tech-name";
import type { Technology, TechnologyHelper } from "../types/technology";

const logo_path = "/tech_logos";

export const technologies: TechnologyHelper = Object.freeze({
  [TECH.HTML]: {
    name: "HTML",
    logo_path: `${logo_path}/html.svg`,
    url: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  [TECH.CSS]: {
    name: "CSS",
    logo_path: `${logo_path}/css.svg`,
    url: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  [TECH.JS]: {
    name: "JavaScript",
    logo_path: `${logo_path}/js.svg`,
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  [TECH.TS]: {
    name: "TypeScript",
    logo_path: `${logo_path}/ts.svg`,
    url: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",
  },
  [TECH.REACT]: {
    name: "React",
    logo_path: `${logo_path}/react.svg`,
    url: "https://es.react.dev/",
  },
  [TECH.NEXT]: {
    name: "NextJS",
    logo_path: `${logo_path}/next.svg`,
    url: "https://nextjs.org/",
  },
  [TECH.REACT_NATIVE]: {
    name: "React Native",
    logo_path: `${logo_path}/rn.svg`,
    url: "https://reactnative.dev/",
  },
  [TECH.NODE]: {
    name: "NodeJS",
    logo_path: `${logo_path}/node.svg`,
    url: "https://nodejs.org/en",
  },
  [TECH.EXPRESS]: {
    name: "Express",
    logo_path: `${logo_path}/express.svg`,
    url: "https://expressjs.com/",
  },
  [TECH.ZUSTAND]: {
    name: "Zustand",
    logo_path: `${logo_path}/zustand.webp`,
    url: "https://zustand-demo.pmnd.rs/",
  },
  [TECH.REACT_QUERY]: {
    name: "React Query",
    logo_path: `${logo_path}/react_query.svg`,
    url: "https://tanstack.com/query/latest",
  },
  [TECH.TAILWIND]: {
    name: "Tailwind CSS",
    logo_path: `${logo_path}/tailwind.svg`,
    url: "https://tailwindcss.com/",
  },
  [TECH.MATERIAL_UI]: {
    name: "Material UI",
    logo_path: `${logo_path}/material_ui.svg`,
    url: "https://mui.com/",
  },
  [TECH.JEST]: {
    name: "Jest",
    logo_path: `${logo_path}/jest.svg`,
    url: "https://jestjs.io/",
  },
  [TECH.TESTING_LIBRARY]: {
    name: "Testing Library",
    logo_path: `${logo_path}/testing_library.svg`,
    url: "https://testing-library.com/",
  },
  [TECH.VITE]: {
    name: "Vite",
    logo_path: `${logo_path}/vite.svg`,
    url: "https://vite.dev/",
  },
  [TECH.VITEST]: {
    name: "Vitest",
    logo_path: `${logo_path}/vitest.svg`,
    url: "https://vitest.dev/",
  },
  [TECH.GIT]: {
    name: "Git",
    logo_path: `${logo_path}/git.svg`,
    url: "https://git-scm.com/",
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
  [TECH.AUTH0]: {
    name: "Auth0",
    logo_path: `${logo_path}/auth0.svg`,
    url: "https://auth0.com",
  },
  [TECH.SHADCN]: {
    name: "Shadcn",
    logo_path: `${logo_path}/shadcn.svg`,
  },
  [TECH.STORYBOOK]: {
    name: "Storybook",
    logo_path: `${logo_path}/storybook.svg`,
  },
  [TECH.GITLAB]: {
    name: "Gitlab CI CD",
    logo_path: `${logo_path}/gitlab.svg`,
  },
  [TECH.SOCKET_IO]: {
    name: "Socket.IO",
    logo_path: `${logo_path}/socket_io.svg`,
    url: "https://socket.io/",
  },
  [TECH.FIGMA]: {
    name: "Figma",
    logo_path: `${logo_path}/figma.svg`,
  },
});

export const technologiesList: Technology[] = Object.values(technologies);
