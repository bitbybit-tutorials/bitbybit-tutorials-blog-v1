import { useContext, useEffect } from "react";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { POSTS_PER_PAGE } from "modules/posts/constants/posts-constants";
import Grid from "modules/grid";
import { siteTitle } from "modules/layout/layout";
import {
  getPosts,
  generateAllPostsJson,
} from "modules/posts/utils/posts-server-utils";
import { getAllCategories } from "modules/posts/utils/posts-client-safe-utils";
import Pagination from "modules/pagination";
import Posts from "modules/posts/posts-component";
import Section from "modules/section";
import { SearchContext } from "modules/search/search-context";
import utilStyles from "styles/utils.module.css";
import { transformPosts } from "modules/posts/utils/posts-server-utils";
import { getFilteredPosts } from "modules/posts/utils/posts-client-safe-utils";
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
  const router = useRouter();
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
      {pagesCount > 1 && (
        <Pagination
          pagesCount={pagesCount}
          activePage={activePage}
          urlPath={`categories/${router.query.pages?.[0]}`}
        />
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  const { posts } = getPosts();

  const allCategories = getAllCategories(posts);

  let paths: any[] = [];

  for (const category of allCategories) {
    const { totalCount } = getFilteredPosts(posts, category);

    const pages = Math.ceil(totalCount / POSTS_PER_PAGE);

    paths = [
      ...paths,
      ...Array.from(Array(pages).keys()).map((page) => ({
        params: {
          pages:
            page > 0
              ? [transformTitleToSlug(category), "pages", String(page + 1)]
              : [transformTitleToSlug(category)],
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
  const { pages } = params;
  const [category, _pagesPath = null, activePage = null] = pages;

  const { posts } = getPosts();

  const formattedCategory = transformSlugToTitle(category);
  const offset = ((activePage ?? 1) - 1) * POSTS_PER_PAGE;
  const { posts: filteredPosts, totalCount } = getFilteredPosts(
    posts,
    formattedCategory,
    POSTS_PER_PAGE,
    offset
  );
  const transformedPosts = await transformPosts(filteredPosts);

  const pagesCount = Math.ceil(totalCount / POSTS_PER_PAGE);

  return {
    props: {
      activePage,
      category: formattedCategory,
      key: generateUniqueKey(),
      posts: transformedPosts,
      pagesCount,
    },
  };
};
