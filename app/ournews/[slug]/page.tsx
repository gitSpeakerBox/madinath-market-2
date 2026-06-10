"use client";
import React from 'react';
import Image from 'next/image';
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import dummyImg from "@/assets/images/OurNews/OurNews.jpg";

// Simulated Sanity Data for a single news article
const sanityDummyData = {
  title: "Lorem Ipsum",
  date: "October 24, 2024",
  image: dummyImg,
  content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`
};

const SingleNewsPage = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="flex min-h-screen flex-col items-center relative bg-white">
      {/* Navigation - Note: We force the navigation to not be transparent over an image by passing className */}
      <HeroNavV2 className="relative shadow-sm border-b pb-4 !static !bg-white" />

      <section className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20 flex-1">
        {/* Breadcrumb or Back Button */}
        <div className="mb-8">
          <a href="/ournews" className="text-gray-500 hover:text-mm-red transition-colors text-sm font-medium flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to News
          </a>
        </div>

        {/* Article Header */}
        <h1 className="text-3xl md:text-5xl font-bold text-mm-red mb-4 tracking-tight">{sanityDummyData.title}</h1>
        <p className="text-gray-500 mb-10 text-sm font-medium">{sanityDummyData.date}</p>
        
        {/* Featured Image */}
        <div className="w-full h-[300px] md:h-[500px] relative rounded-[20px] overflow-hidden shadow-lg mb-12 border border-gray-100">
          <Image
            src={sanityDummyData.image}
            alt={sanityDummyData.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="text-gray-800 leading-relaxed text-base md:text-lg whitespace-pre-wrap max-w-4xl">
          {sanityDummyData.content}
          
          <br /><br />
          <h3 className="text-xl font-bold text-gray-900 mb-2">More Updates</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SingleNewsPage;
