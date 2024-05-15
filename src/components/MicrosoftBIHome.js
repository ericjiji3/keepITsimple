'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function MicrosoftBIHome(props){
    console.log(props.microBIContent.fields.image1.fields.file.details.image);
    const [heading, setHeading] = useState(null);
    const [subheading, setSubheading] = useState(null);

    useEffect(()=>{
        var head = "<h1 class='text-2xl text-black text-center'>" + props.microBIContent.fields.heading.replace(props.microBIContent.fields.highlightedHeading1Text, `<span class="text-blue">${props.microBIContent.fields.highlightedHeading1Text}</span>`) + "</h1>";
        setHeading(head);

        // var subhead = "<h2 class='text-black text-xl'>" + props.microBIContent.fields.heading2.replace(props.homeContent.fields.highlightedHeading2Text, `<span class="text-blue">${props.homeContent.fields.highlightedHeading2Text}</span>`) + "</h2>";
        // console.log(subhead);
        // setSubheading(subhead);
    }, [])
    return(
        <div className="bg-white">
            <div className='max-w-[1200px] xl:max-w-[1100px] mx-auto'>
                <div className="mt-[25px]" dangerouslySetInnerHTML={{ __html: heading }} />
                <div className='relative py-[350px]'>
                    <Image className="w-[600px] h-auto absolute bottom-[50%] translate-y-1/2 left-[25%] rounded-[10px] shadow-card" src={"https:" + props.microBIContent.fields.image1.fields.file.url} width={props.microBIContent.fields.image1.fields.file.details.image.width} height={props.microBIContent.fields.image1.fields.file.details.image.height} alt={props.microBIContent.fields.image1.fields.file.fileName}/>
                    <Image className="w-[350px] h-auto absolute bottom-[5%] left-[45%] rounded-[10px] shadow-card" src={"https:" + props.microBIContent.fields.image2.fields.file.url} width={props.microBIContent.fields.image2.fields.file.details.image.width} height={props.microBIContent.fields.image2.fields.file.details.image.height} alt={props.microBIContent.fields.image2.fields.file.fileName}/>
                    <Image className="w-[400px] h-auto absolute top-[5%] left-[55%] rounded-[10px] shadow-card" src={"https:" + props.microBIContent.fields.image3.fields.file.url} width={props.microBIContent.fields.image3.fields.file.details.image.width} height={props.microBIContent.fields.image3.fields.file.details.image.height} alt={props.microBIContent.fields.image3.fields.file.fileName}/>
                </div>
                <h1 className='mt-[25px] text-xl text-black text-center mb-[100px]'>{props.microBIContent.fields.heading2}</h1>
            </div>
        </div>
    )
}