import Image from 'next/image'
import React from 'react'
import contact from '@/assets/images/contact us.png'
import Form from '@/components/contact/Form'
import Layout from '@/components/Layout'

const page = () => {
  return (
    <Layout>
        <Image className='w-full lg:h-screen object-cover' src={contact} alt=''/>
        <Form/>
    </Layout>
  )
}

export default page