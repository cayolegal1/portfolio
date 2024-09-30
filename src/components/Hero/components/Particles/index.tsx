"use client";
import React, { useEffect, useRef } from "react";
import type { ParticlesProps, Particle } from "./Particles.types";
import styles from "./Particles.module.css";

const defaultNumber = window.innerWidth >= 550 ? 25 : 15;

export default function Particles({
  number = defaultNumber,
  timeout = 2000,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: Particle[] = [];

  const createParticles = () => {
    for (let i = 0; i < number; i++) {
      setTimeout(() => {
        const radius = Math.random() + 2;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const speedX = (Math.random() - 0.6) * 0.2;
        const speedY = (Math.random() - 0.6) * 0.2;
        const color = "gray";
        const opacity = 0;
        const fadeInSpeed = 0.005 + Math.random() * 0.00002; 
        const fadeOutSpeed = 0.005 + Math.random() * 0.001; 

        particles.push({
          x,
          y,
          radius,
          color,
          speed: { x: speedX, y: speedY },
          opacity,
          fadeInSpeed,
          fadeOutSpeed,
          fadingIn: true,
        });
      }, i * 100);
    }
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity; 
      ctx.fill();
      ctx.closePath();

      particle.x += particle.speed.x;
      particle.y += particle.speed.y;

      if (particle.fadingIn) {
        particle.opacity += particle.fadeInSpeed; 
        if (particle.opacity >= 1) {
          particle.opacity = 1;
          particle.fadingIn = false;
        }
      } else {
        particle.opacity -= particle.fadeOutSpeed; 
        if (particle.opacity <= 0) {
          particle.opacity = 0;
          particle.fadingIn = true;
        }
      }

      if (
        particle.x + particle.radius > ctx.canvas.width ||
        particle.x - particle.radius < 0
      ) {
        particle.speed.x *= -1;
      }
      if (
        particle.y + particle.radius > ctx.canvas.height ||
        particle.y - particle.radius < 0
      ) {
        particle.speed.y *= -1;
      }
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        drawParticles(ctx);
        requestAnimationFrame(animate);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      createParticles();
      animate();
    }, timeout);

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
