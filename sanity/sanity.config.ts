import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "madinath-market",
  title: "Madinath Market",
  basePath: "/admin",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            // Singleton: Contact Info
            S.listItem()
              .title("Contact Info")
              .id("contactInfo")
              .child(
                S.document()
                  .schemaType("contactInfo")
                  .documentId("contactInfo")
              ),

            // Singleton: About Page Settings
            S.listItem()
              .title("About Page Settings")
              .id("aboutPage")
              .child(
                S.document()
                  .schemaType("aboutPage")
                  .documentId("aboutPage")
              ),

            S.divider(),

            // Home Hero Slides
            orderableDocumentListDeskItem({
              type: "heroSlide",
              title: "🏠 Home — Hero Slides",
              S,
              context,
            }),

            // Page Hero Sliders (About, News, Gallery, Careers, etc.)
            S.listItem()
              .title("📄 Page Hero Sliders")
              .schemaType("pageHero")
              .child(S.documentTypeList("pageHero").title("Page Hero Sliders")),

            S.divider(),

            // Branches & Locations
            orderableDocumentListDeskItem({
              type: "branch",
              title: "Branches & Locations",
              S,
              context,
            }),

            // Countries (for Branches)
            S.listItem()
              .title("Countries")
              .schemaType("country")
              .child(S.documentTypeList("country").title("Countries")),

            S.divider(),

            // Products / Departments
            orderableDocumentListDeskItem({
              type: "product",
              title: "Products / Departments",
              S,
              context,
            }),

            // News & Events
            orderableDocumentListDeskItem({
              type: "news",
              title: "News & Events",
              S,
              context,
            }),

            // Careers
            orderableDocumentListDeskItem({
              type: "career",
              title: "Careers",
              S,
              context,
            }),

            S.divider(),

            // Gallery
            orderableDocumentListDeskItem({
              type: "gallery",
              title: "Gallery",
              S,
              context,
            }),

            // Sub Brands
            orderableDocumentListDeskItem({
              type: "subBrand",
              title: "Sub Brands",
              S,
              context,
            }),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
