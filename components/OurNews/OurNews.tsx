import React from "react";
import Image from "next/image";

import ALquoz from "@/assets/images/OurNews/AlQuoz.png";
import Dip from "@/assets/images/OurNews/Dip 1.png";

import SectionWrapper from "../SectionWrapper";

const OurNews = () => {
  const items = [
    {
      image: ALquoz,
      heading: "Madinath market",
      para: "Al Quoz near Al Khail Gate",
    },
    {
      image: Dip,
      heading: "Madinath market",
      para: "DIP 1",
    },
  ];

  return (
    <SectionWrapper className="flex-col  lg:py-24" classNameTop="lg:px-44">
      <h1 className="font-semibold text-xl lg:text-3xl leading-[180%] text-[#D32133] lg:pb-9 pb-[15px]">
        News & Events
      </h1>
      <button className="lg:px-9 px-[15px] py-2 lg:py-1 border border-[#D32133] w-max font-medium text-base lg:text-xl leading-[180%] ">
        Upcoming Projects :
      </button>
      <div className="flex max-sm:flex-col max-sm:items-center sm:w-full gap-7 lg:gap-40 lg:pt-16 pt-10">
        {items.map((content, ind) => (
          <div key={ind} className="mb-8  text-center">
            <Image
              src={content.image}
              alt={content.heading}
              width={300}
              height={500}
              className="object-cover "
            />
            <h2 className="text-base lg:text-xl leading-[160%] w-full max-lg:pt-4">{content.heading}</h2>
            <p className="text-base lg:text-xl leading-[160%] text-[#D32133]">
              {content.para}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OurNews;
