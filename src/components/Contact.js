'use client'

import Script from 'next/script';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import "@/components/css/Contact.css";

import Blake from "@/components/images/profile.png";
import Dante from "@/components/images/profile2.png";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { Input } from "@/components/ui/input"

  

export default function Contact(props) {
    const buttonRef = useRef(null);
    const form = useRef();
    const [heading, setHeading] = useState(null);
    const [subheading, setSubheading] = useState(null);
    const [width, setWidth] = useState(0);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [fnameErr, setFnameErr] = useState(false);
    const [lnameErr, setLnameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [commentsErr, setCommentsErr] = useState(false);
    const [status, setStatus] = useState("");
    const [result, setResult] = useState("");
    const [erp, setErp] = useState("");

    function validateFields(data) {
        var validate = true;
        Object.keys(data).forEach(function(field) {
            if (field === 'email') {
                var email = data[field].toLowerCase();
                if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || !email) {
                    validate = false;
                    setEmailErr(true);
                }
            }
            if (field === 'fname' && !data[field]) {
                validate = false;
                setFnameErr(true);
            }
            if (field === 'lname' && !data[field]) {
                validate = false;
                setLnameErr(true);
            }
            if (field === 'comments' && !data[field]) {
                validate = false;
                setCommentsErr(true);
            }
        });
        return validate;
    }

    function sendEmail(e) {
        e.preventDefault();
        setFnameErr(false);
        setLnameErr(false);
        setEmailErr(false);
        setCommentsErr(false);
        var data = {
            'fname': first,
            'lname': last,
            'email': email,
            'comments': message,
            'erp': erp,
        };

        if (validateFields(data)) {
            emailjs.sendForm('service_fbd354o', 'template_s2kzxfr', e.target, 'w5QG-T5avwsUR720o')
                .then((result) => {
                    setStatus('success');
                    setResult('✅ Message Sent');
                    setFirst("");
                    setLast("");
                    setEmail("");
                    setMessage("");
                    setErp("");
                    e.target.reset();
                }, (error) => {
                    setStatus('fail');
                    e.target.reset();
                });
        } else {
            setStatus('fail');
            setResult(`❌ Error: Fill out all required fields!`);
            e.target.reset();
        }
    }

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [width]);

    useEffect(() => {
        if (props.contContent && props.contContent.fields) {
            var head = "<h1 class='text-black text-mobile2xl lg:text-2xl'>" + props.contContent.fields.heading.replace(props.contContent.fields.highlightedText, `<span class="text-blue">${props.contContent.fields.highlightedText}</span>`) + "</h1>";
            setHeading(head);
        } else {
            console.warn("Contact content is not available");
        }
    }, [props.contContent]);

    return (
        <div className="contact-container" id="contact">
            <div className="contact-team-section">
                <h2>Who you&apos;ll meet with</h2>
                <p>Meet with one of our knowledgeable team members to discuss your challenges and uncover new opportunities.</p>
                
                <div className="team-member">
                    <div className="team-member-avatar">
                        <Image 
                            src={Blake} 
                            alt="Blake Edwards" 
                            width={100} 
                            height={100}
                            className="avatar-image"
                        />
                    </div>
                    <div className="team-member-info">
                        <h3>Blake Edwards</h3>
                        <p>Founder & Developer</p>
                    </div>
                </div>
                
                <div className="team-member">
                    <div className="team-member-avatar">
                        <Image 
                            src={Dante} 
                            alt="Dante Sorbello" 
                            width={100} 
                            height={100}
                            className="avatar-image"
                        />
                    </div>
                    <div className="team-member-info">
                        <h3>Dante Sorbello</h3>
                        <p>Lead Developer</p>
                    </div>
                </div>
            </div>
            
            <div className="contact-form-section">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <Input 
                            className={`${fnameErr ? "error" : ""} text-sm form-input`} 
                            placeholder="First Name*" 
                            type="text" 
                            id="fname" 
                            name="fname" 
                            value={first} 
                            onChange={(e) => setFirst(e.target.value)} 
                        />
                    </div>
                    
                    <div className="form-group">
                        
                        <Input 
                            className={`${lnameErr ? "error" : ""} text-sm form-input`} 
                            placeholder="Last Name*" 
                            type="text" 
                            id="lname" 
                            name="lname" 
                            value={last} 
                            onChange={(e) => setLast(e.target.value)} 
                        />
                    </div>
                    
                    <div className="form-group">
                        <Input 
                            className={`${emailErr ? "error" : ""} text-sm form-input`} 
                            placeholder="Email*" 
                            type="text" 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>

                    <div className="form-group">
                        <Input 
                            className={`text-sm form-input`} 
                            placeholder="ERP System (Optional)" 
                            type="text" 
                            id="erp" 
                            name="erp" 
                            value={erp} 
                            onChange={(e) => setErp(e.target.value)} 
                        />
                    </div>

                    
                 
                    
                    <div className="form-group">
                        <label  className="text-sm">Tell us a little about your project*</label>
                        <textarea 
                        className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-sm form-input textarea-contact"
                            name="comments" 
                            id="comments" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        ref={buttonRef} 
                        className="submit-button"
                    >
                        Send Message
                    </button>
                    
                    <span className={`status-message ${status}`}>{result}</span>
                    <p className="text-sm">*Required fields</p>
                </form>
            </div>
        </div>
    );
}