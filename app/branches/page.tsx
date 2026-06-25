import type { Metadata } from "next";
import React from "react";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import Index from "@/components/branches/Index";
import { getBranches } from "@/sanity/sanityClient";

export const metadata: Metadata = {
  title: "Our Branches | Madinath Group",
  description: "Find the nearest Madinath Group store in your area. We have multiple branches strategically located across different regions to serve you better.",
};

export const dynamic = "force-dynamic";

const BranchesPage = async () => {
  const branches = await getBranches();

  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <HeroNavV2 />
      <div className="w-full">
        <Index branches={branches} />
      </div>
      <Footer />
    </main>
  );
};

export default BranchesPage;
