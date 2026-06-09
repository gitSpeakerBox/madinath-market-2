import Career from '@/components/Career/Career'
import Image from 'next/image'
import React from 'react'
import Hero from "@/assets/images/Careers/Career.png"; 
import Layout from '@/components/Layout';

const page = () => {
  return (
    <Layout>
       <Image
        src={Hero}
        alt="About Us"
        className="object-cover lg:h-screen lg:w-full"
      />
        <Career/>
    </Layout>
  )
}

export default page