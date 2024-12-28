import { defineQuery } from "groq";

export const ARTICLE_QUERY = defineQuery(
  `*[_type == "article" && slug.current == $slug][0]{
    title,
    "image": image.asset->url,
    notableWorks,
    body
  }`
); 