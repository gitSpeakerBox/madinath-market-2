import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/sanityClient";
import DummyLogo from "@/assets/images/LOGO.png";

const dummyBrands = [
  { _id: "1", title: "Brand 1", logo: DummyLogo },
  { _id: "2", title: "Brand 2", logo: DummyLogo },
  { _id: "3", title: "Brand 3", logo: DummyLogo },
  { _id: "4", title: "Brand 4", logo: DummyLogo },
];

const OurBrands = ({ brands }: { brands?: any[] }) => {
  const displayBrands = brands && brands.length > 0 ? brands : dummyBrands;

  return (
    <section className="py-16 md:py-24 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#a51c24] mb-8 md:mb-12 tracking-tight">
          Our Brands
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {displayBrands.map((brand) => (
            <div 
              key={brand._id} 
              className="relative w-[120px] h-[80px] md:w-[180px] md:h-[100px]  transition-all duration-300 transform hover:scale-105"
            >
              {brand.link ? (
                <a href={brand.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                  <Image
                    src={brand.logo.asset ? urlFor(brand.logo).url() : brand.logo}
                    alt={brand.logo.alt || brand.title || "Brand logo"}
                    fill
                    className="object-contain"
                  />
                </a>
              ) : (
                <div className="w-full h-full relative">
                  <Image
                    src={brand.logo.asset ? urlFor(brand.logo).url() : brand.logo}
                    alt={brand.logo.alt || brand.title || "Brand logo"}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
