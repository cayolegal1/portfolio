"use client";
import { FormEvent, type JSX } from "react";
import Input from "@/core/components/Input";
import Button from "@/core/components/Button";
import Loader from "@/core/components/Loader";
import { useSendEmail } from "@/core/hooks/useSendEmail";
import { fields } from "@/core/data/contact-fields";
import styles from "./ContactForm.module.css";

export default function ContactForm(): JSX.Element {
  const { isLoading, formRef, sendEmail, translate } = useSendEmail();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendEmail();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} ref={formRef}>
      {fields.map(field => (
        <Input
          key={field.name}
          {...field}
          placeholder={translate(field.placeholder)}
          label={translate(field.label)}
        />
      ))}

      <Button className={styles.btn} type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : translate("submit")}
      </Button>
    </form>
  );
}
