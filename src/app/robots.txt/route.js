export async function GET() {
  // Agar env variable nahi mila, toh backup me direct link utha lega
  const baseUrl = process.env.APP_URL || "https://scan.techtipsall.com";
  
  const content = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`.trim();
  
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}