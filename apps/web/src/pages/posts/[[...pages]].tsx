import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import { POSTS_PER_PAGE } from "modules/posts/constants/posts-constants";
import Grid from "modules/grid";
import { siteTitle } from "modules/layout/layout";
import { getPosts } from "modules/posts/utils/posts-server-utils";
import Pagination from "modules/pagination";
import Posts from "modules/posts/posts-component";
import Section from "modules/section";
import { transformPosts } from "modules/posts/utils/posts-server-utils";
import { initialiseFirebaseService } from "services/firebase/initialise-service";

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
      {pagesCount > 1 && (
        <Pagination
          pagesCount={pagesCount}
          activePage={activePage}
          urlPath="posts"
        />
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  const { totalCount } = getPosts();

  const pages = Math.ceil(totalCount / POSTS_PER_PAGE);
  const paths = Array.from(Array(pages).keys()).map((page) => ({
    params: {
      pages: page > 0 ? ["pages", String(page + 1)] : [],
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  initialiseFirebaseService();

  const { pages = [] } = params;
  const [_pagesPath = null, activePage = null] = pages;

  const offset = ((activePage ?? 1) - 1) * POSTS_PER_PAGE;

  console.log("offset");
  console.log(offset);
  const { posts, totalCount } = getPosts(POSTS_PER_PAGE, offset);

  const transformedAllPosts = await transformPosts(posts);

  const pagesCount = Math.ceil(totalCount / POSTS_PER_PAGE);

  return {
    props: {
      activePage,
      posts: transformedAllPosts,
      pagesCount,
    },
  };
};
