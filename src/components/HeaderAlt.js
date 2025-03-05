"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import LogoH1 from "../components/images/kislogoh1.png";
import LogoH2 from "../components/images/kislogoh2.png";
import Image from "next/image";
import Hamburger from 'hamburger-react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import "./css/Header.css";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

export default function Header(){


  // Initialize state from localStorage if available, otherwise default to light mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // On initial load, check system preference and localStorage
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark-theme");
    } else {
      // For new users or when savedMode is 'false', use light mode
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark-theme");
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


    const [isOpen, setOpen] = useState(false);

    const handleScroll = (e) => {
        e.preventDefault();
        const element = document.getElementById("case-studies");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    // Effect to manage body overflow
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return(
        <div className="header-main" aria-label="header">
          <div className="header-parent">
              <a className="__logo" href="/">
                <Image 
                  src={LogoH1}
                  alt="Logo"
                  className="logo-image"
                />
                <Image 
                  src={LogoH2}
                  alt="Logo"
                  className="logo-image-h2"
                />
              </a>


              

              <NavigationMenu className="header-menu">
  <NavigationMenuList>
    <NavigationMenuItem className="header-menu-item">
      <NavigationMenuLink href="/about">About Us</NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem className="header-menu-item">
      <NavigationMenuLink href="/#case-studies">Case Studies</NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem className="header-menu-item">
      <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>




              <div className="header__inner__buttons">
           
           
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
              <a href="/contact" className="header__button --primary">Book a Demo</a>

                
                
                
                
                
                <div className="hamburger-container">
                  <Hamburger 
                    toggled={isOpen} 
                    toggle={handleToggle}
                    color="#445050"
                    size={12}
                    duration={0.3}
                  />
                </div>
                <div className={`mobile-menu ${isOpen ? '--open' : ''}`}>
                  <NavigationMenu className="mobile-menu__content">
                    <NavigationMenuItem className="mobile-menu-item">
                      <NavigationMenuLink className="mobile-menu-link" href="/about" onClick={() => setOpen(false)}>About Us</NavigationMenuLink>
                    </NavigationMenuItem>
                    <div className="menu-divider"></div>
                    <NavigationMenuItem className="mobile-menu-item">
                      <NavigationMenuLink className="mobile-menu-link" href="/#case-studies">
                        Case Studies
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <div className="menu-divider"></div>
                    <NavigationMenuItem className="mobile-menu-item">
                      <NavigationMenuLink className="mobile-menu-link" href="/contact" onClick={() => setOpen(false)}>Contact</NavigationMenuLink>
                    </NavigationMenuItem>
                    <div className="menu-divider"></div>
                  </NavigationMenu>
                </div>
              </div>

             </div>
        </div>
    )
}