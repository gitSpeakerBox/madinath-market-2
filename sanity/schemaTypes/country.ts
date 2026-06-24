import { defineField, defineType } from "sanity";

export const country = defineType({
  name: "country",
  title: "Country",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Country Name",
      type: "string",
      description: "e.g. UAE, India, Oman",
      validation: (Rule) => Rule.required(),
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
});
