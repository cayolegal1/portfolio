import Dropdown from "@/core/components/Dropdown";
import Text from "@/core/components/Text";
import type { NavToggleLanguageProps } from "./NavToggleLanguage.types";

export default function NavToggleLanguage({
  title,
}: NavToggleLanguageProps): JSX.Element {
  return (
    <Dropdown title={title}>
      <Text size="caption" as="p" centered={false}>- Inglés</Text>
      <Text size="caption" as="p" centered={false}>- Español</Text>
      <Text size="caption" as="p" centered={false}>- Portugués</Text>
    </Dropdown>
  );
}
