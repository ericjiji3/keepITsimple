'use client';

import Image from "next/image";
import Arrow from "../../public/accArrow.png";
import { useState, useEffect } from "react";

export default function Accordian(props){
    const [accRef, setAccRef] = useState({});
    const [ind, setInd] = useState(0);

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
        <div className="max-w-[1200px] xl:max-w-[1100px] mx-auto flex md:flex-row flex-col bg-black rounded-lg px-[25px] md:py-[50px] pt-[50px]">
            <div className="flex-[40%] text-white text-xl mr-0 md:mr-[50px]">
                {props.accContent.fields.accordianBlock.map((acc, index) => (
                    <div key={index} className="border-b-2 border-white pb-[20px] mb-[20px]">
                        <div className="flex justify-between hover:cursor-pointer" onClick={() => {setInd(index)}}>
                            <h3>
                                {acc.fields.tabHeading}
                            </h3>
                            <Image className={ind == index ? "self-center rotate-[180deg] transition-all duration-500" : "self-center transition-all duration-500"} src={Arrow} width={35} height={35} alt="arrow"/>
                        </div>
                        <div className={ind == index ? `max-h-[20em] overflow-hidden transition-[max-height] ease-in-out duration-500` : `max-h-0 overflow-hidden transition-[max-height] ease-in-out duration-500`}>
                            <h3 className="mt-[5px]">
                                {acc.fields.tabDropdownText}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex-[60%] relative">
                {props.accContent.fields.accordianBlock.map((acc, index) => (
                    <div key={index}>
                        <Image className={ind == index ? "absolute top-[50%] translate-y-[-50%] opacity-100 border-8 border-white rounded-md transition-[opacity] ease-in-out duration-500" : "absolute top-[50%] translate-y-[-50%] opacity-0 border-8 border-white rounded-md transition-[opacity] ease-in-out duration-500"} src={"https:" + acc.fields.media.fields.file.url} width={acc.fields.media.fields.file.details.image.width} height={acc.fields.media.fields.file.details.image.height} alt={acc.fields.media.fields.file.fileName}/>
                    </div>
                ))}
            </div>
        </div>
    )
}