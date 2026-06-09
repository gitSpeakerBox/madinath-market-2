import React from "react";

const HeadSquare = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  return (
    <div className={`relative  flex items-center justify-center ${className}`}>
      <div
        style={{
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
        }}
        className="absolute right-0 top-0 h-full w-[60%] bg-mm-red rounded-t-[6px] skew-x-12"
      />
      <div
        style={{
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
          clipPath: "polygon(0 0, 80% 0%, 80% 100%, 0% 100%)",
        }}
        className="absolute left-0 top-0 h-full w-[60%] bg-mm-red rounded-t-[6px] -skew-x-12"
      />
      <p className="absolute py-3">{text}</p>
    </div>
  );
};

export default HeadSquare;
