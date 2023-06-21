import { defineType } from "sanity"

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nome do produto",
      description: "The Title of the Product",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "categories",
      title: "Categorias",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sizes",
      title: "Tamanhos",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "colors",
      title: "Cores",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "description",
      title: "Descrição",
      type: "string",
    },
    {
      name: "sku",
      title: "SKU",
      type: "string",
    },
    {
      name: "currency",
      title: "moeda",
      type: "string",
    },
    {
      name: "price",
      title: "Preço",
      type: "number",
    },
  ],
})
