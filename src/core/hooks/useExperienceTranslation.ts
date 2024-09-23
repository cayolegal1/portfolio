import { useTranslations } from "next-intl";

export const useExperienceTranslation = () => {
  const translate = useTranslations("Experience");
  const experiences = Array.from(Array(Number(translate("length"))).keys()).map(
    (_, index) => {
      return {
        id: index,
        company: translate(`${index}.company`),
        position: translate(`${index}.position`),
        from_date: translate(`${index}.from_date`),
        description: translate(`${index}.description`),
      };
    },
  );

  return experiences;
};
