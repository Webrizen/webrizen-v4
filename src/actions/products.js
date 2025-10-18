import { client } from "@/sanity/lib/client";

export async function getProjects() {
  const query = `*[_type == "project"]{
    _id,
    title,
    "slug": slug.current,
    description,
    division,
    status,
    technologies[],
    "mainImageUrl": mainImage.asset->url,
    "galleryUrls": gallery[].asset->url,
    demoUrl,
    githubUrl,
    publishedAt
  } | order(publishedAt desc)`;
  return client.fetch(query);
}

export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
  _id,
    title,
    "slug": slug.current,
    description,
    division,
    status,
    technologies[],
    "mainImageUrl": mainImage.asset->url,
    "galleryUrls": gallery[].asset->url,
    demoUrl,
    body,
    githubUrl,
    publishedAt
  }`;
 return await client.fetch(query, { slug });
}

export async function getTools() {
  const query = `*[_type == "tool"]{
    _id,
    name,
    "slug": slug.current,
    tagline,
    description,
    price,
    category,
    features[],
    liveUrl,
    "screenshotUrl": screenshot.asset->url,
    status,
    publishedAt
  } | order(publishedAt desc)`;
  return client.fetch(query);
}

export async function getToolBySlug(slug) {
  const query = `*[_type == "tool" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    tagline,
    description,
    price,
    category,
    features[],
    liveUrl,
    "screenshotUrl": screenshot.asset->url,
    status,
    publishedAt
  }`;
  return await client.fetch(query, { slug });
}

export async function getArticles() {
  const query = `*[_type == "article"]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImageUrl": coverImage.asset->url,
    "author": author->name,
    categories[],
    tags[],
    readTime,
    publishedAt,
    body
  } | order(publishedAt desc)`;
  return client.fetch(query);
}

export async function getArticleBySlug(slug) {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImageUrl": coverImage.asset->url,
    "author": author->name,
    categories[],
    tags[],
    readTime,
    publishedAt,
    body
  }`;
  return await client.fetch(query, { slug });
}
