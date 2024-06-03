'use client'

import Script from 'next/script';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export default function Home(props){
    const [heading, setHeading] = useState(null);
    const [subheading, setSubheading] = useState(null);

    useEffect(()=>{
        var head = "<h1 class='text-black lg:text-2xl text-mobile2xl'>" + props.homeContent.fields.heading.replace(props.homeContent.fields.highlightedText, `<span class="text-blue">${props.homeContent.fields.highlightedText}</span>`) + "</h1>";
        console.log(head);
        setHeading(head);

        var subhead = "<h2 class='text-black lg:text-xl text-mobilexl'>" + props.homeContent.fields.subheading.replace(props.homeContent.fields.highlightedSubheadingText, `<span class="text-blue">${props.homeContent.fields.highlightedSubheadingText}</span>`) + "</h2>";
        console.log(subhead);
        setSubheading(subhead);
    }, [])
    return(
        <div className="relative z-10 mt-[40px] md:mt-[75px]" id="chatbot">
            <div className="max-w-[350px] md:max-w-[1200px] md:px-[25px] xl:max-w-[1100px] mx-auto flex md:flex-row flex-col items-center">
            <motion.div
            initial={{ opacity: 0, translateX: -200 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
                type: "ease-in",
                duration: 0.5
            }}
            >
                <div className="flex-1 md:flex-[70%] mr-0 md:mr-[80px] md:mb-0 mb-[50px]">
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
                    <a href="#contact" className="inline-block rounded-md font-bold mobile-text-md md:text-md bg-blue text-white px-[50px] py-[20px]">
                        Book a free demo
                    </a>
                    
                </div>
                </motion.div>
                <motion.div
            initial={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
                type: "ease-in",
                duration: 0.5
            }}
            >
                <div className="flex-1 md:flex-[30%]">
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
                </motion.div>
            </div>
            
            <div class="h-[150px] w-full bg-white shadow-circle rounded-bl-[100%] rounded-br-[100%]"></div>
        </div>
    )
}