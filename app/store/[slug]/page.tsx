import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { getProductBySlug, urlFor, getAllProducts } from "@/sanity/sanityClient";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product: any) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.title} | Madinath Group`,
    description: product.description,
  };
}

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Use detailImage if available, fallback to regular image
  const displayImage = product.detailImage?.asset 
    ? urlFor(product.detailImage).url() 
    : (product.image?.asset ? urlFor(product.image).url() : null);

  return (
    <main className="flex min-h-screen flex-col items-center relative bg-white">
      <HeroNavV2 />

      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[15px] font-medium mb-10 text-gray-900">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#D32133" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" />
            </svg>
          </Link>
          <span className="text-gray-500">/</span>
          <span className="font-semibold">{product.title}</span>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col gap-8 md:gap-10">
          {displayImage && (
            <div className="w-full h-auto max-h-[500px] overflow-hidden rounded-2xl md:rounded-[24px] shadow-sm">
              <img
                src={displayImage}
                alt={product.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          <div className="w-full">
            <h1 className="text-3xl md:text-[42px] font-bold text-[#D32133] tracking-tight mb-6 md:mb-8">
              {product.title}
            </h1>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed font-sans space-y-6">
              {product.content ? (
                <PortableText value={product.content} />
              ) : (
                <p>{product.description}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-auto">
        <div className="w-3/4 mx-auto h-[1px] bg-gray-300"></div>
        <Footer />
      </div>
    </main>
  );
}
