import type { Metadata } from "next";
import OurNews from "@/components/OurNews/OurNews";
import React from "react";
import HeroImg from "@/assets/images/OurNews/OurNews.jpg";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Our News & Updates",
  description:
    "Stay up to date with the latest news, offers, promotions, and events from Madinath Group. Discover exciting deals, seasonal campaigns, and new store announcements from UAE's leading retail group.",
  keywords: [
    "Madinath Group news",
    "Madinath offers",
    "supermarket promotions UAE",
    "hypermarket deals Dubai",
    "Madinath latest updates",
    "Dubai retail news",
    "Madinath seasonal offers",
  ],
  alternates: {
    canonical: "https://www.madinathgroup.com/ournews",
  },
  openGraph: {
    title: "News & Updates | Madinath Group",
    description:
      "Get the latest news, promotions, and announcements from Madinath Group — UAE's trusted retail destination across Hypermarkets, Supermarkets & Mall in Dubai.",
    url: "https://www.madinathgroup.com/ournews",
  },
};

// Simulated Sanity Data
const sanityDummyData = {
  heroSection: {
    images: [HeroImg], // Would be dynamic from CMS
  },
};

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <HeroNavV2 />

      {/* Hero Section */}
      <HeroSectionV2 customImages={sanityDummyData.heroSection.images} hideContent={true} />

      {/* News Content */}
      <ScrollReveal><OurNews /></ScrollReveal>

      <Footer />
    </main>
  );
};

export default page;