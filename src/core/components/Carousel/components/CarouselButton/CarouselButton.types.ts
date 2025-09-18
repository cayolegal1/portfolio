import { ButtonHTMLAttributes } from "react";

export type CarouselButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  side: "right" | "left";
};
