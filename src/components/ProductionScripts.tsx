import { type JSX } from "react";
import Script from "next/script";
import ENV from "@/core/config/env";

export default function ProductionScripts(): JSX.Element {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ENV.GOOGLE_ANALYTICS_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', "${ENV.GOOGLE_ANALYTICS_ID}");
            `}
      </Script>
    </>
  );
}
