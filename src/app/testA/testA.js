"use client"

import Image from "next/image"
import React from "react"

export const TestA = () => {
    return (
        <>
            <div className="test-block">
                <h2>Test 1: Image without alt (FAIL 1.1.1)</h2>
                <Image src="https://via.placeholder.com/150" width="150" height="150" alt="fisrt" />
            </div>

            {/* <!-- ✅ PASS: 1.1.1 — img with alt --> */}
            <div className="test-block">
                <h2>Test 2: Image with alt (PASS)</h2>
                <Image src="https://via.placeholder.com/150" alt="Placeholder graphic showing 150 by 150 box" width="150" height="150" />
            </div>

            {/* <!-- ✅ PASS: 1.1.1 — decorative img with role=presentation (Sprint 1 Fix #2) --> */}
            <div className="test-block">
                <h2>Test 3: Decorative image — role=presentation (PASS — no alt needed)</h2>
                <Image src="https://via.placeholder.com/50" role="presentation" width="50" height="50" alt="presrr" />
                <Image src="https://via.placeholder.com/50" aria-hidden="true" width="50" height="50" alt="presrr1"/>
                <Image src="https://via.placeholder.com/50" role="none" width="50" height="50" alt="presrr3"/>
            </div>

            {/* <!-- ❌ FAIL: 4.1.2 Name Role Value — button with no accessible name --> */}
            <div className="test-block">
                <h2>Test 4: Empty button (FAIL 4.1.2)</h2>
                <button className="tiny"></button>
            </div>

            {/* <!-- ✅ PASS: 4.1.2 — button with SVG that has aria-label (Sprint 1 Fix #1) --> */}
            <div className="test-block">
                <h2>Test 5: Button with labelled SVG (PASS)</h2>
                <button>
                    <svg width="20" height="20" aria-label="Close menu">
                        <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" />
                    </svg>
                </button>
            </div>

            {/* <!-- ❌ FAIL: 2.4.4 Link Purpose — empty link --> */}
            <div className="test-block">
                <h2>Test 6: Empty link (FAIL 2.4.4)</h2>
                <a href="/about"></a>
            </div>

            {/* <!-- ❌ FAIL: 2.4.4 — Generic link text --> */}
            <div className="test-block">
                <h2>Test 7: Generic link text "Click here" (FAIL 2.4.4)</h2>
                <p>For more information, <a href="/about">click here</a>.</p>
                <p>Want to learn more? <a href="/products">read more</a></p>
            </div>

            {/* <!-- ✅ PASS: 2.4.4 — Generic visible text overridden by descriptive aria-label (Sprint 1 Fix #3) --> */}
            <div className="test-block">
                <h2>Test 8: Generic text with aria-label override (PASS)</h2>
                <a href="/article/12" aria-label="Read full article: Accessibility Best Practices 2025">
                    Read more
                </a>
            </div>

            {/* <!-- ❌ FAIL: 3.3.2 Labels or Instructions — input without label --> */}
            <div className="test-block">
                <h2>Test 9: Input without label (FAIL 3.3.2)</h2>
                <input type="text" id="unlabeled-input" placeholder="Email" />
            </div>

            {/* <!-- ✅ PASS: 3.3.2 — input with proper label --> */}
            <div className="test-block">
                <h2>Test 10: Input with label (PASS)</h2>
                <label htmlFor="email-input">Email address</label>
                <input type="email" id="email-input" />
            </div>

            {/* <!-- ❌ FAIL: 1.3.1 Info and Relationships — heading order skip --> */}
            <div className="test-block">
                <h2>Test 11: Heading skip (FAIL 1.3.1)</h2>
                <h2>Main heading</h2>
                <h5>Skipped from h2 to h5!</h5>
            </div>

            {/* <!-- ❌ FAIL: 1.3.1 — <li> outside list --> */}
            <div className="test-block">
                <h2>Test 12: Orphan li (FAIL 1.3.1)</h2>
                <div>
                    <li>This li is not in a ul/ol!</li>
                </div>
            </div>

            {/* <!-- ✅ PASS: 1.3.1 — ARIA list pattern is valid (Sprint 1 Fix #4) --> */}
            <div className="test-block">
                <h2>Test 13: ARIA list pattern (PASS)</h2>
                <div role="list">
                    <div role="listitem">First item</div>
                    <div role="listitem">Second item</div>
                </div>
            </div>

            {/* <!-- ❌ FAIL: 2.4.1 Bypass Blocks — no skip link at top -->
<!-- (Implicit — there's no skip link anywhere on this page) --> */}

            {/* <!-- ❌ FAIL: 2.4.2 Page Titled — title is OK, but let's also test duplicate IDs --> */}
            <div className="test-block">
                <h2>Test 14: Duplicate IDs (FAIL 4.1.1 → 4.1.2 in WCAG 2.2)</h2>
                <div id="duplicate-id">First element</div>
                <div id="duplicate-id">Second element with same ID</div>
            </div>

            {/* <!-- ❌ FAIL: 2.1.1 Keyboard — positive tabIndex disrupts order --> */}
            <div className="test-block">
                <h2>Test 15: Positive tabIndex (FAIL 2.4.3)</h2>
                <button tabIndex="5">Button with tabIndex=5</button>
                <button tabIndex="3">Button with tabIndex=3</button>
                <button tabIndex="1">Button with tabIndex=1</button>
            </div>

            {/* <!-- ❌ FAIL: 3.1.1 Language of Page — handled in HTML tag, but let's add a lang issue -->
<!-- <html lang="en"> is already set above ✓ --> */}

            {/* <!-- ❌ FAIL: 4.1.2 — aria-hidden on focusable element --> */}
            <div className="test-block">
                <h2>Test 16: aria-hidden with focusable child (FAIL 4.1.2)</h2>
                <div aria-hidden="true">
                    <button>This button is keyboard-reachable but hidden from screen readers</button>
                </div>
            </div>

            {/* <!-- ❌ FAIL: 4.1.2 — aria-labelledby references non-existent ID --> */}
            <div className="test-block">
                <h2>Test 17: Broken aria-labelledby (FAIL 4.1.2)</h2>
                <button aria-labelledby="does-not-exist">Click me</button>
            </div>

            {/* <!-- ❌ FAIL: 3.3.7 (NEW in 2.2) — Redundant Entry pattern across forms --> */}
            <div className="test-block">
                <h2>Test 18: Same field repeated (potential 3.3.7 — NEW in WCAG 2.2)</h2>
                <form>
                    <label htmlFor="email-1">Email (step 1)</label>
                    <input type="email" id="email-1" name="email"  />
                </form>
                <p>Later on the same page…</p>
                <form>
                    <label htmlFor="email-2">Email (step 2 — should pre-fill)</label>
                    <input type="email" id="email-2" name="email"  />
                </form>
            </div>

            {/* <!-- ❌ FAIL: 3.2.6 (NEW in 2.2) — Consistent Help (no help link present anywhere on page) -->
<!-- This SC needs cross-page comparison — single-page scan won't flag it --> */}

            {/* <!-- Footer with broken anchor link --> */}
            <div className="test-block">
                <h2>Test 19: Broken same-page anchor (FAIL 2.4.1)</h2>
                <a href="#non-existent-section">Jump to section that doesn't exist</a>
            </div>

            {/* <!-- Footer with href="#" dead link --> */}
            <div className="test-block">
                <h2>Test 20: Dead href="#" link (FAIL 2.4.4)</h2>
                <a href="#">Dead link with no destination</a>
            </div>

        </>
    )
}