import type { ElementType, HTMLAttributes, ReactNode } from "react";
import type { TextGradientProps } from "../TextGradient/TextGradient.types";

export type TextVariant = "normal" | "gradient";
export type TextSize = "xl" | "title" | "subtitle" | "text" | "description" | "caption";

export type TextProps = HTMLAttributes<HTMLElement> &
  TextGradientProps & {
    as?: ElementType;
    children: ReactNode;
    variant?: TextVariant;
    size?: TextSize;
    centered?: boolean;
  };
