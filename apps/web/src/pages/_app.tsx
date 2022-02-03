import { useState, useEffect } from "react";

import type { AppProps } from "next/app";

import Layout from "modules/layout/layout";
import { PostsContext } from "modules/posts/posts-context";
import { SearchContext } from "modules/search/search-context";
import SearchModal from "modules/search/search-modal";
import { globalStyles } from "modules/theme/styles/global";
import { logEvent } from "services/firebase";

let posts: Post[] = [];
try {
  posts = require("../../public/json/all-posts.json");
} catch (err) {
  console.log(err);
}
// const configData = await import(`../siteconfig.json`)

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = (state: boolean) => setShowSearch(state);

  useEffect(() => {
    logEvent("Page Visited", {});
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>
      <SearchContext.Provider value={{ showSearch, toggleSearch }}>
        <Layout>
          {globalStyles}
          <Component {...pageProps} />
          <SearchModal show={showSearch} />
        </Layout>
      </SearchContext.Provider>
    </PostsContext.Provider>
  );
}
