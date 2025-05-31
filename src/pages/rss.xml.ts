import rss from "@astrojs/rss";
import { SITE } from "@config";
import slugify from "@utils/slugify";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: posts.map(({ data }) => ({
      link: `posts/${slugify(data)}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.pubDatetime),
    })),
  });
}
