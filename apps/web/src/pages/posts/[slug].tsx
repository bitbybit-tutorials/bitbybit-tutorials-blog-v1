import { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";

import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import Breadcrumbs from "modules/breadcrumbs";
import Grid from "modules/grid";

import Posts from "modules/posts/posts-list";
import PostHeader from "modules/posts/post-header";
import PostBody from "modules/posts/post-body";
import TableOfContents from "modules/posts/table-of-contents";
import { getFilteredPosts } from "modules/posts/utils/posts-client-safe-utils";
import {
  generatePostJson,
  generateToc,
  getAllPostSlugs,
  getPost,
  getPosts,
  getReadingTime,
  scrapeHeadings,
  transformPost,
  transformPosts,
} from "modules/posts/utils/posts-server-utils";
import { useActiveId } from "modules/posts/posts-hooks";
import { SearchContext } from "modules/search/search-context";
import Section from "modules/section";
import { generateUniqueKey } from "utils/unique-key";
import { transformSlugToTitle } from "utils/text-transform";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";

const IFRAME_ASPECT_RATIO = 16 / 9;

const styles = css`
  .flex-wrapper {
    align-items: flex-start;
    display: flex;
    padding-bottom: 3rem;
  }
  .article {
    width: 100%;
  }
  .sidebar {
    display: none;
    max-height: calc(100vh - 4rem);
    position: sticky;
    top: 11.5rem;
    margin-bottom: 2.5rem;
    margin-top: 4rem;
  }
  .youtube-iframe {
    width: 100%;
    height: calc((100vw - 2rem) / ${IFRAME_ASPECT_RATIO});
  }

  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    .youtube-iframe {
      width: 100%;
      height: calc((100vw - 5rem) / ${IFRAME_ASPECT_RATIO});
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    .article {
      width: calc(100% - 18.125rem);
    }
    .sidebar {
      display: block;
      margin-left: 2.5rem;
    }
    .youtube-iframe {
      width: 100%;
      height: calc(
        (100vw - 16rem - 4.6875rem - 15.625rem) / ${IFRAME_ASPECT_RATIO}
      );
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.extraLarge}) {
    .article {
      width: calc(100% - 20.3125rem);
    }
    .sidebar {
      margin-left: 4.6875rem;
    }
    .youtube-iframe {
      width: 100%;
      height: calc(
        (100vw - 24rem - 4.6875rem - 15.625rem) / ${IFRAME_ASPECT_RATIO}
      );
    }
  }
`;

type Props = {
  history: string[];
  post: Post;
  relatedPosts: Post[];
};

export default function Post({ history, post, relatedPosts }: Props) {
  const { toggleSearch } = useContext(SearchContext);
  const defaultBreadcrumbs = [
    {
      route: "/",
      title: "Home",
    },
    {
      route: "/posts",
      title: "Posts",
    },
  ];
  const { compiledSource, title, toc } = post;
  const [breadcrumbs, setBreadCrumbs] = useState(defaultBreadcrumbs);

  const ids = toc?.map((item) => item.id) || [];
  const activeId = useActiveId(ids);

  useEffect(() => {
    toggleSearch(false);

    // Get category breadcrumb
    if (history[1]?.includes("/categories/")) {
      const category = history[1].split("/")[2];
      const newBreadcrumb = {
        route: history[1],
        title: transformSlugToTitle(category),
      };
      setBreadCrumbs([...breadcrumbs, newBreadcrumb]);
    }

    document.documentElement.classList.add("smooth-scroll");

    return () => {
      document.documentElement.classList.remove("smooth-scroll");
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div css={styles}>
        <div className={`flex-wrapper`}>
          <article className="article">
            <Breadcrumbs links={breadcrumbs} />
            <PostHeader post={post} />
            <PostBody compiledSource={compiledSource} />
          </article>
          {toc && toc.length > 0 && (
            <aside className="sidebar">
              <TableOfContents activeId={activeId} items={toc} />
            </aside>
          )}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;

  const post = await getPost(slug);
  generatePostJson(post);
  const transformedPost = await transformPost(post);

  const { posts } = getPosts();
  const { posts: filteredPosts } = getFilteredPosts(posts, post.category, 3);
  const transformedPosts = await transformPosts(filteredPosts);

  const headingsArr = scrapeHeadings(post.rawSource || "");
  const toc = generateToc(headingsArr);

  const readingTime = getReadingTime(post.rawSource || "");

  return {
    props: {
      post: {
        ...transformedPost,
        readingTime,
        toc,
      },
      key: generateUniqueKey(), // Key is needed here to reset state when navigating between different dynamic routes
      relatedPosts: transformedPosts,
    },
  };
};
