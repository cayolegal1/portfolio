"use client";
import { useEffect, useRef, useState, type JSX } from "react";
import Text from "../Text";

type CountUpProps = {
  value: number;
  prefix?: string;
  duration?: number;
  className?: string;
};

export default function CountUp({
  value,
  prefix = "",
  duration = 1200,
  className,
}: CountUpProps): JSX.Element {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();

        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        let start: number | null = null;
        let raf = 0;
        const step = (timestamp: number) => {
          if (start === null) start = timestamp;
          const progress = reduce
            ? 1
            : Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) raf = window.requestAnimationFrame(step);
        };
        raf = window.requestAnimationFrame(step);
        el.dataset.raf = String(raf);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (el.dataset.raf) window.cancelAnimationFrame(Number(el.dataset.raf));
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      <Text
        as="span"
        centered={false}
        className={className}
        size="title"
        variant="gradient"
      >
        {prefix}
        {display}
      </Text>
    </span>
  );
}
