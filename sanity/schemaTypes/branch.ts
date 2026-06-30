import { defineField, defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

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
      type: "reference",
      to: [{ type: "country" }],
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
      title: "Google Maps Embed URL or Iframe",
      type: "text",
      description: "Paste the full iframe code from Google Maps or just the src URL.",
    }),
    defineField({
      name: "normalMapLink",
      title: "Normal Map Link",
      type: "url",
      description: "Link to open Google Maps directly (e.g., https://maps.app.goo.gl/...)",
    }),
    defineField({
      name: "instagramLink",
      title: "Instagram Link",
      type: "url",
      description: "Separate Instagram link for this specific branch",
    }),
    defineField({
      name: "offersPdf",
      title: "Offers PDF",
      type: "file",
      description: "Upload a PDF with offers for this branch (can have multiple pages)",
      options: {
        accept: "application/pdf",
      },
    }),
    defineField({
      name: "image",
      title: "Branch Image",
      type: "image",
      options: { hotspot: true },
    }),
    orderRankField({ type: "branch" }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [orderRankOrdering],
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
