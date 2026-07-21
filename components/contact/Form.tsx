"use client";
import React, { useState, useEffect } from "react";
import SectionWrapper from "../SectionWrapper";
import EnquiryForm from "./EnquiryForm";
import Image from "next/image";
import contactImg1 from "@/assets/images/home/contact.jpeg";
import contactImg2 from "@/assets/images/home/contact-1.jpeg";

const Form = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [contactImg1, contactImg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <SectionWrapper className="w-full py-16 md:py-24 font-sans bg-white px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-mm-red mb-4 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Content Section: Image + Form */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Fading Images */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-[20px] overflow-hidden shadow-lg bg-gray-100">
              {images.map((img, index) => (
                <Image 
                  key={index}
                  src={img}
                  alt={`Madinath Hypermarket ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ))}
            </div>
          </div>

          {/* Right Side: Enquiry Form */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2">
            <h2 className="text-xl md:text-2xl font-bold text-mm-green mb-6">
              Enquiry
            </h2>
            <EnquiryForm />
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Form;
