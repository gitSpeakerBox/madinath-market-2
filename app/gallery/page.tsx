import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getGalleryImages, getPageHero, urlFor } from "@/sanity/sanityClient";
import HeroImg from "@/assets/images/home/hero/img-1.png";
import GalleryGrid from "@/components/ui/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore our gallery to see the latest events, store openings, and premium products at Madinath Group. Discover why we are the preferred choice for shoppers in the UAE.",
  keywords: [
    "Madinath Group gallery",
    "Madinath photos",
    "supermarket images UAE",
    "hypermarket pictures Dubai",
    "Madinath store photos",
    "UAE retail gallery",
  ],
  alternates: { canonical: "https://www.madinathgroup.com/gallery" },
  openGraph: {
    title: "Gallery | Madinath Group",
    description:
      "Explore our gallery to see the latest events, store openings, and premium products at Madinath Group — UAE's trusted retail destination.",
    url: "https://www.madinathgroup.com/gallery",
  },
};

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const [galleryImages, pageHero] = await Promise.all([
    getGalleryImages(),
    getPageHero("gallery"),
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

      {/* Gallery Content */}
      <ScrollReveal>
        <section className="w-full max-w-[1200px] mx-auto px-4 py-16 md:py-24">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#a51c24] mb-4 tracking-tight">
              Gallery
            </h1>
            <p className="text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
            </p>
          </div>

          <GalleryGrid 
            images={galleryImages?.map((item: any) => ({
              _id: item._id,
              url: urlFor(item.image).url(),
              alt: item.image.alt || item.title || "Gallery Image"
            })) || []}
            dummyImage={HeroImg}
          />
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
