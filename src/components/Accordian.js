'use client';

import Image from "next/image";
import Arrow from "../../public/accArrow.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Accordian(props){
    const [accRef, setAccRef] = useState({});
    const [ind, setInd] = useState(0);
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
        const newDict = props.accContent.fields.accordianBlock.map((acc, index) => (

            [index, false]
        ))
        setAccRef(newDict);
    }, [])

    function setAccordianBlock(index){
        if(index == ind){
            setInd();
        }else{
            setInd(index);
        }
    }
   
    return(
        <motion.div
            initial={{ opacity: 0, translateX: -200 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{margin: (width <= 1500 ? '50px' : '-300px'), once: true}}
            transition={{
                type: "ease-in",
                duration: 0.5
            }}
            >
        <div className="max-w-[400px] md:max-w-[1200px] xl:max-w-[1100px] flex md:flex-row flex-col bg-black rounded-lg mx-[25px] md:mx-auto px-[20px] md:py-[50px] pt-[50px]">
            <div className="flex-1 md:flex-[40%] text-white text-mobilexl lg:text-xl mr-0 md:mr-[50px]">
                {props.accContent.fields.accordianBlock.map((acc, index) => (
                    <div key={index} className={ind == index ? "border-b-2 border-blue pb-[20px] transition-all duration-500 mb-[20px]" : "border-b-2 border-white pb-[20px] transition-all duration-500 mb-[20px]"}>
                        <div className="flex justify-between hover:cursor-pointer" onClick={() => {setInd(index)}}>
                            <h3 className={ind == index ? "text-blue transition-all duration-500" : "text-white transition-all duration-500"}>
                                {acc.fields.tabHeading}
                            </h3>
                            <Image className={ind == index ? "self-center rotate-[180deg] transition-all duration-500 lg:w-auto w-[20px]" : "self-center transition-all duration-500 lg:w-auto w-[20px]"} src={Arrow} width={35} height={35} alt="arrow"/>
                        </div>
                        {/* <div className={ind == index ? `max-h-[20em] overflow-hidden transition-[max-height] ease-in-out duration-500` : `max-h-0 overflow-hidden transition-[max-height] ease-in-out duration-500`}>
                            <h3 className="mt-[5px]">
                                {acc.fields.tabDropdownText}
                            </h3>
                        </div> */}
                    </div>
                ))}
            </div>
            <div className="flex-1 md:flex-[60%] relative">
                {props.accContent.fields.accordianBlock.map((acc, index) => (
                    <div key={index} className='lg:h-full h-[85px]'>
                        {acc.fields.media.fields.file.details.hasOwnProperty('image') ? 
                            <Image className={ind == index ? "absolute top-[50%] translate-y-[-50%] opacity-100 border-4 border-white rounded-md transition-[opacity] ease-in-out duration-1000" : "absolute top-[50%] translate-y-[-50%] opacity-0 border-8 border-white rounded-md transition-[opacity] ease-in-out duration-1000"} src={"https:" + acc.fields.media.fields.file.url} width={acc.fields.media.fields.file.details.image.width} height={acc.fields.media.fields.file.details.image.height} alt={acc.fields.media.fields.file.fileName}/>
                            :
                            <video controls className={ind == index ? "absolute top-[50%] translate-y-[-50%] opacity-100 border-4 border-white rounded-md transition-[opacity] ease-in-out duration-1000" : "absolute top-[50%] translate-y-[-50%] opacity-0 border-8 border-white rounded-md transition-[opacity] ease-in-out duration-1000"} src={"https:" + acc.fields.media.fields.file.url} alt={acc.fields.media.fields.file.fileName}></video>
                        }
                        
                    </div>
                ))}
            </div>
        </div>
        </motion.div>
    )
}