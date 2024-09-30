import type { MessageKeys } from "next-intl";

export type NavToggleLanguageProps = {
  title: MessageKeys<"Header", "language">;
  locale: string;
};