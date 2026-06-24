import type { Metadata } from "next";
import About from "@/components/about/About";
import React from "react";
import aboutImg1 from "@/assets/images/about.jpg";
import aboutImg2 from "@/assets/images/about-2.jpg";
import aboutImg3 from "@/assets/images/about-3.jpg";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import OurBrands from "@/components/Home/OurBrands";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getSubBrands } from "@/sanity/sanityClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Madinath Group — established in 1982, we are one of UAE's most trusted retail groups. Discover our history, mission, vision, and commitment to quality, freshness, and customer satisfaction across Dubai.",
  keywords: [
    "about Madinath Group",
    "Madinath Group history",
    "UAE retail group",
    "Dubai supermarket history",
    "Madinath mission vision",
    "retail leader UAE since 1982",
  ],
  alternates: {
    canonical: "https://www.madinathgroup.com/about",
  },
  openGraph: {
    title: "About Madinath Group | UAE's Trusted Retail Leader Since 1982",
    description:
      "Established in 1982, Madinath Group is one of UAE's most progressive retail businesses — delivering quality, value, and variety across Hypermarkets, Supermarkets & Malls in Dubai.",
    url: "https://www.madinathgroup.com/about",
  },
};

// Simulated Sanity CMS Data
// Once Sanity is connected, you will fetch this data and map the asset URLs.
const sanityDummyData = {
  pageTitle: "About Us",
  heroSection: {
    images: [
      aboutImg1, // Will be replaced by Sanity URL e.g., urlFor(image).url()
      aboutImg2,
      aboutImg3,
    ],
  },
};

const page = async () => {
  const brands = await getSubBrands();

  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <HeroNavV2 />

      {/* Hero Section (Reused from Home, fed with Sanity Dummy Data) */}
      <HeroSectionV2 customImages={sanityDummyData.heroSection.images} hideContent={true} />

      {/* About Section */}
      <ScrollReveal><About /></ScrollReveal>

      {/* Brands Section */}
      <ScrollReveal><OurBrands brands={brands} /></ScrollReveal>

      <Footer />
    </main>
  );
};

export default page;
