export type Technology = {
  name: string;
  logo_path: string;
};

export type TechnologyHelper = {
  [key: string]: Technology;
};
