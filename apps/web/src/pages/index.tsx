import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import Grid from "modules/grid";
import { siteTitle } from "modules/layout/layout";
import {
  getPosts,
  generateAllPostsJson,
  getLatestPosts,
  transformPosts,
} from "modules/posts/utils/posts-server-utils";
import Posts from "modules/posts/posts-list";
import Section from "modules/section";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section
        title="Latest Posts"
        content={
          <Grid numColumns={1}>
            <Posts posts={posts} type="full-width" />
          </Grid>
        }
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (_context) => {
  const posts: PostRaw[] = getLatestPosts(10);

  const transformedLatestPosts = await transformPosts(posts);

  // Generate all posts JSON
  const { posts: allPosts } = getPosts();
  const transformedAllPosts = await transformPosts(allPosts);
  generateAllPostsJson(transformedAllPosts);

  return {
    props: {
      posts: transformedLatestPosts,
    },
  };
};
