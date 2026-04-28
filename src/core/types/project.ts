export type Project = {
  id: string;
  androidUrl?: string;
  description: string;
  githubUrl?: string;
  imagesPath: string[];
  iosUrl?: string;
  name: string;
  technologies: string[];
  title: string;
  websiteUrl?: string;
};

export type ProjectJson = {
  android_url?: string;
  description: string;
  github_url?: string;
  images_path: string[];
  ios_url?: string;
  name: string;
  technologies: string[];
  title: string;
  website_url?: string;
};
