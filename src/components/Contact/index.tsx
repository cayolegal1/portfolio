import Section from "@/core/components/Section";
import { SECTIONS } from "@/core/data/global";
import Text from "@/core/components/Text";
import ContactForm from "./components/ContactForm";
import { useTranslations  } from "next-intl";

export default function Contact() {
  const translate = useTranslations("Contact");
  return (
    <Section id={SECTIONS.CONTACT}>
      <Text as="h3" size="title">
        {translate("title")}
      </Text>
      <ContactForm />
    </Section>
  );
}
