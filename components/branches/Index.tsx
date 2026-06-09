import React from "react";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import BranchCard from "./BranchCard";
import {
  ourBranchesData,
  ourBranchesDataInd,
} from "@/libs/contents/OurBranches";

const Index = () => {
  return (
    <SectionWrapper className="grid grid-cols-1 gap-14 " classNameTop="py-10">
      <h1 className="text-[32px] font-semibold leading-[180%] text-mm-red">
        Branches
      </h1>
      <h1 className="text-[28px] text-center font-medium leading-[200%] text-black">
        In UAE
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 max-lg:place-items-center  gap-x-5 gap-y-10 place-content-center place-items-center">
        {ourBranchesData.map((val, idx) => (
          <BranchCard key={idx + 929345} data={val} />
        ))}
      </div>
      <h1 className="text-[28px] text-center font-medium leading-[200%] text-black">
        In INDIA
      </h1>
      <div className="flex max-sm:flex-col items-center justify-center lg:gap-x-10 sm:gap-x-6 gap-y-10">
        {ourBranchesDataInd.map((val, idx) => (
          <BranchCard key={idx + 929345} data={val} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Index;
