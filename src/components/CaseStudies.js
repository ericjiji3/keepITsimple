"use client";
import "./css/CaseStudies.css";
import { motion } from "framer-motion";
import Image from "next/image";

import Image1 from "../components/images/case-studies/image1.png";
import Image2 from "../components/images/case-studies/image2.png";
import Image3 from "../components/images/case-studies/image3.png";


export default function CaseStudies(props) {
  // console.log(props.caseStudiesContent.fields.caseStudies);
  return (
    <div id="case-studies" className="case-studies-main">
      <div className="case-studies-top-container">
        <div className="case-studies-top-text">
          <h1>Case Studies</h1>
          <h2>Let us show you how we solved real world business problems</h2>
        </div>
      </div>


      <div className="case-studies-bottom-container">
      {props.caseStudiesContent.fields.caseStudies.map((caseStudy, index) => (
        console.log(caseStudy.fields.image.fields.file.url),
        <div key={index} className="case-studies-image-group">
          <div className="case-studies-image-wrapper">
            <Image 
               src={"https:" + caseStudy.fields.image.fields.file.url}

              alt="Case Study Image" 
              width={300} 
              height={300} 
              className="case-study-image" 
            />
            {/* <div>{caseStudy.fields?.image.fields.file.url}</div> */}
            <h3>{caseStudy.fields?.header}</h3>
            <p>{caseStudy.fields?.paragraph}</p>
            <button 
              className="case-study-button" 
              onClick={() => window.open(caseStudy.fields.pdf.fields.file.url, "_blank")}
            >
              View Case Study
            </button>
          </div>
        </div>
        ))}



        {/* <div className="case-studies-image-group">
          <div className="case-studies-image-wrapper">
            <Image src={Image2} alt="Case Study 2" className="case-study-image" />
            <h3>From Preparation to Execution: Power BI for a Smooth ERP Transition</h3>
            <p>Discover how we helped a leading Steel Manufacturer prepare for a system change.</p>
            <button className="case-study-button">View Case Study</button>
          </div>
        </div>
        <div className="case-studies-image-group">
          <div className="case-studies-image-wrapper">
            <Image src={Image3} className="case-study-image" alt="Case Study 3" />
            <h3>From Ledgers to Power BI: Modern Reporting for a Business Founded in 1859</h3>
            <p>Read how we added value to a company established over 150 years ago.</p>
            <button className="case-study-button">View Case Study</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
