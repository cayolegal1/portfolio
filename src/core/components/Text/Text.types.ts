import { ElementType, HTMLAttributes, ReactNode } from "react";

type TextVariant = "normal" | "gradient";

export type TextProps = HTMLAttributes<HTMLElement> &{
  as?: ElementType;
  children: ReactNode;
  variant?: TextVariant;
  centered?: boolean;
}