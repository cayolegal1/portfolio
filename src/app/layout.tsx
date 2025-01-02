import type { Metadata } from "next";
import Head from "next/head";
import { Nunito } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import ProductionScripts from "@/components/ProductionScripts";
import data from "@/core/data/user-info.json";
import ENV from "@/core/config/env";
import "./globals.css";
import "./custom.css";

const { name } = data;

const inter = Nunito({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: `${name} - Software Developer`,
  description:
    "Desarrollador Frontend especializado en React y Next. Experto en crear interfaces modernas y optimizadas, con conocimientos de backend para soluciones completas",
  keywords: [
    "desarrollador de software",
    "desarrollador web",
    "desarrollador movil",
    "software development",
    "frontend developer",
    "mobile developer",
    "javascript",
    "typescript",
    "react",
    "react native",
    "nextjs",
    "developer portfolio",
    name,
  ],
  creator: name,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <Head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </Head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      {ENV.IS_PROD && <ProductionScripts />}
    </html>
  );
}
