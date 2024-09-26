import Input from "@/core/components/Input";
import { useTranslations } from "next-intl";
import styles from "./ContactForm.module.css";

const fields = [
  { label: "full_name", name: "name", type: "text", variant: "normal" },
  { label: "email", name: "email", type: "email", variant: "normal" },
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