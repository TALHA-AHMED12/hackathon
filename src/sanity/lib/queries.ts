import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "products"]`;
export const featureProduct = groq`*[_type == "products" && "featured" in tags][0]`;
