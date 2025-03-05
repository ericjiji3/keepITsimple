"use client";
import "./css/GetStarted.css";
import Image from "next/image";

const logos = [
  { src: "/path/to/placeholder-image.png", alt: "Placeholder Logo 1" },
  { src: "/path/to/placeholder-image.png", alt: "Placeholder Logo 2" },
  { src: "/path/to/placeholder-image.png", alt: "Placeholder Logo 3" },
  { src: "/path/to/placeholder-image.png", alt: "Placeholder Logo 4" },
  { src: "/path/to/placeholder-image.png", alt: "Placeholder Logo 5" },
  { src: "/path/to/placeholder-image.png", alt: "Placeholder Logo 6" },
  { src: "/path/to/placeholder-image.png", alt: "Placeholder Logo 7" },
  { src: "/path/to/placeholder-image.png", alt: "Placeholder Logo 8" },
];

export default function GetStarted() {
  return (
    <div className="get-started-section">
      <div className="get-started-section-parent">
      <div className="get-started-content">
          <h2>We&apos;re so confident, we&apos;ll give you a free demo</h2>
          <p>You read that right... completely free. No lock in contract.</p>
      </div>
      <div className="get-started-button-container">
        <a href="/contact" className="get-started-button">Book a Demo</a>
      </div>
      </div>
    </div>
  );
}