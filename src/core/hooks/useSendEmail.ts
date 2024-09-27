import emailjs from "@emailjs/browser";

export const useSendEmail = () => {
  const sendEmail = async (form: HTMLFormElement) => {
    try {
      const response = await emailjs.sendForm(
        "service_s5onhv9",
        "template_seoec6b",
        form,
        { publicKey: "VDE8fGRXtIA8tqUZo" },
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
