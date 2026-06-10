"use client";
import React from 'react';
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import heroImg from '@/assets/images/branches/hero.png';
import Index from '@/components/branches/Index';

// Simulated Sanity Data
const sanityDummyData = {
  heroSection: {
    images: [heroImg]
  }
};

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center relative bg-white">
      <HeroNavV2 />

      {/* Hero Section */}
      <HeroSectionV2 customImages={sanityDummyData.heroSection.images} hideContent={true} />

      {/* Branches Content */}
      <Index />

      <Footer />
    </main>
  );
};

export default page;