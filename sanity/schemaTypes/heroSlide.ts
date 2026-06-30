import { defineField, defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export const heroSlide = defineType({
  name: "heroSlide",
  title: "Hero Slide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Slide Title",
      type: "string",
      description: "Internal label to identify this slide",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility",
        }),
      ],
    }),
    orderRankField({ type: "heroSlide" }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Uncheck to hide this slide without deleting it",
      initialValue: true,
    }),
  ],
  orderings: [orderRankOrdering],
  preview: {
    select: {
      title: "title",
      media: "image",
      order: "order",
    },
    prepare({ title, media, order }) {
      return { title: `#${order} – ${title}`, media };
    },
  },
});
