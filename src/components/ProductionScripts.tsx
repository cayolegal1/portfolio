import Script from "next/script";
import data from "@/core/data/user-info.json";
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
              gtag('config', "${ENV.GOOGLE_ANALYTICS_ID}");
            `}
      </Script>
      <Script
        id="json-ld-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: data.name,
            jobTitle: "Software Developer",
            url: data.website_url,
            image: "https://tu-sitio.com/social-img.webp", // mismo OG si querés
            sameAs: [data.linkedin_url, data.github_url],
            address: {
              "@type": "PostalAddress",
              addressCountry: "Paraguay",
            },
          }),
        }}
      />
    </>
  );
}
