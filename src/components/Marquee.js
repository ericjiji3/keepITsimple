"use client";
import "./css/Marquee.css";
import Image from "next/image";
import Image1 from "../components/images/partners/image1.png";
import Image2 from "../components/images/partners/image2.png";
import Image3 from "../components/images/partners/image3.png";
import Image4 from "../components/images/partners/image4.png";
import Image5 from "../components/images/partners/image5.png";
import Image6 from "../components/images/partners/image6.png";
import Image7 from "../components/images/partners/image7.png";
import Image8 from "../components/images/partners/image8.png";

function PartnersMarquee() {
  console.log("Partner images:", [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8]);

  const partnerImages = [
    { src: Image1, alt: "Partner 1" },
    { src: Image2, alt: "Partner 2" },
    { src: Image3, alt: "Partner 3" },
    { src: Image4, alt: "Partner 4" },
    { src: Image5, alt: "Partner 5" },
    { src: Image6, alt: "Partner 6" },
    { src: Image7, alt: "Partner 7" },
    { src: Image8, alt: "Partner 8" },
  ];

  console.log("Partner images array length:", partnerImages.length);


  // Create multiple copies to ensure seamless looping
  const allImageGroups = Array(4).fill().map((_, groupIndex) => (
    <div key={`group-${groupIndex}`} className="partners-image-group">
      {partnerImages.map((image, imageIndex) => (
        <div key={`img-${groupIndex}-${imageIndex}`} className="partner-image-wrapper">
          <Image
            src={image.src}
            alt={image.alt}
            width={150}
            height={80}
            className="partner-image"
          />
        </div>
      ))}
    </div>
  ));

  return (
    <div className="partners-marquee-container">
      <div className="partners-marquee-inner">
        {allImageGroups}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <div className="partners-main" aria-label="our partners">
      <PartnersMarquee />
    </div>
  );
}