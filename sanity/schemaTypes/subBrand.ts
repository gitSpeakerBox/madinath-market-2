import { defineField, defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export const subBrand = defineType({
  name: "subBrand",
  title: "Sub Brands",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Brand Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Brand Logo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the logo for accessibility",
        }),
      ],
    }),
    defineField({
      name: "link",
      title: "Website Link",
      type: "url",
      description: "Optional URL to the brand's website",
    }),
    orderRankField({ type: "subBrand" }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Uncheck to hide this brand without deleting it",
      initialValue: true,
    }),
  ],
  orderings: [orderRankOrdering],
  preview: {
    select: {
      title: "title",
      media: "logo",
      order: "order",
    },
    prepare({ title, media, order }) {
      return { title: `#${order} – ${title}`, media };
    },
  },
});
