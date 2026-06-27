export default function sitemap() {
    const baseUrl = 'localhost:3000';
    return [
      {
        url: '/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1, 
      },
      {
        url: `${baseUrl}/AspectRatioCalculator`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/escaperandbeautify`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/contactUs`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/aboutUs`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/testAAA`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/testAA`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/testA`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/iframeTest`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      }
    ]
  }