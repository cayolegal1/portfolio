import SvgGradient from "../SvgGradient";

const gradientId = "expand_gradient";

export default function ExpandIcon(): JSX.Element {
  return (
    <SvgGradient
      properties={{ width: "6.0rem", height: "6.0rem", viewBox: "0 -960 960 960" }}
      gradientId={gradientId}
    >
      <path
        d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
        fill={`url(#${gradientId})`}
      />
    </SvgGradient>
  );
}
