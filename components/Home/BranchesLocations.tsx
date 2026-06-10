"use client";
import React, { useState } from "react";

// Dummy data
const branches = [
  {
    id: 1,
    name: "Al Quoz",
    type: "Supermarket",
    phone: "04 3417344",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.391464644022!2d55.1396922!3d24.986810799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73c4a6f665a5%3A0xad221643ef2c3ee2!2sOlaya%20al%20madina%20hyper%20market!5e0!3m2!1sen!2sin!4v1780916020764!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Jebel Ali Industrial",
    type: "Hypermarket",
    phone: "04 1234567",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d115681.29592731265!2d55.0512514!3d24.982269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0d3df8fba7fb%3A0x6b490f05809270df!2sJebel%20Ali%20Industrial%20Area%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
  },
  {
    id: 3,
    name: "Jebel Ali",
    type: "Mall",
    phone: "04 7654321",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3615.5492167098485!2d55.10660721500585!3d25.015408983981896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0d3df8fba7fb%3A0x6b490f05809270df!2sJebel%20Ali%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
  },
  {
    id: 4,
    name: "Jebel Ali Industrial",
    type: "Mall",
    phone: "04 1112223",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d115681.29592731265!2d55.0512514!3d24.982269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0d3df8fba7fb%3A0x6b490f05809270df!2sJebel%20Ali%20Industrial%20Area%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
  },
  {
    id: 5,
    name: "Al Barsha",
    type: "Supermarket",
    phone: "04 9998887",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d28886.136854129215!2d55.1852026!3d25.1158652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bbd6a2f4d1d%3A0x334bfeb2e113707!2sAl%20Barsha%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
  },
  {
    id: 6,
    name: "Muhaisina 2",
    type: "Supermarket",
    phone: "04 4445556",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d14431.111874944983!2d55.4057999!3d25.2780655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5df7bc2f6bc1%3A0x89e02c0fbaf57bc4!2sMuhaisanah%20-%20Muhaisanah%202%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
  },
];

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

const BranchesLocations = () => {
  const [activeTab, setActiveTab] = useState("UAE");
  const [activeBranchId, setActiveBranchId] = useState(branches[0].id);

  const activeBranch = branches.find((b) => b.id === activeBranchId);

  return (
    <section className="bg-mm-red w-full py-16 md:py-24 px-4 font-sans">
      <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Embedded Map */}
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[500px] bg-[#e6e5df] rounded-3xl relative overflow-hidden shadow-2xl border-4 border-white/20">
          {activeBranch && (
            <iframe
              src={activeBranch.mapUrl}
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab("UAE")}
              className={`px-8 py-2 rounded-[10px] text-sm font-semibold transition-all duration-300 ${
                activeTab === "UAE"
                  ? "bg-mm-green text-white border border-white"
                  : "bg-transparent text-white border border-white hover:bg-white/10"
              }`}
            >
              UAE
            </button>
            <button
              onClick={() => setActiveTab("INDIA")}
              className={`px-8 py-2 rounded-[10px] text-sm font-semibold transition-all duration-300 ${
                activeTab === "INDIA"
                  ? "bg-mm-green text-white border border-white"
                  : "bg-transparent text-white border border-white hover:bg-white/10"
              }`}
            >
              INDIA
            </button>
          </div>

          {/* Branches List */}
          <div className="flex gap-4">
            <div className="flex-1 border border-white/30 rounded-xl overflow-hidden bg-black/5 backdrop-blur-sm">
              <div className="h-[300px] overflow-y-auto pr-2 custom-scrollbar p-1">
                {branches.map((branch) => (
                  <div
                    key={branch.id}
                    onClick={() => setActiveBranchId(branch.id)}
                    className={`flex items-center gap-3 p-4 cursor-pointer transition-colors duration-200 ${
                      activeBranchId === branch.id
                        ? "bg-white rounded-lg text-black shadow-md m-1"
                        : "text-white border-b border-white/10 hover:bg-white/10 mx-1"
                    }`}
                  >
                    <LocationPinIcon
                      className={`w-5 h-5 flex-shrink-0 ${
                        activeBranchId === branch.id ? "text-mm-red" : "text-white"
                      }`}
                    />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span
                        className={`font-bold text-sm ${
                          activeBranchId === branch.id ? "text-mm-red" : "text-white"
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
