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
  // Initialize state from localStorage if available, otherwise default to light mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // On initial load, check system preference and localStorage
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark-theme");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark-theme");
    } else {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark-theme");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Update DOM and localStorage
    if (newDarkMode) {
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="footer-main">
<div className="theme-toggle-container">
      <button 
        onClick={toggleTheme}
        className="theme-toggle-btn"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div className="icon-container">
          <Sun className={`moon-icon ${isDarkMode ? "hidden" : "visible"}`} />
          <Moon className={`moon-icon ${isDarkMode ? "visible" : "hidden"}`} />
        </div>
      </button>
      </div>

        <div className="mini-menu-1">
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
        <span>© KeepingITSimple {new Date().getFullYear()}</span>
      
      
      </div>

      
    </div>
  );
}