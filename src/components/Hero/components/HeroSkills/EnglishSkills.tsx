"use client";
import { useState, useEffect } from "react";
import AnimatedType from "@/core/components/AnimatedType";
import gradient from "../../../../core/components/TextGradient/TextGradient.module.css";

const delay = 1800;

export default function EnglishSkills() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true);
    }, delay);
  }, []);

  return (
    <AnimatedType
      backSpeed={50}
      className={`${gradient.text_gradient_config} ${gradient.text_gradient}`}
      loop
      startDelay={isRendered ? 0 : delay}
      strings={["Software Developer", "App Developer", "Web Developer"]}
    />
  );
}
