import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
// import { remark } from "remark";
// import html from "remark-html";

const POSTS_DIR = join(process.cwd(), "data/posts");
const JSON_DIST = join(process.cwd(), "public/json");

const getSlugFromFileName = (fileName: string) =>
  fileName.replace(/\.mdx$/, "");

export const getAllPosts = (): any => {
  const allPostsData: any = fs.readdirSync(POSTS_DIR).map((fileName) => {
    const slug = getSlugFromFileName(fileName);

    // Read markdown file as string
    const fullPath = join(POSTS_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Markdown front matter
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  return {
    count: allPostsData.length,
    posts: allPostsData
      .filter((post) => post?.slug !== ".DS_Store") // remove later
      .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0)),
  };
};

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
  getAllPosts().posts.slice(0, count);

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
    source: mdxSource,
  };
};

export const generateAllPostsJson = (data) => {
  const filePath = join(JSON_DIST, "all-posts.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const generatePostJson = (data) => {
  const { slug } = data;
  const filePath = join(JSON_DIST, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
