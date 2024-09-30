import AnimatedInView from "../AnimatedInView";
import Text from "@/core/components/Text";
import type { AnimatedTitleProps } from "./AnimatedTitle.types";

export default function AnimatedTitle({ children, id }: AnimatedTitleProps): JSX.Element {
  return (
    <AnimatedInView id={id} animationType="pulse">
      <Text as="h3" size="title" id={id}>
        {children}
      </Text>
    </AnimatedInView>
  );
}
