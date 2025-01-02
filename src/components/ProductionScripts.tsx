import Script from "next/script";
import ENV from "@/core/config/env";

export default function ProductionScripts(): JSX.Element {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ENV.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${ENV.GOOGLE_ANALYTICS_ID}, {
                page_path: window.location.pathname,
              });
            `}
      </Script>
    </>
  );
}
