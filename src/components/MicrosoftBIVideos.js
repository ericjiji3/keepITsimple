'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion";

export default function MicrosoftBIVideos(props){
    console.log('ehrajenlrk', props.vidsContent.fields.videoBlock[0].fields.media.fields.file.details);
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
    
    return(
        // className="max-w-[1200px] mx-auto flex bg-black rounded-lg px-[25px] py-[50px] mt-[50px]"
        <motion.div
            initial={{ opacity: 0, translateY: -200 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{margin: (width <= 768 ? '-300px' : width <= 1024 ? '-400px' : width <= 1280 ? '-140px' : '-500px')}}
            transition={{
                type: "ease-in",
                duration: 0.5
            }}
            >
        <div className="max-w-[350px] md:max-w-[1200px] xl:max-w-[1100px] mx-auto flex bg-black rounded-lg px-[25px] pt-[25px] mt-[50px]">
            <Carousel className='w-full' swipable={true} emulateTouch={true} showArrows={false} showStatus={false}>
            {props.vidsContent.fields.videoBlock.map((video, index) => (
                
                <div key={index} className="text-left">
                    <video controls className={`mb-[25px] rounded-md md:w-full md:h-full`} src={"https:" + video.fields.media.fields.file.url} alt={video.fields.media.fields.file.fileName}/>
                    <h3 className="text-white text-mobile2xl lg:text-xl mb-[10px]">{video.fields.heading}</h3>
                    <span className="text-white text-mobilebase lg:text-lg">{video.fields.detail}</span>
                </div>
            ))
            }
            </Carousel>
            

        </div>
        </motion.div>
    )
}