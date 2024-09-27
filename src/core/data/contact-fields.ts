import type { ContactField } from "@/core/types/contact";

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
