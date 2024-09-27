import type { MessageKeys } from "next-intl";
import type { InputProps } from "../components/Input/Input.types";

type ContactField = Omit<InputProps, "label"> & {
  label: MessageKeys<"Contact", "full_name" | "email" | "subject" | "message">;
};

export const fields: ContactField[] = [
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
];
