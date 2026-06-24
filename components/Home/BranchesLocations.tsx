"use client";
import React, { useState } from "react";


const extractIframeSrc = (htmlString: string) => {
  if (!htmlString) return "";
  const match = htmlString.match(/src="([^"]+)"/);
  return match ? match[1] : htmlString;
};

const LocationPinIcon = ({ className = "w-5 h-5", currentColor = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const BranchesLocations = ({ branches = [] }: { branches?: any[] }) => {
  // Extract unique countries
  const countries = Array.from(new Set(branches.map((b) => b.country).filter(Boolean)));
  
  const [activeTab, setActiveTab] = useState(countries.length > 0 ? countries[0] : "UAE");

  const filteredBranches = branches.filter((b) => b.country === activeTab);
  const defaultBranchId = filteredBranches.length > 0 ? filteredBranches[0]._id : null;

  const [activeBranchId, setActiveBranchId] = useState(defaultBranchId);

  // Update active branch when tab changes
  React.useEffect(() => {
    if (filteredBranches.length > 0) {
      setActiveBranchId(filteredBranches[0]._id);
    } else {
      setActiveBranchId(null);
    }
  }, [activeTab, branches]);

  const activeBranch = filteredBranches.find((b) => b._id === activeBranchId);

  return (
    <section className="bg-mm-red w-full py-16 md:py-24 px-4 font-sans">
      <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Embedded Map */}
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[500px] bg-[#e6e5df] rounded-3xl relative overflow-hidden shadow-2xl border-4 border-white/20">
          {activeBranch && activeBranch.mapEmbedUrl && (
            <iframe
              src={extractIframeSrc(activeBranch.mapEmbedUrl)}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-opacity duration-500"
            ></iframe>
          )}
        </div>

        {/* Right Side: Info & List */}
        <div className="w-full lg:w-1/2 flex flex-col text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Branches & Locations</h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            With multiple Hypermarkets, Supermarkets, and Mall outlets strategically located
            across different regions, Madinath Group is never far away. Select a branch below to view
            its exact location and contact details.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 overflow-x-auto custom-scrollbar pb-2">
            {countries.map((country: string) => (
              <button
                key={country}
                onClick={() => setActiveTab(country)}
                className={`px-8 py-2 rounded-[10px] text-sm font-semibold transition-all duration-300 uppercase whitespace-nowrap ${
                  activeTab === country
                    ? "bg-mm-green text-white border border-white"
                    : "bg-transparent text-white border border-white hover:bg-white/10"
                }`}
              >
                {country}
              </button>
            ))}
          </div>

          {/* Branches List */}
          <div className="flex gap-4">
            <div className="flex-1 border border-white/30 rounded-xl overflow-hidden bg-black/5 backdrop-blur-sm">
              <div className="h-[300px] overflow-y-auto pr-2 custom-scrollbar p-1">
                {filteredBranches.map((branch) => (
                  <div
                    key={branch._id}
                    onClick={() => setActiveBranchId(branch._id)}
                    className={`flex items-center gap-3 p-4 cursor-pointer transition-colors duration-200 ${
                      activeBranchId === branch._id
                        ? "bg-white rounded-lg text-black shadow-md m-1"
                        : "text-white border-b border-white/10 hover:bg-white/10 mx-1"
                    }`}
                  >
                    <LocationPinIcon
                      className={`w-5 h-5 flex-shrink-0 ${
                        activeBranchId === branch._id ? "text-mm-red" : "text-white"
                      }`}
                    />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span
                        className={`font-bold text-sm ${
                          activeBranchId === branch._id ? "text-mm-red" : "text-white"
                        }`}
                      >
                        {branch.name},
                      </span>
                      <span className="text-xs opacity-80">{branch.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ffffff;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.8);
        }
      `}} />
    </section>
  );
};

export default BranchesLocations;
