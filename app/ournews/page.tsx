"use client";
import OurNews from '@/components/OurNews/OurNews'
import React from 'react'
import HeroImg from "@/assets/images/OurNews/OurNews.jpg"; 
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";

// Simulated Sanity Data
const sanityDummyData = {
  heroSection: {
    images: [HeroImg] // Would be dynamic from CMS
  }
};

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <HeroNavV2 />

      {/* Hero Section */}
      <HeroSectionV2 customImages={sanityDummyData.heroSection.images} hideContent={true} />

      {/* News Content */}
      <OurNews />

      <Footer />
    </main>
  );
};

export default page;