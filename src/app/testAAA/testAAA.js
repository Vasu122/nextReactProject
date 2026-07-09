"use client"

import Image from "next/image"
import React from "react"

export const TestAAA = () => {
    return (
        <>
            {/* <!-- ❌ FAIL: 1.4.6 Contrast Enhanced (AAA 7:1) --> */}
            <div className="test-block">
                <h2>Test 1: Contrast passes AA but fails AAA (1.4.6)</h2>
                <p className="aa-not-aaa">Grey #767676 on white = ~4.55:1 — passes AA but fails AAA (needs 7:1)</p>
                <p className="aa-large-not-aaa">Large text at #969696 — passes AA large (3:1) but fails AAA large (4.5:1)</p>
            </div>

            {/* <!-- ❌ FAIL: 1.4.6 + Sprint 1 Fix #7 — Modern rgb() syntax --> */}
            <div className="test-block">
                <h2>Test 2: Modern rgb() syntax + alpha (Sprint 1 Fix #7)</h2>
                <p className="modern-rgb">Text using rgb(120 120 120 / 80%) — modern syntax should be parsed correctly</p>
            </div>

            {/* <!-- ❌ FAIL: 2.5.5 Target Size Enhanced — AAA requires 44×44 --> */}
            <div className="test-block">
                <h2>Test 3: 22×22px button (FAIL WCAG 2.2 AAA · 2.5.5)</h2>
                <button className="small-target-aaa">×</button>
                <button className="small-target-aaa">+</button>
                <p>22×22 passes AA 24×24 but fails AAA 44×44 enhanced</p>
            </div>

            {/* <!-- ❌ FAIL: 2.4.13 (NEW 2.2) — Focus Appearance — outline removed --> */}
            <div className="test-block">
                <h2>Test 4: Focus indicator removed (FAIL WCAG 2.2 AAA · 2.4.13)</h2>
                <button className="no-focus">Tab to me — focus outline removed with no replacement</button>
            </div>

            {/* <!-- ❌ FAIL: 2.4.12 (NEW 2.2) — Focus Not Obscured Enhanced — sticky bottom --> */}
            <div className="test-block">
                <h2>Test 5: Sticky footer can obscure focus (FAIL WCAG 2.2 AAA · 2.4.12)</h2>
                <p>The bright purple sticky footer at the bottom of this page partially obscures focused elements when they appear near the bottom of the viewport.</p>
                <button>Tab here — sticky footer may overlap</button>
            </div>

            {/* <!-- ❌ FAIL: 3.3.9 (NEW 2.2) — Accessible Authentication Enhanced — image CAPTCHA --> */}
            <div className="test-block">
                <h2>Test 6: Image-recognition CAPTCHA (FAIL WCAG 2.2 AAA · 3.3.9)</h2>
                <form>
                    <p>Sign in verification:</p>
                  
                        <button type="submit">Verify I'm human</button>
                </form>
            </div>

            {/* <!-- ❌ FAIL: 1.4.7 Low or No Background Audio — embedded video with bg audio --> */}
            <div className="test-block">
                <h2>Test 7: Audio/video without controls (FAIL 1.4.2 + 1.4.7 AAA)</h2>
                {/* <video src="example.mp4" autoplay loop muted></video> */}
                <p>Auto-playing media without user control</p>
            </div>

            {/* <!-- ❌ FAIL: 2.2.4 Interruptions — page with auto-popup interruption simulated --> */}
            <div className="test-block">
                <h2>Test 8: meta-refresh interruption (FAIL 2.2.1, 2.2.4 AAA)</h2>
                {/* <!-- meta refresh disabled in real document; testing the principle --> */}
                <p>Page auto-reloads every 30 seconds without user control (would use &lt;meta http-equiv="refresh"&gt;)</p>
            </div>

            {/* <!-- ❌ FAIL: 2.3.2 Three Flashes — animation flashes too fast --> */}
            <div className="test-block">
                <h2>Test 9: Flashing animation (FAIL 2.3.1 A + 2.3.2 AAA)</h2>
                <div className="flashing">
                    FLASH (300ms interval — could trigger seizures)
                </div>
            </div>

            {/* <!-- ❌ FAIL: 2.4.9 Link Purpose (Link Only) — generic link text --> */}
            <div className="test-block">
                <h2>Test 10: Link text not descriptive standalone (FAIL 2.4.9 AAA)</h2>
                <p>For more information about our pricing, please </p>
                <p>To learn more about features, </p>
            </div>

            {/* <!-- ❌ FAIL: 3.1.3 Unusual Words — jargon without definition --> */}
            <div className="test-block">
                <h2>Test 11: Unusual words without definition (FAIL 3.1.3 AAA)</h2>
                <p>Our SaaS leverages CQRS, ESB, and OAuth2 PKCE for omnichannel orchestration without explaining any of these.</p>
            </div>

            {/* <!-- ❌ FAIL: 3.1.4 Abbreviations — abbr without expansion --> */}
            <div className="test-block">
                <h2>Test 12: Abbreviations not expanded (FAIL 3.1.4 AAA)</h2>
                <p>The WCAG document was updated. The ACR includes a VPAT. Refer to ARIA APG for details.</p>
                {/* <!-- No <abbr> tags or first-use expansions --> */}
            </div>

            {/* <!-- ❌ FAIL: 3.2.5 Change on Request — new tab without warning --> */}
            <div className="test-block">
                <h2>Test 13: Links opening new tabs without warning (FAIL 3.2.5 AAA)</h2>
                <p>fwfewfe</p>
                <p>qfwwfwf</p>
                {/* <!-- No "opens in new tab" indication --> */}
            </div>

            {/* <!-- ❌ FAIL: 3.3.6 Error Prevention All — form without confirm step --> */}
            <div className="test-block">
                <h2>Test 14: Destructive action without confirmation (FAIL 3.3.6 AAA)</h2>
                <form>
                    <button type="submit" className="delBtn">
                        Delete Account Permanently
                    </button>
                    {/* <!-- No "Are you sure?" step, no undo --> */}
                </form>
            </div>

            {/* <!-- ❌ FAIL: 1.4.8 Visual Presentation — text width too wide --> */}
            <div className="test-block">
                <h2>Test 15: Line length over 80 chars (FAIL 1.4.8 AAA)</h2>
                <p style={{maxWidth:'100%'}}>
                    This very long paragraph runs the entire width of the viewport, exceeding the recommended 80-character maximum line length for AAA visual presentation requirements which can reduce reading comprehension for users with cognitive disabilities and dyslexia.
                </p>
            </div>

            {/* <!-- ❌ FAIL: 1.4.9 Images of Text No Exception (stricter AAA) --> */}
            <div className="test-block">
                <h2>Test 16: Image of text — AAA stricter than AA (FAIL 1.4.9)</h2>
                
                    {/* <!-- AAA forbids text-in-image entirely except for logos --> */}
            </div>

            {/* <!-- ❌ FAIL: 2.4.10 Section Headings — content sections without h2/h3 --> */}
            <div className="test-block">
                <h2>Test 17: Long content without section headings (FAIL 2.4.10 AAA)</h2>
                <p>Topic 1 paragraph one... lorem ipsum dolor sit amet, consectetur adipiscing elit. Long paragraphs without proper section h3 headings to help navigation. More content here that should ideally be broken up with subheadings. And more text continues without any structural breaks for users who navigate by headings.</p>
            </div>

            <div className="sticky-bottom">
                Sticky footer — testing 2.4.12 Focus Not Obscured Enhanced
            </div>
        </>
    )
}