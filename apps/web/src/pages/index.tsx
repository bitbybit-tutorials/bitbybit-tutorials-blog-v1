import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import styles from "./index.module.css";
import Grid from "modules/grid";
import { siteTitle } from "modules/layout/layout";
import {
  getPosts,
  generateAllPostsJson,
  getLatestPosts,
} from "modules/posts/utils/posts-server-utils";
import Posts from "modules/posts/posts-component";
import Section from "modules/section";
import { getStorageImageRef, getImageUrl } from "services/firebase";
import { createPlaceholderImage } from "utils/image";

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
  const posts = getLatestPosts(10);

  const transformedPosts = await Promise.all(
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

  // Generate all posts JSON
  const { posts: allPosts } = getPosts();
  const transformedAllPosts = await Promise.all(
    allPosts.map(async (post) => {
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
  generateAllPostsJson(transformedAllPosts);

  return {
    props: {
      posts: transformedPosts,
    },
  };
};
