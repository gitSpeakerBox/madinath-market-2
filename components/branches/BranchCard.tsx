import React from "react";
import Image, { StaticImageData } from "next/image";

interface BranchCardProps {
  data: {
    heading: string;
    image?: StaticImageData | string;
    points: string[];
  };
}

const BranchCard: React.FC<BranchCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col rounded-[15px] overflow-hidden shadow-[0px_4px_15px_rgba(0,0,0,0.08)] bg-white border border-gray-100 h-full transform transition-transform hover:-translate-y-1 duration-300">
      {/* Header */}
      <div className="bg-[#cd2332] py-3 px-5">
        <h2 className="text-white font-semibold text-lg">{data.heading}</h2>
      </div>

      {/* Image (if any) */}
      {data.image && (
        <div className="w-full h-[200px] relative">
          <Image
            src={data.image}
            alt={data.heading}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Body Points */}
      <div className="p-5 flex-1 flex flex-col gap-2">
        <ul className="flex flex-col gap-2">
          {data.points?.map((val, idx) => {
            // Check if this point is a phone number
            const isTel = val.toLowerCase().includes("tel");
            
            if (isTel) {
              // Extract just the number for the href
              // Usually the string is "Tel : 04 3417344"
              const phoneNum = val.replace(/[^0-9+]/g, ''); 
              
              return (
                <li key={idx} className="text-[13px] font-medium flex items-center gap-2">
                  <span className="text-mm-green text-xl leading-none">•</span>
                  <a href={`tel:${phoneNum}`} className="text-gray-800 hover:text-mm-red transition-colors underline decoration-gray-300 underline-offset-4 font-semibold">
                    {val}
                  </a>
                </li>
              );
            }

            return (
              <li key={idx} className="text-[13px] font-medium flex items-center gap-2">
                <span className="text-mm-green text-xl leading-none">•</span>
                <span className="text-gray-800">{val}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BranchCard;
