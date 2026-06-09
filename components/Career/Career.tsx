import React from "react";
import SectionWrapper from "../SectionWrapper";
import ButtonTransparent from "../ui/ButtonTransparent";

const Career = () => {
  const items = [
    {
      heading: "Supermarket Manager",
      points: [
        "Location : Dubai",
        "Experience : 2-6 Years",
        "Education :Bachelors Degree",
      ],
    },
    {
      heading: "Supermarket Manager",
      points: [
        " Location: Dubai",
        "Experience:  2-6 Years",
        "Education: Bachelors Degree",
      ],
    },
    {
      heading: "Supermarket Manager",
      points: [
        "Location: Dubai",
        "Experience:  2-6 Years",
        "Education:  Bachelors Degree",
      ],
    },
  ];
  return (
    <SectionWrapper className="lg:py-14 flex-col flex w-full items-center gap-[60px]">
      <div className="flex flex-col gap-6">
        <h1 className="text-[#D32133]  font-semibold text-xl lg:text-3xl leading-[180%]">
          Careers
        </h1>
        <div className="text-lg leading-[200%] max-w-[972px] gap-6 flex flex-col">
          <p className="max-lg:text-sm">
            We are always looking for passionate, talented people. We just ask
            for the desire to do good work and exceptional attention to detail.
            If you feel that you have the talent with you, send your resume to
            careers@madinathgroup.com.
          </p>
        </div>
      </div>
      <div className="grid  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 lg:gap-20 max-lg:px-7 max-lg:w-full mx-auto  place-content-center max-lg:place-items-center">
        {items.map((con, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col max-lg:items-center gap-5"
            >
              <div className=" flex flex-col max-lg:items-center mx-auto justify-center w-full ">
                <h1 className="font-semibold text-lg lg:text-[22px] leading-[180%] text-[#D32133]">
                  {con.heading}
                </h1>
                <ul className="flex flex-col mx-auto ">
                  {con.points?.map((val, idx) => (
                    <li
                      key={idx + 999111}
                      className="lg:text-lg text-sm flex items-center gap-2 leading-[180%]"
                    >
                      <span className="text-xl">•</span>
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
              <ButtonTransparent
                text="Apply Now"
                link="mailto:Hr@madinathgroup.com"
                classNameTop="max-lg:w-full shadow"
                className="max-lg:w-full max-lg:shadow[inset_0px_0px_19.9836px_rgba(0, 0, 0, 0.25)]"
              />   
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Career;
