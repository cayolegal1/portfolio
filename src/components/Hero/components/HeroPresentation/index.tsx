import AnimatedRender from "@/core/components/AnimatedRender";
import Text from "@/core/components/Text";
import data from "@/core/data/info.json";

export default function HeroPresentation(): JSX.Element {
  const { name } = data;
  return (
    <>
      <AnimatedRender animationType="fadeInDown">
        <Text as="h1">Hola,</Text>
      </AnimatedRender>

      <AnimatedRender delay="400ms" animationType="fadeInDown">
        <Text as="h1">
          Mi nombre es <Text variant="gradient">{name}</Text>
        </Text>
      </AnimatedRender>
    </>
  );
}
