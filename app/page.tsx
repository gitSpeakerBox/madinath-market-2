"use client";
import FeedbackForm from "@/components/Home/FeedbackForm";
import HeroSection from "@/components/Home/HeroSection";
import OurStore from "@/components/Home/OurStore";
import PrimaryValues from "@/components/Home/PrimaryValues";
import Products from "@/components/Home/Products";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import { useEffect, useState } from "react";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import AboutGroup from "@/components/Home/AboutGroup";
import BranchesLocations from "@/components/Home/BranchesLocations";
import DepartmentsSection from "@/components/Home/DepartmentsSection";

export default function Home() {
  // We no longer need showNightImage for the new navbar design, but we can keep it if other components need it
  const [showNightImage, setShowNightImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowNightImage(true);
      } else {
        setShowNightImage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <HeroNavV2 />
      {/* <HeroNav showNightImage={showNightImage} className={"lg:hidden"} /> */}
      <HeroSectionV2 />
      <AboutGroup />
      <BranchesLocations />
      <DepartmentsSection />
      {/* <HeroSection /> */}
      {/* <PrimaryValues /> */}
      <OurStore />
      <Products />
      <FeedbackForm />
      <Footer />
    </main>
  );
}
