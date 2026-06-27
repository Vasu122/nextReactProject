"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logo.webp";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 100); // adjust scroll threshold
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={ isSticky ? "fixed top-0 z-50 bg-white shadow-md": "relative bg-transparent"}>
      <div className="container-fluid">
        <div className="header-inner">
          <div className="logo-container">
            <Link href="/">
            <Image src={logo} alt="free tools" />
            </Link>
          </div>
          <nav>
            <div className="pill-nav">
              <Link href="/aspectRatioCalculator">
                {" "}
                Aspect Ratio Calculator
              </Link>
              <Link href="/escaperandbeautify"> escaper and beautify </Link>
              <Link href="/contactUs"> Contact Us </Link>
              <Link href="/aboutUs"> About Us </Link>
              <Link href="/testAAA"> Test AAA </Link>
              <Link href="/testAA"> Test AA </Link>
              <Link href="/testA"> Test A </Link>
              <Link href="/iframeTest"> Iframe </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
