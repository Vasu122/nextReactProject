export async function GET() {
  // Env variable check karega, nahi toh aapki live domain use karega
  const baseUrl = process.env.APP_URL || "https://next-react-project-orcin.vercel.app";
  
  const content = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`.trim();
  
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}