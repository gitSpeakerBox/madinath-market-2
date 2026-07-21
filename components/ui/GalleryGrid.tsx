"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface GalleryImage {
  _id: string;
  url: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  dummyImage: StaticImageData;
}

export default function GalleryGrid({ images, dummyImage }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);

  const renderGrid = () => {
    if (images && images.length > 0) {
      return images.map((item) => (
        <div
          key={item._id}
          className="w-full relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-sm cursor-pointer group"
          onClick={() => setSelectedImage(item.url)}
        >
          <Image
            src={item.url}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ));
    }

    // Dummy content if no Sanity data
    return Array.from({ length: 4 }).map((_, i) => (
      <div
        key={i}
        className="w-full relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-sm cursor-pointer group"
        onClick={() => setSelectedImage(dummyImage.src)}
      >
        <Image
          src={dummyImage}
          alt="Gallery placeholder"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {renderGrid()}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 focus:outline-none"
            onClick={closeModal}
          >
            &times;
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Expanded view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
