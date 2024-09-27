import type { ContactField } from "@/core/types/contact";

export const fields: ContactField[] = [
  {
    autoCapitalize: "words",
    autoComplete: "name",
    label: "full_name",
    name: "name",
    placeholder: "full_name_placeholder",
    type: "text",
    variant: "normal",
  },
  {
    autoComplete: "email",
    label: "email",
    name: "email",
    placeholder: "email_placeholder",
    type: "email",
    variant: "normal",
  },
  {
    autoCapitalize: "characters",
    autoComplete: "subject",
    label: "subject",
    name: "subject",
    placeholder: "subject_placeholder",
    type: "text",
    variant: "normal",
  },
  {
    autoCapitalize: "characters",
    label: "message",
    name: "message",
    placeholder: "message_placeholder",
    type: "text",
    variant: "textarea",
  },
];
