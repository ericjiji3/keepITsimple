"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import LogoH1 from "../components/images/kislogoh1.png";
import LogoH2 from "../components/images/kislogoh2.png";
import Image from "next/image";
import Hamburger from 'hamburger-react';
import { Button } from "@/components/ui/button";
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
    )
}