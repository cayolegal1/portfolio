import type { JSX, SVGAttributes } from "react";

type ArrowIconProps = SVGAttributes<SVGSVGElement> & {};

export default function ArrowIcon({
  width = "3rem",
  height = "3rem",
  fill = "white",
  ...props
}: ArrowIconProps): JSX.Element {
  return (
    <svg {...props} width={width} height={height} viewBox="0 -1010 960 960">
      <path
        d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
        fill={fill}
      />
    </svg>
  );
}
