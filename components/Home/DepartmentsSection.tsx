import React from "react";

const departments = [
  { id: 1, name: "Fresh Vegetables", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Roastery", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "Spices", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop" },
  { id: 5, name: "Bakery", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop" },
  { id: 6, name: "Poultry", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=400&auto=format&fit=crop" },
  { id: 7, name: "Butchery", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=400&auto=format&fit=crop" },
  { id: 8, name: "Frozen Foods", image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&auto=format&fit=crop" },
  { id: 9, name: "Fish", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=400&auto=format&fit=crop" },
  { id: 10, name: "Garments", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop" },
  { id: 11, name: "Footwears", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&auto=format&fit=crop" },
  { id: 12, name: "Household Items", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop" },
  { id: 13, name: "Home Appliances", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=400&auto=format&fit=crop" },
  { id: 14, name: "Perfumery", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&auto=format&fit=crop" },
  { id: 15, name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=400&auto=format&fit=crop" },
];

const DepartmentsSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 md:gap-8">
          {departments.map((dept) => (
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
                  It always goes untold that if you get fresh right, you have a tendency to get the rest of the store right.
                </p>

                <div className="flex justify-end mt-auto">
                  <button className="bg-mm-green hover:bg-[#38803a] text-white text-xs font-medium px-5 py-2 rounded-[12px] transition-colors duration-300">
                    Know More
                  </button>
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
