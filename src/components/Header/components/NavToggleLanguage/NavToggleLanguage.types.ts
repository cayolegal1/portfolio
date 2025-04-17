import type { MessageKeys } from "next-intl";

export type NavToggleLanguageProps = {
  title: MessageKeys<"Header", string>;
  locale: string;
};
