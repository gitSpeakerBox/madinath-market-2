import React from "react";
import SectionWrapper from "../SectionWrapper";
import Image, { StaticImageData } from "next/image";
import { cardsOnProducts } from "@/libs/contents/ProductCards";

interface FullPageProps {
  data: {
    image: StaticImageData;
    title: string;
    des: string[];
    bottomImg: StaticImageData;
    slug: string;
    margBottom: number;
  };
}

const FullPage: React.FC<FullPageProps> = ({ data }) => {
  const { image, title, des, bottomImg, margBottom } = data;

  return (
    <SectionWrapper
      className={`flex max-lg:flex-col gap-10 lg:gap-[60px] pt-10 w-full justify-center ${
        title === "Bakery Products"
          ? "lg:mb-40"
          : title === "Sea Foods"
          ? "lg:mb-64"
          : "lg:mb-44"
      }`}
    >
      <div className={`flex flex-col gap-10 lg:gap-6 max-lg:justify-center`}>
        <Image src={image} alt="" />
        <div className="flex flex-wrap items-center justify-center grid-cols-2 place-content-center place-items-center lg:gap-[30px] gap-[25px] lg:hidden">
          {cardsOnProducts.map((val, idx) => (
            <div
              key={val.text}
              className="text-mm-red w-max flex z-20 flex-col items-center justify-center gap-2 lg:gap-4 p-3 lg:p-6"
              style={{
                boxShadow: "0px 0px 18px rgba(0, 0, 0, 0.15)",
                borderRadius: "16.9565px 0px 16.9565px 16.9565px",
              }}
            >
              <div className="flex flex-col gap-[5px] lg:gap-[10px] items-center">
                <Image
                  src={val.icon}
                  className="lg:w-10 w-[22px] h-[22px] lg:h-10"
                  alt=""
                />

                <h3 className="lg:text-xl text-xs font-semibold tracking-[7%]">
                  {val.text}
                </h3>
              </div>
              <p className="lg:text-base text-[9px] leading-[140%] text-center max-w-[105.13px]  lg:max-w-[186px]">
                {val.dis}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:gap-6 gap-4 ">
          <h1 className="lg:text-3xl text-[22px] leading-[160%] font-semibold text-mm-red">
            {title}
          </h1>
          {des.map((val, idx) => (
            <p
              key={idx + 908070}
              className="lg:text-lg text-sm leading-[180%] text-black max-w-[850px]"
            >
              {val}
            </p>
          ))}
        </div>
        <Image
          className=" lg:hidden bottom-0 mx-auto -z-10"
          src={bottomImg}
          alt=""
        />
      </div>
      <div className="flex max-lg:hidden flex-col z-20 ">
        <div className="flex flex-col gap-8">
          {cardsOnProducts.map((val, idx) => (
            <div
              key={val.text}
              className="text-mm-red w-max flex z-20 flex-col items-center  justify-center gap-2 lg:gap-4 p-3 lg:p-6"
              style={{
                boxShadow: "0px 0px 26px rgba(0, 0, 0, 0.19)",
                borderRadius: "30px 0px 30px 30px",
              }}
            >
              <div className="flex flex-col gap-[5px] lg:gap-[10px] items-center">
                <Image
                  src={val.icon}
                  className="lg:w-10 w-[22px] h-[22px] lg:h-10"
                  alt=""
                />

                <h3 className="lg:text-xl text-xs font-semibold tracking-[7%]">
                  {val.text}
                </h3>
              </div>
              <p className="lg:text-base text-[9px] leading-[140%] text-center  lg:max-w-[186px]">
                {val.dis}
              </p>
            </div>
          ))}
        </div>
        <Image
          className="absolute bottom-0 right-20 -z-10"
          src={bottomImg}
          alt=""
        />
      </div>
    </SectionWrapper>
  );
};

export default FullPage;
