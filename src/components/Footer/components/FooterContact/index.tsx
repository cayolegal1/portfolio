import Text from "@/core/components/Text";
import EmailIcon from "@/core/components/Icons/EmailIcon";
import PhoneIcon from "@/core/components/Icons/PhoneIcon";
import LocationIcon from "@/core/components/Icons/LocationIcon";
import data from "@/core/data/user-info.json";
import type { FooterContactProps } from "./FooterContact.types";
import styles from "./FooterContact.module.css";

import type { JSX } from "react";

export default function FooterContact({
  title,
}: FooterContactProps): JSX.Element {
  return (
    <div>
      <Text
        as="p"
        centered={false}
        className={styles.footer_contact_title}
        size="caption"
        uppercase
      >
        {title}
      </Text>
      <ul className={styles.footer_contact_list}>
        <li>
          <a className={styles.footer_contact_link} href={`mailto:${data.email}`}>
            <EmailIcon />
            <Text centered={false} size="caption">
              {data.email}
            </Text>
          </a>
        </li>
        <li>
          <a className={styles.footer_contact_link} href={`tel:${data.phone}`}>
            <PhoneIcon />
            <Text centered={false} size="caption">
              {data.phone}
            </Text>
          </a>
        </li>
        <li>
          <a
            className={styles.footer_contact_link}
            href={data.location_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocationIcon />
            <Text centered={false} size="caption">
              {data.location}, {data.country}
            </Text>
          </a>
        </li>
      </ul>
    </div>
  );
}
