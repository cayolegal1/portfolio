"use client";
import { FormEvent } from "react";
import Input from "@/core/components/Input";
import Button from "@/core/components/Button";
import Loader from "@/core/components/Loader";
import { useSendEmail } from "@/core/hooks/useSendEmail";
import { fields } from "@/core/data/contact-fields";
import data from "@/core/data/user-info.json";
import styles from "./ContactForm.module.css";

export default function ContactForm(): JSX.Element {

  const { isLoading, formRef, sendEmail, translate } = useSendEmail();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendEmail();
  };

  return (
    <form onSubmit={onSubmit} className={styles.form} ref={formRef}>
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
