"use client";
import React, { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import BranchCard from "./BranchCard";
import { urlFor } from "@/sanity/sanityClient";

// Helper to extract iframe src if needed (though mapEmbedUrl shouldn't be used for the modal map link if normalMapLink exists)
const extractIframeSrc = (htmlString: string) => {
  if (!htmlString) return "";
  const match = htmlString.match(/src="([^"]+)"/);
  return match ? match[1] : htmlString;
};

const Index = ({ branches = [] }: { branches?: any[] }) => {
  const [selectedBranch, setSelectedBranch] = useState<any | null>(null);

  // Dynamically group branches by country
  const branchesByCountry = branches.reduce((acc: any, branch: any) => {
    const country = branch.country || "Other";
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(branch);
    return acc;
  }, {});

  const countries = Object.keys(branchesByCountry);

  return (
    <SectionWrapper className="w-full py-16 md:py-24 font-sans px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="font-bold text-3xl md:text-5xl text-mm-red tracking-tight">
            Our Stores
          </h1>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed">
            Find the nearest Madinath Group store in your area. We have multiple branches strategically located across different regions to serve you better.
          </p>
        </div>

        {/* Dynamic Country Sections */}
        {countries.map((countryName, index) => (
          <div key={countryName} className={`flex flex-col gap-6 ${index > 0 ? "pt-12" : "pt-4"}`}>
            <div className="border border-mm-red px-8 py-2 font-bold text-gray-900 w-max bg-white shadow-sm text-sm tracking-wider uppercase">
              IN {countryName}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {branchesByCountry[countryName].map((val: any, idx: number) => (
                <div key={idx} onClick={() => setSelectedBranch(val)} className="cursor-pointer">
                  <BranchCard
                    data={{
                      heading: val.name,
                      image: val.image?.asset ? urlFor(val.image).url() : undefined,
                      points: [val.type, val.phone && `Tel : ${val.phone}`, val.address].filter(Boolean),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Store Modal */}
      {selectedBranch && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative animate-fade-in-up">
            {/* Close button */}
            <button
              onClick={() => setSelectedBranch(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
              <div className="flex flex-col gap-6">

                {/* Header info */}
                <div>
                  <h2 className="text-3xl font-bold text-mm-red mb-2">{selectedBranch.name}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{selectedBranch.type}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{selectedBranch.country}</span>
                  </div>
                  {selectedBranch.address && <p className="text-gray-800"><span className="font-semibold">Address:</span> {selectedBranch.address}</p>}
                  {selectedBranch.phone && <p className="text-gray-800 mt-1"><span className="font-semibold">Phone:</span> <a href={`tel:${selectedBranch.phone}`} className="text-blue-600 hover:underline">{selectedBranch.phone}</a></p>}
                </div>

                {/* Quick Links (Instagram & Map) */}
                <div className="flex flex-wrap gap-4">
                  {selectedBranch.instagramLink && (
                    <a
                      href={selectedBranch.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Store Instagram
                    </a>
                  )}

                  {selectedBranch.normalMapLink && (
                    <a
                      href={selectedBranch.normalMapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                        <line x1="15" y1="3" x2="15" y2="21"></line>
                      </svg>
                      Google Maps
                    </a>
                  )}
                </div>

                {/* Offers PDF */}
                {selectedBranch.offersPdf && (
                  <div className="mt-6 flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Latest Offers</h3>
                    <div className="w-full h-[60vh] min-h-[500px] border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                      <object
                        data={`${selectedBranch.offersPdf}#toolbar=0`}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                      >
                        <div className="p-8 text-center flex flex-col items-center">
                          <p className="text-gray-600 mb-4">Your browser does not support inline PDFs.</p>
                          <a href={selectedBranch.offersPdf} target="_blank" rel="noopener noreferrer" className="bg-mm-red text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                            Download Offers PDF
                          </a>
                        </div>
                      </object>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{
        __html: `
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </SectionWrapper>
  );
};

export default Index;
