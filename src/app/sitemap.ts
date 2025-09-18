import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ashfordenglish.com";
  const lastMod = new Date();
  return [
    {
      url: `${base}/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/courses`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
