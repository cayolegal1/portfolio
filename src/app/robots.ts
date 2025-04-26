import type { MetadataRoute } from "next";
import data from "@/core/data/user-info.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${data.website_url}/sitemap.xml`,
  };
}
