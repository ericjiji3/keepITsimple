'use client'
import Image from 'next/image';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MicrosoftBIVideos(props){
    console.log(props.vidsContent.fields.videoBlock);

    return(
        // className="max-w-[1200px] mx-auto flex bg-black rounded-lg px-[25px] py-[50px] mt-[50px]"
        <div className="max-w-[1200px] mx-auto flex bg-black rounded-lg px-[25px] pt-[25px] mt-[50px]">
            <Carousel swipable={true} emulateTouch={true} showArrows={false} showStatus={false}>
            {props.vidsContent.fields.videoBlock.map((video, index) => (
                
                <div key={index} className="text-left">
                    <Image className='mb-[25px] rounded-md' src={"https:" + video.fields.media.fields.file.url} width={video.fields.media.fields.file.details.image.width} height={video.fields.media.fields.file.details.image.height} alt={video.fields.media.fields.file.fileName}/>
                    <h3 className="text-white text-xl mb-[10px]">{video.fields.heading}</h3>
                    <span className="text-white text-md">{video.fields.detail}</span>
                </div>
            ))
            }
            </Carousel>
            

        </div>
    )
}