import type { MessageKeys } from "next-intl";
import type { InputProps } from "../components/Input/Input.types";

export type FieldName = "name" | "email" | "subject" | "message";

export type ContactField = Omit<
  InputProps,
  "label" | "name" | "placeholder"
> & {
  label: MessageKeys<"Contact", "full_name" | "email" | "subject" | "message">;
  placeholder: MessageKeys<
    "Contact",
    | "full_name_placeholder"
    | "email_placeholder"
    | "subject_placeholder"
    | "message_placeholder"
  >;
  name: FieldName;
};
