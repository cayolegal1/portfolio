import emailjs from "@emailjs/browser";
import ENV from "../config/env";

export const useSendEmail = () => {
  const sendEmail = async (form: HTMLFormElement) => {
    try {
      const response = await emailjs.sendForm(
        ENV.EMAIL_SERVICE_ID,
        ENV.EMAIL_TEMPLATE_ID,
        form,
        { publicKey: ENV.EMAILJS_PUBLIC_KEY },
      );

      return {
        ok: response.status === 200,
      };
    } catch (err) {
      console.error(err);
      return {
        ok: false,
      };
    }
  };

  return {
    sendEmail,
  };
};
