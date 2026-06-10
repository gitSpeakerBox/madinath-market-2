import { defineField, defineType } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Contact Info",
  type: "document",
  // Singleton — only one document of this type should exist
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "poBox",
      title: "PO Box / Address Line",
      type: "string",
      description: 'e.g. "PB No. 69004, Dubai, U.A.E"',
    }),
    defineField({
      name: "telephone",
      title: "Telephone",
      type: "string",
      description: "e.g. +971 4 2643488",
    }),
    defineField({
      name: "fax",
      title: "Fax",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: "email",
          invert: false,
        }).warning("Should be a valid email address"),
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      description: "Include country code, e.g. +971501234567",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
        defineField({ name: "twitter", title: "Twitter / X URL", type: "url" }),
        defineField({ name: "youtube", title: "YouTube URL", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
      ],
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Main Office Google Maps Embed URL",
      type: "url",
    }),
    defineField({
      name: "workingHours",
      title: "Working Hours",
      type: "string",
      description: 'e.g. "Mon – Sat: 9:00 AM – 10:00 PM"',
    }),
  ],
  preview: {
    select: { title: "email" },
    prepare({ title }) {
      return { title: "Contact Info", subtitle: title };
    },
  },
});
