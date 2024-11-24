"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; 
import { Link as ScrollLink } from "react-scroll"; 

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-5 md:top-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#D9F0DF] rounded-full transition-transform duration-500 font-font3 drop-shadow-2xl shadow-2xl ${
          showNavbar ? "scale-100" : "scale-0"
        }`}
      >
        <nav className="flex items-center justify-center sm:space-x-1 md:space-x-3 text-xs sm:text-base md:text-xl lg:text-2xl text-[#232E26] font-black md:font-black px-10 sm:px-12 md:px-14">
          {/* Use Next.js Image component */}
          <Image
            src={'/assets/arhamlogonoremovebg.png'}
            alt="Arham Logo"
            className="h-10 sm:h-12 md:h-14 py-0.5 md:py-1 w-auto bg-transparent"
            width={50} // Replace with the actual width of the image
            height={50} // Replace with the actual height of the image
          />

          {/* Dynamic Links */}
          {["Home", "About", "Events", "Team", "Contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
              className="cursor-pointer hover:bg-green-800 hover:text-white px-1.5 py-0.5 rounded-full sm:py-1 sm:px-2 md:py-1.5 md:px-5 lg:px-8"
            >
              {section}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </>
  );
}

