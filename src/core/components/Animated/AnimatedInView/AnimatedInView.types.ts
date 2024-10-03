import type { AnimatedRenderProps } from "../AnimatedRender/AnimatedRender.types";

export type AnimatedInViewProps = AnimatedRenderProps & {
  once?: boolean;
  useId?: boolean;
};