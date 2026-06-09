import Image from 'next/image'
import React from 'react'
import hero from '@/assets/images/branches/hero.png'
import Index from '@/components/branches/Index'
import Layout from '@/components/Layout'


const page = () => {
  return (
    <Layout>
        <Image className='lg:w-screen object-cover lg:h-svh ' src={hero} alt=''/>
        <Index/>
    </Layout>
  )
}

export default page