import type { MessageKeys } from "next-intl";
import type { InputProps } from "../components/Input/Input.types";

type ContactField = Omit<InputProps, "label"> & {
  label: MessageKeys<"Contact", "full_name" | "email" | "subject" | "message">;
};

export const fields: ContactField[] = [
  {
    autoCapitalize: "words",
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
    autoCapitalize: "characters",
    autoComplete: "subject",
    label: "subject",
    name: "subject",
    type: "text",
    variant: "normal",
  },
  {
    autoCapitalize: "characters",
    label: "message",
    name: "message",
    type: "text",
    variant: "textarea",
  },
];
