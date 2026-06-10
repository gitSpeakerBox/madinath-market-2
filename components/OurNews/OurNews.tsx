import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../SectionWrapper";

import dummyImg from "@/assets/images/OurNews/OurNews.jpg";

// Simulated Sanity Data
const dummyNews = [
  {
    id: "news-1",
    image: dummyImg,
    title: "Lorem Ipsum",
    description: "simply dummy text of the printing",
  },
  {
    id: "news-2",
    image: dummyImg,
    title: "Lorem Ipsum",
    description: "simply dummy text of the printing",
  },
  {
    id: "news-3",
    image: dummyImg,
    title: "Lorem Ipsum",
    description: "simply dummy text of the printing",
  },
  {
    id: "news-2",
    image: dummyImg,
    title: "Lorem Ipsum",
    description: "simply dummy text of the printing",
  },
  {
    id: "news-3",
    image: dummyImg,
    title: "Lorem Ipsum",
    description: "simply dummy text of the printing",
  },
];

const OurNews = () => {
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
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {dummyNews.map((news) => (
            <Link href={`/ournews/${news.id}`} key={news.id}>
              <div className="flex flex-col rounded-[15px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)] bg-white transform transition-transform hover:-translate-y-2 duration-300 cursor-pointer border border-gray-100">
                <div className="w-full h-[220px] relative">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-mm-red font-bold text-xl mb-1">{news.title}</h2>
                  <p className="text-gray-800 text-sm font-medium">{news.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="max-w-7xl mx-auto w-full h-[1px] bg-gray-200 mt-20 mb-8"></div>
    </SectionWrapper>
  );
};

export default OurNews;
