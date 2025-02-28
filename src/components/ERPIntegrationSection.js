"use client";
import "./css/ERPIntegrationSection.css";
import Image from "next/image";


import Image1 from "../components/images/integrations/image1.png";
import Image2 from "../components/images/integrations/image2.png";
import Image3 from "../components/images/integrations/image3.png";
import Image4 from "../components/images/integrations/image4.png";
import Image5 from "../components/images/integrations/image5.png";
import Image6 from "../components/images/integrations/image6.png";
import Image7 from "../components/images/integrations/image7.png";
import Image8 from "../components/images/integrations/image8.png";
import Image9 from "../components/images/integrations/image9.png";

const partnerImages = [
  { src: Image1, alt: "Partner 1" },
  { src: Image2, alt: "Partner 2" },
  { src: Image3, alt: "Partner 3" },
  { src: Image4, alt: "Partner 4" },
  { src: Image5, alt: "Partner 5" },
  { src: Image6, alt: "Partner 6" },
  { src: Image7, alt: "Partner 7" },
  { src: Image8, alt: "Partner 8" },
  { src: Image9, alt: "Partner 9" },
];

export default function ERPIntegrationSection() {
  return (
    <div className="erp-integration-section">
      <div className="erp-integration-section-content">
      <div className="erp-integration-section-text">
      <h2>If your business uses an ERP, chances are we <span className="highlight">specialise</span> in it!</h2>
      <p>Seamlessly integrate Power BI with your ERP system to unlock real-time analytics, improve decision-making, and drive business growth.</p>
      </div>
      <div className="integration-logos">
        {partnerImages.map((logo, index) => (
          <div key={index} className="integration-wrapper">
            <Image
              src={logo.src}
              alt={logo.alt}
              className="integration-logo"
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}