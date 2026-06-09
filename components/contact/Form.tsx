import React from "react";
import SectionWrapper from "../SectionWrapper";
import Address from "./Address";
import EnquiryForm from "./EnquiryForm";

const Form = () => {
  return (
    <SectionWrapper className="flex flex-col z-10 sm:gap-6 gap-5 " classNameTop="py-10">
      <h1 className="sm:text-3xl text-xl text-mm-red leading-[180%] font-semibold">
        Contact Us
      </h1>
      <div className="flex max-lg:flex-col gap-10 justify-center items-start">
        <div className="flex flex-col gap-6  w-full max-w-[660px]">
          <h1 className="lg:px-6 px-5 leading-[180%] lg:text-lg font-medium border border-mm-red rounded w-max">
            Enquiry
          </h1>
          <EnquiryForm />
        </div>
        <Address/>
      </div>
    </SectionWrapper>
  );
};

export default Form;
