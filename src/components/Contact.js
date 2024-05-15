'use client'

import Script from 'next/script';
import { useState, useEffect } from 'react';


export default function Contact(props){
    const [heading, setHeading] = useState(null);
    const [subheading, setSubheading] = useState(null);

    useEffect(()=>{
        var head = "<h1 class='text-black text-2xl'>" + props.contContent.fields.heading.replace(props.contContent.fields.highlightedText, `<span class="text-blue">${props.contContent.fields.highlightedText}</span>`) + "</h1>";
        console.log(head);
        setHeading(head);

        var subhead = "<h2 class='text-black text-xl'>" + props.contContent.fields.subheading.replace(props.contContent.fields.highlightedSubheadingText, `<span class="text-blue">${props.contContent.fields.highlightedSubheadingText}</span>`) + "</h2>";
        console.log(subhead);
        setSubheading(subhead);
    }, [])
    return(
        <div className="relative z-10 mt-[75px]">
            <div className="max-w-[1200px] xl:max-w-[1100px] mx-auto items-center">
                <div className="text-center">
                    <div className="mb-[25px]" dangerouslySetInnerHTML={{ __html: heading }} />
                    <div className="mb-[20px]" dangerouslySetInnerHTML={{ __html: subheading }} /> 
                    <a className="inline-block rounded-md font-bold bg-blue text-white px-[50px] py-[20px]">
                        Book a free demo
                    </a>
                    
                </div>
            </div>
            <div class="h-[150px] w-full bg-white shadow-circle rounded-bl-[100%] rounded-br-[100%]"></div>
        </div>
    )
}