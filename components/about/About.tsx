import React from "react";
import SectionWrapper from "../SectionWrapper";

const About = () => {
  return (
    <>
      <SectionWrapper className="w-full pt-16 md:pt-24 font-sans bg-white px-4 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          {/* Top Two Columns: Logo Motion Video & About Text + 45-year Video */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Logo Motion Video */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <video
                src="/videos/logo-motion.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-md object-contain"
              />
            </div>

            {/* Right Column: Text and 45-year Video */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h1 className="text-3xl md:text-4xl font-bold text-mm-red tracking-tight">
                About the Group
              </h1>
              <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Madinath Group was established in 1981 to fulfil the market needs for high quality retail
                  solutions. From the rarest foods to the freshest produce, we constantly look for the finest
                  items specially chosen for our customers. Madinath has positioned itself strategically as a
                  leader in the regional retail sector by improving operational efficiency. Our greatest value
                  lies in our strong culture and hardworking employees.
                </p>
                <p>
                  From a humble, yet confident beginning, Madinath Group grew in size as well as in
                  reputation. It steps with the success of UAE. With tremendous experience and impeccable
                  qualifications in the supermarket field, the promoters could consolidate Madinath Group&apos;s
                  stature as one of the most progressive business group in the region.
                </p>
              </div>
              
              <div className="mt-4 max-w-[200px]">
                <video
                  src="/videos/45-year.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Outlets Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 pb-12">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* Store Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mm-green">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-mm-red">50+</span>
                  <span className="text-sm font-medium text-gray-700 uppercase">Outlets</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </SectionWrapper>
      
      {/* Red Mission & Vision Section - Full Width */}
      <div className="w-full bg-mm-red">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            
            {/* Our Mission */}
            <div className="flex-1 max-w-[500px] border border-white/40 rounded-xl overflow-hidden bg-transparent">
              <div className="bg-white py-3 px-6">
                <h3 className="text-mm-red font-bold text-lg">Our Mission</h3>
              </div>
              <div className="p-6 text-white text-sm leading-relaxed">
                Create a chain of superstores in strategic locations
                delivering quality, value, service and variety, with
                convenient opening hours providing our customers with
                the comfortable shopping experience.
              </div>
            </div>

            {/* Our Vision */}
            <div className="flex-1 max-w-[500px] border border-white/40 rounded-xl overflow-hidden bg-transparent">
              <div className="bg-white py-3 px-6">
                <h3 className="text-mm-red font-bold text-lg">Our Vision</h3>
              </div>
              <div className="p-6 text-white text-sm leading-relaxed">
                UAE&apos;s value price retailer of choice!! Enhancing customer
                experience and delivering quality products.
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
