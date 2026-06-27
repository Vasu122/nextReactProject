
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";




export const metadata = {
  title: 'Tech Tips all',
  description: 'Default description for your website',
  // metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tech Tips all',
    description: 'Default description for your website',
    url: 'https://yourdomain.com',
    siteName: 'Your Website',
    images: [
      {
        url: 'https://yourdomain.com/default-og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Tips all',
    description: 'Default description for your website',
    images: ['https://yourdomain.com/default-twitter-image.jpg'],
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body>
        <Header />
            <main> 
              {children} 
            </main>
        <Footer />
      </body>
    </html>
  );
}
