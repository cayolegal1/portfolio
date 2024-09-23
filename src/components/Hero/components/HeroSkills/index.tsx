
import { getLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import AnimatedRender from "@/core/components/AnimatedRender";
import EnglishSkills from "./EnglishSkills";
import DefaultSkills from "./DefaultSkills";
import Text from "@/core/components/Text";
import styles from "./HeroSkills.module.css";

export default async function HeroSkills() {
  const translate = useTranslations("Hero");
  const locale = await getLocale();
  return (
    <AnimatedRender delay="1.2s">
      <Text as="h2" className={styles.hero_skills_content}>
        {translate("i_am")}{" "}
        {locale === "en" ? <EnglishSkills /> : <DefaultSkills />}
      </Text>
    </AnimatedRender>
  );
}
