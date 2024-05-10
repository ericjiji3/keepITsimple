'use client';

import Image from "next/image";
import Arrow from "../../public/accArrow.png";
import { useState, useEffect } from "react";

export default function Accordian(props){
    const [accRef, setAccRef] = useState([]);

    useEffect(()=>{
        accRef.push(props.accContent.fields.accordianBlock.map((acc, index) => (
            index
        )))
        console.log(accRef);
    }, [])
    console.log(props.accContent.fields.accordianBlock);
    return(
        <div className="max-w-[1200px] mx-auto flex bg-black rounded-lg px-[25px] py-[50px]">
            <div className="flex-[40%] text-white text-xl mr-[50px]">
                {props.accContent.fields.accordianBlock.map((acc, index) => (
                    <div key={index}>
                        <div className="flex justify-between">
                            <h3>
                                {acc.fields.tabHeading}
                            </h3>
                            <Image className="self-center" src={Arrow} width={35} height={35} alt="arrow"/>
                        </div>
                        <div>
                            <h3>
                                {acc.fields.tabDropdownText}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex-[60%]">
                {props.accContent.fields.accordianBlock.map((acc, index) => (
                    <div key={index}>
                        <Image className="border-8 border-white rounded-md" src={"https:" + acc.fields.media.fields.file.url} width={acc.fields.media.fields.file.details.image.width} height={acc.fields.media.fields.file.details.image.height} alt={acc.fields.media.fields.file.fileName}/>
                    </div>
                ))}
            </div>
        </div>
    )
}