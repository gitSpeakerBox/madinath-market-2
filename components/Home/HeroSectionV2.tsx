"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import img1 from "@/assets/images/home/hero/img-1.png";
import img2 from "@/assets/images/home/hero/img-2.png";
import qualityIcon from "@/assets/images/home/hero/quality.svg";
import serviceIcon from "@/assets/images/home/hero/service.svg";
import varietyIcon from "@/assets/images/home/hero/varity.svg";
import valueIcon from "@/assets/images/home/hero/value-in-price.svg";
import seasonalIcon from "@/assets/images/home/hero/Seasonal-Offers.svg";
import customerIcon from "@/assets/images/home/hero/Customer-Satisfaction.svg";
import fastBillingIcon from "@/assets/images/home/hero/Fast-Billing.svg";
import hygienicIcon from "@/assets/images/home/hero/Hygienic-Environment.jpg";
import exclusiveIcon from "@/assets/images/home/hero/Exclusive-Discounts.svg";

const images = [img1, img2];

const allCards = [
  { icon: qualityIcon, title: "Quality", description: "Good and Premium Quality Products." },
  { icon: serviceIcon, title: "Service", description: "Customer Friendly Services." },
  { icon: varietyIcon, title: "Variety", description: "Varieties of Updated Products." },
  { icon: valueIcon, title: "Value in Price", description: "Be Good Value for What You Pay." },
  { icon: seasonalIcon, title: "Seasonal Offers", description: "Fresh deals for every festive season." },
  { icon: customerIcon, title: "Customer Satisfaction", description: "Delivering happiness through quality service." },
  { icon: fastBillingIcon, title: "Fast Billing", description: "Quick checkout with minimal waiting time." },
  { icon: hygienicIcon, title: "Hygienic Environment", description: "Clean, safe, and sanitized shopping experience." },
  { icon: exclusiveIcon, title: "Exclusive Discounts", description: "Unbeatable savings on premium products." },
];

const HeroSectionV2 = ({ customImages, hideContent }: { customImages?: any[], hideContent?: boolean }) => {
  const [globalIndex, setGlobalIndex] = useState(0);
  
  // Use custom images if provided, otherwise default to home images
  const displayImages = customImages && customImages.length > 0 ? customImages : images;

  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalIndex((prevIndex) => prevIndex + 1);
    }, 5000); // 5 seconds per tick

    return () => clearInterval(interval);
  }, []);

  const currentImageIndex = globalIndex % displayImages.length;
  
  // Get 4 consecutive cards from the infinite loop of cards
  const visibleCards = Array.from({ length: 4 }).map((_, i) => {
    return allCards[(globalIndex + i) % allCards.length];
  });

  return (
    <section className="relative w-full h-auto md:h-screen min-h-[100dvh] md:min-h-[850px] flex flex-col justify-between items-center overflow-hidden pt-24 pb-8 md:py-0">
      {/* Background Images Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence>
          {displayImages.map((img, index) => (
            index === currentImageIndex && (
              <motion.div
                key={`bg-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={img}
                  alt={`Hero Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Main Content */}
      {!hideContent && (
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4 z-10 w-full max-w-[800px] mt-10 md:mt-24 mb-10 md:mb-0">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide drop-shadow-md">
            More for Less
          </h1>
          <h2 className="text-white text-4xl sm:text-5xl md:text-[80px] font-bold mt-2 drop-shadow-md tracking-wider" style={{ fontFamily: "Caveat, cursive, sans-serif", transform: "rotate(-2deg)" }}>
            ALWAYS!
          </h2>
          
          <p className="text-white mt-6 md:mt-8 text-[14px] md:text-base max-w-[650px] leading-relaxed drop-shadow-sm font-light tracking-wide">
            At Madinath Group, customers are our top priority. We ensure Food Safety, 
            Quality, Freshness and exceptional service. Our expert team delivers the highest 
            quality products at the best prices.
          </p>

          <Link href="/stores" className="mt-6 md:mt-8">
            <button className="bg-[#4ba852]/90 hover:bg-[#4ba852] border border-[#4ba852] text-white font-medium py-2.5 px-6 md:px-8 rounded-[12px] transition-all duration-300 hover:scale-105 shadow-lg text-sm tracking-wider">
              Our Stores
            </button>
          </Link>
        </div>
      )}

      {/* Space filler when content is hidden to keep cards at bottom */}
      {hideContent && <div className="flex-1"></div>}

      {/* Value Cards Slider */}
      <div className="w-full max-w-[1100px] px-4 pb-6 md:pb-12 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          <AnimatePresence mode="wait">
            {visibleCards.map((card, index) => (
              <motion.div 
                key={`${globalIndex}-${card.title}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[16px] md:rounded-[20px] p-4 md:p-6 flex flex-col items-center text-center shadow-lg transform transition-transform hover:-translate-y-1"
              >
                <div className="mb-2 md:mb-4">
                  <Image src={card.icon} alt={card.title} width={45} height={45} className="object-contain h-[35px] md:h-[45px] w-auto"/>
                </div>
                <h3 className="text-[#a51c24] font-semibold text-sm md:text-lg mb-1 md:mb-2 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-black/80 text-[11px] md:text-[13px] leading-snug max-w-[180px]">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionV2;
