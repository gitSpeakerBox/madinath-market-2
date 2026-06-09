import Layout from "@/components/Layout";
import FullPage from "@/components/Product/FullPage";
import { data } from "@/libs/contents/ProductsSeparate";
import React from "react";

const page = ({ params }: { params: { product_id: string } }) => {
  const singleData = data.find((item) => item.slug === params.product_id);
  if (!singleData) {
    return <div>Product not found</div>;
  }

  return (
    <Layout>
      <FullPage data={singleData} />
    </Layout>
  );
};

export default page;
