import React from "react";
import { EmbedFaultyPage } from "../components/iframe/embed-faulty-page";

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

const IframeTestPage = () => {
    return (
        <>
            <h1>Web Accessibility Iframe Audit Test Page</h1>
            <p>Run your automated scanner script on this page to trace out all nested issues.</p>

            <div className="test-case-box">
                <h2>Test Case 9: Iframe without a title attribute</h2>
                <iframe src={<EmbedFaultyPage />} width="100%" height="400"></iframe>
            </div>

            <div className="test-case-box">
                <h2>Test Case 10: Iframe with non-descriptive title content</h2>
                <iframe src={<EmbedFaultyPage />} title="iframe" width="100%" height="200"></iframe>
            </div>
        </>
    )
}
export default IframeTestPage;