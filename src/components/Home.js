'use client'

import Script from 'next/script';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Hero1 from '../../public/hero1.gif';
import Hero2 from '../../public/hero2.gif';
import Hero3 from '../../public/hero3.gif';

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
            viewport={{once: true}}
            className="flex-1 md:flex-[65%] mr-0 md:mr-[50px] md:mb-0 mb-[50px]"
            >
                <div>
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
            className="none md:block flex-1 md:flex-[35%]"
            >
                <div>
                    {/* <Script src="https://cdn.voiceflow.com/widget/bundle.mjs" strategy="afterInteractive" onLoad={() => { 
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
                    <div id="flat-chat"></div>     */}
                    <div className='relative'>
                        <Image className='md:w-full z-[2] absolute md:top-[50%] translate-y-[-50%] rounded-sm' src={Hero1}/>
                        <Image className='md:w-[85%] z-[1] absolute md:right-[-20%] md:top-[50%] translate-y-[40%] rounded-sm' src={Hero2}/>
                        <Image className='md:w-[65%] z-[1] absolute md:right-[30%] md:top-[-210px] rounded-sm' src={Hero3}/>
                    </div>

                </div>
                </motion.div>
            </div>
            
            <div class="h-[75px] md:h-[150px] w-full bg-white shadow-circle rounded-bl-[100%] rounded-br-[100%]"></div>
        </div>
    )
}