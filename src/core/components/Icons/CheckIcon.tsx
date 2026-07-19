import type { JSX, SVGAttributes } from "react";

type CheckIconProps = SVGAttributes<SVGSVGElement> & {};

export default function CheckIcon({
  width = "1rem",
  height = "1rem",
  fill = "currentColor",
  ...props
}: CheckIconProps): JSX.Element {
  return (
    <svg {...props} width={width} height={height} viewBox="0 -960 960 960">
      <path
        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
        fill={fill}
      />
    </svg>
  );
}
