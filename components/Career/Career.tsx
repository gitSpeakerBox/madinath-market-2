import React from "react";
import SectionWrapper from "../SectionWrapper";
import Link from "next/link";

interface CareerItem {
  _id: string;
  title: string;
  location?: string;
  experience?: string;
  education?: string;
  linkedinUrl?: string;
}

const CareerSection = ({ careers = [] }: { careers?: CareerItem[] }) => {
  return (
    <SectionWrapper className="w-full py-16 md:py-24 font-sans bg-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="font-bold text-3xl md:text-5xl text-mm-red tracking-tight">
            Careers
          </h1>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed">
            We are always looking for passionate, talented people. We just ask for the desire to do
            good work and exceptional attention to detail. If you feel that you have the talent with
            you, send your resume to{" "}
            <a href="mailto:careers@madinathgroup.com" className="text-mm-red underline">
              careers@madinathgroup.com
            </a>.
          </p>
        </div>

        {/* Job Cards */}
        {careers.length === 0 ? (
          <div className="text-center py-24 text-gray-500 text-base">
            No open positions at the moment. Please check back later or send your CV to{" "}
            <a href="mailto:careers@madinathgroup.com" className="text-mm-red underline">
              careers@madinathgroup.com
            </a>.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {careers.map((job) => (
              <div key={job._id} className="flex flex-col rounded-[15px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] bg-white transform transition-transform hover:-translate-y-1 duration-300 border border-gray-100">
                
                {/* Card Header */}
                <div className="bg-[#cd2332] py-4 px-6">
                  <h2 className="text-white font-semibold text-xl">{job.title}</h2>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  {job.location && (
                    <div className="flex gap-2 text-sm font-medium">
                      <span className="text-mm-red">Location:</span>
                      <span className="text-gray-900">{job.location}</span>
                    </div>
                  )}
                  {job.experience && (
                    <div className="flex gap-2 text-sm font-medium">
                      <span className="text-mm-red">Experience:</span>
                      <span className="text-gray-900">{job.experience}</span>
                    </div>
                  )}
                  {job.education && (
                    <div className="flex gap-2 text-sm font-medium">
                      <span className="text-mm-red">Education:</span>
                      <span className="text-gray-900">{job.education}</span>
                    </div>
                  )}

                  {/* Apply Button */}
                  <div className="mt-4">
                    {job.linkedinUrl ? (
                      <Link href={job.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#4ba852]/95 hover:bg-[#4ba852] text-white text-sm font-medium py-2 px-6 rounded-[12px] transition-colors duration-300">
                          Apply on LinkedIn
                        </button>
                      </Link>
                    ) : (
                      <a href="mailto:careers@madinathgroup.com">
                        <button className="bg-[#4ba852]/95 hover:bg-[#4ba852] text-white text-sm font-medium py-2 px-6 rounded-[12px] transition-colors duration-300">
                          Apply via Email
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Separator */}
      <div className="max-w-7xl mx-auto w-full h-[1px] bg-gray-300 mt-20 mb-8"></div>
    </SectionWrapper>
  );
};

export default CareerSection;
