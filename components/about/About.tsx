import React from "react";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import CountUp from "@/components/ui/CountUp";

const defaultStats = [
  { count: 50, suffix: "+", label: "Outlets", iconUrl: "" },
  { count: 45, suffix: "+", label: "Years", iconUrl: "" },
  { count: 10000, suffix: "+", label: "Products", iconUrl: "" },
  { count: 500, suffix: "+", label: "Staff", iconUrl: "" },
];

interface AboutProps {
  aboutData?: {
    stats?: { count: number; suffix?: string; label: string; iconUrl?: string }[];
    aboutVideoUrl?: string;
    mission?: string;
    vision?: string;
    chairmanImageUrl?: string;
    chairmanName?: string;
    chairmanPosition?: string;
    chairmanMessage?: string;
  } | null;
}
import chairmanFallbackImg from "@/assets/images/chairman.jpeg";

const About = ({ aboutData }: AboutProps) => {
  const stats = aboutData?.stats?.length ? aboutData.stats : defaultStats;
  const mission = aboutData?.mission || "Create a chain of superstores in strategic locations delivering quality, value, service and variety, with convenient opening hours providing our customers with the comfortable shopping experience.";
  const vision = aboutData?.vision || "UAE's value price retailer of choice!! Enhancing customer experience and delivering quality products.";
  const videoSrc = aboutData?.aboutVideoUrl || "/videos/45-year.mp4";
  const chairmanImageUrl = aboutData?.chairmanImageUrl;
  const chairmanName = aboutData?.chairmanName || "Usman Ondath";
  const chairmanPosition = aboutData?.chairmanPosition || "Managing Director";
  const chairmanMessage = aboutData?.chairmanMessage || "Welcome to Madinath Group. Since our inception, our focus has always been on delivering the highest quality products with exceptional customer service. We are committed to continuing our legacy of excellence and building long-lasting relationships with our valued customers.";

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
                className="w-full max-w-md object-contain rounded-2xl shadow-sm"
              />
            </div>

            {/* Right Column: Text and 45-year Video */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h1 className="text-3xl md:text-4xl font-bold text-mm-red tracking-tight">
                About the Group
              </h1>
              <div className="text-gray-700 text-sm md:text-base text-justify leading-relaxed space-y-4 font-light">
                <p>
                  Madinath Group was established in 1982 to fulfil the market needs for high quality retail
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
                {videoSrc.match(/\.(jpeg|jpg|gif|png|svg|webp)$/i) ? (
                  <Image
                    src={videoSrc}
                    alt="45 Years Badge"
                    width={200}
                    height={100}
                    className="w-full object-contain"
                  />
                ) : (
                  <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-contain"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Counting Stats Row - Highly responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 pb-12">
            {stats.map((stat: any, index: number) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 md:p-6 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-2xl transition-all duration-300 hover:shadow-md"
              >
                {/* Icon Container with subtle circle overlay */}
                <div className="w-14 h-14 rounded-full bg-mm-red/5 flex items-center justify-center shrink-0">
                  {stat.iconUrl ? (
                    <img
                      src={stat.iconUrl}
                      alt={stat.label}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mm-green">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  )}
                </div>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left justify-center min-h-[56px]">
                  <span className="text-3xl md:text-4xl font-extrabold text-mm-red tracking-tight leading-none mb-1">
                    <CountUp target={stat.count} suffix={stat.suffix || ""} />
                  </span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </SectionWrapper>

      {/* Red Mission & Vision Section - Full Width */}
      <div className="w-full bg-mm-red">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">

            {/* Our Mission */}
            <div className="flex-1 max-w-[500px] border border-white/20 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm flex flex-col">
              <div className="bg-white py-4 px-6 border-b border-white/10">
                <h3 className="text-mm-red font-bold text-xl tracking-tight">Our Mission</h3>
              </div>
              <div className="p-6 text-white/90 text-[14px] leading-relaxed font-light flex-1">
                {mission}
              </div>
            </div>

            {/* Our Vision */}
            <div className="flex-1 max-w-[500px] border border-white/20 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm flex flex-col">
              <div className="bg-white py-4 px-6 border-b border-white/10">
                <h3 className="text-mm-red font-bold text-xl tracking-tight">Our Vision</h3>
              </div>
              <div className="p-6 text-white/90 text-[14px] leading-relaxed font-light flex-1">
                {vision}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Chairman's Message Section */}
      <div className="w-full bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-[3px] bg-mm-red rounded-full" />
            <span className="text-mm-red text-xs font-bold uppercase tracking-[0.2em]">Leadership</span>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-8 md:p-12 lg:p-16 relative overflow-hidden">

            {/* Title at the Top */}
            <div className="mb-10 relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                Chairman&apos;s <span className="text-mm-red">Message</span>
              </h2>
              <div className="w-20 h-1.5 bg-mm-red rounded-full" />
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 relative z-10 items-start">

              {/* Left: Portrait Card */}
              <div className="w-full flex flex-col gap-1 lg:w-[30%] shrink-0">
                <div className="relative w-full h-[350px] md:h-[450px] lg:h-[400px] rounded-2xl overflow-hidden bg-slate-900 shadow-lg group">
                  <Image
                    src={chairmanImageUrl || chairmanFallbackImg}
                    alt={chairmanName}
                    fill
                    className="object-cover object-top opacity-95 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                </div>
                <div className=" bottom-0 left-0 right-0">
                  <p className="text-black font-bold text-2xl leading-tight tracking-tight mb-1">{chairmanName}</p>
                  <p className="text-mm-red text-sm font-bold uppercase tracking-widest">{chairmanPosition}</p>
                </div>
              </div>

              {/* Right: Message Panel */}
              <div className="w-full lg:w-[65%] flex flex-col relative pt-4">
                <span className="absolute -top-16 -left-8 text-[120px] md:text-[180px] font-serif text-slate-100/80 leading-none select-none pointer-events-none">&ldquo;</span>

                <div className="relative z-10">
                  <blockquote className="text-gray-700 md:text-lg leading-relaxed font-light">
                    &ldquo;{chairmanMessage}&rdquo;
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
