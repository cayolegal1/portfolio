import type { ReactNode } from "react";

export type Technology = {
  name: string;
  logo_path: ReactNode;
};

export type TechnologyHelper = {
  [key: string]: Technology;
};
