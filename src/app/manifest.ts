import type { MetadataRoute } from "next";
import data from "@/core/data/user-info.json";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${data.name} - Software Developer`,
    short_name: data.name,
    description:
      "Software Developer specializing in fullstack development with React, Next.js, Node.js, and SQL.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#030712",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
