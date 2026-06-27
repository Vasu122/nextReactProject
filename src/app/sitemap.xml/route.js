export async function GET() {
  const baseUrl = process.env.APP_URL || "https://next-react-project-orcin.vercel.app";

  const languages = ["en", "es"];
  const staticPages = [
    "",
    "contactUs",
    "aboutUs",
    "testAAA",
    "testAA",
    "testA",
    "iframeTest"
  ];

  const urls = [];
  // Aaj ki date XML format me (YYYY-MM-DD)
  const currentDate = new Date().toISOString().split('T')[0];

  // Saare languages aur pages ke URLs loop karke generate karna
  for (const lang of languages) {
    for (const page of staticPages) {
      urls.push(`${baseUrl}/${lang}${page ? "/" + page : ""}`);
    }
  }

  // Pure XML string generation
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
      .map(
        (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq> 
    <priority>0.8</priority>
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