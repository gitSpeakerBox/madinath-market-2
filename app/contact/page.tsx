"use client";
import React from 'react';
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import Form from '@/components/contact/Form';
import FeedbackForm from '@/components/Home/FeedbackForm';
import contactHeroImg from '@/assets/images/contact us.png';

// Simulated Sanity Data
const sanityDummyData = {
  heroSection: {
    images: [contactHeroImg]
  }
};

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center relative bg-white">
      <HeroNavV2 />

      {/* Hero Section */}
      <HeroSectionV2 customImages={sanityDummyData.heroSection.images} hideContent={true} />

      {/* Contact Form Section */}
      <Form />

      {/* Feedback Form / Info Section */}
      <FeedbackForm />

      <Footer />
    </main>
  );
};

export default page;