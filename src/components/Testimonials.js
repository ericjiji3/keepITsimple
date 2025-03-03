"use client";
import "./css/Testimonials.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// import Avatar1 from "../components/images/testimonials/avatar1.png";
// import Avatar2 from "../components/images/testimonials/avatar2.png";
// import Avatar3 from "../components/images/testimonials/avatar3.png";

// const testimonials = [
//   {
//     name: "Luke Bird",
//     title: "Chief Financial Officer - MPM Marketing",
//     quote: "KIS helped us replace and automate our old system, saving time and giving us real-time insights with Power BI.",
//     image: Avatar1 // Replace with actual image path
//   },
//   {
//     name: "Gordon Shore",
//     title: "Managing Director - Milform Australia",
//     quote: "The team at KIS made the transition to our new ERP system 10x easier, streamlining our reporting and giving us instant access to the data we need.",
//     image: Avatar2 // Replace with actual image path
//   },
//   {
//     name: "Charles Baddeley",
//     title: "Managing Director - Baddeley Brothers",
//     quote: "The team at KIS didn't just set up Power BI for us—they made sure we knew how to use it effectively. Their focus on training and support helped us unlock its full potential.",
//     image: Avatar3 // Replace with actual image path
//   },
// ];

export default function Testimonials(props) {
  console.log(props.testimonialsContent.fields.testimonials);
  return (
    <div className="testimonials-main">
      <div className="testimonials-main-content">
      <h1>What our clients are saying</h1>
      <h2>Hear how we used Power BI to revolutionise their business</h2>
      <div className="testimonials-container">
        {props.testimonialsContent.fields.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for staggered effect
          >
            <div className="testimonial-top-container">
                <div className="testimonial-image-wrapper">
                    <Image
                    src={"https:" + testimonial.fields.image.fields.file.url}
                    
                    alt="Testimonial Image"
                    width={80}
                    height={80}
                className="testimonial-image"
              />
            </div>
            <div className="testimonial-top-text">
            <h3>{testimonial.fields.name}</h3>
            <h4>{testimonial.fields.positionName}</h4>
            <h4>{testimonial.fields.companyName}</h4>
            </div>
            </div>
            <p>{testimonial.fields.quote}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}

