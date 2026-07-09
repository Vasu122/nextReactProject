// src/app/sitemap.js

export default async function sitemap() {
  // Aapka base domain URL config
  const baseUrl = process.env.APP_URL || "https://next-react-project-orcin.vercel.app";

  // Aapki website ke saare static paths/pages ki list
  const staticPages = [
    "",
    "contactUs",
    "aboutUs",
    "testAAA",
    "testAA",
    "testA",
    "iframeTest"
  ];

  // Map loop chalakar array generate karna
  const sitemapEntries = staticPages.map((page) => {
    return {
      url: `${baseUrl}${page ? "/" + page : ""}`, // Perfect URL construction logic
      lastModified: new Date(), // Aaj ki fresh date timestamp
      changeFrequency: "weekly", // Kis speed se page update hote hain
      priority: page === "" ? 1.0 : 0.7, // Main root route ko 1.0 baki ko 0.7 automatic priority allocation
    };
  });

  return sitemapEntries;
}