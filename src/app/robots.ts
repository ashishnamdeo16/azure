import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

/** Required for `output: 'export'` — generate robots.txt at build time. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
