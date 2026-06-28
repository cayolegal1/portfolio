import Image from "next/image";
import { technologiesList } from "@/core/data/technologies";
import styles from "./HeroStack.module.css";

import type { JSX } from "react";

// Se duplica la lista para que el marquee loopee sin cortes.
const loop = [...technologiesList, ...technologiesList];

export default function HeroStack(): JSX.Element {
  return (
    <div className={styles.stack}>
      <ul className={styles.track}>
        {loop.map((tech, index) => (
          <li className={styles.item} key={`${tech.name}-${index}`}>
            <Image
              alt={tech.name}
              className={styles.logo}
              height={32}
              loading="lazy"
              src={tech.logo_path}
              title={tech.name}
              width={32}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
