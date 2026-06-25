import { defineField, defineType } from "sanity";

/**
 * About page specific settings — stats (outlet counts), mission & vision text.
 * This is a singleton document.
 */
export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page Settings",
  type: "document",
  // Singleton — only one document of this type should exist
  fields: [
    defineField({
      name: "stats",
      title: "Statistics / Counts",
      type: "array",
      description: "Animated counter stats shown on the about page (e.g. 50+ Outlets)",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon (SVG or PNG)",
              type: "image",
              description: "Upload an icon to show next to this stat (e.g. a store, clock, box icon)",
              options: { hotspot: false },
            }),
            defineField({ name: "count", title: "Count (number)", type: "number" }),
            defineField({ name: "suffix", title: "Suffix", type: "string", description: 'e.g. "+" or "K"' }),
            defineField({ name: "label", title: "Label", type: "string", description: 'e.g. "Outlets"' }),
          ],
          preview: {
            select: { count: "count", suffix: "suffix", label: "label", media: "icon" },
            prepare({ count, suffix, label, media }) {
              return { title: `${count}${suffix || ""} ${label || ""}`, media };
            },
          },
        },
      ],
    }),
    defineField({
      name: "aboutVideo",
      title: "About Section Media (45-year badge)",
      type: "file",
      description: "Upload the 45-year logo video (.mp4) or image to show next to the about text",
      options: {
        accept: "video/mp4,image/*",
      },
    }),
    defineField({
      name: "mission",
      title: "Our Mission",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "vision",
      title: "Our Vision",
      type: "text",
      rows: 4,
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page Settings" };
    },
  },
});
