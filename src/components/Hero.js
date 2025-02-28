'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Hero1 from '../../public/hero1.gif';
import Hero2 from '../../public/hero2.gif';
import Hero3 from '../../public/hero3.gif';

import "./css/Hero.css";

import Image1 from "../components/images/partners/image1.png";
import Image2 from "../components/images/partners/image2.png";
import Image3 from "../components/images/partners/image3.png";
import Image4 from "../components/images/partners/image4.png";
import Image5 from "../components/images/partners/image5.png";
import Image6 from "../components/images/partners/image6.png";

const partnerImages = [
  { src: Image1, alt: "Partner 1" },
  { src: Image2, alt: "Partner 2" },
  { src: Image3, alt: "Partner 3" },
  { src: Image4, alt: "Partner 4" },
  { src: Image5, alt: "Partner 5" },
  { src: Image6, alt: "Partner 6" },
];


export default function Home(props){
    const [heading, setHeading] = useState(null);
    const [subheading, setSubheading] = useState(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
        };
        document.addEventListener("resize", resize);
        () => document.removeEventListener("resize", resize);
    }, [width])
    
    useEffect(()=>{
        var head = "<h1 class='text-black lg:text-2xl text-mobile2xl'>" + props.homeContent.fields.heading.replace(props.homeContent.fields.highlightedText, `<span class="text-blue">${props.homeContent.fields.highlightedText}</span>`) + "</h1>";
        console.log(head);
        setHeading(head);

        var subhead = "<h2 class='hero-subheader'>" + props.homeContent.fields.subheading.replace(props.homeContent.fields.highlightedSubheadingText, `<span class="text-blue">${props.homeContent.fields.highlightedSubheadingText}</span>`) + "</h2>";
        console.log(subhead);
        setSubheading(subhead);
    }, [])
    return(
        <div className="hero-section" id="hero-section">
            <div className="hero-top-half">
                <div className="hero-content">
                    <div className="hero-textbox">
                        <div className="hero-header" dangerouslySetInnerHTML={{ __html: heading }} />
                        <div className="hero-subheader" dangerouslySetInnerHTML={{ __html: subheading }} /> 
                    </div>
                    <a href="#contact" className="hero-button">
                        Book a free demo
                    </a>
                </div>
                <div className='hero-image-container'>
                    <div className='hero-image-box'>
                        <Image className='hero-image bottom'  src={Hero1}/>
                        <Image className='hero-image middle' src={Hero3}/>
                        <Image className='hero-image top' src={Hero2}/>

                    </div>

                    </div>
                
                </div>
                <div className="hero-bottom-half">
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
                    </div>
        </div>
    )
}