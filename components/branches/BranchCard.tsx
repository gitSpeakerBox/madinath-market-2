import React from "react";
import HeadSquare from "../ui/HeadSquare";
import Image, { StaticImageData } from "next/image";

interface BranchCardProps {
  data: {
    heading: string;
    image?: StaticImageData;
    points: string[];
  };
}

const BranchCard: React.FC<BranchCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col lg:items-start items-center gap-6 h-full">
      <HeadSquare
        text={data.heading}
        className="text-white w-[300px] h-[55px] text-xl leading-[180%] font-semibold"
      />
      <ul
        className={`flex flex-col max-w-[330px] ${
          data.heading == "Muhaisina 2" && "mb-9"
        }`}
      >
        {data.points?.map((val, idx) => (
          <li
            key={idx + 999111}
            className="lg:text-[17px] text-sm flex items-center gap-2 leading-[200%]"
          >
            <span className="text-2xl">•</span>
            {val}
          </li>
        ))}
      </ul>
      {data.image && (
        <Image
          src={data.image}
          className="object-cover min-h-[250px] lg:min-h-[300px]"
          alt=""
        />
      )}
    </div>
  );
};

export default BranchCard;
