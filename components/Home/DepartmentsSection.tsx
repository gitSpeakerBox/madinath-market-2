import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/sanityClient";

const dummyDepartments = [
  { id: 1, name: "Fresh Vegetables", slug: "fresh-vegetables", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=400&auto=format&fit=crop", description: "Farm-fresh vegetables sourced daily. From leafy greens to seasonal picks — always crisp, always affordable." },
  { id: 2, name: "Fruits", slug: "fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop", description: "A vibrant selection of tropical, seasonal, and imported fruits at the freshest quality and best value." },
  { id: 3, name: "Roastery", slug: "roastery", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop", description: "Freshly roasted nuts, seeds, and coffee blends. Aromatic, premium, and perfectly roasted in-store." },
  { id: 4, name: "Spices", slug: "spices", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop", description: "Authentic spices and herbs from around the world — ground fresh, full of flavour, and priced for every kitchen." },
  { id: 5, name: "Bakery", slug: "bakery", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop", description: "Freshly baked bread, pastries, and confections baked in-store daily for the warmest shopping experience." },
  { id: 6, name: "Poultry", slug: "poultry", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=400&auto=format&fit=crop", description: "Fresh, hygienically processed poultry products — chicken, turkey, and more — sourced from trusted suppliers." },
  { id: 7, name: "Butchery", slug: "butchery", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=400&auto=format&fit=crop", description: "Premium cuts of beef, lamb, and veal prepared by skilled butchers for the finest dining experience." },
  { id: 8, name: "Frozen Foods", slug: "frozen-foods", image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&auto=format&fit=crop", description: "A wide range of frozen meals, vegetables, and snacks — convenient, quality-locked, and always in stock." },
  { id: 9, name: "Fish", slug: "fish", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=400&auto=format&fit=crop", description: "Fresh and frozen fish and seafood varieties, sourced responsibly and delivered to our counters daily." },
  { id: 10, name: "Garments", slug: "garments", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop", description: "Everyday fashion and family clothing at unbeatable prices — from casual wear to formal attire for all ages." },
  { id: 11, name: "Footwears", slug: "footwears", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&auto=format&fit=crop", description: "Comfortable, durable footwear for men, women, and children — style and quality without the premium price." },
  { id: 12, name: "Household Items", slug: "household-items", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop", description: "Everything your home needs — from cleaning essentials to kitchenware, all under one roof at great prices." },
  { id: 13, name: "Home Appliances", slug: "home-appliances", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=400&auto=format&fit=crop", description: "Quality home appliances from trusted brands — making everyday living smarter, easier, and more efficient." },
  { id: 14, name: "Perfumery", slug: "perfumery", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&auto=format&fit=crop", description: "Explore a curated range of fragrances — from classic oud to contemporary scents, for every personality." },
  { id: 15, name: "Electronics", slug: "electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=400&auto=format&fit=crop", description: "The latest gadgets, accessories, and consumer electronics at competitive prices for tech-savvy shoppers." },
];

const DepartmentsSection = ({ products = [] }: { products?: any[] }) => {
  // Use Sanity products if available, otherwise use dummy data
  const displayItems = products.length > 0 
    ? products.map(p => ({
        id: p._id,
        name: p.title,
        slug: p.slug,
        image: p.image?.asset ? urlFor(p.image).url() : "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=400&auto=format&fit=crop",
        description: p.description || "",
      }))
    : dummyDepartments;

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayItems.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100"
            >
              {/* Header */}
              <div className="bg-mm-red py-3 px-4">
                <h3 className="text-white font-semibold text-lg truncate">
                  {dept.name}
                </h3>
              </div>

              {/* Image */}
              <div className="h-48 w-full relative overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dept.description}
                </p>

                <div className="flex justify-end mt-auto">
                  <Link href={`/store/${dept.slug}`}>
                    <button className="bg-mm-green hover:bg-[#38803a] text-white text-xs font-medium px-5 py-2 rounded-[12px] transition-colors duration-300">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
