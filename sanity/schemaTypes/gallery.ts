import { defineField, defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Image Title",
      type: "string",
      description: "Internal label or caption for this image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Gallery Image",
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
    orderRankField({ type: "gallery" }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Uncheck to hide this image without deleting it",
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
