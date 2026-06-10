import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "madinath-market",
  title: "Madinath Market",
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
            S.divider(),
            // Hero Slides
            S.listItem()
              .title("Hero Slides")
              .schemaType("heroSlide")
              .child(S.documentTypeList("heroSlide").title("Hero Slides")),
            // Branches & Locations
            S.listItem()
              .title("Branches & Locations")
              .schemaType("branch")
              .child(S.documentTypeList("branch").title("Branches")),
            // Products
            S.listItem()
              .title("Products")
              .schemaType("product")
              .child(S.documentTypeList("product").title("Products")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
