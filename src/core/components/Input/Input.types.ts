import type { InputHTMLAttributes } from "react";

type InputVariant = "normal" | "textarea";

export type InputProps = InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
  label: string;
  variant?: InputVariant;
};