import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for fresh data in server components
});

// Image URL helper
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// --- Typed fetch helpers ---

/** Fetch all active hero slides, sorted by order */
export async function getHeroSlides() {
  return client.fetch(
    `*[_type == "heroSlide" && isActive == true] | order(order asc) {
      _id,
      title,
      order,
      image {
        asset,
        alt
      }
    }`
  );
}

/** Fetch branches, optionally filtered by country */
export async function getBranches(countryName?: string) {
  const filter = countryName
    ? `*[_type == "branch" && isActive == true && country->name == $countryName]`
    : `*[_type == "branch" && isActive == true]`;

  return client.fetch(
    `${filter} | order(order asc) {
      _id,
      name,
      type,
      "country": country->name,
      phone,
      address,
      mapEmbedUrl,
      normalMapLink,
      instagramLink,
      "offersPdf": offersPdf.asset->url,
      image { asset, alt }
    }`,
    countryName ? { countryName } : {}
  );
}

/** Fetch featured products for homepage */
export async function getFeaturedProducts() {
  return client.fetch(
    `*[_type == "product" && isActive == true && featured == true] | order(order asc) {
      _id,
      title,
      slug,
      category,
      description,
      buttonLabel,
      buttonLink,
      image { asset, alt }
    }`
  );
}

/** Fetch all active products */
export async function getAllProducts() {
  return client.fetch(
    `*[_type == "product" && isActive == true] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      category,
      description,
      buttonLabel,
      buttonLink,
      image { asset, alt }
    }`
  );
}

/** Fetch a single product by slug */
export async function getProductBySlug(slug: string) {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug && isActive == true][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      description,
      content,
      image { asset, alt },
      detailImage { asset, alt }
    }`,
    { slug }
  );
}

/** Fetch the singleton contact info document */
export async function getContactInfo() {
  return client.fetch(
    `*[_type == "contactInfo"][0] {
      poBox,
      telephone,
      fax,
      email,
      whatsapp,
      workingHours,
      mapEmbedUrl,
      socialLinks
    }`
  );
}

/** Fetch all active gallery images */
export async function getGalleryImages() {
  return client.fetch(
    `*[_type == "gallery" && isActive == true] | order(order asc) {
      _id,
      title,
      image { asset, alt }
    }`
  );
}

/** Fetch all active sub brands */
export async function getSubBrands() {
  return client.fetch(
    `*[_type == "subBrand" && isActive == true] | order(order asc) {
      _id,
      title,
      link,
      logo { asset, alt }
    }`
  );
}

/** Fetch the hero slider for a specific page (e.g. "about", "news") */
export async function getPageHero(page: string) {
  return client.fetch(
    `*[_type == "pageHero" && page == $page][0] {
      page,
      slides[] {
        image { asset, alt },
        title,
        subtitle
      }
    }`,
    { page }
  );
}

/** Fetch all active news articles */
export async function getAllNews() {
  return client.fetch(
    `*[_type == "news" && isActive == true] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      description,
      image { asset, alt }
    }`
  );
}

/** Fetch a single news article by slug */
export async function getNewsBySlug(slug: string) {
  return client.fetch(
    `*[_type == "news" && slug.current == $slug && isActive == true][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      description,
      content,
      image { asset, alt }
    }`,
    { slug }
  );
}

/** Fetch all active career listings */
export async function getCareers() {
  return client.fetch(
    `*[_type == "career" && isActive == true] | order(order asc) {
      _id,
      title,
      location,
      experience,
      education,
      linkedinUrl
    }`
  );
}

/** Fetch the singleton about page settings */
export async function getAboutPage() {
  return client.fetch(
    `*[_type == "aboutPage"][0] {
      stats[] {
        "iconUrl": icon.asset->url,
        count,
        suffix,
        label
      },
      "aboutVideoUrl": aboutVideo.asset->url,
      mission,
      vision
    }`
  );
}
