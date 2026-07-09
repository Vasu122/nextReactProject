// src/app/robots.js

export default function robots() {
  // Same aapki sitemap wala env pipeline backup dynamic URL ke sath
  const baseUrl = process.env.APP_URL || "https://next-react-project-orcin.vercel.app";

  return {
    rules: {
      userAgent: "*", // Sabhi search engines (Google, Bing, etc.) ke bots ke liye rule allow kr rhae hain
      allow: "/",     // Puri website ko crawl karne ki permission hai
      disallow: [
        "/api/",       // Next.js ke background API routes ko crawlers se hide rkhne ke liye
        "/*_next/*",   // Next.js ke internal build chunks ko crawler se block krne ke liye
      ],
    },
    // Yeh line Google ko direct aapke dynamic sitemap ka path bata degi
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}