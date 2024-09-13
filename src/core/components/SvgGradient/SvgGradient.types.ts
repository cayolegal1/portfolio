import type { HTMLAttributes, ReactNode, SVGAttributes } from "react";

export type SvgGradientProps = HTMLAttributes<HTMLOrSVGElement> & {
  children: ReactNode;
  properties: SVGAttributes<SVGSVGElement>;
  gradientId: string;
}