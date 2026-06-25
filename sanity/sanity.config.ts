import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

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
      structure: (S) =>
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
            S.listItem()
              .title("🏠 Home — Hero Slides")
              .schemaType("heroSlide")
              .child(S.documentTypeList("heroSlide").title("Home Hero Slides")),

            // Page Hero Sliders (About, News, Gallery, Careers, etc.)
            S.listItem()
              .title("📄 Page Hero Sliders")
              .schemaType("pageHero")
              .child(S.documentTypeList("pageHero").title("Page Hero Sliders")),

            S.divider(),

            // Branches & Locations
            S.listItem()
              .title("Branches & Locations")
              .schemaType("branch")
              .child(S.documentTypeList("branch").title("Branches")),

            // Countries (for Branches)
            S.listItem()
              .title("Countries")
              .schemaType("country")
              .child(S.documentTypeList("country").title("Countries")),

            S.divider(),

            // Products / Departments
            S.listItem()
              .title("Products / Departments")
              .schemaType("product")
              .child(S.documentTypeList("product").title("Products")),

            // News & Events
            S.listItem()
              .title("News & Events")
              .schemaType("news")
              .child(S.documentTypeList("news").title("News Articles")),

            // Careers
            S.listItem()
              .title("Careers")
              .schemaType("career")
              .child(S.documentTypeList("career").title("Career Listings")),

            S.divider(),

            // Gallery
            S.listItem()
              .title("Gallery")
              .schemaType("gallery")
              .child(S.documentTypeList("gallery").title("Gallery Images")),

            // Sub Brands
            S.listItem()
              .title("Sub Brands")
              .schemaType("subBrand")
              .child(S.documentTypeList("subBrand").title("Sub Brands")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
