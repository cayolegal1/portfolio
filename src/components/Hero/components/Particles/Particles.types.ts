export type Particle = {
  color: string;
  fadeInSpeed: number;
  fadeOutSpeed: number;
  fadingIn: boolean;
  opacity: number;
  radius: number;
  speed: { x: number; y: number };
  x: number;
  y: number;
};

export type ParticlesProps = {
  number?: number;
  timeout?: number;
};
