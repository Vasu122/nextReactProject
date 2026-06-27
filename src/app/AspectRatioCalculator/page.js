import React from "react";
import AspectRatioClientPage from "./AspectRatioClientPage";

export const metadata = {
    title: 'Aspect Ratio - Your Website',
    description: 'Learn more about our company and our mission.',
    alternates: {
      canonical: '/about',
    },
    openGraph: {
      title: 'Aspect Ratio - Your Website',
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
      title: 'Aspect Ratio - Your Website',
      description: 'Learn more about our company and our mission.',
      images: ['https://yourdomain.com/about-twitter-image.jpg'],
    },
  }

const AspectRatioServer =()=>{
    return(
       <AspectRatioClientPage />
    )
}
export default AspectRatioServer;