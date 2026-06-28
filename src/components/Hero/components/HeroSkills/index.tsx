import { useTranslations } from "next-intl";
import Text from "@/core/components/Text";
import heroStyles from "../../Hero.module.css";
import styles from "./HeroSkills.module.css";

export default function HeroSkills() {
  const translate = useTranslations("Hero");
  return (
    <Text
      as="h2"
      className={`${styles.hero_skills_content} ${heroStyles.enter}`}
      style={{ animationDelay: "0.16s" }}
    >
      {translate("i_am")}{" "}
      <Text as="span" variant="gradient">
        {translate("developer")} {translate("of_software")}
      </Text>
    </Text>
  );
}
