import Quality from "@/components/Quality/Quality";
import Hero from "@/assets/images/Quality/QualityHero.png";

import Image from "next/image";
import React from "react";
import Layout from "@/components/Layout";

const page = () => {
  return (
    <Layout>
      <Image
        src={Hero}
        alt="About Us"
        className="object-cover lg:h-screen lg:w-full"
      />
      <Quality />
    </Layout>
  );
};

export default page;
