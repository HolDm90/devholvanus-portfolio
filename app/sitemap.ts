import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ton-domaine.com",
      lastModified: new Date(),
    },
    {
      url: "https://ton-domaine.com/web3",
      lastModified: new Date(),
    },
  ];
}
