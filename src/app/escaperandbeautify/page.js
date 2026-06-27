import React from "react";
import EscapeAndBeauti from "./escapeAndBeauti";

export const metadata = {
    title: 'Escape and Beauti - Your Website',
    description: 'Learn more about our company and our mission.',
    alternates: {
      canonical: '/about',
    },
    openGraph: {
      title: 'Escape and Beauti - Your Website',
      description: 'Learn more about our company and our mission.',
      url: 'https://yourdomain.com/about',
      images: [
        {
          url: 'https://yourdomain.com/about-og-image.jpg',
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Escape and Beauti - Your Website',
      description: 'Learn more about our company and our mission.',
      images: ['https://yourdomain.com/about-twitter-image.jpg'],
    },
  }

const EscapeAndBeautiPage =()=>{
    return(
       <EscapeAndBeauti />
    )
}
export default EscapeAndBeautiPage;