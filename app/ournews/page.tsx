import OurNews from '@/components/OurNews/OurNews'
import React from 'react'
import Hero from "@/assets/images/OurNews/OurNews.png"; 
import Image from 'next/image';
import Layout from '@/components/Layout';

const page = () => {
  return (
    <Layout>
        <Image
        src={Hero}
        alt="About Us"
        className="object-cover lg:h-screen lg:w-full"
      />
        <OurNews/>
    </Layout>
  )
}

export default page