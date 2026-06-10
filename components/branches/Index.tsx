import React from "react";
import SectionWrapper from "../SectionWrapper";
import BranchCard from "./BranchCard";
import {
  ourBranchesData,
  ourBranchesDataInd,
} from "@/libs/contents/OurBranches";

const Index = () => {
  return (
    <SectionWrapper className="w-full py-16 md:py-24 font-sans px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="font-bold text-3xl md:text-5xl text-mm-red tracking-tight">
            Our Stores
          </h1>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
          </p>
        </div>

        {/* UAE Section */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="border border-mm-red px-8 py-2 font-bold text-gray-900 w-max bg-white shadow-sm text-sm tracking-wider">
            IN UAE
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {ourBranchesData.map((val, idx) => (
              <BranchCard key={idx} data={val} />
            ))}
          </div>
        </div>

        {/* INDIA Section */}
        <div className="flex flex-col gap-6 pt-12">
          <div className="border border-mm-red px-8 py-2 font-bold text-gray-900 w-max bg-white shadow-sm text-sm tracking-wider">
            IN INDIA
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {ourBranchesDataInd.map((val, idx) => (
              <BranchCard key={idx} data={val} />
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Index;
