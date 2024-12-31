import Image from "next/image";
import Text from "../Text";
import type { TimelineContentProps } from "./TimelineContent.types";
import styles from "./TimelineContent.module.css";

export default function TimelineContent({
  content,
}: TimelineContentProps): JSX.Element {
  return (
    <div className={styles.content_container}>
      <div>
        <Text as="h3" size="subtitle" variant="gradient" centered={false}>
          {content.position}
        </Text>
        <a href={content.company_url} target="_blank">
          <Image
            src={content.company_logo}
            alt={`${content.company}_logo`}
            width={20}
            height={20}
            unoptimized
          />
          <Text
            as="h4"
            centered={false}
            inHover
            size="description"
            variant="gradient"
          >
            {content.company}
          </Text>
        </a>
        <Text as="time" size="caption" centered={false}>
          {content.from_date}
        </Text>
      </div>
      <Text as="p" size="description" centered={false}>
        {content.description}
      </Text>
    </div>
  );
}
