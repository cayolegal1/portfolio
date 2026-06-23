import { useTranslations } from "next-intl";
import { Project, ProjectJson } from "../types/project";
import { technologies, unspecializedTech } from "../data/technologies";
import type { Technology } from "../types/technology";

const getTechnology = (tech: string): Technology => ({
  name: technologies[tech]?.name || unspecializedTech[tech]?.name,
  logo_path:
    technologies[tech]?.logo_path || unspecializedTech[tech]?.logo_path,
});

export const useProjectsTranslation = () => {
  const translate = useTranslations("Projects");
  const arr = translate.raw("items") as ProjectJson[];
  const projects: Project[] = arr.map((project, index) => {
    return {
      id: `project_${index}_${project.name}`,
      name: project.name,
      title: project.title,
      description: project.description,
      androidUrl: project.android_url,
      iosUrl: project.ios_url,
      githubUrl: project.github_url,
      websiteUrl: project.website_url,
      imagesPath: project.images_path.filter(Boolean),
      technologies: project.technologies
        .map(getTechnology)
        .filter(tech => Boolean(tech.name)),
    };
  });

  return projects;
};
