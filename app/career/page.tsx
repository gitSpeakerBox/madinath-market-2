"use client";
import Career from '@/components/Career/Career'
import React from 'react'
import HeroImg from "@/assets/images/Careers/Career.png"; 
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

      {/* Career Content */}
      <Career />

      <Footer />
    </main>
  );
}

export default page;