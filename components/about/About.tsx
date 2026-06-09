import Image from "next/image";
import React from "react";
import SectionWrapper from "../SectionWrapper";
import Group from "@/assets/images/AboutGroup/Groupbox.png";
const About = () => {
  return (
      <SectionWrapper className="py-14 flex-col flex w-full items-center gap-[60px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#D32133] font-semibold text-xl lg:text-3xl leading-[180%]">
            About the Group
          </h1>
          <p className="lg:text-lg text-sm leading-[200%] max-w-[972px] ">
            Madinath Group was established in 1971 to fulfil the market needs
            for high quality retail solutions. From the rarest foods to the
            freshest produce, we constantly look for the finest items—specially
            chosen for our customers. Madinath has positioned itself
            strategically as a leader in the regional retail sector by improving
            operational efficiency. Our greatest value lies in our strong
            culture and hardworking employees. 
            
            <p className="pt-6 max-lg:pt-4">

            From a humble, yet confident
            beginning, Madinath Group grew in size as well as in reputation.
            It steps with the success of UAE. With tremendous experience and
            impeccable qualifications in the supermarket field, the promoters
            could consolidate Madinath Group&apos;s stature as one of the most
            progressive business group in the region. To stay on top in this
            highly competitive field, Madinath Group continually invests its
            various divisions as well as in supermarket and department store.
            The day to day operations of the Company are overseen by a competent
            management team with experience and expertise in the various
            disciplines they represent. The Directors are also functionally
            involved in the running of the Company.
            </p>
          </p>
        </div>
        <div className="lg:px-28 flex flex-col items-center ">
          <Image src={Group} alt="" className="lg:w-[650px] w-full h-full" />
        </div>
      </SectionWrapper>
  );
};

export default About;
