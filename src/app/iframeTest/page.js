import React from "react";
import { EmbedFaultyPage } from "../components/iframe/embed-faulty-pageCode";


const IframeTestPage = () => {
    return (
        <>
            <h1>Web Accessibility Iframe Audit Test Page</h1>
            <p>Run your automated scanner script on this page to trace out all nested issues.</p>

            <div className="test-case-box">
                <h2>Test Case 9: Iframe without a title attribute</h2>
                <iframe src="/embed-faulty-page" width="100%" height="400"></iframe>
            </div>

           
        </>
    )
}
export default IframeTestPage;