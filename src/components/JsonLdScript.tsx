import Script from "next/script";
import data from "@/core/data/user-info.json";
import { JSX } from "react";

export default function JsonLDScript(): JSX.Element {
  return (
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
          image: `${data.website_url}/social-img.webp`,
          sameAs: [data.linkedin_url, data.github_url],
          address: {
            "@type": "PostalAddress",
            addressCountry: "Paraguay",
          },
        }),
      }}
    />
  );
}
