// next
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, getLocale } from "next-intl/server";

// components
import ProductionScripts from "@/components/ProductionScripts";
import JsonLDScript from "@/components/JsonLdScript";

// core
import data from "@/core/data/user-info.json";
import ENV from "@/core/config/env";
import "./globals.css";
import "./custom.css";

const inter = Nunito({ subsets: ["latin"], weight: "500" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir="ltr">
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charSet="utf-8" />
        <JsonLDScript />
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

const { name, linkedin_url, country } = data;
const websiteTitle = `${name} - Software Developer`;
const websiteOgImage = `${data.website_url}/social-img.webp`;

export async function generateMetadata(): Promise<Metadata> {
  const translate = await getTranslations("Metadata");
  const description = translate("description");
  return {
    title: websiteTitle,
    description,
    keywords: [
      "desarrollador de software",
      "desarrollador web",
      "desarrollador movil",
      "sofware developer",
      "software engineer",
      "web applications",
      "freelancers",
      "freelance developers",
      "freelance software engineers",
      "freelance fullstack developers",
      "freelancer software engineers in paraguay",
      "software development",
      "frontend developer",
      "mobile developer",
      "software engineers",
      "developer portfolio",
      "fullstack developers",
      "react developers",
      "software developers in paraguay",
      "software devs in paraguay",
      "i want a website",
    ],
    abstract: description,
    generator: "Next.js",
    applicationName: name,
    publisher: name,
    creator: name,
    category: "Software Developer",
    authors: {
      name,
      url: linkedin_url,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: data.website_url,
    },
    openGraph: {
      alternateLocale: ["en_US", "pt_BR", "es_MX", "en_GB"],
      countryName: country,
      description,
      images: [
        {
          alt: `${name} image`,
          secureUrl: websiteOgImage,
          type: "image/webp",
          url: websiteOgImage,
          username: name,
        },
      ],
      locale: "es_ES",
      siteName: websiteTitle,
      title: websiteTitle,
      type: "article",
      url: data.website_url,
    },
    twitter: {
      creator: "@cayo_legal",
      description,
      images: [
        {
          alt: `${name} image`,
          secureUrl: websiteOgImage,
          type: "image/webp",
          url: websiteOgImage,
          username: name,
        },
      ],
      site: data.website_url,
      title: websiteTitle,
    },
  };
}
