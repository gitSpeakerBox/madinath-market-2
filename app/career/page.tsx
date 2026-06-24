import type { Metadata } from "next";
import Career from "@/components/Career/Career";
import React from "react";
import HeroImg from "@/assets/images/Careers/Career.png";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Madinath Group family! Explore exciting career opportunities at UAE's leading retail group. We are always looking for passionate, hardworking individuals to grow with us across our Hypermarkets, Supermarkets & Mall in Dubai.",
  keywords: [
    "Madinath Group careers",
    "jobs in Dubai retail",
    "hypermarket jobs UAE",
    "supermarket jobs Dubai",
    "work at Madinath",
    "retail jobs UAE",
    "Dubai job vacancies",
  ],
  alternates: {
    canonical: "https://www.madinathgroup.com/career",
  },
  openGraph: {
    title: "Careers at Madinath Group | Join UAE's Leading Retail Team",
    description:
      "Build your career with Madinath Group — UAE's trusted retail brand since 1982. Explore job openings across our Hypermarkets, Supermarkets & Mall in Dubai.",
    url: "https://www.madinathgroup.com/career",
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

      {/* Career Content */}
      <ScrollReveal><Career /></ScrollReveal>

      <Footer />
    </main>
  );
};

export default page;