import React from "react";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import { OurPrimaryValuesData } from "@/libs/contents/OurPrimaryValues";
const PrimaryValues = () => {
  return (
    <SectionWrapper
      className="flex-col items-center justify-center py-16"
      classNameTop="bg-gradient-to-t from-[#951421] to-[#D32133] to-20%"
    >
      <h1 className="font-semibold text-center leading-[160%] text-[28px] max-lg:text-[24px] text-white pb-10">
        Our Primary Values
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2  place-content-center place-items-center h-full lg:gap-10 gap-[30px]">
        {OurPrimaryValuesData.map((val, index) => (
          <div
            key={index + "ppp"}
            className="OurPrimary h-full w-full flex flex-col items-center text-center gap-2 bg-white lg:px-5 px-3 py-4 lg:py-6 rounded-se-none rounded-3xl "
          >
            <Image src={val.svg} className="lg:w-10 w-[22px] h-[22px] lg:h-10" alt=""/>
            <h1 className="text-[#D32133] font-semibold max-lg:text-[13px] max-lg:tracking-[7%] text-xl tracking-[20%]">
              {val.title}
            </h1>
            <p className="text-base max-lg:text-[10px] leading-[140%] text-[#D32133]  max-w-[105px] lg:max-w-[186px] ">
              {val.dis}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PrimaryValues;
