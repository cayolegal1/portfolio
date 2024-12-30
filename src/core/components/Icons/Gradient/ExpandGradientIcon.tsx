import { SVGAttributes } from "react";
import SvgGradient from "../../SvgGradient";

const defaultGradientId = "expand_gradient";

export default function ExpandGradientIcon({
  properties,
  gradientId = defaultGradientId,
  color = "",
}: {
  properties?: SVGAttributes<SVGSVGElement>;
  gradientId?: string;
  color?: string;
}): JSX.Element {
  return (
    <SvgGradient
      properties={{
        width: properties?.width || "6.0rem",
        height: properties?.height || "6.0rem",
        viewBox: properties?.viewBox || "0 -960 960 960",
      }}
      gradientId={gradientId}
      {...properties}
    >
      <path
        d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
        fill={color || `url(#${gradientId})`}
      />
    </SvgGradient>
  );
}
