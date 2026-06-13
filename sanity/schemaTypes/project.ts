import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    // Deskripsi singkat untuk card
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      description: "Ditampilkan di card project (halaman utama)",
    }),

    // Rich text untuk halaman detail
    defineField({
      name: "body",
      title: "Long Description",
      type: "array",
      of: [
        { type: "block" }, // bold, italic, heading, list, link
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "caption", title: "Caption", type: "string" },
            { name: "alt", title: "Alt Text", type: "string" },
          ],
        },
      ],
    }),

    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),

    // Kategorisasi
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Exploratory Data Analysis",
          "Dashboard & Visualization",
          "Machine Learning",
          "Data Engineering",
          "NLP",
        ],
      },
    }),

    // Tools / Tech stack
    defineField({
      name: "tools",
      title: "Tools / Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    // Links
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({ name: "demoUrl", title: "Live Demo URL", type: "url" }),

    // Extra fields biar kompatibel sama tampilan existing (Projects.tsx & detail page)
    defineField({
      name: "accentColor",
      title: "Accent Color",
      type: "string",
      description: "Hex color, contoh: #93c5fd",
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Urutan tampil di halaman utama (kecil = duluan)",
    }),
  ],

  orderings: [
    {
      title: "Order, Ascending",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "thumbnail",
    },
  },
});
