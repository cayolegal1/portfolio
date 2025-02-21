export type Technology = {
  name: string;
  logo_path: string;
  url?: string;
};

export type TechnologyHelper = {
  [key: string]: Technology;
};
