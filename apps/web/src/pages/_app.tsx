import { useState, useEffect } from "react";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Layout from "modules/layout/layout";
import { PostsContext } from "modules/posts/posts-context";
import { SearchContext } from "modules/search/search-context";
import SearchModal from "modules/search/search-modal";
import { globalStyles } from "modules/theme/styles/global";
import { getAnalytics, logEvent } from "services/firebase";
import { isProd } from "utils/environment";

let posts: Post[] = [];
try {
  posts = require("../../public/json/all-posts.json");
} catch (err) {
  console.log(err);
}
// const configData = await import(`../siteconfig.json`)

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showSearch, setShowSearch] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const router = useRouter();

  const toggleSearch = (state: boolean) => setShowSearch(state);

  useEffect(() => {
    const { asPath } = router;
    setHistory([asPath]);

    if (isProd) {
      getAnalytics();
    }
  }, []);

  useEffect(() => {
    const { asPath } = router;
    if (history.length === 2) {
      setHistory(history.splice(0, 1));
    }
    setHistory([...history, asPath]);

    if (isProd) {
      logEvent("Page Visited", { screen_name: asPath });
    }
  }, [router]);

  return (
    <PostsContext.Provider value={{ posts }}>
      <SearchContext.Provider value={{ showSearch, toggleSearch }}>
        <Layout>
          {globalStyles}
          <Component history={history} {...pageProps} />
          <SearchModal show={showSearch} />
        </Layout>
      </SearchContext.Provider>
    </PostsContext.Provider>
  );
}
