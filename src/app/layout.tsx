import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import ProductionScripts from "@/components/ProductionScripts";
import data from "@/core/data/user-info.json";
import { websiteUrl } from "@/core/data/global";
import ENV from "@/core/config/env";
import "./globals.css";
import "./custom.css";

const { name } = data;

const inter = Nunito({ subsets: ["latin"], weight: "500" });

const websiteDescription =
  "Desarrollador Frontend especializado en React y Next. Experto en crear interfaces modernas y optimizadas, con conocimientos de backend para soluciones completas";

const websiteOgImage = `${websiteUrl}/social-img.webp`;

export const metadata: Metadata = {
  title: `${name} - Software Developer`,
  description: websiteDescription,
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
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta property="og:title" content="Cayo Legal - Software Dev" />
        <meta property="og:description" content={websiteDescription} />
        <meta property="og:image" content={websiteOgImage} />
        <meta property="og:image:secure_url" content={websiteOgImage} />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:alt" content="Cayo Legal image" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:locale:alternate" content="en_ES" />
        <meta property="og:locale:alternate" content="pt_BR" />
        <meta property="og:site_name" content="Cayo Legal" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={websiteUrl} />
        <meta name="twitter:site" content={websiteUrl} />
        <meta name="twitter:creator" content="@cayo_legal" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      {ENV.IS_PROD && <ProductionScripts />}
    </html>
  );
}
