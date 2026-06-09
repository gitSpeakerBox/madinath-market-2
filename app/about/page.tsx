"use client";
import About from "@/components/about/About";
import React from "react";
import aboutImg1 from "@/assets/images/about.jpg";
import aboutImg2 from "@/assets/images/about-2.jpg";
import aboutImg3 from "@/assets/images/about-3.jpg";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";

// Simulated Sanity CMS Data
// Once Sanity is connected, you will fetch this data and map the asset URLs.
const sanityDummyData = {
  pageTitle: "About Us",
  heroSection: {
    images: [
      aboutImg1, // Will be replaced by Sanity URL e.g., urlFor(image).url()
      aboutImg2,
      aboutImg3,
    ]
  }
};

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <HeroNavV2 />

      {/* Hero Section (Reused from Home, fed with Sanity Dummy Data) */}
      <HeroSectionV2 customImages={sanityDummyData.heroSection.images} hideContent={true} />

      {/* About Section */}
      <About />

      <Footer />
    </main>
  );
};

export default page;
