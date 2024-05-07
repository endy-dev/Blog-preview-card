import { defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
});

export const collection = {
  blog: blogCollection,
};
