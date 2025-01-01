import { useTranslations } from "next-intl";
import { technologies, unspecializedTech } from "../data/technologies";
import { Technology } from "../types/technology";

const getTechnology = (tech: string): Technology => {
  return {
    name: technologies[tech]?.name || unspecializedTech[tech]?.name,
    logo_path:
      technologies[tech]?.logo_path || unspecializedTech[tech]?.logo_path,
  };
};

export const useExperienceTranslation = () => {
  const translate = useTranslations("Experience");
  const arr = Array.from(Array(Number(translate("length"))).keys());
  const experiences = arr.map((_, index) => {
    return {
      id: `experience_${index}`,
      company: translate(`${index}.company` as any),
      company_url: translate(`${index}.company_url` as any),
      company_logo: translate(`${index}.company_logo` as any),
      position: translate(`${index}.position` as any),
      from_date: translate(`${index}.from_date` as any),
      description: translate(`${index}.description` as any),
      technologies: translate(`${index}.technologies` as any)
        .split(",")
        .filter(Boolean)
        .map(tech => getTechnology(tech)),
    };
  });

  return experiences;
};
