import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "i2hy6qh9",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-06-08",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}