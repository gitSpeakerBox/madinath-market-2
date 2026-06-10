import { defineField, defineType } from "sanity";

export const branch = defineType({
  name: "branch",
  title: "Branch & Location",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Branch Name",
      type: "string",
      description: "e.g. Al Quoz, Jebel Ali Industrial",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Store Type",
      type: "string",
      options: {
        list: [
          { title: "Supermarket", value: "Supermarket" },
          { title: "Hypermarket", value: "Hypermarket" },
          { title: "Mall", value: "Mall" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      options: {
        list: [
          { title: "UAE", value: "UAE" },
          { title: "India", value: "INDIA" },
        ],
        layout: "radio",
      },
      initialValue: "UAE",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
      description: "Paste the full iframe src URL from Google Maps",
    }),
    defineField({
      name: "image",
      title: "Branch Image",
      type: "image",
      options: { hotspot: true },
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
      title: "name",
      subtitle: "type",
      media: "image",
      country: "country",
    },
    prepare({ title, subtitle, media, country }) {
      return { title, subtitle: `${country} · ${subtitle}`, media };
    },
  },
});
