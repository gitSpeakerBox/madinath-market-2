import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import HeroNavV2 from "@/components/ui/HeroNavV2";
import Footer from "@/components/ui/Footer";
import { getNewsBySlug, getAllNews, urlFor } from "@/sanity/sanityClient";

export async function generateStaticParams() {
  const news = await getAllNews();
  return news.map((item: any) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getNewsBySlug(params.slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | Madinath Group`,
    description: article.description,
  };
}

export const dynamic = "force-dynamic";

const SingleNewsPage = async ({ params }: { params: { slug: string } }) => {
  const article = await getNewsBySlug(params.slug);

  if (!article) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center relative bg-white">
      <HeroNavV2 />

      <section className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20 flex-1">
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/ournews" className="text-gray-500 hover:text-mm-red transition-colors text-sm font-medium flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to News
          </Link>
        </div>

        {/* Article Header */}
        <h1 className="text-3xl md:text-5xl font-bold text-mm-red mb-4 tracking-tight">{article.title}</h1>
        {article.publishedAt && (
          <p className="text-gray-500 mb-10 text-sm font-medium">
            {new Date(article.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        )}
        
        {/* Featured Image */}
        {article.image?.asset && (
          <div className="w-full h-[300px] md:h-[500px] relative rounded-[20px] overflow-hidden shadow-lg mb-12 border border-gray-100">
            <Image
              src={urlFor(article.image).url()}
              alt={article.image?.alt || article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg md:prose-xl max-w-none text-gray-800 leading-relaxed">
          {article.content ? (
            <PortableText value={article.content} />
          ) : (
            <p>{article.description}</p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SingleNewsPage;
