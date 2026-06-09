import About from "@/components/about/About";
import React from "react";
import Hero from "@/assets/images/AboutGroup/AboutGroupMain.png";
import Image from "next/image";
import Layout from "@/components/Layout";

const page = () => {
  return (
    <Layout className="flex flex-col">
      <Image
        src={Hero}
        alt="About Us"
        className="object-cover lg:h-screen lg:w-full "
      />

      <About />
    </Layout>
  );
};

export default page;
