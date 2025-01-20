import type { MetadataRoute } from "next";
import { websiteUrl } from "@/core/data/global";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${websiteUrl}/sitemap.xml`,
  };
}
