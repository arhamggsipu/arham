"use client";

import { Link as ScrollLink } from "react-scroll"; 

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "/lib/components/ui/3d-card";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function HeroSection() {
  const words1 = `Welcome to Arham | Nature's Club GGSIPU EDC`;
  const words2 = `Where Passion Meets Nature`;
  const words3 = ``;

  return (
    <>
      <section id="home" className="h-full relative bg-bg0 bg-fixed bg-cover p-8 md:p-14">
        {/* Background overlay */}

        <section>
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-xs m-5 md:m-10 rounded-3xl md:rounded-5xl border border-white"></div>

        {/* Header section */}
        <div className="relative z-10 flex justify-between items-center">
          {/* Arham Logo */}
          <ScrollLink to="/" className="cursor-pointer">
            <img
              src={'/whitelogo.png'}
              alt="Arham Logo"
              className="h-12 md:h-24 bg-transparent w-auto py-0.5 md:py-1 px-3 md:px-4 rounded-full"
            />
          </ScrollLink>

          {/* Navigation links */}
          <div className="hidden sm:flex items-center text-white font-normal text-xs md:font-semibold md:text-xl lg:text-2xl hover:bg-[#D9F0DF] rounded-full py-1 px-2 md:py-1.5 md:px-3 md:gap-2 lg:gap-6 hover:text-green-950 lg:me-10 font-font3">
            {["Home", "About", "Events", "Team", "Contact"].map((section) => (
              <ScrollLink
                key={section}
                to={section.toLowerCase()} 
                spy={true}
                smooth={true}
                offset={-80} 
                duration={200} 
                className="cursor-pointer hover:bg-green-800 px-2 py-1 md:px-4 rounded-full hover:text-white"
              >
                {section}
              </ScrollLink>
            ))}
          </div>
        </div>

       
      
          <CardContainer className="w-full">
        <div className="relative flex flex-col md:flex-row justify-center md:gap-16 items-center my-6 md:my-8 lg:me-24">

          <div className="flex flex-col">
          <img
            src={'/herologos/a6.svg'}
            alt="Arham Logo"
            className="h-32 sm:h-48 md:h-60 lg:h-96 w-auto"
            />
              <div className="text-white font-black text-xs sm:text-base md:text-xl lg:text-3xl tracking-wider text-center text-balance mb-8 sm:mx-5 font-font3"><TextGenerateEffect words={words1}/>
              <TextGenerateEffect words={words2} /></div> 
          </div>
          
          
          <img
            src={'/assets/treelogo.png'}
            alt="Tree Logo"
            className="h-40 sm:h-56 md:h-80 lg:h-96 w-auto"
          />
        </div>
          </CardContainer>
        
        <div className="relative mb-6 mx-2 md:mx-20 text-white font-medium text-balance text-center text-xs sm:text-sm md:text-base lg:text-xl font-font2">
        Hey there, eco-warriors! Ready to make a difference? Welcome to Arham, GGSIPU's one-and-only Nature's Club, where we bring together earth lovers, change-makers, and anyone prepared to take steps toward a greener world. We’re not just here to talk – we’re here to act!
        </div>

        </section>
      
      </section>
    </>
  );
}

