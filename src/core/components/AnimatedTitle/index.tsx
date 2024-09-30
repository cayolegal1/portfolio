import AnimatedInView from "../AnimatedInView";
import Text from "../Text";
import type { AnimatedTitleProps } from "./AnimatedTitle.types";

export default function AnimatedTitle({ children }: AnimatedTitleProps): JSX.Element {
  return (
    <AnimatedInView id="experience_title" animationType="pulse">
      <Text as="h3" size="title" id="experience_title">
        {children}
      </Text>
    </AnimatedInView>
  );
}
