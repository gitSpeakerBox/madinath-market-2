import type { Metadata } from "next";
import React from "react";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPageHero, getAllNews, urlFor } from "@/sanity/sanityClient";
import OurNewsSection from "@/components/OurNews/OurNews";

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
  alternates: { canonical: "https://www.madinathgroup.com/ournews" },
  openGraph: {
    title: "News & Updates | Madinath Group",
    description:
      "Get the latest news, promotions, and announcements from Madinath Group — UAE's trusted retail destination across Hypermarkets, Supermarkets & Mall in Dubai.",
    url: "https://www.madinathgroup.com/ournews",
  },
};

export const dynamic = "force-dynamic";

const page = async () => {
  const [pageHero, news] = await Promise.all([
    getPageHero("news"),
    getAllNews(),
  ]);

  const heroImages = pageHero?.slides
    ?.filter((s: any) => s?.image?.asset)
    .map((s: any) => urlFor(s.image).url());

  const firstSlide = pageHero?.slides?.[0];

  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <HeroNavV2 />
      <HeroSectionV2
        customImages={heroImages}
        hideContent={true}
        pageTitle={firstSlide?.title}
        pageSubtitle={firstSlide?.subtitle}
      />
      <ScrollReveal><OurNewsSection news={news} /></ScrollReveal>
      <Footer />
    </main>
  );
};

export default page;