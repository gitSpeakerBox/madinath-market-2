import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../SectionWrapper";
import { urlFor } from "@/sanity/sanityClient";

interface NewsItem {
  _id: string;
  slug: string;
  title: string;
  description?: string;
  publishedAt?: string;
  image?: any;
}

const OurNewsSection = ({ news = [] }: { news?: NewsItem[] }) => {
  return (
    <SectionWrapper className="w-full pt-16 md:pt-24 font-sans bg-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="font-bold text-3xl md:text-5xl text-mm-red tracking-tight">
              News & Events
            </h1>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Stay up to date with the latest news, offers, promotions, and events from Madinath Group.
            </p>
          </div>
        </div>

        {/* Cards */}
        {news.length === 0 ? (
          <div className="text-center py-24 text-gray-500 text-base">
            No news articles yet. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {news.map((item) => (
              <Link href={`/ournews/${item.slug}`} key={item._id}>
                <div className="flex flex-col rounded-[15px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)] bg-white transform transition-transform hover:-translate-y-2 duration-300 cursor-pointer border border-gray-100">
                  <div className="w-full h-[220px] relative">
                    {item.image?.asset ? (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.image?.alt || item.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h2 className="text-mm-red font-bold text-xl mb-1">{item.title}</h2>
                    {item.publishedAt && (
                      <p className="text-gray-400 text-xs mb-2">
                        {new Date(item.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </p>
                    )}
                    {item.description && (
                      <p className="text-gray-800 text-sm font-medium line-clamp-2">{item.description}</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Separator */}
      <div className="max-w-7xl mx-auto w-full h-[1px] bg-gray-200 mt-20 mb-8"></div>
    </SectionWrapper>
  );
};

export default OurNewsSection;
