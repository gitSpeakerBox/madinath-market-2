import Profile from "@/components/Profile/Profile";
import Hero from "@/assets/images/profile/HeroMain.png";
import Image from "next/image";
import React from "react";
import Layout from "@/components/Layout";

const page = () => {
  return (
    <Layout>
      <Image
        src={Hero}
        alt=""
        className="object-cover lg:h-screen lg:w-full "
      />
      <Profile />
    </Layout>
  );
};

export default page;
