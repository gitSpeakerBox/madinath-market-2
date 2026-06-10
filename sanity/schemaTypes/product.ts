import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Grocery", value: "grocery" },
          { title: "Fresh Produce", value: "fresh-produce" },
          { title: "Bakery", value: "bakery" },
          { title: "Dairy", value: "dairy" },
          { title: "Meat & Seafood", value: "meat-seafood" },
          { title: "Beverages", value: "beverages" },
          { title: "Snacks", value: "snacks" },
          { title: "Household", value: "household" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      description: "Show this product in the homepage products section",
      initialValue: false,
    }),
    defineField({
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
      description: 'CTA text, e.g. "Shop Now" or "View Products"',
      initialValue: "Shop Now",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      description: "URL path for the CTA button",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
      featured: "featured",
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: `${featured ? "⭐ " : ""}${title}`,
        subtitle,
        media,
      };
    },
  },
});
