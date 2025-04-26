import Script from "next/script";
import data from "@/core/data/user-info.json";

export default function JsonLDScript() {
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
          image: "https://tu-sitio.com/social-img.webp", // El mismo OG si prefieres
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
