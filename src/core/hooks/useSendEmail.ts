import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { notifySuccess, notifyError } from "../utils/toast";
import ENV from "../config/env";

export const useSendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const translate = useTranslations("Contact");

  const submitEmail = async (
    form: HTMLFormElement,
    { onSuccess, onError }: { onSuccess: () => void; onError: () => void },
  ) => {
    try {
      const response = await emailjs.sendForm(
        ENV.EMAIL_SERVICE_ID,
        ENV.EMAIL_TEMPLATE_ID,
        form,
        { publicKey: ENV.EMAILJS_PUBLIC_KEY },
      );

      if (response.status === 200) onSuccess();
      else onError();
    } catch (err) {
      console.error(err);
      onError();
    }
  };

  const sendEmail = async () => {
    setIsLoading(true);
    if (formRef.current) {
      await submitEmail(formRef.current, {
        onSuccess: () => {
          formRef.current!.reset();
          notifySuccess(
            translate("success_message"),
            translate("success_message_body"),
          );
        },
        onError: () => {
          notifyError(
            translate("error_message"),
            translate("error_message_body"),
          );
        },
      });
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    formRef,
    sendEmail,
    translate,
  };
};
