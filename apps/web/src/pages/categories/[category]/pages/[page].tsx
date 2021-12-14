import { useContext, useEffect } from "react";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import { POSTS_PER_PAGE } from "constants/posts";
import Grid from "modules/grid";
import { siteTitle } from "modules/layout/layout";
import { getAllPosts, generateAllPostsJson } from "modules/posts/get-posts";
import { getAllCategories } from "utils/posts-client-safe";
import Pagination from "modules/pagination";
import Posts from "modules/posts/posts-component";
import Section from "modules/section";
import { SearchContext } from "modules/search/search-context";
import utilStyles from "styles/utils.module.css";
import { transformPosts } from "utils/posts-server";
import { getFilteredPosts } from "utils/posts-client-safe";
import {
  transformSlugToTitle,
  transformTitleToSlug,
} from "utils/text-transform";
import { generateUniqueKey } from "utils/unique-key";

type Props = {
  activePage: number;
  category: string;
  posts: any[];
  pagesCount: number;
};

export default function Categories({
  activePage,
  category,
  posts,
  pagesCount,
}: Props) {
  const { toggleSearch } = useContext(SearchContext);

  useEffect(() => {
    toggleSearch(false);
  }, []);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section
        title={category}
        content={
          <Grid numColumns={3}>
            <Posts
              offset={(activePage - 1) * POSTS_PER_PAGE}
              posts={posts}
              type="regular"
            />
          </Grid>
        }
      />
      {pagesCount > 1 && <Pagination pagesCount={10} activePage={activePage} />}
    </>
  );
}

export const getStaticPaths = async () => {
  const { posts } = getAllPosts();

  const allCategories = getAllCategories(posts);

  let paths: any[] = [];

  for (const category of allCategories) {
    const filteredPosts = getFilteredPosts(posts, category);

    const pages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    paths = [
      ...paths,
      ...Array.from(Array(pages).keys()).map((page) => ({
        params: {
          category: transformTitleToSlug(category),
          page: String(page + 1),
        },
      })),
    ];
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { page: activePage, category: selectedCategory } = params;

  const { count, posts } = getAllPosts();

  const formattedCategory = transformSlugToTitle(selectedCategory);

  const filteredPosts = getFilteredPosts(posts, formattedCategory);

  const transformedPosts = await transformPosts(filteredPosts);

  const pagesCount = Math.ceil(count / POSTS_PER_PAGE);

  return {
    props: {
      activePage,
      category: formattedCategory,
      key: generateUniqueKey(),
      posts: transformedPosts.filter((post) => post), // Remove later - stupid DS_Store issue
      pagesCount,
    },
  };
};
