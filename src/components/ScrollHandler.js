"use client";
import { useEffect } from 'react';

export default function ScrollHandler() {
  // Function to handle scrolling to the element with the matching ID
  const scrollToElement = () => {
    // Get the hash from the URL (without the # symbol)
    const hash = window.location.hash.substring(1);
    
    if (hash) {
      // Find the element with the matching ID
      const element = document.getElementById(hash);
      
      if (element) {
        // Scroll to the element
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  useEffect(() => {
    // Check if we need to scroll based on localStorage flag
    const shouldScroll = localStorage.getItem('scrollToCaseStudies');
    
    if (shouldScroll === 'true') {
      // Clear the flag
      localStorage.removeItem('scrollToCaseStudies');
      
      // Scroll to the case-studies element
      const element = document.getElementById("case-studies");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    } else {
      // Check if there's a hash in the URL
      scrollToElement();
    }

    // Add event listener for hash changes
    window.addEventListener('hashchange', scrollToElement);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('hashchange', scrollToElement);
    };
  }, []);

  return null; // This component doesn't render anything
} 