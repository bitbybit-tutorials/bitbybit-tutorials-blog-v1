import { useState, useEffect, useContext, useRef } from "react";

import Link from "next/link";
import useSWR from "swr";

import styles from "./search-modal.module.css";
import { PostsContext } from "modules/posts/posts-context";
import { SearchContext } from "modules/search/search-context";
import Tags from "modules/tags/tags";
import utilStyles from "styles/utils.module.css";
import { getAllCategories } from "utils/posts-client-safe";

type Props = {
  show: boolean;
};

export default function SearchModal({ show }: Props) {
  const posts = useContext(PostsContext);
  const { showSearch, toggleCanShowSearch, toggleSearch } =
    useContext(SearchContext);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleModal = (show: boolean) => {
    if (show) {
      document.body.classList.add("body-overflow-hidden");
      setTimeout(() => {
        inputRef.current?.focus();
      }, 30);
    } else {
      document.body.classList.remove("body-overflow-hidden");
      setSearch("");
      setSearchResults([]);
    }
  };

  const onChange = (e) => {
    const { value } = e.target;

    setSearch(value);

    const results = posts.filter((post: any) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(value ? results : []);
  };

  const onRedirect = () => toggleCanShowSearch(true);

  function getClassNames(show: boolean) {
    let classNames = [styles.container];
    if (show) {
      classNames.push(styles.show);
    }
    return classNames.join(" ");
  }

  useEffect(() => {
    toggleModal(show);
  }, [show]);

  return (
    <main className={getClassNames(show)}>
      <input
        ref={inputRef}
        className={styles.input}
        onChange={onChange}
        placeholder="Search..."
        type="text"
        value={search}
      />
      {search && (
        <ul className={styles.searchList}>
          {searchResults.map((post: any, index) => (
            <li className={styles.listItem} key={`${index}`}>
              <Link href={`/posts/${post.slug}`}>
                <a className={styles.listItemLink} onClick={onRedirect}>
                  <h3>{post.title}</h3>
                  <h4>{post.date}</h4>
                  <Tags names={post.category} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {!search && (
        <div className={`${utilStyles.marginVerticalXl} ${styles.tags}`}>
          <Tags
            color={"#e1567c"}
            names={getAllCategories(posts)}
            size="medium"
          />
        </div>
      )}
    </main>
  );
}
