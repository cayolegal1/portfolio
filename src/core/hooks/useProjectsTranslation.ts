import { useTranslations } from "next-intl";
import { Project, ProjectJson } from "../types/project";

export const useProjectsTranslation = () => {
  const translate = useTranslations("Projects");
  const arr = translate.raw("items") as ProjectJson[]
  const projects: Project[] = arr.map((project, index) => {
    return {
      id: `project_${index}`,
      name: project.name,
      title: project.title,
      description: project.description,
      androidUrl: project.android_url,
      iosUrl: project.ios_url,
      githubUrl: project.github_url,
      websiteUrl: project.website_url,
      images_path: project.images_path
        .split(",")
        .filter(Boolean),
    };
  });

  return projects;
};
