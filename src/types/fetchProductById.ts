import { client } from "@/sanity/lib/client"; // Replace with your actual sanity client instance

export async function fetchProductById(id: string) {
  const query = `*[_type == "products" && _id == $id][0]`;
  const params = { id };
  return await client.fetch(query, params);
}
