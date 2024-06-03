'use client'

import Script from 'next/script';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export default function Contact(props){
    const [heading, setHeading] = useState(null);
    const [subheading, setSubheading] = useState(null);

    useEffect(()=>{
        var head = "<h1 class='text-black text-mobile2xl lg:text-2xl'>" + props.contContent.fields.heading.replace(props.contContent.fields.highlightedText, `<span class="text-blue">${props.contContent.fields.highlightedText}</span>`) + "</h1>";
        console.log(head);
        setHeading(head);

        var subhead = "<h2 class='text-black text-mobilexl lg:text-xl'>" + props.contContent.fields.subheading.replace(props.contContent.fields.highlightedSubheadingText, `<span class="text-blue">${props.contContent.fields.highlightedSubheadingText}</span>`) + "</h2>";
        console.log(subhead);
        setSubheading(subhead);
    }, [])
    return(
        <div className="relative z-10 mt-[50px] lg:mt-[75px]" id="contact">
            <div className="max-w-[350px] md:max-w-[1200px] xl:max-w-[1100px] mx-auto items-center">
                <div className="text-center">
                    <div className="mb-[15px] lg:mb-[25px]" dangerouslySetInnerHTML={{ __html: heading }} />
                    <div className="mb-[30px] lg:mb-[50px]" dangerouslySetInnerHTML={{ __html: subheading }} /> 
                    <motion.div
            initial={{ opacity: 0, translateY: -200 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{margin: '-300px'}}
            transition={{
                type: "ease-in",
                duration: 0.5
            }}
            >
                    <form className='bg-blue text-white rounded-md mx-auto w-[95%] lg:w-[85%] p-[25px] lg:p-[50px] text-mobilexl lg:text-base shadow-card mb-[15px]'>
                        <div className='flex flex-col lg:flex-row gap-[15px] lg:gap-[25px] w-full'>
                            <div className='flex flex-1 flex-col'>
                                <label className="text-left mb-[5px]" for="fname">First Name</label>
                                <input className="text-black rounded-sm border border-blackish border-[2px] p-[10px]" placeholder="First Name" type="text" id="fname" name="fname"></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className="text-left mb-[5px]" for="lname">Last Name</label>
                                <input className="text-black rounded-sm border border-blackish border-[2px] p-[10px]" placeholder='Last Name' type="text" id="lname" name="lname"></input>
                            </div>
                        </div>
                        <div className='flex flex-col mt-[15px]'>
                            <label className="text-left mb-[5px]" for="phone">Phone</label>
                            <input className="text-black rounded-sm border border-blackish border-[2px] p-[10px]" placeholder='Phone' type="text" id="phone" name="phone"></input>
                        </div>
                        <div className='flex flex-col mt-[15px]'>
                            <label className="text-left mb-[5px]" for="demo">Demo</label>
                            <select className="text-black rounded-sm border border-blackish border-[2px] p-[10px]" name="demo" id="demo">
                                <option value="" disabled selected>Select Demo</option>
                                <option value="chatbot">Chatbot</option>
                                <option value="powerBi">Power BI</option>
                            </select>
                        </div>
                        <div className='flex flex-col mt-[15px]'>
                            <label className="text-left mb-[5px]" for="comments">Additional Comments</label>
                            <textarea className="text-black rounded-sm border border-blackish border-[2px] p-[10px] h-[200px]" placeholder="Type message here..." name="comments" id="comments"></textarea>
                        </div>
                        <submit className="bg-white text-blue text-mobilexl lg:text-lg rounded-md px-[50px] lg:px-[100px] py-[15px] mt-[50px] inline-block w-auto hover:cursor-pointer font-bold">Book a Demo</submit>
                    </form>
                    </motion.div>
                </div>
            </div>
            <div class="h-[150px] w-full bg-white shadow-circle rounded-bl-[100%] rounded-br-[100%]"></div>
        </div>
    )
}