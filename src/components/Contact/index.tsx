import Section from "@/core/components/Section";
import AnimatedTitle from "@/core/components/Animated/AnimatedTitle";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import ContactForm from "./components/ContactForm";
import { useTranslations } from "next-intl";
import { SECTIONS } from "@/core/data/global";
import styles from "./Contact.module.css";

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
      </AnimatedInView>
    </Section>
  );
}
