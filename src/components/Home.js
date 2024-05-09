'use client'

import Script from 'next/script';
import { useState, useEffect } from 'react';


export default function Home(props){
    const [heading, setHeading] = useState(null);
    const [subheading, setSubheading] = useState(null);

    useEffect(()=>{
        var head = "<h1 class='text-black text-2xl'>" + props.homeContent.fields.heading.replace(props.homeContent.fields.highlightedText, `<span class="text-blue">${props.homeContent.fields.highlightedText}</span>`) + "</h1>";
        console.log(head);
        setHeading(head);

        var subhead = "<h2 class='text-black text-xl'>" + props.homeContent.fields.subheading.replace(props.homeContent.fields.highlightedSubheadingText, `<span class="text-blue">${props.homeContent.fields.highlightedSubheadingText}</span>`) + "</h2>";
        console.log(subhead);
        setSubheading(subhead);
    }, [])
    return(
        <div className="relative z-10 mt-[75px]">
            <div className="mx-[100px] 2xl:mx-[350px] flex items-center">
                <div className="flex-[70%] mr-[80px]">
                    {/* <h1>
                        Discover How Automation can Revolutionize Your Business
                    </h1>
                    <h2>
                        Streamline Support, Improve Efficiency and Scale with AI 🤖
                    </h2>
                    <a>
                        <span>Book a free demo</span>
                    </a> */}
                    {/* {props.homeContent.fields.map((field) => (
                            <div>
                                
                            </div>
                    ))} */}
                    <div className="mb-[25px]" dangerouslySetInnerHTML={{ __html: heading }} />
                    <div className="mb-[20px]" dangerouslySetInnerHTML={{ __html: subheading }} /> 
                    <a className="inline-block rounded-md font-bold bg-blue text-white px-[50px] py-[20px]">
                        Book a free demo
                    </a>
                    
                </div>
                <div className="flex-[30%]">
                    <Script src="https://cdn.voiceflow.com/widget/bundle.mjs" strategy="afterInteractive" onLoad={() => { 
                        window.voiceflow.chat.load({
                        verify: { projectID: '66397bfa9602254be842ef38' },
                        url: 'https://general-runtime.voiceflow.com',
                        versionID: 'production',
                        render: {
                            mode: 'embedded',
                            target: document.getElementById('flat-chat'),
                        },
                        autostart: false
                    })
                    }} />
                    <div id="flat-chat"></div>    
                </div>
            </div>
            <div class="h-[150px] w-full bg-white shadow-circle rounded-bl-[100%] rounded-br-[100%]"></div>
        </div>
    )
}