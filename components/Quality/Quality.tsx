import React from "react";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import Group from "@/assets/images/Quality/policy.png";
const Quality = () => {
  return (
    <div>
      <SectionWrapper className="py-14 flex-col flex w-full items-center lg:gap-[60px]">
        <div className="flex flex-col lg:gap-6 gap-[15px]">
          <h1 className="text-[#D32133] font-semibold text-xl lg:text-3xl leading-[180%]">
            Quality Policy
          </h1>
          <p className="text-sm lg:text-lg leading-[200%] max-w-[972px] gap-[15px] lg:gap-6 flex flex-col">
            <p>
              {" "}
              We acknowledge that the customers are the be-all and end-all for
              our business. So we strive to provide them with Food
              Safety,Quality, freshness and best services at all times.
            </p>

            <p>
              {" "}
              In such a competitive environment, our management team has pooled
              in its professional expertise to deliver the highest quality
              products at the most reasonable price.
            </p>

            <p>
              Madinath Group is committed to providing a variety of affordable,
              quality brands at value price as well as excellent and superior
              quality service to our customers.
            </p>
          </p>
        </div>
        <div className="lg:px-28 flex flex-col items-center ">
          <Image
            src={Group}
            alt=""
            width={650}
            className="object-contain w-[202px] lg:w-[360px]"
          />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Quality;
