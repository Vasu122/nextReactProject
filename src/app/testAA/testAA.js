"use client"

import Image from "next/image"
import React from "react"

export const TestAA = () => {
    return (
        <>
            {/* <!-- ❌ FAIL: 2.4.11 (NEW 2.2) — Sticky header obscures focus --> */}
            <header className="sticky-header" role="banner">
                Sticky header — obscures focus of elements below (FAIL 2.4.11)
            </header>

            {/* <!-- ✅ PASS: 2.4.1 — Skip link present --> */}
            <a href="#main-content" className="skip-content">Skip to main content</a>
            {/* <!-- ❌ FAIL: 1.4.3 Contrast (Minimum) — text below 4.5:1 --> */}
            <div className="test-block">
                <h2>Test 1: Low contrast — normal text (FAIL 1.4.3 AA)</h2>
                <p className="low-contrast-text">This grey text on white is ~2.85:1 — fails AA 4.5:1 minimum</p>
            </div>

            {/* <!-- ❌ FAIL: 1.4.3 — Large text below 3:1 --> */}
            <div className="test-block">
                <h2>Test 2: Low contrast — large text (FAIL 1.4.3 AA)</h2>
                <p className="low-contrast-large">Large grey text on white — needs only 3:1 for large, but ~2.32:1 still fails</p>
            </div>

            {/* <!-- ✅ PASS: 1.4.3 — good contrast --> */}
            <div className="test-block">
                <h2>Test 3: Good contrast (PASS)</h2>
                <p className="good-contrast">Blue on white at ~5.5:1 passes AA easily</p>
            </div>

            {/* <!-- ❌ FAIL: 1.4.3 + Sprint 1 Fix #6 — Opacity propagation --> */}
            <div className="test-block">
                <h2>Test 4: Opacity propagation (FAIL 1.4.3 — Sprint 1 Fix #6)</h2>
                <div className="opacity-parent">
                    <p className="opacity-text">Black on white but parent opacity is 0.5 — effective contrast ~4:1</p>
                </div>
            </div>

            {/* <!-- ❌ NEEDS REVIEW: 1.4.3 + Sprint 1 Fix #5 — background-image --> */}
            <div className="test-block">
                <h2>Test 5: Background image (NEEDS REVIEW — Sprint 1 Fix #5)</h2>
                <div className="bg-image-block">
                    White text over a CSS gradient — programmatic check unreliable, scanner should flag for human review
                </div>
            </div>

            {/* <!-- ❌ FAIL: 2.5.8 (NEW 2.2) — Target Size Minimum + Sprint 1 NEW WCAG 2.2 --> */}
            <div className="test-block">
                <h2>Test 6: Tiny target size (FAIL WCAG 2.2 AA · 2.5.8)</h2>
                <button className="tiny-target">X</button>
                <button className="tiny-target">|</button>
                <button className="tiny-target">$</button>
            </div>

            {/* <!-- ❌ FAIL: 2.5.7 (NEW 2.2) — Dragging without alternative --> */}
            <div className="test-block">
                <h2>Test 7: Drag-only handle (FAIL WCAG 2.2 AA · 2.5.7)</h2>
                <div className="drag-handle" draggable="true">
                    Drag me — no keyboard / click alternative provided
                </div>
            </div>

            {/* <!-- ❌ FAIL: 3.3.8 (NEW 2.2) — Password field blocks paste --> */}
            <div className="test-block">
                <h2>Test 8: Accessible Authentication — password blocks paste (FAIL WCAG 2.2 AA · 3.3.8)</h2>
                <form autoComplete="new-password">
                    <div className="form-row">
                        <label htmlFor="user">Username</label>
                        <input type="text" id="user" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="pass">Password</label>
                        <input type="password" id="pass" />
                    </div>
                    <button type="submit">Sign in</button>
                </form>
            </div>

            {/* <!-- ❌ FAIL: 1.3.5 Identify Input Purpose — missing autocomplete on common fields --> */}
            <div className="test-block">
                <h2>Test 9: Missing autocomplete on personal fields (FAIL 1.3.5 AA)</h2>
                <form>
                    <div className="form-row">
                        <label htmlFor="firstname">First name</label>
                        <input type="text" id="firstname" name="firstname" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="telephone" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="address">Street address</label>
                        <input type="text" id="address" name="streetAddress" />
                    </div>
                </form>
            </div>

            {/* <!-- ❌ FAIL: 1.4.10 Reflow — fixed wide layout breaks at 320px --> */}
            <div className="test-block">
                <h2>Test 10: Reflow failure (FAIL 1.4.10 AA)</h2>
                <div className="reflow">
                    This div is 1400px wide — at 320px viewport it forces horizontal scroll, violating 1.4.10 Reflow
                </div>
            </div>

            {/* <!-- ❌ FAIL: 1.4.11 Non-text Contrast — form border too faint --> */}
            <div className="test-block">
                <h2>Test 11: Form border contrast (FAIL 1.4.11 AA)</h2>
                <input type="text" className="faintBorder" placeholder="Faint border ~1.05:1" />
            </div>

            {/* <!-- ❌ FAIL: 2.4.6 Headings and Labels — empty heading --> */}
            <div className="test-block">
                <h2>Test 12: Empty heading (FAIL 2.4.6 AA + 1.3.1)</h2>
                <h3></h3>
                <h4>   </h4>
            </div>

            {/* <!-- ❌ FAIL: 4.1.3 Status Messages — incomplete (skipping for browser test) --> */}
            <div className="test-block">
                <h2>Test 13: Form without status messages (potential 4.1.3)</h2>
                <form>
                    <input type="email" required />
                    <button type="submit">Submit</button>
                    {/* <!-- No role="alert" or aria-live region for error feedback --> */}
                </form>
            </div>

            {/* <!-- ❌ FAIL: Multiple H1 (best-practice, not strict WCAG) --> */}
            <div className="test-block">
                <h2>Test 14: Multiple H1 (best-practice signal)</h2>
                <h1>First H1</h1>
                <p>Some content</p>
                <h1>Second H1 — best-practice violation</h1>
            </div>

            {/* <!-- ❌ FAIL: iframe without title --> */}
            <div className="test-block">
                <h2>Test 15: iframe without title (FAIL 4.1.2)</h2>
                <iframe src="about:blank" width="200" height="100"></iframe>
            </div>

            {/* <!-- ❌ FAIL: 1.4.5 Images of Text — text inside image alt='' attempts to circumvent --> */}
            <div className="test-block">
                <h2>Test 16: Image of text (manual — FAIL 1.4.5 AA)</h2>
                
                {/* <!-- Text inside graphics should be real HTML text --> */}
            </div>

            {/* <!-- Help link in BOTTOM-RIGHT zone — Consistent Help test for cross-page --> */}
            <div className="helpPara">
              j;ojojoj
            </div>

        </>
    )
}