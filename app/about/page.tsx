import type { Metadata } from "next";
import About from "@/components/about/About";
import React from "react";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import OurBrands from "@/components/Home/OurBrands";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getSubBrands, getPageHero, getAboutPage, urlFor } from "@/sanity/sanityClient";

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
  alternates: { canonical: "https://www.madinathgroup.com/about" },
  openGraph: {
    title: "About Madinath Group | UAE's Trusted Retail Leader Since 1982",
    description:
      "Established in 1982, Madinath Group is one of UAE's most progressive retail businesses — delivering quality, value, and variety across Hypermarkets, Supermarkets & Malls in Dubai.",
    url: "https://www.madinathgroup.com/about",
  },
};

export const dynamic = "force-dynamic";

const page = async () => {
  const [brands, pageHero, aboutData] = await Promise.all([
    getSubBrands(),
    getPageHero("about"),
    getAboutPage(),
  ]);

  const heroImages = pageHero?.slides
    ?.filter((s: any) => s?.image?.asset)
    .map((s: any) => urlFor(s.image).url());

  const firstSlide = pageHero?.slides?.[0];
  const pageTitle = firstSlide?.title;
  const pageSubtitle = firstSlide?.subtitle;

  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <HeroNavV2 />
      <HeroSectionV2
        customImages={heroImages}
        hideContent={true}
        pageTitle={pageTitle}
        pageSubtitle={pageSubtitle}
      />
      <ScrollReveal><About aboutData={aboutData} /></ScrollReveal>
      <ScrollReveal><OurBrands brands={brands} /></ScrollReveal>
      <Footer />
    </main>
  );
};

export default page;

