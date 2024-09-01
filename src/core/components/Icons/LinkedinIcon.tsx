import SvgGradient from "../SvgGradient";

const gradientId = "linkedin_gradient";

export default function LinkedinIcon(): JSX.Element {
  return (
    <SvgGradient
      properties={{ width: "5.5rem", height: "5rem", viewBox: "0 0 256 250" }}
      gradientId={gradientId}
    >
      <g
        fillRule="nonzero"
        stroke="none"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
        
      >
        <g transform="scale(4,4)">
          <path
            d="M32,6c-14.359,0 -26,11.641 -26,26c0,14.359 11.641,26 26,26c14.359,0 26,-11.641 26,-26c0,-14.359 -11.641,-26 -26,-26zM25,44h-5v-18h5zM22.485,24h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM44,44h-5v-9c0,-3 -1.446,-4 -3,-4c-1.445,0 -3,1 -3,4v9h-5v-18h5v3c0.343,-0.981 1.984,-3 5,-3c4,0 6,3 6,8z"
            fill={`url(#${gradientId})`}
          />
        </g>
      </g>
    </SvgGradient>
  );
}
