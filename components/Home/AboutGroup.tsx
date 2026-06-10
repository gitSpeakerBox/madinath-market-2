import React from 'react';

const AboutGroup = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Logo Motion Video */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="absolute inset-0  rounded-full -z-10 transform scale-150"></div>
          <video
            src="/videos/logo-motion.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[450px] h-auto object-contain"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-mm-red mb-6 tracking-tight">
            About the Group
          </h2>
          <div className="text-gray-700 space-y-6 text-sm md:text-base leading-relaxed text-justify">
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
            <button className="bg-mm-green hover:bg-mm-red text-white transition-all duration-300 px-8 py-3 rounded-[12px] font-medium hover:-translate-y-0.5 active:translate-y-0 self-start sm:self-auto">
              Read More
            </button>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-end justify-between w-full gap-6 sm:gap-0">
            <div className="mt-4 sm:mt-0 ml-auto mr-0">
              <video
                src="/videos/45-year.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-48 md:w-56 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGroup;
