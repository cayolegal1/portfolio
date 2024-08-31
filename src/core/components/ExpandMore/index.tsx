"use client";
import Image from "next/image";
import styles from "./ExpandMore.module.css";

export default function ExpandMore(): JSX.Element {
  return (
    <>
      <Image
        src="/icons/expand_more.svg"
        alt="expand_more"
        width={60}
        height={60}
        className={styles.see_more}
      />
    </>
  );
}
