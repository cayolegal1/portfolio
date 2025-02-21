import { useTranslations } from "next-intl";
import Section from "@/core/components/Section";
import AnimatedTitle from "@/core/components/Animated/AnimatedTitle";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import ContactForm from "./components/ContactForm";
import ContactCard from "./components/ContactCard";
import { SECTIONS } from "@/core/data/global";
import PhoneIcon from "@/core/components/Icons/PhoneIcon";
import EmailIcon from "@/core/components/Icons/EmailIcon";
import LocationIcon from "@/core/components/Icons/LocationIcon";
import MeetIcon from "@/core/components/Icons/MeetIcon";
import data from "@/core/data/user-info.json";
import styles from "./Contact.module.css";
import type { TContactCard } from "@/core/types/contact";

export const contactCards: TContactCard[] = [
  {
    title: "meeting_title",
    text: "meeting_text",
    href: "https://cal.com/cayolegal/30min?duration=30",
    icon: <MeetIcon />,
  },
  {
    title: "email",
    text: data.email,
    href: `mailto:${data.email}`,
    icon: <EmailIcon />,
  },
  {
    title: "phone",
    text: data.phone,
    href: `tel: ${data.phone}`,
    icon: <PhoneIcon />,
  },
  {
    title: "location",
    text: `${data.location} - ${data.neighborhood}`,
    href: data.location_url,
    icon: <LocationIcon />,
  },
];

export default function Contact() {
  const translate = useTranslations("Contact");
  return (
    <Section id={SECTIONS.CONTACT}>
      <AnimatedTitle id="contact_title">{translate("title")}</AnimatedTitle>
      <AnimatedInView
        animationType="slideInUp"
        className={styles.form_container}
        id="contact_title"
        useId={false}
      >
        <ContactForm />
        <div className={styles.cards_container}>
          {contactCards.map(card => (
            <ContactCard
              key={card.href}
              href={card.href}
              icon={card.icon}
              title={translate(card.title)}
              text={
                card.text.includes("meeting_text")
                  ? translate(card.text)
                  : card.text
              }
            />
          ))}
        </div>
      </AnimatedInView>
    </Section>
  );
}
