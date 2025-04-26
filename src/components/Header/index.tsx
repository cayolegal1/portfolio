import React, { JSX, ReactElement } from "react";
import NavButton from "./components/NavButton";
import HeaderContent from "./components/HeaderContent";
import { getLocale } from "@/i18n/utils";
import { SECTIONS } from "@/core/data/global";
import { NavItem } from "./components/NavItem/NavItem.types";

const headers = [
  { title: "home", href: SECTIONS.HOME },
  { title: "experience", href: SECTIONS.EXPERIENCE },
  // { title: "proyects", href: SECTIONS.PROYECTS },
  { title: "technologies", href: SECTIONS.TECHNOLOGIES },
  // { title: "about_me", href: SECTIONS.ABOUT },
  { title: "contact", href: SECTIONS.CONTACT },
  { title: "language", href: SECTIONS.LANGUAGE },
];

export default async function Header(): Promise<ReactElement<unknown>> {
  const currentLocale = await getLocale();
  return (
    <>
      <NavButton />
      <HeaderContent
        currentLocale={currentLocale}
        sections={headers as NavItem[]}
      />
    </>
  );
}
