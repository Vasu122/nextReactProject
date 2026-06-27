
"use client"
import Image from "next/image";
import aspectRatio from "../images/change-aspect-ratio.png";
import htmlescape from "../images/html-escape.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <main className="home-inner">
        <div className="product-list">
          <ul>
            <li>
              <Link href="/aspectRatioCalculator">
              <div className="card">
                <Image src={aspectRatio} alt="image aspect ratio" />
                <div className="product-detail">
                  <h4>
                    Aspect Ratio Calculator
                  </h4>
                  <p>Aspect ratio refers to the proportional relationship between an image or video's width and height</p>
                </div>
              </div>
              </Link>
            </li>
            <li>
            <Link href="/escaperandbeautify">
              <div className="card">
                <Image src={htmlescape} alt="html escape and beauti" />
                <div className="product-detail">
                  <h4>
                    Escape and beautify Formatter
                  </h4>
                  <p>This formatter convert to html code to escape character</p>
                </div>
              </div>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
