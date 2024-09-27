"use client";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Input from "@/core/components/Input";
import Button from "@/core/components/Button";
import Loader from "@/core/components/Loader";
import { useSendEmail } from "@/core/hooks/useSendEmail";
import { fields } from "@/core/data/contact-fields";
import data from "@/core/data/user-info.json";
import styles from "./ContactForm.module.css";

export default function ContactForm(): JSX.Element {
  const { sendEmail } = useSendEmail();
  const translate = useTranslations("Contact");
  const [isLoading, setIsLoading] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  const sendForm = async () => {
    if (formRef.current) {
      setIsLoading(true);
      const email = await sendEmail(formRef.current);

      if (email.ok) formRef.current.reset();
      setIsLoading(false);
    }
  };

  return (
    <form action={sendForm} className={styles.form} ref={formRef}>
      {fields.map(field => (
        <Input
          key={field.name}
          {...field}
          placeholder={translate(field.placeholder)}
          label={translate(field.label)}
        />
      ))}
      <input type="hidden" name="reply_to" value={data.email} />
      <input
        type="hidden"
        name="email_greeting"
        value={translate("email_greeting")}
      />
      <input
        type="hidden"
        name="email_reason"
        value={translate("email_reason")}
      />
      <input
        type="hidden"
        name="email_goodbye"
        value={translate("email_goodbye")}
      />
      <Button className={styles.btn} type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : translate("submit")}
      </Button>
    </form>
  );
}
