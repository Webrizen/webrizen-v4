import { client } from "@/sanity/lib/client";

export async function getBlogs() {
    const query = `*[_type == "article"]{
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        "coverImage": coverImage{asset->{_id, url}, alt},
        "author": author-> { _id, name },
        "categories": categories[],
        readTime
    } | order(publishedAt desc)`;
    return client.fetch(query);
}

export async function getBlogBySlug(slug) {
    const query = `*[_type == "article" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        "coverImage": coverImage{asset->{_id, url}, alt},
        "author": author-> { _id, name },
        "categories": categories[],
        tags,
        readTime,
        body
    }`;
    return client.fetch(query, { slug });
}