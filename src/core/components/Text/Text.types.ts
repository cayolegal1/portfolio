import { ElementType, HTMLAttributes, ReactNode } from "react";
import { TextGradientProps } from "../TextGradient/TextGradient.types";

type TextVariant = "normal" | "gradient";

export type TextProps = HTMLAttributes<HTMLElement> &
  TextGradientProps & {
    as?: ElementType;
    children: ReactNode;
    variant?: TextVariant;
    centered?: boolean;
  };
