import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
// import { remark } from "remark";
// import html from "remark-html";

import { serialize } from "next-mdx-remote/serialize";

import { getSlugFromFileName } from "./posts-client-safe-utils";
import { JSON_DIST, POSTS_DIR } from "../constants/posts-constants";
import { getStorageImageRef, getImageUrl } from "services/firebase";
import { createPlaceholderImage } from "utils/image";

export const generateAllPostsJson = (data) => {
  const filePath = join(JSON_DIST, "all-posts.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const generatePostJson = (data) => {
  const { slug } = data;
  const filePath = join(JSON_DIST, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const generateToc = (rawScrapedArr: string[]) =>
  rawScrapedArr.map((item) => {
    return {
      anchor: `#${item.split('"')[1]}`,
      level: item.split(" ")[0].length,
      title: item.split("# ")[1].split("<")[0],
    };
  });

export function getAllPostSlugs() {
  return fs.readdirSync(POSTS_DIR).map((fileName) => {
    return {
      params: {
        slug: getSlugFromFileName(fileName),
      },
    };
  });
}

export const getLatestPosts = (count: number) =>
  getPosts().posts.slice(0, count);

export const getPost = async (slug: string) => {
  // Read markdown content
  const fullPath = join(POSTS_DIR, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Markdown front matter
  const { content, data } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    data,
    slug,
    compiledSource: mdxSource,
    rawSource: content,
  };
};

export const getPosts = (limit?: number, offset?: number): any => {
  const allPosts = readPostsDir();
  const sortedPosts = allPosts.sort((a, b) =>
    a.date > b.date ? 1 : b.date > a.date ? -1 : 0
  );

  const sliceOffset = offset ?? 0;

  const sliceLimit = limit
    ? sliceOffset === 0
      ? sliceOffset + limit + 1
      : sliceOffset + limit
    : undefined;

  const slice = sortedPosts.slice(sliceOffset, sliceLimit);

  return {
    totalCount: allPosts.length,
    posts: slice.filter((post) => post?.slug !== ".DS_Store"), // remove later
  };
};

export const readPostsDir = () => {
  return fs.readdirSync(POSTS_DIR).map((fileName) => {
    const slug = getSlugFromFileName(fileName);

    // Read markdown file as string
    const fullPath = join(POSTS_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // Markdown front matter
    const { data } = matter(fileContents);

    return {
      ...data,
      slug,
    };
  });
};

export const scrapeHeadings = (rawSource: string) =>
  rawSource.split("\n").filter((line) => /#|##|###/.test(line));

export const transformPosts = async (posts: Post[]) => {
  return await Promise.all(
    posts.map(async (post) => {
      // Get image urls
      const storageRef = getStorageImageRef(`posts/test.png`);
      const url = await getImageUrl(storageRef);

      // Convert image into a low-res image, encoded as Base64 string
      const base64 = await createPlaceholderImage(url);
      return {
        ...post,
        blurDataURL: base64,
        imageSrc: url,
      };
    })
  );
};
