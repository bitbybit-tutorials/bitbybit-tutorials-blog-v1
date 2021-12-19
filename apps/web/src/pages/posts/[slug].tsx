import { useContext, useEffect } from "react";

import { GetStaticProps, GetStaticPaths } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

import styles from "./slug.module.css";
import Date from "utils/formatDate";
import CustomLink from "modules/custom-link";
import Grid from "modules/grid";
import Image from "modules/image";
import {
  getPosts,
  getAllPostSlugs,
  getPost,
  generatePostJson,
} from "modules/posts/utils/posts-server-utils";
import TableOfContents from "modules/posts/table-of-contents";
import { SearchContext } from "modules/search/search-context";
import Section from "modules/section";
import utilStyles from "styles/utils.module.css";
import { transformPosts } from "modules/posts/utils/posts-server-utils";
import { generateUniqueKey } from "utils/unique-key";
import { getFilteredPosts } from "modules/posts/utils/posts-client-safe-utils";
import {
  generateToc,
  scrapeHeadings,
} from "modules/posts/utils/posts-server-utils";
import Posts from "modules/posts/posts-component";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope here.
const components = {
  // a: Link,
  // Link: Link,
  // It also works with dynamically imported components, which is especially useful for
  // conditionally loading components for certain routes. See the notes in README.md for more details
  image: Image,
  TestComponent: dynamic(() => import("modules/test-component")),
  Head,
};

type Props = {
  post: {
    data: Post;
    compiledSource: string;
    rawSource: string;
    slug: string;
    toc: { anchor: string; level: number; title: string }[];
  };
  relatedPosts: Post[];
};

export default function Post({ post, relatedPosts }: Props) {
  const { toggleSearch } = useContext(SearchContext);
  const {
    toc,
    data: { date, id, title },
  } = post;

  useEffect(() => {
    toggleSearch(false);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.flexWrapper}>
          <article className={styles.main}>
            <h1 className={utilStyles.headingXl}>{title}</h1>
            <div className={utilStyles.lightText}>{date}</div>
            <div>
              <MDXRemote {...post.compiledSource} components={components} />
            </div>
          </article>
          <aside className={styles.sidebar}>
            <TableOfContents items={toc} />
          </aside>
        </div>
        {relatedPosts.length > 0 && (
          <Section
            title="Related Posts"
            content={
              <Grid numColumns={3}>
                <Posts posts={relatedPosts} type="regular" />
              </Grid>
            }
          />
        )}
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);
  generatePostJson(post);

  const { posts } = getPosts();
  const filteredPosts = getFilteredPosts(posts, post.data.category, 3);
  const transformedPosts = await transformPosts(filteredPosts);

  const headingsArr = scrapeHeadings(post.rawSource);
  const toc = generateToc(headingsArr);

  return {
    props: {
      post: {
        ...post,
        toc,
      },
      key: generateUniqueKey(), // Key is needed here to reset state when navigating between different dynamic routes
      relatedPosts: transformedPosts,
    },
  };
};
