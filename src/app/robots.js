export default function robots() {
    const baseUrl = "localhost:3000";
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: `${baseUrl}/sitemap.xml',
    }
  }