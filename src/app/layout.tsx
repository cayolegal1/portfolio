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

const websiteDescription =
  "Desarrollador Frontend especializado en React y Next. Experto en crear interfaces modernas y optimizadas, con conocimientos de backend para soluciones completas";

const websiteImage =
  "https://scontent.faep6-2.fna.fbcdn.net/v/t39.30808-1/384476305_6915859838496503_1541717542816996227_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEPl_68RfOrnAmyTTQBxgqR9_KodScpQDf38qh1JylAN-l_yhtx7iwHZBx5ZiER3V4klGCl47X-aFT1cizfkVqF&_nc_ohc=xp998jqrZWkQ7kNvgFDBXXp&_nc_oc=Adjt-iIi7IpugvJkwHXEUgOJ8S98Cpd2IJ0NyGNGKInHP6g0LhYoR46wawH7vhtOqVA&_nc_zt=24&_nc_ht=scontent.faep6-2.fna&_nc_gid=AT-kE-NTZJkCCwN-GwuShZ2&oh=00_AYAM4PhtLuhSyrqHTsVuDhzp1Lg60j-h9J4mo3cjRFIfFA&oe=67839A7A";

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
      <Head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta property="og:title" content="Cayo Legal Developer" />
        <meta property="og:description" content={websiteDescription} />
        <meta property="og:image" content={websiteImage} />
        <meta property="og:image:alt" content="Cayo Legal image" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:locale:alternate" content="en_ES" />
        <meta property="og:locale:alternate" content="pt_BR" />
        <meta property="og:site_name" content="Cayo Legal Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cayolegal.vercel.app" />
        <meta name="twitter:title" content="Cayo Legal Developer" />
        <meta name="twitter:description" content={websiteDescription} />
        <meta name="twitter:image" content={websiteImage} />
        <meta name="twitter:card" content={websiteImage} />
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
