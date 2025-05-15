import { type JSX } from "react";
import AnimatedInView from "../AnimatedInView";
import Text from "@/core/components/Text";
import type { AnimatedTitleProps } from "./AnimatedTitle.types";

export default function AnimatedTitle({
  children,
  id,
}: AnimatedTitleProps): JSX.Element {
  return (
    <AnimatedInView id={id} animationType="pulse">
      <Text className="section_title" as="h3" size="title" uppercase>
        {children}
      </Text>
    </AnimatedInView>
  );
}
