"use client";
import { useTranslations } from "next-intl";
import Text from "@/core/components/Text";

export default function Copyright(): JSX.Element {
  const translate = useTranslations("Footer");
  return (
    <Text size="caption">
      &copy; {new Date().getFullYear()} Cayo Legal. {translate("copyright")}
    </Text>
  );
}
