import Input from "@/core/components/Input";
import { useTranslations } from "next-intl";
import { fields } from "@/core/data/contact-fields";
import styles from "./ContactForm.module.css";

export default function ContactForm(): JSX.Element {
  const translate = useTranslations("Contact");
  return (
    <form className={styles.form}>
      {fields.map(field => (
        <Input key={field.name} {...field} label={translate(field.label)} />
      ))}
    </form>
  );
}
