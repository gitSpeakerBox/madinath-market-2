import { defineField, defineType } from "sanity";

export const career = defineType({
  name: "career",
  title: "Career",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "Dubai, UAE"',
    }),
    defineField({
      name: "experience",
      title: "Experience Required",
      type: "string",
      description: 'e.g. "2–6 Years"',
    }),
    defineField({
      name: "education",
      title: "Education Requirement",
      type: "string",
      description: 'e.g. "Bachelor\'s Degree"',
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn Application URL",
      type: "url",
      description: "Direct link to apply on LinkedIn",
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
      description: "Uncheck to hide this listing",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
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
    select: { title: "title", subtitle: "location" },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle || "No location" };
    },
  },
});
