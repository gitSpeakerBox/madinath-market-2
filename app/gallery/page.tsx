import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getGalleryImages, getPageHero, urlFor } from "@/sanity/sanityClient";

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {galleryImages && galleryImages.length > 0 ? (
              galleryImages.map((item: any) => (
                <div key={item._id} className="w-full relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-sm">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.image.alt || item.title || "Gallery Image"}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))
            ) : (
              // Dummy content if no Sanity data
              <>
                <div className="w-full relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-sm">
                  <Image
                    src={HeroImg}
                    alt="Gallery placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-sm">
                  <Image
                    src={HeroImg}
                    alt="Gallery placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-sm">
                  <Image
                    src={HeroImg}
                    alt="Gallery placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-sm">
                  <Image
                    src={HeroImg}
                    alt="Gallery placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
              </>
            )}
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
