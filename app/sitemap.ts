import { MetadataRoute } from "next";
import { getProfile } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const profile = getProfile();
  const baseUrl = profile.person.links.website || "https://heysachin.me";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
