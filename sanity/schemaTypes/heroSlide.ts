import { defineField, defineType } from "sanity";

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
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 1,
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Uncheck to hide this slide without deleting it",
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
      media: "image",
      order: "order",
    },
    prepare({ title, media, order }) {
      return { title: `#${order} – ${title}`, media };
    },
  },
});
