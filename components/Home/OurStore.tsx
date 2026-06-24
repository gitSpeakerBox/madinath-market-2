import React from "react";
import ourStore from "@/assets/images/home/Our Store.png";
import ourStoreMobile from "@/assets/images/home/Our store mobile.png";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
const OurStore = () => {
  return (
    <SectionWrapper className="w-full flex min-h-[280px] lg:min-h-svh h-60 lg:pb-9 pb-[18px] ">
      <Image src={ourStore} alt="" fill className="lg:block hidden  object-cover" />
      <Image src={ourStoreMobile} alt="" fill className="max-lg:block hidden object-cover " />
      <div className=" z-50 h-full w-full flex max-lg:flex-col max-lg:justify-end  lg:items-end justify-center ">
        <div className="lg:flex items-center gap-[14px] lg:gap-[60px]  ">

          <h1 className="text-[#D32133] font-semibold text-[20px] lg:text-5xl leading-[140%]">
            Our Store
          </h1>
          <p className="lg:text-lg text-sm leading-[130%] text-white max-w-[544px] font-extralight">
            Established in 1982, we have shaped and built our business on our
            founding principles of providing a variety of affordable, quality
            brands and products as well as excellent and superior service to our
            customers.{" "}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OurStore;
