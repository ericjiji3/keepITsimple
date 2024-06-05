'use client'

import Script from 'next/script';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contact(props){
    const buttonRef = useRef(null);
    const form = useRef();
    const [heading, setHeading] = useState(null);
    const [subheading, setSubheading] = useState(null);
    const [width, setWidth] = useState(0);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [demo, setDemo] = useState("");
    const [message, setMessage] = useState("");
    const [fnameErr, setFnameErr] = useState(false);
    const [lnameErr, setLnameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [demoErr, setDemoErr] = useState(false);
    const [status, setStatus] = useState("");
    const [result, setResult] = useState("");

    function validateFields(data){
        var validate = true;
        Object.keys(data).forEach(function(field, index){
            if(field === 'email'){
                var email = data[field];
                email.toLowerCase();
                if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || !email){
                    validate = false;
                    setEmailErr(true);
                }
            }
            if(field === 'fname'){
                if(!data[field]){
                    validate = false;
                    setFnameErr(true);
                }
            }
            if(field === 'lname'){
                if(!data[field]){
                    validate = false;
                    setLnameErr(true);
                }
            }
            if(field === 'demo'){
                if(!data[field]){
                    validate = false;
                    setDemoErr(true);
                }
            }
        })
        return validate;
    }

    function sendEmail(e){
        e.preventDefault();
        setFnameErr(false);
        setLnameErr(false);
        setEmailErr(false);
        setDemoErr(false);
        console.log(e.target);
        var data = {
            'fname' : first,
            'lname' : last,
            'demo' : demo,
            'phone' : phone,
            'email' : email,
            'message' : message
        }

        console.log(data);
        if(validateFields(data)){
            console.log('validated')
            emailjs.sendForm('service_fbd354o', 'template_s2kzxfr', e.target, 'w5QG-T5avwsUR720o')
            .then((result) => {
                setStatus('success');
                setResult('✅Message Sent')
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                setStatus('fail');
                console.log(error.text);
                e.target.reset();
            });
        } else{
            console.log('not validated')
            setStatus('fail');
            setResult(`❌Error: Fill out all required fields!`)
            e.target.reset();
        }
        
    }

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
            viewport={{margin: (width <= 1500 ? '50px' :'-300px')}}
            transition={{
                type: "ease-in",
                duration: 0.5
            }}
            >
                    <form ref={form} onSubmit={sendEmail} className='bg-blue text-white rounded-md mx-auto w-[95%] lg:w-[85%] p-[25px] lg:p-[50px] text-mobilexl lg:text-base shadow-card mb-[15px]'>
                        <div className='flex flex-col lg:flex-row gap-[15px] lg:gap-[25px] w-full'>
                            <div className='flex flex-1 flex-col'>
                                <label className="text-left mb-[5px]" for="fname">First Name*</label>
                                <input className={fnameErr ? "text-black rounded-sm border border-[#DC143C] border-[2px] p-[10px] transition-all duration-500" : "text-black rounded-sm border border-blackish border-[2px] p-[10px] transition-all duration-500"} placeholder="First Name" type="text" id="fname" name="fname" value={first} onChange={(e) => setFirst(e.target.value)}></input>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <label className="text-left mb-[5px]" for="lname">Last Name*</label>
                                <input className={lnameErr ? "text-black rounded-sm border border-[#DC143C] border-[2px] p-[10px] transition-all duration-500" : "text-black rounded-sm border border-blackish border-[2px] p-[10px] transition-all duration-500"} placeholder='Last Name' type="text" id="lname" name="lname" value={last} onChange={(e) => setLast(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='flex flex-col mt-[15px]'>
                            <label className="text-left mb-[5px]" for="phone">Phone</label>
                            <input className="text-black rounded-sm border border-blackish border-[2px] p-[10px]" placeholder='Phone' type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                        </div>
                        <div className='flex flex-col mt-[15px]'>
                            <label className="text-left mb-[5px]" for="email">Email*</label>
                            <input className={emailErr ? "text-black rounded-sm border border-[#DC143C] border-[2px] p-[10px] transition-all duration-500" : "text-black rounded-sm border border-blackish border-[2px] p-[10px] transition-all duration-500"} placeholder='Email' type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className='flex flex-col mt-[15px]'>
                            <label className="text-left mb-[5px]" for="demo">Demo*</label>
                            <select className={demoErr ? "text-black rounded-sm border border-[#DC143C] border-[2px] p-[10px] transition-all duration-500" : "text-black rounded-sm border border-blackish border-[2px] p-[10px] transition-all duration-500"} name="demo" id="demo" value={demo} onChange={(e) => setDemo(e.target.value)}>
                                <option value="" disabled selected>Select Demo</option>
                                <option value="chatbot">Chatbot</option>
                                <option value="powerBi">Power BI</option>
                            </select>
                        </div>
                        <div className='flex flex-col mt-[15px]'>
                            <label className="text-left mb-[5px]" for="comments">Additional Comments</label>
                            <textarea className="text-black rounded-sm border border-blackish border-[2px] p-[10px] h-[200px]" placeholder="Type message here..." name="comments" id="comments" onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <button type="submit" ref={buttonRef} className="bg-white text-blue text-mobilexl lg:text-lg rounded-md px-[50px] lg:px-[100px] py-[15px] mt-[30px] inline-block w-auto hover:cursor-pointer font-bold">Book a Demo</button>
                        <span className={status == 'success' ? 'block animate-fadein pt-[15px] text-mobilebase lg:text-fine min-h-[33px]' : status == 'fail' ? 'block animate-fadein pt-[15px] text-mobilebase lg:text-fine min-h-[33px]' : 'block opacity-0 animate-fadein pt-[15px] text-white text-mobilebase lg:text-fine min-h-[33px]'}>{result} </span>
                    </form>
                    </motion.div>
                </div>
            </div>
            <div class="h-[150px] w-full bg-white shadow-circle rounded-bl-[100%] rounded-br-[100%]"></div>
        </div>
    )
}