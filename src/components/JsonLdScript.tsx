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
          description:
            "Desarrollador FullStack especializado en web y mobile usando tecnologías modernas.",
          jobTitle: "FullStack Developer",
          url: data.website_url,
          image: `${data.website_url}/social-img.webp`,
          sameAs: [data.linkedin_url, data.github_url],
          address: {
            "@type": "PostalAddress",
            addressCountry: "Paraguay",
          },
          worksFor: {
            "@type": "Organization",
            name: "Bepsa",
            url: "https://www.bepsa.com.py",
          },
          hasOccupation: {
            "@type": "Occupation",
            name: "FullStack Developer",
            occupationLocation: {
              "@type": "Place",
              name: "Paraguay",
            },
          },
          knowsAbout: [
            "HTML",
            "CSS3",
            "Tailwind CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "React Native",
            "NextJS",
            "NodeJS",
            "Express",
            "NestJS",
          ],
          skill: ["Agile", "CI/CD", "Docker", "Testing"],
          knowsLanguage: ["Spanish", "English"],
        }),
      }}
    />
  );
}
