import { MetadataRoute } from "next";
import { getProfile } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  const profile = getProfile();
  const baseUrl = profile.person.links.website || "https://heysachin.me";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
