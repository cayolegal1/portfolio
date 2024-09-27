import Input from "@/core/components/Input";
import { useTranslations } from "next-intl";
import styles from "./ContactForm.module.css";

const fields = [
  {
    autoComplete: "name",
    label: "full_name",
    name: "name",
    type: "text",
    variant: "normal",
  },
  {
    autoComplete: "email",
    label: "email",
    name: "email",
    type: "email",
    variant: "normal",
  },
  {
    autoComplete: "subject",
    label: "subject",
    name: "subject",
    type: "text",
    variant: "normal",
  },
  { label: "message", name: "message", type: "text", variant: "textarea" },
] as const;

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
