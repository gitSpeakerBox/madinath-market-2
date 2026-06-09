import React from "react";

const Address = () => {
  return (
    <div className="flex flex-col max-lg:w-full h-full gap-6">
      <h1 className="lg:px-6 px-5 leading-[180%] lg:text-lg font-medium border w-max border-mm-red rounded">
        Address
      </h1>

      <div className="flex flex-col max-lg:items-center lg:px-7 max-lg:w-full max-lg:p-6 border border-mm-red">
        <div className="">
          <p className="lg:text-[20px] sm:text-lg leading-[300%]">
            <span className="font-medium lg:text-[22px] sm:text-[20px]  text-mm-red leading-[300%] ">
              PB No.
            </span>{" "}
            &nbsp;69004, Dubai, U.A.E
          </p>
          <p className="lg:text-[20px] sm:text-lg leading-[300%]">
            <span className="font-medium lg:text-[22px] sm:text-[20px] text-mm-red leading-[300%] ">
              Tel:
            </span>
            &nbsp;+971 4 2643488
          </p>
          <p className="lg:text-[20px] sm:text-lg leading-[300%]">
            <span className="font-medium lg:text-[22px] sm:text-[20px] text-mm-red leading-[300%] ">
              Fax:
            </span>{" "}
            &nbsp;+971 4 2643662
          </p>
          <p className="lg:text-[20px] sm:text-lg leading-[300%]">
            <span className="font-medium lg:text-[22px] sm:text-[20px] text-mm-red leading-[300%] ">
              E-mail:
            </span>{" "}
            &nbsp;info@madinathgroup.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
