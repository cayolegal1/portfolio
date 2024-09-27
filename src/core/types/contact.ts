import type { MessageKeys } from "next-intl";
import type { InputProps } from "../components/Input/Input.types";

export type FieldName = "name" | "email" | "subject" | "message";

export type ContactField = Omit<InputProps, "label" | "name"> & {
  label: MessageKeys<"Contact", "full_name" | "email" | "subject" | "message">;
  name: FieldName;
};