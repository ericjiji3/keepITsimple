"use client"

import Image from "next/image";
import Logo from "../components/images/kislogo.png";
import Facebook from '../../public/linkedin-icon.png';
import Ig from '../../public/yt-icon.png';
import Twitter from '../../public/yt-icon.png';
import './css/Footer.css';

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

export default function Footer() {
 

  return (
    <div className="footer-main">
      <div className="footer-parent">

        <div className="mini-menu-1 middle-item">
          <a href="/about"><span>About</span></a>
          <a href="/contact"><span>Contact</span></a>
          <a href="/privacy"><span>Privacy Policy</span></a>
        </div>
        

        <div className="mini-menu-2">
          <a href="https://www.linkedin.com/company/kis-hq/" target="__blank"><Image className="mini-menu-icon" src={Facebook} width={20} height={20} alt="logo"/></a>
          <a href="https://www.youtube.com/@BlakeEdwardsPBI" target="__blank"><Image className="mini-menu-icon" src={Ig} width={20} height={20} alt="logo"/></a>
        </div>



   
        <div className="logo-copyright-container">
        {/* <Image className="logo-footer" src={Logo} alt="logo"/> */}
        <span>© KeepingItSimple {new Date().getFullYear()}</span>
      
      </div>
      </div>
    </div>
  );
}