// app/sitemap.xml/route.js ya app/sitemap.js

export async function GET() {
  const baseUrl = process.env.APP_URL || "https://scan.techtipsall.com";

  const languages = ["en", "es"];
  const staticPages = [
    "",
    "escaperandbeautify",
    "contactUs",
    "aboutUs",
    "testAAA",
    "testAA",
    "testA",
    "iframeTest"
  ];

  const urls = [];
  const currentDate = new Date().toISOString().split('T')[0]; // Din ki sahi format me date

  for (const lang of languages) {
    for (const page of staticPages) {
      urls.push(`${baseUrl}/${page ? "/" + page : ""}`);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
      .map(
        (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq> 
    <priority>1.0</priority>
  </url>`
      )
      .join("\n")}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}