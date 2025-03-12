'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export default function MicrosoftBIHome(props){
    console.log('MICRO HOME', props.microBIContent.fields);
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
        var head = "<h1 class='text-mobile2xl md:text-2xl text-black text-center'>" + props.microBIContent.fields.heading.replace(props.microBIContent.fields.highlightedHeading1Text, `<span class="text-blue">${props.microBIContent.fields.highlightedHeading1Text}</span>`) + "</h1>";
        setHeading(head);

        var subhead = "<h2 class='text-black text-mobilexl md:text-xl text-black text-center mb-[25px] lg:mb-[50px]'>" + props.microBIContent.fields.heading2.replace(props.microBIContent.fields.highlightedHeading2Text, `<span class="text-blue">${props.microBIContent.fields.highlightedHeading2Text}</span>`) + "</h2>";
        console.log(subhead);
        setSubheading(subhead);
    }, [])
    return(
        <div className="bg-white" id="powerbi">
            <div className='max-w-[350px] md:max-w-[1200px] xl:max-w-[1100px] mx-auto'>
                <div className="mt-[25px]" dangerouslySetInnerHTML={{ __html: heading }} />
                {/* <div className='relative py-[200px] lg:py-[350px]'>
                    <Image className="animate-floating w-[400px] lg:w-[600px] h-auto absolute bottom-[25%] lg:bottom-[30%] translate-y-1/2 left-[0] lg:left-[15%] rounded-[10px] shadow-card" src={"https:" + props.microBIContent.fields.image1.fields.file.url} width={props.microBIContent.fields.image1.fields.file.details.image.width} height={props.microBIContent.fields.image1.fields.file.details.image.height} alt={props.microBIContent.fields.image1.fields.file.fileName}/>
                    <Image className="animate-floating3 w-[150px] lg:w-[350px] h-auto absolute bottom-[20%] lg:bottom-[25%] left-[45%] rounded-[10px] shadow-card" src={"https:" + props.microBIContent.fields.image2.fields.file.url} width={props.microBIContent.fields.image2.fields.file.details.image.width} height={props.microBIContent.fields.image2.fields.file.details.image.height} alt={props.microBIContent.fields.image2.fields.file.fileName}/>
                    <Image className="animate-floating2 w-[200px] lg:w-[400px] h-auto absolute top-[15%] lg:top-[5%] left-[0%] lg:left-[55%] rounded-[10px] shadow-card" src={"https:" + props.microBIContent.fields.image3.fields.file.url} width={props.microBIContent.fields.image3.fields.file.details.image.width} height={props.microBIContent.fields.image3.fields.file.details.image.height} alt={props.microBIContent.fields.image3.fields.file.fileName}/>
                </div> */}
                <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{margin: (width <= 1500 ? '-100px' :'-300px'), once: true}}
            transition={{
                type: "ease-in",
                duration: 0.5
            }}
            >
                <div>
                {/* <iframe title="Sales Report Draft" className='w-full mt-[25px]' width={1140} height={541.25} src="https://app.powerbi.com/reportEmbed?reportId=0a05977f-d9a5-446f-b69a-75f8063235b0&autoAuth=true&ctid=0859cc3b-5093-4056-821f-3e363f0f95fc" frameborder="0" allowFullScreen="true"></iframe> */}
                <iframe title="Sales Report Draft" className='rounded-sm w-[350px] shadow-card h-[218px] md:w-[800px] md:h-[498px] mx-auto my-[50px]' width={800} height={498} src="https://app.powerbi.com/view?r=eyJrIjoiYjRhY2YwNjctYTdiZC00NjFlLWIxZjctMmU3OGVjNTQxODRiIiwidCI6IjA4NTljYzNiLTUwOTMtNDA1Ni04MjFmLTNlMzYzZjBmOTVmYyJ9" frameborder="0" allowFullScreen="true"></iframe>
                </div>
                </motion.div>
                {/* <h1 className='mt-[25px] text-mobilexl md:text-xl text-black text-center mb-[25px] lg:mb-[100px]'>{props.microBIContent.fields.heading2}</h1> */}
                <div className="mt-[25px]" dangerouslySetInnerHTML={{ __html: subheading }} />
            </div>
        </div>
    )
}