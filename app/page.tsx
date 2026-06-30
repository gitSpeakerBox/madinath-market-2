import type { Metadata } from "next";
import FeedbackForm from "@/components/Home/FeedbackForm";
import HeroSectionV2 from "@/components/Home/HeroSectionV2";
import AboutGroup from "@/components/Home/AboutGroup";
import BranchesLocations from "@/components/Home/BranchesLocations";
import DepartmentsSection from "@/components/Home/DepartmentsSection";
import Form from "@/components/contact/Form";
import Footer from "@/components/ui/Footer";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import OurBrands from "@/components/Home/OurBrands";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getSubBrands, getBranches, getHeroSlides, getAllProducts, urlFor, getContactInfo } from "@/sanity/sanityClient";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madinath Group | Hypermarkets, Supermarkets & Mall in UAE",
  description:
    "Welcome to Madinath Group — UAE's leading retail destination since 1982. Discover fresh produce, groceries, garments, electronics and more at our Hypermarkets, Supermarkets & Mall across Dubai. More for Less, Always!",
  alternates: {
    canonical: "https://www.madinathgroup.com",
  },
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const brands = await getSubBrands();
  const branches = await getBranches();
  const heroSlides = await getHeroSlides();
  const products = await getAllProducts();
  const contactInfo = await getContactInfo();

  // Extract URLs from sanity images
  const sanityHeroImages = heroSlides
    ?.filter((slide: any) => slide?.image?.asset)
    .map((slide: any) => urlFor(slide.image).url());

  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <HeroNavV2 isTransparent={true} />
      <HeroSectionV2 customImages={sanityHeroImages} />
      <ScrollReveal><AboutGroup /></ScrollReveal>
      <ScrollReveal><BranchesLocations branches={branches} /></ScrollReveal>
      <ScrollReveal><DepartmentsSection products={products} /></ScrollReveal>
      <ScrollReveal><OurBrands brands={brands} /></ScrollReveal>
      <ScrollReveal><FeedbackForm contactInfo={contactInfo} /></ScrollReveal>
      <ScrollReveal><Form /></ScrollReveal>
      <div className="w-1/2 h-[1.5px] bg-black/30 mx-auto " />
      <Footer />
    </main>
  );
}
