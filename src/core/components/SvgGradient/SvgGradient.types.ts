import { ReactNode, SVGAttributes } from "react";

export type SvgGradientProps = {
  children: ReactNode;
  properties: SVGAttributes<SVGSVGElement>;
  gradientId: string;
}