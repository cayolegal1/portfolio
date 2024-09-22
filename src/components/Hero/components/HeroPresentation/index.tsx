import { useTranslations } from "next-intl";
import AnimatedRender from "@/core/components/AnimatedRender";
import Text from "@/core/components/Text";
import HeroSkills from "../HeroSkills";
import data from "@/core/data/user-info.json";

export default function HeroPresentation(): JSX.Element {
  const translate = useTranslations("Hero");
  const { name } = data;
  return (
    <>
      <AnimatedRender animationType="fadeInDown">
        <Text as="p">{translate("greeting")},</Text>
      </AnimatedRender>

      <AnimatedRender delay="400ms" animationType="fadeInDown">
        <Text as="h1">
          {translate("my_name_is")} <Text variant="gradient">{name}</Text>
        </Text>
      </AnimatedRender>
      <HeroSkills />
    </>
  );
}
