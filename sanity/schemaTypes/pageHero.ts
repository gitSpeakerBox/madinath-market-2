import { defineField, defineType } from "sanity";

/**
 * Page Hero — per-page hero slider configuration.
 * Create one document per page (e.g. "About", "Gallery", "News", "Careers").
 * Each document holds a set of slides (image + optional overlay text).
 */
export const pageHero = defineType({
  name: "pageHero",
  title: "Page Hero",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      description: "Which page this hero belongs to",
      options: {
        list: [
          { title: "About", value: "about" },
          { title: "News & Events", value: "news" },
          { title: "Gallery", value: "gallery" },
          { title: "Careers", value: "careers" },
          { title: "Branches / Our Stores", value: "branches" },
          { title: "Contact", value: "contact" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Background Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
              fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
              ],
            }),
            defineField({
              name: "title",
              title: "Overlay Title (optional)",
              type: "string",
              description: "Optional text shown over the slide",
            }),
            defineField({
              name: "subtitle",
              title: "Overlay Subtitle (optional)",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "title", media: "image" },
            prepare({ title, media }) {
              return { title: title || "Slide", media };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: { page: "page" },
    prepare({ page }) {
      return { title: `Hero: ${page}` };
    },
  },
});
