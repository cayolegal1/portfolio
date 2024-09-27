import { useTranslations } from "next-intl";

export const useExperienceTranslation = () => {
  const translate = useTranslations("Experience");
  const arr = Array.from(Array(Number(translate("length"))).keys());
  const experiences = arr.map(
    (_, index) => {
      return {
        id: index,
        company: translate(`${index}.company` as any),
        position: translate(`${index}.position` as any),
        from_date: translate(`${index}.from_date` as any),
        description: translate(`${index}.description` as any),
      };
    },
  );

  return experiences;
};
