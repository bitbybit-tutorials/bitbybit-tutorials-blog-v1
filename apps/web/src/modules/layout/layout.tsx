import { css } from "@emotion/react";

import Head from "next/head";

import Header from "./header";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";

export const siteTitle = "Bitbybit Tutorials";

const styles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .main {
    flex: 1;
    padding: 0 1rem 4rem;
  }
  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    .main {
      padding: 0 2.5rem 4rem;
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    .main {
      padding: 0 8rem 4rem;
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.extraLarge}) {
    .main {
      padding: 0 12rem 8rem;
    }
  }
`;

type Props = {
  children: any;
  home?: boolean;
};

export default function Layout({ children, home }: Props) {
  return (
    <div css={styles}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal  website  using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image " />
      </Head>
      <Header />
      <main className="main">{children}</main>
    </div>
  );
}
