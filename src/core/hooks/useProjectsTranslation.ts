import { useTranslations } from "next-intl";
import { Project } from "../types/project";

export const useProjectsTranslation = () => {
  const translate = useTranslations("Projects");
  //   const arr = Array.from(Array(Number(translate("length"))).keys());
  const arr = Array.from(Array(1).keys());
  const projects: Project[] = arr.map((_, index) => {
    return {
      id: `project_${index}`,
      name: translate(`${index}.name` as string),
      title: translate(`${index}.title` as string),
      description: translate(`${index}.description` as string),
      androidUrl: translate(`${index}.android_url` as string) || undefined,
      iosUrl: translate(`${index}.ios_url` as string) || undefined,
      githubUrl: translate(`${index}.github_url` as string) || undefined,
      websiteUrl: translate(`${index}.website_url` as string) || undefined,
      images_path: translate(`${index}.images_path` as string)
        .split(",")
        .filter(Boolean),
    };
  });

  return projects;
};
