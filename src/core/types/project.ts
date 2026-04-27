export type Project = {
  description: string;
  images_path: string[];
  name: string;
  title: string;
  androidUrl?: string;
  iosUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
};

export type ProjectJson = {
  description: string;
  images_path: string;
  name: string;
  title: string;
  android_url?: string;
  ios_url?: string;
  website_url?: string;
  github_url?: string;
}