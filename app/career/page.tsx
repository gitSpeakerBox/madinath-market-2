import type { Metadata } from "next";
import React from "react";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPageHero, getCareers, urlFor } from "@/sanity/sanityClient";
import CareerSection from "@/components/Career/Career";

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
  alternates: { canonical: "https://www.madinathgroup.com/career" },
  openGraph: {
    title: "Careers at Madinath Group | Join UAE's Leading Retail Team",
    description:
      "Build your career with Madinath Group — UAE's trusted retail brand since 1982. Explore job openings across our Hypermarkets, Supermarkets & Mall in Dubai.",
    url: "https://www.madinathgroup.com/career",
  },
};

export const dynamic = "force-dynamic";

const page = async () => {
  const [pageHero, careers] = await Promise.all([
    getPageHero("careers"),
    getCareers(),
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
      <ScrollReveal><CareerSection careers={careers} /></ScrollReveal>
      <Footer />
    </main>
  );
};

export default page;