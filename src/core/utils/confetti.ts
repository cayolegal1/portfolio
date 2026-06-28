const COLORS = [
  "#0691ee",
  "#39a6ef",
  "#22c55e",
  "#f59e0b",
  "#e879f9",
  "#f87171",
];

// Lluvia de confeti efímera para celebrar acciones puntuales (ej. envío del
// formulario). Sin dependencias: usa la Web Animations API y se autolimpia.
// Respeta prefers-reduced-motion.
export const celebrate = () => {
  if (typeof document === "undefined") return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

  const container = document.createElement("div");
  container.setAttribute("aria-hidden", "true");
  Object.assign(container.style, {
    position: "fixed",
    inset: "0",
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: "300",
  });
  document.body.appendChild(container);

  const PIECES = 90;
  for (let i = 0; i < PIECES; i++) {
    const piece = document.createElement("span");
    const size = 6 + Math.random() * 6;
    Object.assign(piece.style, {
      position: "absolute",
      top: "-5%",
      left: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size * 1.4}px`,
      background: COLORS[i % COLORS.length],
      borderRadius: Math.random() > 0.5 ? "50%" : "2px",
    });
    container.appendChild(piece);

    const driftX = (Math.random() * 2 - 1) * 140;
    const fallY = window.innerHeight * (0.7 + Math.random() * 0.5);
    const spin = (Math.random() * 2 - 1) * 720;
    piece.animate(
      [
        { transform: "translate(0, 0) rotate(0deg)", opacity: 1 },
        {
          transform: `translate(${driftX}px, ${fallY}px) rotate(${spin}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 1600 + Math.random() * 1200,
        easing: "cubic-bezier(0.2, 0.6, 0.3, 1)",
        fill: "forwards",
      },
    );
  }

  window.setTimeout(() => container.remove(), 3200);
};
