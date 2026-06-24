import type { Metadata } from "next";
import React from "react";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import Form from "@/components/contact/Form";
import FeedbackForm from "@/components/Home/FeedbackForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import contactHeroImg from "@/assets/images/contact us.png";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Madinath Group. Contact our team for enquiries about our Hypermarkets, Supermarkets & Mall locations across Dubai, UAE. Call us at +971 4 2643488 or email info@madinathgroup.com.",
  keywords: [
    "contact Madinath Group",
    "Madinath Group phone number",
    "Madinath Group email",
    "hypermarket Dubai contact",
    "supermarket UAE enquiry",
    "Madinath Group Dubai address",
  ],
  alternates: {
    canonical: "https://www.madinathgroup.com/contact",
  },
  openGraph: {
    title: "Contact Madinath Group | Dubai, UAE",
    description:
      "Reach out to Madinath Group for store information, feedback, or enquiries. We're here to help at our Hypermarkets, Supermarkets & Mall in Dubai.",
    url: "https://www.madinathgroup.com/contact",
  },
};

// Simulated Sanity Data
const sanityDummyData = {
  heroSection: {
    images: [contactHeroImg],
  },
};

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center relative bg-white">
      <HeroNavV2 />

      {/* Hero Section */}
      <HeroSectionV2 customImages={sanityDummyData.heroSection.images} hideContent={true} />

      {/* Contact Form Section */}
      <ScrollReveal><Form /></ScrollReveal>

      {/* Feedback Form / Info Section */}
      <ScrollReveal><FeedbackForm /></ScrollReveal>

      <Footer />
    </main>
  );
};

export default page;