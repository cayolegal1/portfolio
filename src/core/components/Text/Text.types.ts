import type {
  ElementType,
  HTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";
import type { TextGradientProps } from "../TextGradient/TextGradient.types";

export type TextVariant = "normal" | "gradient";
export type TextSize =
  | "xl"
  | "title"
  | "subtitle"
  | "text"
  | "description"
  | "caption";

type BaseTextProps<T extends ElementType> = TextGradientProps & {
  as?: T;
  children: ReactNode;
  variant?: TextVariant;
  size?: TextSize;
  centered?: boolean;
};

export type TextProps<T extends ElementType> = T extends "label"
  ? BaseTextProps<T> & LabelHTMLAttributes<HTMLLabelElement>
  : BaseTextProps<T> & HTMLAttributes<HTMLElement>;
