import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import { POSTS_PER_PAGE } from "constants/posts";
import Grid from "modules/grid";
import { siteTitle } from "modules/layout/layout";
import { getAllPosts, generateAllPostsJson } from "modules/posts/get-posts";
import Pagination from "modules/pagination";
import Posts from "modules/posts/posts-component";
import Section from "modules/section";
import { transformPosts } from "utils/posts-server";

type Props = {
  activePage: number;
  posts: any[];
  pagesCount: number;
};

export default function PostsPage({ activePage, posts, pagesCount }: Props) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section
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
      <Pagination pagesCount={10} activePage={activePage} />
    </>
  );
}

export const getStaticPaths = async () => {
  const { count } = getAllPosts();

  const pages = Math.ceil(count / POSTS_PER_PAGE);
  const paths = Array.from(Array(pages).keys()).map((page) => ({
    params: { page: String(page + 1) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { page: activePage } = params;
  const { posts, count } = getAllPosts();

  const transformedAllPosts = await transformPosts(posts);

  const pagesCount = Math.ceil(count / POSTS_PER_PAGE);

  return {
    props: {
      activePage,
      posts: transformedAllPosts,
      pagesCount,
    },
  };
};
