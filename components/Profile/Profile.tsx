import React from "react";
import SectionWrapper from "../SectionWrapper";
import OurMission from "@/assets/images/profile/Our Mission.png";
import OurVision from "@/assets/images/profile/Our Vision.png";
import Rectangle from "@/assets/images/profile/Rectangle.png";
import Brochure from "@/assets/images/profile/Brochure.png";
import Image from "next/image";
const Profile = () => {
  return (
    <SectionWrapper className="lg:py-14 flex-col w-full items-center flex lg:gap-[60px] gap-10 ">
      <div className="gap-6 lg:grid">
        <h1 className="text-[#D32133] font-semibold text-xl lg:text-3xl leading-[180%]   ">
          Profile
        </h1>
        <p className=" text-sm lg:text-lg leading-[200%] max-w-[972px]">
          Established in 1982, we have shaped and built our business on our
          founding principles of providing a variety of affordable, quality
          brands and products as well as excellent and superior service to our
          customers. Our formats include convenience stores, supermarkets and
          hypermarkets, department stores and retail kiosks. We serve over
          200,000 customers per day and offer a range of over 60,000 products.
          At Madinath Group, we passionately believe in providing our customers
          with real value and have ensured it constitutes a core part of our
          business. We have worked hard to build solid relationships with our
          customers, employees, suppliers and corporate partners. Madinath Group
          has an extensive and unrivalled marketing strategy that offers
          complete solutions to our shoppers, by providing goods and services
          all under one roof.
        </p>
      </div>

      <div className="flex max-lg:flex-col  lg:px-28 gap-10  justify-center w-full ">
        <Image src={OurMission} alt="" className="lg:w-[40%] 2xl:w-[20%]" />
        <div className="flex flex-col max-lg:items-center">
          <div className="flex  flex-col max-lg:items-center w-full">
            <Image src={Rectangle} alt="" className="absolute z-0" />
            <h1 className="relative z-10 lg:left-24 top-5 font-semibold text-lg lg:text-xl text-white">
              Our Mission
            </h1>
          </div>
          <p className="pt-10 max-w-[300px] sm:max-w-[350px] lg:max-w-[495px] text-sm lg:text-lg leading-[180%] max-lg:text-center">
            Create a chain of superstores in strategic locations delivering
            quality, value, service and variety, with convenient opening hours
            providing our customers with the comfortable shopping experience.
          </p>
        </div>
      </div>

      <div className="flex max-lg:flex-col  lg:px-28 gap-10 max-lg:items-center justify-center w-full ">
        <div className="flex flex-col">
          <div className="flex flex-col max-lg:items-center w-full ">
            <Image src={Rectangle} alt="" className="absolute z-0" />
            <h1 className="relative z-10  lg:left-24 top-5 font-semibold text-lg lg:text-xl text-white">
              Our Vision
            </h1>
          </div>
          <p className="pt-10 max-w-[300px] sm:max-w-[350px] lg:max-w-[495px] text-sm lg:text-lg leading-[180%] max-lg:text-center">
            UAE&apos;s value price retailer of choice!! Enhancing customer
            experience and delivering quality products.
          </p>
        </div>
        <Image src={OurVision} alt="" className="lg:w-[40%] 2xl:w-[20%] " />
      </div>

      <div className="lg:px-28 flex   flex-col items-center max-lg:pb-5 ">
        <Image src={Brochure} alt="" className="w-[650px] max-lg:w-[250px]" />
        <button className="flex group duration-300 gap-4 z-20 lg:absolute mt-3 lg:bottom-28 bottom-5 lg:bg-white bg-mm-red text-white lg:hover:bg-[#D32133] lg:hover:text-white  border border-[#D32133] lg:text-[#D32133] lg:px-[18px] lg:py-[19px] py-[13px] px-[53px] rounded-md font-medium text-base lg:text-lg tracking-[5%]">
          Download Brochure
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 7.30176C16.4575 7.31256 17.5177 7.39986 18.2089 8.09108C19 8.88221 19 10.1548 19 12.7001V13.6002C19 16.1463 19 17.419 18.2089 18.2101C17.4187 19.0003 16.1452 19.0003 13.6 19.0003H6.4C3.8548 19.0003 2.5813 19.0003 1.7911 18.2101C1 17.4181 1 16.1463 1 13.6002V12.7001C1 10.1548 1 8.88221 1.7911 8.09108C2.4823 7.39986 3.5425 7.31256 5.5 7.30176"
              stroke="#D32133"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="lg:group-hover:stroke-white max-lg:stroke-white"
            />
            <path
              d="M10.0008 1V12.7004M10.0008 12.7004L7.30078 9.55027M10.0008 12.7004L12.7008 9.55027"
              stroke="#D32133"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lg:group-hover:stroke-white max-lg:stroke-white"
            />
          </svg>
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Profile;
