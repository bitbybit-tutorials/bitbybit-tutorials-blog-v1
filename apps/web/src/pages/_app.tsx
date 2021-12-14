import { useEffect, useState } from "react";

import type { AppProps } from "next/app";

import { initialiseFirebaseService } from "services/firebase/initialise-service";
import Layout from "modules/layout/layout";
import { PostsContext } from "modules/posts/posts-context";
import { SearchContext } from "modules/search/search-context";
import SearchModal from "modules/search/search-modal";
import allPostsJson from "../../public/json/all-posts.json";
import "styles/globals.css";

// Initialise all services
initialiseFirebaseService();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = (state: boolean) => setShowSearch(state);

  return (
    <PostsContext.Provider value={allPostsJson}>
      <SearchContext.Provider value={{ showSearch, toggleSearch }}>
        <Layout>
          <Component {...pageProps} />
          <SearchModal show={showSearch} />
        </Layout>
      </SearchContext.Provider>
    </PostsContext.Provider>
  );
}
