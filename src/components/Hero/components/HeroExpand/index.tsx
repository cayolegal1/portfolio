"use client";
import Image from "next/image";
import AnimatedRender from "@/core/components/AnimatedRender";
import styles from "./HeroExpand.module.css";

export default function HeroExpand(): JSX.Element {
  return (
    <AnimatedRender
      animationType="bounceInDown"
      delay="3s"
      className={styles.expand_container}
    >
      <Image
        src="/icons/expand_more.svg"
        alt="expand_more"
        width={60}
        height={60}
        className={styles.expand}
      />
    </AnimatedRender>
  );
}
