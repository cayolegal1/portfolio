import type { MetadataRoute } from "next";
import glob from "fast-glob";
import fs from "fs/promises";
import path from "path";
import { websiteUrl } from "@/core/data/global";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await glob("**/*.tsx", { cwd: "src/app" });

  const routesData = await Promise.all(
    pages.map(async filename => {
      const filePath = path.join(process.cwd(), "src/app", filename);
      const stats = await fs.stat(filePath);

      return {
        route: filename.replace(/(^|\/)page\.tsx$/, ""),
        lastModified: stats.mtime.toISOString(),
      };
    }),
  );

  return routesData
    .filter(({ route }) => !route.includes("layout.tsx"))
    .map(({ route, lastModified }) => ({
      changeFrequency: "weekly",
      lastModified,
      priority: 1.0,
      url: `${websiteUrl}/${route}`,
    }));
}
