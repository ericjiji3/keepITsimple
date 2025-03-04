"use client";
import "./css/Marquee.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Image1 from "../components/images/partners/image1.png";
import Image2 from "../components/images/partners/image2.png";
import Image3 from "../components/images/partners/image3.png";
import Image4 from "../components/images/partners/image4.png";
import Image5 from "../components/images/partners/image5.png";
import Image6 from "../components/images/partners/image6.png";

function PartnersMarquee() {
  const partnerImages = [
    { src: Image1, alt: "Partner 1" },
    { src: Image2, alt: "Partner 2" },
    { src: Image3, alt: "Partner 3" },
    { src: Image4, alt: "Partner 4" },
    { src: Image5, alt: "Partner 5" },
    { src: Image6, alt: "Partner 6" },
  ];

  return (
    <div className="partners-marquee-container">
      <motion.div
        className="partners-marquee-track"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="partners-image-group">
          {partnerImages.map((image, index) => (
            <div key={index} className="partner-image-wrapper">
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
        <div className="partners-image-group">
          {partnerImages.map((image, index) => (
            <div key={`duplicate-${index}`} className="partner-image-wrapper">
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
      </motion.div>
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